import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { cover2 } from '../images.js'
import { HeroCopyBlock, PhoneFrame } from './HeroShared.jsx'

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
            />
          </div>

          <div className="hero-visual">
            <div className="hero-visual-panel liquid-card hero-visual-card">
              <div className="hero-story-stage">
                <div className="hero-phone-stage hero-phone-stage-clean">
                  <PhoneFrame
                    src={cover2}
                    alt={copy.primaryPhoneAlt}
                    className="phone-wrap hero-phone-front"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
