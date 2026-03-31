import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Waitlist({ copy, email, onEmailChange }) {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  useGSAP(() => {
    gsap.from('.waitlist-panel, .waitlist-perk', {
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 0.68,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })
  }, { scope: sectionRef })

  const shakeForm = () => {
    gsap.to(formRef.current, {
      x: 8,
      duration: 0.07,
      repeat: 5,
      yoyo: true,
      ease: 'none',
      onComplete: () => gsap.set(formRef.current, { x: 0 }),
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = email.trim()

    if (!EMAIL_RE.test(trimmed)) {
      setStatus('error')
      shakeForm()
      window.setTimeout(() => setStatus('idle'), 2400)
      return
    }

    onEmailChange(trimmed)
    setStatus('unavailable')
  }

  const isError = status === 'error'
  const isUnavailable = status === 'unavailable'

  return (
    <section ref={sectionRef} className="waitlist" id="waitlist">
      <div className="container">
        <div className="waitlist-panel liquid-card">
          <div className="waitlist-main">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="section-title">{copy.title}</h2>
            <p className="sub">{copy.subtitle}</p>

            <form
              ref={formRef}
              className={`waitlist-form${isError ? ' waitlist-form-error' : ''}`}
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="email"
                className="waitlist-input"
                placeholder={copy.placeholder}
                value={email}
                onChange={(event) => {
                  onEmailChange(event.target.value)
                  if (status !== 'idle') setStatus('idle')
                }}
                autoComplete="email"
                dir="ltr"
                required
              />

              <button type="submit" className="btn btn-primary waitlist-submit">
                {copy.cta}
                <ArrowRight size={17} weight="bold" />
              </button>
            </form>

            <p className="waitlist-privacy">
              {copy.privacy}
              {isError ? <span className="waitlist-feedback"> {copy.invalidEmail}</span> : null}
              {isUnavailable ? <span className="waitlist-feedback"> {copy.unavailable}</span> : null}
            </p>
          </div>

          <aside className="waitlist-side" aria-label={copy.benefitsAria}>
            <span className="waitlist-side-label">{copy.perksTitle}</span>

            <ul className="waitlist-perks">
              {copy.benefits.map((benefit) => (
                <li key={benefit} className="waitlist-perk">
                  <span className="waitlist-benefit-icon">
                    <CheckCircle size={18} weight="fill" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="waitlist-trust">{copy.trust}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
