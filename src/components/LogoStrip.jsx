import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const LOGOS = ['Acme Corp', 'Nexus', 'Vertexo', 'Pinnacle', 'Solara', 'Orbix', 'Synapse', 'Crestline']

export default function LogoStrip() {
  const outerRef = useRef(null)
  const trackRef = useRef(null)

  useGSAP(() => {
    const track = trackRef.current
    // Width of one set of logos (we duplicated them for seamless loop)
    const totalW = track.scrollWidth / 2

    gsap.to(track, {
      x: -totalW,
      duration: 22,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalW),
      },
    })
  }, { scope: outerRef })

  // Duplicate for seamless loop
  const items = [...LOGOS, ...LOGOS]

  return (
    <div className="logo-strip">
      <div className="container">
        <p className="strip-label">Trusted by teams at</p>
      </div>
      <div ref={outerRef} className="strip-outer">
        <div ref={trackRef} className="strip-track">
          {items.map((name, i) => (
            <span key={i} className="strip-item">
              <span className="strip-dot" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
