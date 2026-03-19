import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Minus, Plus } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

export default function FAQ({ copy }) {
  const ref = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)

  useGSAP(() => {
    gsap.from('.faq-header, .faq-item', {
      y: 28,
      opacity: 0,
      duration: 0.75,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="sub">
            {copy.subtitle}
          </p>
        </div>

        <div className="faq-list">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <button
                key={item.q}
                type="button"
                className={`faq-item liquid-card${isOpen ? ' open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="faq-question">{item.q}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
                </span>
                <span className="faq-answer">{item.a}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
