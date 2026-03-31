import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Minus, Plus } from '@phosphor-icons/react'

export default function FAQ({ copy }) {
  const ref = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)

  useGSAP(() => {
    gsap.from('.faq-shell, .faq-item', {
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 0.68,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="sub">{copy.subtitle}</p>
        </div>

        <div className="faq-shell liquid-card">
          <div className="faq-list">
            {copy.items.map((item, index) => {
              const isOpen = openIndex === index

              return (
                <button
                  key={item.q}
                  type="button"
                  className={`faq-item${isOpen ? ' open' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="faq-question">
                    <span>{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
                    </span>
                  </span>
                  <span className="faq-answer">{item.a}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
