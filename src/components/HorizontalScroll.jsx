import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero      from './Hero.jsx'
import LogoStrip from './LogoStrip.jsx'
import Features  from './Features.jsx'
import Waitlist  from './Waitlist.jsx'
import coinImg   from '../../assets/coin.png'

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalScroll() {
  const wrapperRef  = useRef(null)
  const trackRef    = useRef(null)
  const progressRef = useRef(null)
  const coinPinRef  = useRef(null)

  useGSAP(() => {
    const track  = trackRef.current
    const panels = 3

    gsap.set('.feat-card', { y: 52, opacity: 0 })

    /* Cache this so onUpdate doesn't recompute each frame */
    let rightOffset = 0
    const calcRightOffset = () => {
      rightOffset = window.innerWidth * 0.87 - 380
    }
    calcRightOffset()

    let featuresAnimated = false
    let waitlistAnimated = false

    /* ═══════════════════════════════════════════════════════════
       HORIZONTAL SCROLL
       ─────────────────────────────────────────────────────────
       • No Lenis — ScrollTrigger handles everything natively.
         Lenis + scrub + snap = three systems fighting each other.

       • scrub: 1  → 1 s of smooth lag. Feels like momentum
         without any external library.

       • snap delay: 0.15 → waits for trackpad inertia to settle
         before jumping. Prevents the "snap fights scroll" feel.

       • snap ease: power1.inOut → gentle, not mechanical.
    ═══════════════════════════════════════════════════════════ */
    gsap.to(track, {
      x:    () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger:             wrapperRef.current,
        pin:                 true,
        scrub:               1,
        end:                 () => '+=' + (track.scrollWidth - window.innerWidth),
        invalidateOnRefresh: true,
        snap: {
          snapTo:   1 / (panels - 1),
          duration: { min: 0.4, max: 0.6 },
          ease:     'power1.inOut',
          delay:    0.15,
        },
        onRefresh: calcRightOffset,
        onUpdate(self) {
          const p = self.progress

          /* Progress bar */
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${p})`
          }

          /* Coin — opacity + position only, no rotation
             • Fades in:  progress 0.35 → 0.55
             • Slides:    right side (panel 2) → left side (panel 3)
               between progress 0.55 → 0.80 with ease-in-out         */
          if (coinPinRef.current) {
            const entT = Math.max(0, Math.min(1, (p - 0.35) / 0.2))

            const raw = Math.max(0, Math.min(1, (p - 0.55) / 0.25))
            const posT = raw < 0.5
              ? 2 * raw * raw
              : 1 - Math.pow(-2 * raw + 2, 2) / 2
            const xOffset = rightOffset * (1 - posT)

            coinPinRef.current.style.opacity   = entT
            coinPinRef.current.style.transform =
              `translateX(${xOffset}px) scale(${0.85 + entT * 0.15})`
          }

          /* Feature cards entrance — fires once */
          if (!featuresAnimated && p > 0.22) {
            featuresAnimated = true
            gsap.from('.features-header', {
              y: 44, opacity: 0, duration: 0.9, ease: 'power3.out',
            })
            gsap.to('.feat-card', {
              y: 0, opacity: 1, duration: 0.7, stagger: 0.09,
              ease: 'power3.out', clearProps: 'transform,opacity',
            })
          }

          /* Waitlist entrance — fires once */
          if (!waitlistAnimated && p > 0.62) {
            waitlistAnimated = true
            gsap.from('.wl-box', {
              y: 48, opacity: 0, scale: 0.96,
              duration: 1.1, ease: 'power3.out',
            })
            gsap.from(
              ['.wl-eyebrow','.wl-title','.wl-sub',
               '.wl-form-wrap','.wl-privacy','.wl-proof'],
              { y: 26, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
            )
          }
        },
      },
    })

  }, { scope: wrapperRef })

  return (
    <div ref={wrapperRef} className="hs-wrapper">

      <div className="hs-progress-track">
        <div ref={progressRef} className="hs-progress-fill" />
      </div>

      {/* Pinned coin — position:fixed keeps it viewport-locked */}
      <div className="hs-coin-pin" ref={coinPinRef}>
        <div className="hs-coin-float">
          <div className="hs-coin-glow" />
          <img src={coinImg} alt="Aure Up gold coin" className="hs-coin-img" />
        </div>
        <div className="hs-coin-shadow" />
      </div>

      {/* Track slides left as user scrolls */}
      <div ref={trackRef} className="hs-track">

        <div className="hs-panel hs-panel-1">
          <Hero />
          <LogoStrip />
        </div>

        <div className="hs-panel hs-panel-2">
          <div className="p2-orb p2-orb-1" />
          <div className="p2-orb p2-orb-2" />
          <div className="p2-orb p2-orb-3" />
          <Features />
        </div>

        <div className="hs-panel hs-panel-3">
          <Waitlist />
        </div>

      </div>
    </div>
  )
}
