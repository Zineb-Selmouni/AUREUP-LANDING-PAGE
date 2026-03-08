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

export default function HeroMobile() {
  const ref = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl
      .from('.hm-badge',   { y: 20, opacity: 0, duration: 0.7,  ease: 'power3.out' })
      .from('.hm-title',   { y: 32, opacity: 0, duration: 0.85, ease: 'power3.out' }, '-=0.3')
      .from('.hm-sub',     { y: 20, opacity: 0, duration: 0.65, ease: 'power3.out' }, '-=0.4')
      .from('.hm-cta-row', { y: 16, opacity: 0, duration: 0.55, ease: 'power3.out' }, '-=0.35')
      .from('.hm-stores',  { y: 14, opacity: 0, duration: 0.5,  ease: 'power3.out' }, '-=0.3')
      .from('.hm-phone',   { y: 50, opacity: 0, duration: 1.0,  ease: 'power3.out' }, '-=0.2')
      .from('.hm-stats',   { y: 14, opacity: 0, duration: 0.5,  ease: 'power2.out' }, '-=0.6')

    gsap.to('.hm-phone', {
      y: -10, duration: 3.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.2,
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
          Now Available — v2.0
        </div>

        <h1 className="hm-title">
          Elevate Your<br />
          <span className="grad-text">Potential.</span><br />
          Rise <span className="grad-text">Up.</span>
        </h1>

        <p className="hm-sub">
          Track, grow, and achieve your goals with intelligent
          insights built for high performers.
        </p>

        <div className="hm-cta-row">
          <a href="#waitlist" className="btn btn-primary">
            Get Started Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="hm-stores">
          <a href="#" className="hm-store-btn">
            <svg width="17" height="17" viewBox="0 0 384 512" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </a>
          <a href="#" className="hm-store-btn">
            <svg width="17" height="17" viewBox="0 0 512 512" fill="currentColor">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l232.6-232.9L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c17.1-9.7 17.1-31.8-.2-40.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <span>
              <small>Get it on</small>
              Google Play
            </span>
          </a>
        </div>

        <div className="hm-phone-wrap">
          <div className="hm-phone-glow" />
          <div className="hm-phone">
            <PhoneFrameMobile src={cover2} alt="Aure Up app" />
          </div>
        </div>

        <div className="hm-stats">
          {[
            { num: '50K+', lbl: 'Active Users' },
            { num: '4.9★', lbl: 'App Store' },
            { num: '98%',  lbl: 'Satisfaction' },
          ].map(s => (
            <div key={s.lbl} className="hstat">
              <span className="hstat-num">{s.num}</span>
              <span className="hstat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
