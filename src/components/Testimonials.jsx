import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Quotes } from '@phosphor-icons/react'

const AVATAR_BACKGROUNDS = [
  '#F472B6',
  '#1ECFBA',
  '#818CF8',
]

export default function Testimonials({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      y: 24,
      opacity: 0,
      stagger: 0.1,
      duration: 0.68,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="testimonials" id="reviews">
      <div className="container">
        <div className="t-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="sub">{copy.subtitle}</p>
        </div>

        <div className="testimonial-grid">
          {copy.items.map((item, index) => (
            <article key={item.name} className="testimonial-card liquid-card">
              <div className="testimonial-card-top">
                <span className="testimonial-quote-icon">
                  <Quotes size={18} weight="fill" />
                </span>
                <span className="testimonial-badge">{copy.ratingLabel}</span>
              </div>

              <p className="testimonial-quote">{item.quote}</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: AVATAR_BACKGROUNDS[index] }}>
                  {item.initials}
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
