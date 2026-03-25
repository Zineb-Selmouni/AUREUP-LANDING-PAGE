import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ArrowRight } from '@phosphor-icons/react'
import { cover2 } from '../images.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function PhoneFrameMobile({ src, alt }) {
  return (
    <div className="hm-phone-frame">
      <div className="hm-phone-island">
        <span className="phone-island-speaker" />
        <span className="phone-island-camera" />
      </div>
      <div className="phone-btn phone-silent" />
      <div className="phone-btn phone-vol-up" />
      <div className="phone-btn phone-vol-down" />
      <div className="phone-btn phone-power" />
      <div className="hm-phone-screen">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default function HeroMobile({ copy, waitlistCopy, email, onEmailChange }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.hm-card', {
      y: 24,
      opacity: 0,
      stagger: 0.12,
      duration: 0.65,
      ease: 'power3.out',
      delay: 0.1,
    })
  }, { scope: ref })

  const handleHeroSubmit = (event) => {
    event.preventDefault()

    const waitlistSection = document.getElementById('waitlist')
    if (!waitlistSection) return

    const trimmed = email.trim()
    if (trimmed) {
      onEmailChange(trimmed)
    }

    waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section ref={ref} className="hm-section" id="home">
      <div className="hero-ambient hero-ambient-a" />
      <div className="hero-grid" />

      <div className="container">
        <div className="hm-stack">
          <div className="hm-copy hm-card">
            <div className="hero-badge hm-badge">
              <span className="hero-badge-dot" />
              {copy.badge}
            </div>

            <h1 className="hm-title">
              {copy.titleLines.map((line, lineIndex) => (
                <span key={lineIndex} className="hero-title-line">
                  {line.map(({ text, accent }, wordIndex) => (
                    <span key={`${text}-${wordIndex}`} className={accent ? 'grad-text' : ''}>
                      {text}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="hm-sub">{copy.subtitle}</p>

            <form className="hero-signup-form hm-signup-form" onSubmit={handleHeroSubmit}>
              <input
                type="email"
                className="hero-signup-input"
                placeholder={waitlistCopy.placeholder}
                value={email}
                onChange={(event) => onEmailChange(event.target.value)}
                autoComplete="email"
                dir="ltr"
                aria-label={waitlistCopy.placeholder}
              />

              <button
                type="submit"
                className="btn btn-primary hm-cta-btn"
                disabled={email.trim().length > 0 && !EMAIL_RE.test(email.trim())}
              >
                {waitlistCopy.cta}
                <ArrowRight size={17} weight="bold" />
              </button>
            </form>
          </div>

          <div className="hm-visual liquid-card hm-card">
            <div className="hm-phone-shell">
              <PhoneFrameMobile src={cover2} alt={copy.mobilePhoneAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
