import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ArrowRight, CheckCircle, LockKey, Sparkle } from '@phosphor-icons/react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SIDE_ICONS = [Sparkle, CheckCircle, LockKey]

export default function Waitlist({ copy, email, onEmailChange }) {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  useGSAP(() => {
    gsap.from('.waitlist-panel, .waitlist-side-card, .waitlist-benefit', {
      y: 26,
      opacity: 0,
      stagger: 0.1,
      duration: 0.72,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
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
        <div className="waitlist-layout">
          <div className="waitlist-panel liquid-card">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="section-title">{copy.title}</h2>
            <p className="sub">{copy.subtitle}</p>

            <ul className="waitlist-benefits" aria-label={copy.benefitsAria}>
              {copy.benefits.map((benefit, index) => (
                <li key={benefit} className="waitlist-benefit">
                  <span className="waitlist-benefit-icon">
                    <CheckCircle size={18} weight="fill" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

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
              {isError && <span className="waitlist-feedback"> {copy.invalidEmail}</span>}
              {isUnavailable && <span className="waitlist-feedback"> {copy.unavailable}</span>}
            </p>
          </div>

          <aside className="waitlist-side">
            <div className="waitlist-side-card liquid-card">
              <span className="waitlist-side-label">{copy.cardTitle}</span>
              <p>{copy.cardBody}</p>
            </div>

            <div className="waitlist-side-stack">
              {copy.benefits.slice(0, 3).map((item, index) => {
                const Icon = SIDE_ICONS[index]

                return (
                  <div key={item} className="waitlist-side-card liquid-card">
                    <span className="waitlist-side-icon">
                      <Icon size={18} weight="fill" />
                    </span>
                    <div>
                      <strong>{item}</strong>
                    </div>
                  </div>
                )
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
