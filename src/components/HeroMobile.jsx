import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { cover2 } from '../images.js'

function PhoneFrameMobile({ src, alt }) {
  return (
    <div className="hm-phone-frame">
      <div className="hm-phone-island" />
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

export default function HeroMobile({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl
      .from('.hm-badge', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from('.hm-title', { y: 32, opacity: 0, duration: 0.85, ease: 'power3.out' }, '-=0.3')
      .from('.hm-sub', { y: 20, opacity: 0, duration: 0.65, ease: 'power3.out' }, '-=0.4')
      .from('.hm-cta-row', { y: 16, opacity: 0, duration: 0.55, ease: 'power3.out' }, '-=0.35')
      .from('.hm-phone', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.2')

    gsap.to('.hm-phone', {
      y: -10,
      duration: 3.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.2,
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="hm-section" id="home">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-grid" />

      <div className="hm-inner">
        <div className="hero-badge hm-badge">
          <span className="badge-dot" />
          {copy.badge}
        </div>

        <h1 className="hm-title">
          {copy.titleLines.map((line, lineIndex) => (
            <span key={lineIndex} className="title-line">
              {line.map(({ text, accent }, wordIndex) => (
                <span key={`${text}-${wordIndex}`} className="title-mask">
                  <span className={accent ? 'grad-text' : ''}>
                    {text}
                  </span>
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hm-sub">
          {copy.subtitle}
        </p>

        <div className="hm-cta-row">
          <a href="#waitlist" className="btn btn-primary hero-btn hero-cta-btn hm-cta-btn">
            {copy.cta}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hm-phone-wrap">
          <div className="hm-phone-glow" />
          <div className="hm-phone">
            <PhoneFrameMobile src={cover2} alt={copy.mobilePhoneAlt} />
          </div>
        </div>
      </div>
    </section>
  )
}
