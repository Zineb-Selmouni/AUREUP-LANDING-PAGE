import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ArrowRight } from '@phosphor-icons/react'
import { cover2 } from '../images.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function PhoneFrame({ src, alt, className }) {
  return (
    <div className={`phone-wrap ${className ?? ''}`}>
      <div className="phone-frame">
        <div className="phone-island">
          <span className="phone-island-speaker" />
          <span className="phone-island-camera" />
        </div>
        <div className="phone-btn phone-silent" />
        <div className="phone-btn phone-vol-up" />
        <div className="phone-btn phone-vol-down" />
        <div className="phone-btn phone-power" />
        <div className="phone-screen">
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default function Hero({ copy, waitlistCopy, email, onEmailChange }) {
  const heroRef = useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline({ delay: 0.1 })

    timeline
      .from('.hero-badge', { y: 24, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .from('.hero-title-line', { y: 42, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .from('.hero-sub', { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.45')
      .from('.hero-actions', { y: 20, opacity: 0, duration: 0.55, ease: 'power3.out' }, '-=0.45')
      .from('.hero-visual-card', { y: 28, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out' }, '-=0.65')

    gsap.to('.hero-phone-front', {
      y: -12,
      x: 3,
      rotation: 1.5,
      duration: 5.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    const visualPanel = heroRef.current?.querySelector('.hero-visual-panel')
    const phoneX = gsap.quickTo('.hero-phone-front', 'x', { duration: 0.6, ease: 'power3.out' })
    const phoneY = gsap.quickTo('.hero-phone-front', 'y', { duration: 0.6, ease: 'power3.out' })
    const auraX = gsap.quickTo('.hero-phone-aura', 'x', { duration: 0.7, ease: 'power3.out' })
    const auraY = gsap.quickTo('.hero-phone-aura', 'y', { duration: 0.7, ease: 'power3.out' })
    const reflectionX = gsap.quickTo('.hero-phone-reflection', 'x', { duration: 0.55, ease: 'power3.out' })

    const handleMove = (event) => {
      if (!visualPanel) return
      const bounds = visualPanel.getBoundingClientRect()
      const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5
      const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5

      phoneX(relativeX * 10)
      phoneY(relativeY * 10 - 12)
      auraX(relativeX * 18)
      auraY(relativeY * 18)
      reflectionX(relativeX * 16)
    }

    const handleLeave = () => {
      phoneX(0)
      phoneY(-12)
      auraX(0)
      auraY(0)
      reflectionX(0)
    }

    visualPanel?.addEventListener('pointermove', handleMove)
    visualPanel?.addEventListener('pointerleave', handleLeave)

    return () => {
      visualPanel?.removeEventListener('pointermove', handleMove)
      visualPanel?.removeEventListener('pointerleave', handleLeave)
    }
  }, { scope: heroRef })

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
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-ambient hero-ambient-a" />
      <div className="hero-ambient hero-ambient-b" />
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              {copy.badge}
            </div>

            <h1 className="hero-title">
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

            <p className="hero-sub">{copy.subtitle}</p>

            <div className="hero-actions">
              <form className="hero-signup-form" onSubmit={handleHeroSubmit}>
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
                  className="btn btn-primary hero-primary-cta"
                  disabled={email.trim().length > 0 && !EMAIL_RE.test(email.trim())}
                >
                  {waitlistCopy.cta}
                  <ArrowRight size={18} weight="bold" />
                </button>
              </form>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-panel liquid-card hero-visual-card">
              <div className="hero-story-stage">
                <div className="hero-phone-stage hero-phone-stage-clean">
                  <div className="hero-phone-aura" aria-hidden="true" />
                  <div className="hero-phone-reflection" aria-hidden="true" />
                  <div className="hero-device-shadow" aria-hidden="true" />
                  <PhoneFrame src={cover2} alt={copy.primaryPhoneAlt} className="hero-phone-front" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
