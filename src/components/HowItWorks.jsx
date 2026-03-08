import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cover1 } from '../images.js'

const STEPS = [
  {
    num: 1,
    title: 'Create Your Profile',
    desc: 'Sign up in seconds. Tell us your goals and areas of focus — Aure Up personalises everything from the very start.',
  },
  {
    num: 2,
    title: 'Set Your Goals',
    desc: 'Define what success looks like for you. Break big ambitions into achievable milestones with our guided goal builder.',
  },
  {
    num: 3,
    title: 'Track & Achieve',
    desc: 'Follow your progress in real-time. Celebrate wins, learn from setbacks, and keep climbing — one step at a time.',
  },
]

export default function HowItWorks() {
  const ref    = useRef(null)
  const [active, setActive] = useState(0)

  useGSAP(() => {
    // Left text block
    gsap.from('.how-left', {
      x: -50, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '.how-inner', start: 'top 78%' },
    })

    // Steps stagger
    gsap.from('.step', {
      x: -30, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.steps', start: 'top 82%' },
    })

    // Visual parallax on scroll
    gsap.to('.how-visual-img', {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: '.how-visual',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Image slide in
    gsap.from('.how-visual', {
      x: 60, opacity: 0, duration: 1.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.how-inner', start: 'top 78%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="how" id="how">
      <div className="container">
        <div className="how-inner">

          <div className="how-left">
            <span className="eyebrow">Simple Process</span>
            <h2 className="section-title">
              Up and running<br /><span className="grad-text">in minutes</span>
            </h2>
            <div className="steps">
              {STEPS.map((s, i) => (
                <div
                  key={s.num}
                  className={`step${active === i ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <div className="step-num">{s.num}</div>
                  <div>
                    <h3 className="step-title">{s.title}</h3>
                    <p className="step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="how-visual">
            <div className="how-visual-glow" />
            <img src={cover1} alt="How Aure Up works" className="how-visual-img" />
          </div>

        </div>
      </div>
    </section>
  )
}
