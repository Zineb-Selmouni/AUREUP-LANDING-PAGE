import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Bell, Gift, Sparkle, UsersThree } from '@phosphor-icons/react'

gsap.registerPlugin(ScrollTrigger)

const BENEFIT_ICONS = [Sparkle, Bell, Gift, UsersThree]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Waitlist({ copy }) {
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  useGSAP(() => {
    gsap.from('.wl-box', {
      y: 50,
      opacity: 0,
      scale: 0.97,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })

    gsap.from(
      ['.wl-eyebrow', '.wl-title', '.wl-sub', '.wl-benefit-card', '.wl-form-wrap', '.wl-privacy'],
      {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      },
    )
  }, { scope: sectionRef })

  const shakeForm = () => {
    gsap.to(formRef.current, {
      x: 9,
      duration: 0.07,
      repeat: 7,
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
      setTimeout(() => setStatus('idle'), 2400)
      return
    }

    setEmail(trimmed)
    setStatus('unavailable')
  }

  const isError = status === 'error'
  const isUnavailable = status === 'unavailable'

  return (
    <section ref={sectionRef} className="waitlist" id="waitlist">
      <div className="container">
        <div className="wl-box">
          <div className="wl-glow" />

          <span className="eyebrow wl-eyebrow">{copy.eyebrow}</span>
          <h2 className="wl-title">{copy.title}</h2>
          <p className="sub wl-sub">{copy.subtitle}</p>

          <ul className="wl-benefits" aria-label={copy.benefitsAria}>
            {copy.benefits.map((text, index) => {
              const Icon = BENEFIT_ICONS[index]

              return (
              <li key={text} className="wl-benefit-card liquid-card">
                <span className="wl-benefit-icon" aria-hidden="true">
                  <Icon size={20} weight="regular" />
                </span>
                <span className="wl-benefit-text">{text}</span>
              </li>
              )
            })}
          </ul>

          <div className="wl-form-wrap">
            <form
              ref={formRef}
              className={`wl-form${isError ? ' wl-form-error' : ''}`}
              onSubmit={handleSubmit}
              noValidate
            >
              <svg className="wl-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>

              <input
                type="email"
                className="wl-input"
                placeholder={copy.placeholder}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (status !== 'idle') setStatus('idle')
                }}
                autoComplete="email"
                dir="ltr"
                required
              />

              <button type="submit" className="wl-submit">
                {copy.cta}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            <p className="wl-privacy">
              {copy.privacy}
              {isError && <span className="wl-error-msg"> {copy.invalidEmail}</span>}
              {isUnavailable && (
                <span className="wl-error-msg"> {copy.unavailable}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
