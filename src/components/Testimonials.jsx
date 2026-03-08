import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TESTIMONIALS = [
  {
    initials: 'SL',
    name: 'Sarah L.',
    role: 'Product Manager, Nexus',
    quote:
      '"Aure Up completely changed how I approach my goals. The analytics are incredible and the UI is hands down the best I\'ve ever used."',
  },
  {
    initials: 'JK',
    name: 'James K.',
    role: 'Founder, Pinnacle Studio',
    quote:
      '"I\'ve tried every productivity app out there. Nothing comes close to Aure Up. The smart reminders alone are worth every cent."',
  },
  {
    initials: 'MR',
    name: 'Maya R.',
    role: 'UX Lead, Solara',
    quote:
      '"The goal breakdown feature is a game changer. Big ambitions finally feel achievable when Aure Up breaks them into clear, doable steps."',
  },
]

export default function Testimonials() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.t-header', {
      y: 36, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.t-header', start: 'top 82%' },
    })

    // Set all cards hidden before scroll fires — no scale, just y + opacity
    gsap.set('.t-card', { y: 52, opacity: 0 })

    ScrollTrigger.batch('.t-card', {
      onEnter: batch =>
        gsap.to(batch, {
          y: 0, opacity: 1,
          duration: 0.8, stagger: 0.14, ease: 'power3.out',
          clearProps: 'transform,opacity',
        }),
      start: 'top 88%',
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="testimonials" id="reviews">
      <div className="container">
        <div className="t-header tc">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title">
            Loved by <span className="grad-text">high performers</span>
          </h2>
          <p className="sub">
            Don't just take our word for it — hear from people already levelling up with Aure Up.
          </p>
        </div>

        <div className="t-grid">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">{t.quote}</p>
              <div className="t-author">
                <div className="t-avatar">{t.initials}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
