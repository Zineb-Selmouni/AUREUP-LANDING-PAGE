import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ChartLineDown, EyeSlash, WarningCircle } from '@phosphor-icons/react'
import { problemImg } from '../images.js'

const PROBLEM_ICONS = [EyeSlash, ChartLineDown, WarningCircle]

export default function Problem({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.problem-copy-block, .problem-media, .problem-point', {
      y: 28,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="problem-section" id="problem">
      <div className="container">
        <div className="problem-layout">
          <div className="problem-copy-block">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="section-title">{copy.title}</h2>
            <p className="sub">{copy.intro}</p>
            <p className="problem-body">{copy.body}</p>

            <ul className="problem-points">
              {copy.items.map((item, index) => {
                const Icon = PROBLEM_ICONS[index]

                return (
                  <li key={item} className="problem-point">
                    <span className="problem-point-icon" aria-hidden="true">
                      <Icon size={18} weight="fill" />
                    </span>
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="problem-media liquid-card">
            <div className="problem-media-meta">{copy.media.label}</div>
            <div className="problem-media-art">
              <img src={problemImg} alt={copy.media.alt} className="problem-media-image" />
            </div>
            <div className="problem-media-caption">
              <strong>{copy.media.title}</strong>
              <span>{copy.media.body}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
