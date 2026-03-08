import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import coinImg from '../../assets/coin.png'

gsap.registerPlugin(ScrollTrigger)

const AVATARS = [
  { initials: 'SL', bg: '#1d3a8a' },
  { initials: 'JK', bg: '#1a2e6b' },
  { initials: 'MR', bg: '#243f9c' },
  { initials: 'AT', bg: '#162863' },
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function CTA() {
  const ref      = useRef(null)
  const formRef  = useRef(null)
  const successRef = useRef(null)

  const [email,      setEmail]      = useState('')
  const [savedEmail, setSavedEmail] = useState('')
  const [status,     setStatus]     = useState('idle')

  useGSAP(() => {
    gsap.from('.cta-box', {
      y: 48, opacity: 0, scale: 0.95, duration: 1.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.cta-box', start: 'top 80%' },
    })
    gsap.from('.cta-coin', {
      x: -70, opacity: 0, duration: 1.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.cta-box', start: 'top 76%' },
    })
    gsap.from(['.cta-eyebrow', '.cta-title', '.cta-sub', '.cta-form-wrap', '.cta-privacy-note', '.cta-proof'], {
      y: 26, opacity: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.cta-box', start: 'top 74%' },
    })
    gsap.to('.cta-box', {
      boxShadow: '0 0 80px rgba(49,108,255,0.35), 0 0 120px rgba(9,0,110,0.25)',
      duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut',
      scrollTrigger: { trigger: '.cta-box', start: 'top 80%' },
    })
  }, { scope: ref })

  const shakeForm = () => {
    gsap.to(formRef.current, {
      x: 9, duration: 0.07, repeat: 7, yoyo: true, ease: 'none',
      onComplete: () => gsap.set(formRef.current, { x: 0 }),
    })
  }

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
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setEmail('')
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
    <section ref={ref} className="cta" id="cta">
      <div className="container">
        <div className="cta-box">

          <div className="cta-split">

            {/* Left — coin */}
            <div className="cta-coin">
              <div className="wls-coin-float">
                <div className="wls-coin-glow" />
                <img src={coinImg} alt="Aure Up gold coin" className="wls-coin-img" />
              </div>
              <div className="wls-coin-shadow" />
            </div>

            {/* Right — form */}
            <div className="cta-form-side">
              <span className="eyebrow cta-eyebrow">Join the Movement</span>

              <h2 className="cta-title">
                Ready to <span className="grad-text">Aure Up</span>?
              </h2>

              <p className="sub cta-sub">
                Join thousands of high performers already crushing their goals.
                Free to start — no credit card needed.
              </p>

              <div className="cta-form-wrap">
                {isSuccess ? (
                  <div className="wl-success" ref={successRef}>
                    <div className="wl-success-icon">
                      <svg viewBox="0 0 52 52" fill="none" width="64" height="64">
                        <circle cx="26" cy="26" r="25" stroke="url(#ctag)" strokeWidth="2" />
                        <path d="M14 26l9 9 15-15" stroke="url(#ctag)" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                          <linearGradient id="ctag" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#316CFF" />
                            <stop offset="1" stopColor="#09006E" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p className="wl-success-title">You're on the list!</p>
                    <p className="wl-success-sub">
                      We'll reach out to <strong>{savedEmail}</strong> as soon as access opens.
                    </p>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    className={`wl-form${isError ? ' wl-form-error' : ''}`}
                    onSubmit={handleSubmit}
                    noValidate
                  >
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
                      onChange={e => { setEmail(e.target.value); if (isError) setStatus('idle') }}
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

                {!isSuccess && (
                  <p className="wl-privacy cta-privacy-note">
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

              {!isSuccess && (
                <div className="wl-proof cta-proof">
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
        </div>
      </div>
    </section>
  )
}
