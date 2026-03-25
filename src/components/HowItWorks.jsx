import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ChartLineUp, CirclesThreePlus, CompassTool, Sparkle } from '@phosphor-icons/react'
import { cover1 } from '../images.js'

const STEP_ICONS = [CirclesThreePlus, CompassTool, Sparkle]
const STEP_ACCENTS = ['sand', 'mint', 'lavender']

export default function HowItWorks({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.how-journey-card, .how-journey-visual, .how-summary-card', {
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 76%' },
    })

    gsap.to('.how-floating-phone', {
      y: -14,
      duration: 4.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="how" id="how">
      <div className="container">
        <div className="how-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
        </div>

        <div className="how-journey">
          <div className="how-journey-strip">
            <div className="how-journey-line" aria-hidden="true" />

            {copy.steps.map((step, index) => {
              const Icon = STEP_ICONS[index]

              return (
                <article
                  key={step.num}
                  className={`how-journey-card how-journey-card-${STEP_ACCENTS[index]} liquid-card`}
                >
                  <div className="how-journey-marker">{`0${step.num}`}</div>
                  <span className="how-step-icon-chip">
                    <Icon size={18} weight="fill" />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              )
            })}
          </div>

          <div className="how-journey-visual">
            <div className="how-floating-phone">
              <div className="hm-phone-frame">
                <div className="hm-phone-island" />
                <div className="phone-btn phone-silent" />
                <div className="phone-btn phone-vol-up" />
                <div className="phone-btn phone-vol-down" />
                <div className="phone-btn phone-power" />
                <div className="hm-phone-screen">
                  <img src={cover1} alt="Aure Up preview" />
                </div>
              </div>
            </div>

            <div className="how-journey-overlay how-journey-overlay-top">
              <strong>Weekly rhythm</strong>
              <span>Signals arrive in the right order</span>
            </div>

            <div className="how-journey-overlay how-journey-overlay-bottom">
              <span className="how-step-icon-chip">
                <ChartLineUp size={18} weight="fill" />
              </span>
              <div>
                <strong>Confidence builds over time</strong>
                <span>Small steps, clearer patterns, smarter choices</span>
              </div>
            </div>
          </div>

          <div className="how-summary-card liquid-card">
            <span className="how-showcase-label">{copy.panelTitle}</span>
            <p>{copy.panelBody}</p>
            <div className="how-summary-tags">
              {copy.steps.map((step) => (
                <span key={step.title} className="how-showcase-badge">{step.title}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
