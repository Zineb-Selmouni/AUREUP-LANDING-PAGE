import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const GoalVisual = () => (
  <svg width="148" height="148" viewBox="0 0 148 148" fill="none" aria-hidden="true">
    <circle cx="74" cy="74" r="56" stroke="rgba(49,108,255,0.1)" strokeWidth="10"/>
    <circle cx="74" cy="74" r="56" stroke="url(#fv-g1)" strokeWidth="10"
      strokeDasharray="240.9 351.9" strokeLinecap="round"
      transform="rotate(-90 74 74)"/>
    <circle cx="74" cy="74" r="38" stroke="rgba(49,108,255,0.08)" strokeWidth="8"/>
    <circle cx="74" cy="74" r="38" stroke="url(#fv-g1)" strokeWidth="8"
      strokeDasharray="131.9 238.8" strokeLinecap="round" opacity="0.6"
      transform="rotate(-90 74 74)"/>
    <defs>
      <linearGradient id="fv-g1" x1="0" y1="0" x2="148" y2="148" gradientUnits="userSpaceOnUse">
        <stop stopColor="#316CFF"/><stop offset="1" stopColor="#09006E"/>
      </linearGradient>
    </defs>
  </svg>
)

const RemindersVisual = () => (
  <svg width="170" height="108" viewBox="0 0 170 108" fill="none" aria-hidden="true">
    <rect x="25" y="54" width="130" height="48" rx="13" fill="rgba(49,108,255,0.05)" stroke="rgba(49,108,255,0.12)" strokeWidth="1"/>
    <rect x="12" y="32" width="136" height="48" rx="13" fill="rgba(49,108,255,0.09)" stroke="rgba(49,108,255,0.2)" strokeWidth="1"/>
    <rect x="0" y="10" width="142" height="52" rx="13" fill="rgba(49,108,255,0.16)" stroke="rgba(49,108,255,0.32)" strokeWidth="1"/>
    <circle cx="20" cy="36" r="9" fill="url(#fv-r1)"/>
    <rect x="37" y="29" width="68" height="5" rx="2.5" fill="rgba(255,255,255,0.55)"/>
    <rect x="37" y="40" width="88" height="4" rx="2" fill="rgba(255,255,255,0.22)"/>
    <defs>
      <linearGradient id="fv-r1" x1="0" y1="0" x2="18" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#316CFF"/><stop offset="1" stopColor="#09006E"/>
      </linearGradient>
    </defs>
  </svg>
)

const DevicesVisual = () => (
  <svg width="170" height="96" viewBox="0 0 170 96" fill="none" aria-hidden="true">
    <rect x="8" y="22" width="30" height="52" rx="7" stroke="rgba(49,108,255,0.45)" strokeWidth="1.5" fill="rgba(49,108,255,0.07)"/>
    <rect x="14" y="30" width="18" height="30" rx="3" fill="rgba(49,108,255,0.18)"/>
    <circle cx="23" cy="68" r="3.5" fill="rgba(49,108,255,0.45)"/>
    <rect x="56" y="10" width="58" height="76" rx="8" stroke="rgba(49,108,255,0.45)" strokeWidth="1.5" fill="rgba(49,108,255,0.07)"/>
    <rect x="64" y="20" width="42" height="50" rx="4" fill="rgba(49,108,255,0.18)"/>
    <circle cx="85" cy="80" r="4" fill="rgba(49,108,255,0.45)"/>
    <rect x="126" y="26" width="34" height="24" rx="4" stroke="rgba(49,108,255,0.45)" strokeWidth="1.5" fill="rgba(49,108,255,0.07)"/>
    <rect x="130" y="30" width="26" height="16" rx="2" fill="rgba(49,108,255,0.18)"/>
    <path d="M119 50 L167 50 L170 55 L116 55 Z" stroke="rgba(49,108,255,0.35)" strokeWidth="1.2" fill="rgba(49,108,255,0.06)"/>
    <circle cx="46" cy="52" r="2.5" fill="rgba(49,108,255,0.4)"/>
    <circle cx="52" cy="52" r="2.5" fill="rgba(49,108,255,0.28)"/>
    <circle cx="118" cy="38" r="2.5" fill="rgba(49,108,255,0.4)"/>
    <circle cx="112" cy="38" r="2.5" fill="rgba(49,108,255,0.28)"/>
  </svg>
)

const FEATURES = [
  {
    wide: true,
    title: 'Smart Goal Intelligence',
    desc: 'Set ambitious goals and let Aure Up break them into clear milestones with real-time feedback and predicted completion dates.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    visual: <GoalVisual />,
  },
  {
    title: 'Deep Analytics',
    desc: 'Visualize your growth with beautiful charts. Spot the patterns that drive success and make data-backed decisions every day.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
  {
    title: 'Instant Actions',
    desc: 'From one tap — schedule, delegate, or execute your next move. Zero friction between insight and action.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    wide: true,
    title: 'Smart Reminders',
    desc: 'AI-powered nudges that adapt to your schedule and surface at exactly the right moment to keep your momentum going.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    visual: <RemindersVisual />,
  },
  {
    title: 'Secure & Private',
    desc: 'End-to-end encryption and zero-knowledge architecture. Your growth data belongs to you — always, no exceptions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    wide: true,
    title: 'Works Everywhere',
    desc: 'Seamlessly synced across iOS, Android, and web. Pick up exactly where you left off on any device, any time.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    visual: <DevicesVisual />,
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    /* Header fades up as section enters */
    gsap.from('.features-header', {
      y: 44, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.features-header',
        start:   'top 82%',
      },
    })

    /* Cards stagger up */
    gsap.from('.feat-card', {
      y: 52, opacity: 0, duration: 0.7, stagger: 0.09, ease: 'power3.out',
      scrollTrigger: {
        trigger: '.feat-grid',
        start:   'top 82%',
      },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="features" id="features">
      <div className="container">

        <div className="features-header tc">
          <span className="eyebrow">Why Aure Up</span>
          <h2 className="section-title">
            Everything you need to <span className="grad-text">Level Up</span>
          </h2>
          <p className="sub">
            Powerful features crafted for ambitious people who refuse to settle for average.
          </p>
        </div>

        <div className="feat-grid">
          {FEATURES.map(f => (
            <div key={f.title} className={`feat-card${f.wide ? ' wide' : ''}`}>
              <div className="feat-content">
                <div className="feat-icon">{f.icon}</div>
                <h3 className="feat-title">{f.title}</h3>
                <p className="feat-desc">{f.desc}</p>
              </div>
              {f.visual && <div className="feat-visual">{f.visual}</div>}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
