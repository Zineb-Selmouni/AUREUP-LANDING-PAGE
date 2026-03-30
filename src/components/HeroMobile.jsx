import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { cover2 } from '../images.js'
import { HeroCopyBlock, PhoneFrame } from './HeroShared.jsx'

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

  return (
    <section ref={ref} className="hm-section" id="home">
      <div className="hero-grid" />

      <div className="container">
        <div className="hm-stack">
          <div className="hm-copy hm-card">
            <HeroCopyBlock
              copy={copy}
              waitlistCopy={waitlistCopy}
              email={email}
              onEmailChange={onEmailChange}
              badgeClassName="hm-badge"
              titleClassName="hm-title"
              subtitleClassName="hm-sub"
              formClassName="hm-signup-form"
              buttonClassName="hm-cta-btn"
              buttonIconSize={17}
            />
          </div>

          <div className="hm-visual liquid-card hm-card">
            <div className="hm-phone-shell">
              <PhoneFrame
                src={cover2}
                alt={copy.mobilePhoneAlt}
                frameClassName="hm-phone-frame"
                islandClassName="hm-phone-island"
                screenClassName="hm-phone-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
