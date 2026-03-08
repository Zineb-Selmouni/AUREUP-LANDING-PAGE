import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { cover2, cover3 } from '../images.js'

const TITLE = [
  ['Elevate', 'Your'],
  ['Potential.'],
  ['Rise', 'Up.'],
]

const GRAD_WORDS = new Set(['Your', 'Potential.', 'Up.'])

const PARTICLE_COUNT = 22

/** Reusable CSS-only iPhone 15 Pro frame */
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

export default function Hero() {
  const heroRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    /* ── Floating particles ── */
    gsap.utils.toArray('.particle').forEach((p) => {
      gsap.set(p, {
        x: gsap.utils.random(-480, 480),
        y: gsap.utils.random(50, 600),
        scale: gsap.utils.random(0.3, 1.5),
        opacity: 0,
      })
      gsap.to(p, {
        y: `-=${gsap.utils.random(500, 950)}`,
        x: `+=${gsap.utils.random(-120, 120)}`,
        opacity: gsap.utils.random(0.18, 0.7),
        duration: gsap.utils.random(10, 22),
        delay: gsap.utils.random(0, 12),
        repeat: -1,
        ease: 'none',
        onRepeat() {
          gsap.set(p, {
            y: gsap.utils.random(300, 700),
            x: gsap.utils.random(-480, 480),
            opacity: 0,
          })
        },
      })
    })

    /* ── Main entrance timeline ── */
    tl
      .from('.hero-badge',  { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.title-word',  { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power4.out' }, '-=0.4')
      .from('.hero-sub',    { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .from('.hero-btn',    { y: 20, opacity: 0, scale: 0.88, duration: 0.65, stagger: 0.12, ease: 'back.out(1.6)' }, '-=0.45')
      .from('.hero-store',  { y: 18, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(1.5)' }, '-=0.3')
      .from('.hstat',       { y: 18, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.35')
      // Back phone drops in first
      .from('.phone-wrap-2', { y: 100, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1.5')
      // Front phone follows
      .from('.phone-wrap-1', { y: 80,  opacity: 0, duration: 1.1, ease: 'power3.out' }, '-=0.9')
    /* ── Continuous phone gentle bob (upright, no rotation) ── */
    gsap.to('.phone-wrap-1', { y: -13, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
    gsap.to('.phone-wrap-2', { y:  -8, duration: 4.6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2.2 })

    /* ── Grid fade in ── */
    gsap.from('.hero-grid', { opacity: 0, duration: 2.5 })
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="hero" id="home">

      {/* Subtle dot grid */}
      <div className="hero-grid" />

      {/* Aurora orbs — animated via CSS keyframes */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-orb hero-orb-4" />

      {/* Pulsing sonar rings */}
      <div className="hero-rings">
        <div className="hero-ring" />
        <div className="hero-ring" />
        <div className="hero-ring" />
        <div className="hero-ring" />
      </div>

      {/* Floating particles */}
      <div className="hero-particles">
        {Array.from({ length: PARTICLE_COUNT }, (_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="container">
        <div className="hero-inner">

          {/* ── Left: Text ── */}
          <div>
            <div className="hero-badge">
              <span className="badge-dot" />
              Now Available — v2.0
            </div>

            <h1 className="hero-title">
              {TITLE.map((line, li) => (
                <span key={li} className="title-line">
                  {line.map((word, wi) => (
                    <span key={wi} className="title-mask">
                      <span className={`title-word${GRAD_WORDS.has(word) ? ' grad-text' : ''}`}>
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <p className="hero-sub">
              Aure Up empowers you to track, grow, and achieve your goals with
              intelligent insights and seamless tools built for high performers.
            </p>

            <div className="hero-actions">
              <a href="#waitlist" className="btn btn-primary hero-btn">
                Get Started Free
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Store buttons */}
            <div className="hero-store-row">
              <a href="#" className="store-btn hero-store">
                <span className="store-ico">
                  {/* Apple logo — Font Awesome 6 */}
                  <svg width="22" height="22" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                  </svg>
                </span>
                <span className="store-text">
                  <span className="store-sub">Download on the</span>
                  <span className="store-name">App Store</span>
                </span>
              </a>
              <a href="#" className="store-btn hero-store">
                <span className="store-ico">
                  <svg width="22" height="22" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l232.6-232.9L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.7 17.1-31.8-.2-40.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                </span>
                <span className="store-text">
                  <span className="store-sub">Get it on</span>
                  <span className="store-name">Google Play</span>
                </span>
              </a>
            </div>

            <div className="hero-stats">
              {[
                { num: '50K+', lbl: 'Active Users' },
                { num: '4.9★', lbl: 'App Store Rating' },
                { num: '98%',  lbl: 'Satisfaction Rate' },
              ].map(s => (
                <div key={s.lbl} className="hstat">
                  <span className="hstat-num">{s.num}</span>
                  <span className="hstat-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: iPhone mockup duo ── */}
          <div className="hero-visual">
            <div className="phone-duo">

              <div className="phone-glow" />

              {/* Back phone */}
              <div className="phone-wrap phone-wrap-2">
                <PhoneFrame src={cover3} alt="Aure Up – app screen" />
              </div>

              {/* Front phone */}
              <div className="phone-wrap phone-wrap-1">
                <PhoneFrame src={cover2} alt="Aure Up – main screen" />

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
