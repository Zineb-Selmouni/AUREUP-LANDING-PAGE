import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { heroMockupImg } from '../images.js'
import { HeroCopyBlock } from './HeroShared.jsx'

export default function Hero({ copy, waitlistCopy, email, onEmailChange }) {
  const heroRef = useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline({ delay: 0.08 })

    timeline
      .from('.hero-badge', { y: 20, opacity: 0, duration: 0.55, ease: 'power3.out' })
      .from('.hero-title-line', { y: 32, opacity: 0, stagger: 0.08, duration: 0.72, ease: 'power3.out' }, '-=0.2')
      .from('.hero-sub, .hero-actions, .hero-helper, .hero-trust-item', {
        y: 18,
        opacity: 0,
        stagger: 0.06,
        duration: 0.55,
        ease: 'power3.out',
      }, '-=0.36')
      .from('.hero-stage, .hero-stage-note', {
        y: 24,
        opacity: 0,
        stagger: 0.08,
        duration: 0.65,
        ease: 'power3.out',
      }, '-=0.45')
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <HeroCopyBlock
              copy={copy}
              waitlistCopy={waitlistCopy}
              email={email}
              onEmailChange={onEmailChange}
              titleClassName="hero-title"
              subtitleClassName="hero-sub"
              actionsClassName="hero-actions"
              buttonClassName="hero-primary-cta"
              helperClassName="hero-helper"
              trustListClassName="hero-trust-list"
            />
          </div>

          <div className="hero-visual">
            <div className="hero-stage">
              <div className="hero-stage-glow hero-stage-glow-a" aria-hidden="true" />
              <div className="hero-stage-glow hero-stage-glow-b" aria-hidden="true" />

              <div className="hero-stage-note hero-stage-note-top">
                <span>{copy.visualNotes[0].label}</span>
                <strong>{copy.visualNotes[0].value}</strong>
              </div>

              <div className="hero-phone-object">
                <img src={heroMockupImg} alt={copy.primaryPhoneAlt} className="hero-mockup-image" />
              </div>

              <div className="hero-stage-note hero-stage-note-bottom">
                <span>{copy.visualNotes[1].label}</span>
                <strong>{copy.visualNotes[1].value}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
