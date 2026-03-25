import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Quotes } from '@phosphor-icons/react'

const AVATAR_BACKGROUNDS = [
  'linear-gradient(135deg, #2f59ff 0%, #0f1f6a 100%)',
  'linear-gradient(135deg, #1bb6ab 0%, #0f5a84 100%)',
  'linear-gradient(135deg, #6d59ff 0%, #2a2f7d 100%)',
]

export default function Testimonials({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.testimonial-stat, .testimonial-card', {
      y: 28,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="testimonials" id="reviews">
      <div className="container">
        <div className="t-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
        </div>

        <div className="testimonial-stats">
          {copy.stats.map((stat) => (
            <div key={stat.label} className="testimonial-stat liquid-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="testimonial-grid">
          {copy.items.map((item, index) => (
            <article key={item.name} className="testimonial-card liquid-card">
              <div className="testimonial-card-top">
                <span className="testimonial-quote-icon">
                  <Quotes size={18} weight="fill" />
                </span>
                <span className="testimonial-stars">5.0</span>
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
