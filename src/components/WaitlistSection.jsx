import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Waitlist from './Waitlist.jsx'
import coinImg  from '../../assets/coin.png'

gsap.registerPlugin(ScrollTrigger)

export default function WaitlistSection() {
  const outerRef = useRef(null)

  useGSAP(() => {
    /* Coin slides in from the left as the section enters */
    gsap.from('.wls-coin', {
      x: -80, opacity: 0, duration: 1.1, ease: 'power3.out',
      scrollTrigger: {
        trigger: outerRef.current,
        start:   'top 75%',
      },
    })
  }, { scope: outerRef })

  return (
    <div ref={outerRef} className="wls-outer" id="waitlist">
      <div className="container">
        <div className="wls-layout">

          {/* Left — floating coin */}
          <div className="wls-coin-col">
            <div className="wls-coin">
              <div className="wls-coin-float">
                <div className="wls-coin-glow" />
                <img src={coinImg} alt="Aure Up gold coin" className="wls-coin-img" />
              </div>
              <div className="wls-coin-shadow" />
            </div>
          </div>

          {/* Right — waitlist form */}
          <div className="wls-form-col">
            <Waitlist />
          </div>

        </div>
      </div>
    </div>
  )
}
