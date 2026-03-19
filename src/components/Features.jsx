import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BookOpenText, Sparkle, Target, Wallet } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const FEATURE_ICONS = [Wallet, BookOpenText, Sparkle, Target]

export default function Features({ copy }) {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.features-header', {
      y: 44,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features-header',
        start: 'top 82%',
      },
    })

    gsap.from('.feat-card', {
      y: 52,
      opacity: 0,
      duration: 0.7,
      stagger: 0.09,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.feat-grid',
        start: 'top 82%',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="features" id="features">
      <div className="container">
        <div className="features-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="sub">
            {copy.subtitle}
          </p>
        </div>

        <div className="feat-grid feat-grid-compact">
          {copy.items.map((feature, index) => {
            const Icon = FEATURE_ICONS[index]

            return (
              <div key={feature.title} className="feat-card liquid-card">
              <div className="feat-content">
                <div className="feat-icon">
                  <Icon size={22} weight="regular" />
                </div>
                <h3 className="feat-title">{feature.title}</h3>
                <p className="feat-desc">{feature.desc}</p>
              </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
