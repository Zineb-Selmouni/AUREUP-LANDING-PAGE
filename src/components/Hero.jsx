import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { cover2, cover3 } from '../images.js'

const PARTICLE_COUNT = 22

function PhoneFrame({ src, alt }) {
  return (
    <div className="phone-frame">
      <div className="phone-island" />
      <div className="phone-btn phone-silent" />
      <div className="phone-btn phone-vol-up" />
      <div className="phone-btn phone-vol-down" />
      <div className="phone-btn phone-power" />
      <div className="phone-screen">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default function Hero({ copy }) {
  const heroRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    gsap.utils.toArray('.particle').forEach((particle) => {
      gsap.set(particle, {
        x: gsap.utils.random(-480, 480),
        y: gsap.utils.random(50, 600),
        scale: gsap.utils.random(0.3, 1.5),
        opacity: 0,
      })

      gsap.to(particle, {
        y: `-=${gsap.utils.random(500, 950)}`,
        x: `+=${gsap.utils.random(-120, 120)}`,
        opacity: gsap.utils.random(0.18, 0.7),
        duration: gsap.utils.random(10, 22),
        delay: gsap.utils.random(0, 12),
        repeat: -1,
        ease: 'none',
        onRepeat() {
          gsap.set(particle, {
            y: gsap.utils.random(300, 700),
            x: gsap.utils.random(-480, 480),
            opacity: 0,
          })
        },
      })
    })

    tl
      .from('.hero-badge', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.title-word', { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power4.out' }, '-=0.4')
      .from('.hero-sub', { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.hero-btn', { y: 20, opacity: 0, scale: 0.88, duration: 0.65, ease: 'back.out(1.6)' }, '-=0.45')
      .from('.phone-wrap-2', { y: 100, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1.4')
      .from('.phone-wrap-1', { y: 80, opacity: 0, duration: 1.1, ease: 'power3.out' }, '-=0.9')

    gsap.to('.phone-wrap-1', { y: -13, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
    gsap.to('.phone-wrap-2', { y: -8, duration: 4.6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2.2 })
    gsap.from('.hero-grid', { opacity: 0, duration: 2.5 })
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-orb hero-orb-4" />

      <div className="hero-rings">
        <div className="hero-ring" />
        <div className="hero-ring" />
        <div className="hero-ring" />
        <div className="hero-ring" />
      </div>

      <div className="hero-particles">
        {Array.from({ length: PARTICLE_COUNT }, (_, index) => (
          <div key={index} className="particle" />
        ))}
      </div>

      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
              <div className="hero-badge">
                <span className="badge-dot" />
                {copy.badge}
              </div>

              <h1 className="hero-title">
                {copy.titleLines.map((line, lineIndex) => (
                <span key={lineIndex} className="title-line">
                    {line.map(({ text, accent }, wordIndex) => (
                      <span key={`${text}-${wordIndex}`} className="title-mask">
                        <span className={`title-word${accent ? ' grad-text' : ''}`}>
                          {text}
                        </span>
                      </span>
                    ))}
                  </span>
                ))}
              </h1>

              <p className="hero-sub">
                {copy.subtitle}
              </p>

              <div className="hero-actions">
                <a href="#waitlist" className="btn btn-primary hero-btn hero-cta-btn">
                  {copy.cta}
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="phone-duo">
                <div className="phone-glow" />

                <div className="phone-wrap phone-wrap-2">
                  <PhoneFrame src={cover3} alt={copy.secondaryPhoneAlt} />
                </div>

                <div className="phone-wrap phone-wrap-1">
                  <PhoneFrame src={cover2} alt={copy.primaryPhoneAlt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
