import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { BookOpenText, Brain, ChartLineUp, Target } from '@phosphor-icons/react'

const FEATURE_ICONS = [ChartLineUp, BookOpenText, Brain, Target]

export default function Features({ copy }) {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.feature-card', {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.72,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="features" id="features">
      <div className="container">
        <div className="features-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="sub">{copy.subtitle}</p>
        </div>

        <div className="feature-grid">
          {copy.items.map((feature, index) => {
            const Icon = FEATURE_ICONS[index]

            return (
              <article
                key={feature.title}
                className={`feature-card liquid-card${feature.accent ? ' feature-card-accent' : ''}`}
              >
                <div className="feature-card-top">
                  <span className="feature-icon">
                    <Icon size={22} weight="fill" />
                  </span>
                  <span className="feature-label">{feature.label}</span>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
