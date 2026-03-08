import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AVATARS = [
  { initials: 'SL', bg: '#1d3a8a' },
  { initials: 'JK', bg: '#1a2e6b' },
  { initials: 'MR', bg: '#243f9c' },
  { initials: 'AT', bg: '#162863' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Waitlist() {
  const sectionRef = useRef(null)
  const formRef    = useRef(null)
  const successRef = useRef(null)

  const [email,      setEmail]      = useState('')
  const [savedEmail, setSavedEmail] = useState('')
  const [status,     setStatus]     = useState('idle') // idle | loading | success | error

  /* ── Entrance animation ── */
  useGSAP(() => {
    gsap.from('.wl-box', {
      y: 50, opacity: 0, scale: 0.97, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
    })
    gsap.from(
      ['.wl-eyebrow', '.wl-title', '.wl-sub', '.wl-form-wrap', '.wl-privacy', '.wl-proof'],
      {
        y: 28, opacity: 0, duration: 0.7, stagger: 0.09, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      },
    )
  }, { scope: sectionRef })

  /* ── Shake on bad input ── */
  const shakeForm = () => {
    gsap.to(formRef.current, {
      x: 9, duration: 0.07, repeat: 7, yoyo: true, ease: 'none',
      onComplete: () => gsap.set(formRef.current, { x: 0 }),
    })
  }

  /* ── Submit ── */
  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmed = email.trim()

    if (!EMAIL_RE.test(trimmed)) {
      setStatus('error')
      shakeForm()
      setTimeout(() => setStatus('idle'), 2400)
      return
    }

    setSavedEmail(trimmed)
    setStatus('loading')

    // 👉 Replace this with your real API call (Mailchimp, ConvertKit, Resend, etc.)
    await new Promise(r => setTimeout(r, 1200))

    setStatus('success')
    setEmail('')

    // Animate success message in
    requestAnimationFrame(() => {
      if (successRef.current) {
        gsap.from(successRef.current, { scale: 0.82, opacity: 0, y: 22, duration: 0.7, ease: 'back.out(1.8)' })
      }
    })
  }

  const isError   = status === 'error'
  const isLoading = status === 'loading'
  const isSuccess = status === 'success'

  return (
    <section ref={sectionRef} className="waitlist" id="waitlist">
      <div className="container">
        <div className="wl-box">

          {/* Radial glow decoration */}
          <div className="wl-glow" />

          <span className="eyebrow wl-eyebrow">Early Access</span>

          <h2 className="wl-title">
            Be the first to<br />
            <span className="grad-text">experience Aure Up</span>
          </h2>

          <p className="sub wl-sub">
            Join the waitlist and get exclusive early access, behind-the-scenes
            updates, and a special launch offer — before anyone else.
          </p>

          {/* ── Form area ── */}
          <div className="wl-form-wrap">

            {isSuccess ? (
              /* Success state */
              <div className="wl-success" ref={successRef}>
                <div className="wl-success-icon">
                  <svg viewBox="0 0 52 52" fill="none" width="64" height="64">
                    <circle cx="26" cy="26" r="25" stroke="url(#wlg)" strokeWidth="2" />
                    <path d="M14 26l9 9 15-15" stroke="url(#wlg)" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="wlg" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#316CFF" />
                        <stop offset="1" stopColor="#09006E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <p className="wl-success-title">You're on the list! 🎉</p>
                <p className="wl-success-sub">
                  We'll reach out to <strong>{savedEmail}</strong> as soon as access opens.
                </p>
              </div>
            ) : (
              /* Email form */
              <form
                ref={formRef}
                className={`wl-form${isError ? ' wl-form-error' : ''}`}
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Envelope icon */}
                <svg className="wl-input-icon" width="18" height="18" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>

                <input
                  type="email"
                  className="wl-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value)
                    if (isError) setStatus('idle')
                  }}
                  disabled={isLoading}
                  autoComplete="email"
                  required
                />

                <button type="submit" className="wl-submit" disabled={isLoading}>
                  {isLoading ? (
                    <span className="wl-spinner" />
                  ) : (
                    <>
                      Join Waitlist
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Privacy note + error */}
            {!isSuccess && (
              <p className="wl-privacy">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }}>
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                No spam, ever. Unsubscribe anytime.
                {isError && <span className="wl-error-msg"> · Please enter a valid email.</span>}
              </p>
            )}
          </div>

          {/* ── Social proof avatars ── */}
          {!isSuccess && (
            <div className="wl-proof">
              <div className="wl-avatars">
                {AVATARS.map(a => (
                  <div key={a.initials} className="wl-avatar" style={{ background: a.bg }}>
                    {a.initials}
                  </div>
                ))}
              </div>
              <p className="wl-proof-text">
                <strong>5,200+</strong> people already on the waitlist
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
