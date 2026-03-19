import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Testimonials({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.t-header', {
      y: 36,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.t-header', start: 'top 82%' },
    })

    gsap.set('.t-card', { y: 52, opacity: 0 })

    ScrollTrigger.batch('.t-card', {
      onEnter: (batch) => gsap.to(batch, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.14,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      }),
      start: 'top 88%',
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="testimonials" id="reviews">
      <div className="container">
        <div className="t-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
        </div>

        <div className="t-grid">
          {copy.items.map((testimonial) => (
            <div key={testimonial.name} className="t-card liquid-card">
              <p className="t-quote">"{testimonial.quote}"</p>
              <div className="t-author">
                <div className="t-avatar">{testimonial.initials}</div>
                <div>
                  <div className="t-name">{testimonial.name}</div>
                  <div className="t-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
