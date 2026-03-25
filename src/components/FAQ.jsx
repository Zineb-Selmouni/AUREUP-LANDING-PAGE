import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Minus, Plus, Question } from '@phosphor-icons/react'

export default function FAQ({ copy }) {
  const ref = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)

  useGSAP(() => {
    gsap.from('.faq-aside, .faq-item', {
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 0.68,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <aside className="faq-aside liquid-card">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="section-title">{copy.title}</h2>
            <p className="sub">{copy.subtitle}</p>

            <div className="faq-aside-note">
              <span className="faq-aside-icon">
                <Question size={18} weight="fill" />
              </span>
              <div>
                <strong>{copy.asideTitle}</strong>
                <p>{copy.asideBody}</p>
              </div>
            </div>
          </aside>

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
