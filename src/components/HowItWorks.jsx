import { Fragment, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ArrowRight, CompassTool, Pulse, Wallet } from '@phosphor-icons/react'

const STEP_ICONS = [Wallet, Pulse, CompassTool]

export default function HowItWorks({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.how-card, .how-arrow', {
      y: 26,
      opacity: 0,
      stagger: 0.1,
      duration: 0.68,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="how" id="how">
      <div className="container">
        <div className="how-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="sub">{copy.subtitle}</p>
        </div>

        <div className="how-flow" aria-label={copy.title}>
          {copy.steps.map((step, index) => {
            const Icon = STEP_ICONS[index]

            return (
              <Fragment key={step.num}>
                <article className="how-card liquid-card">
                  <div className="how-card-top">
                    <span className="how-step-number">{`0${step.num}`}</span>
                    <span className="how-step-icon">
                      <Icon size={20} weight="fill" />
                    </span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>

                {index < copy.steps.length - 1 ? (
                  <div className="how-arrow" aria-hidden="true">
                    <ArrowRight size={22} weight="bold" />
                  </div>
                ) : null}
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
