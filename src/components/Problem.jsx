import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowsLeftRight, ChartLineUp, Question, Receipt } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const PROBLEM_ICONS = [ArrowsLeftRight, Receipt, ChartLineUp, Question]

export default function Problem({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.problem-card, .problem-points li', {
      y: 36,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="problem-section" id="problem">
      <div className="container">
        <div className="problem-card liquid-card">
          <div className="problem-shell">
            <div className="problem-copy">
              <span className="eyebrow">{copy.eyebrow}</span>
              <h2 className="section-title">{copy.title}</h2>
              <p className="sub problem-intro">
                {copy.intro}
              </p>
            </div>

            <ul className="problem-points" aria-label={copy.ariaLabel}>
              {copy.items.map((text, index) => {
                const Icon = PROBLEM_ICONS[index]

                return (
                  <li key={text}>
                  <span className="problem-point-icon" aria-hidden="true">
                    <Icon size={18} weight="regular" />
                  </span>
                  <span>{text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
