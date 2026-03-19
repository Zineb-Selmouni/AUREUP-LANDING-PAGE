import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.how-header, .how-step', {
      y: 36,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="how" id="how">
      <div className="container">
        <div className="how-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title how-sub-prominent">
            {copy.title}
          </h2>
        </div>

        <div className="how-grid">
          {copy.steps.map((step) => (
            <div key={step.num} className="how-step liquid-card">
              <div className="how-step-num">0{step.num}</div>
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
