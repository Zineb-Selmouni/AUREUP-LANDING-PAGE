import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { DeviceMobile, GlobeHemisphereWest, ShieldCheck } from '@phosphor-icons/react'
import { logoImg, logoImgLight } from '../images.js'

const FOOTER_ICONS = [DeviceMobile, GlobeHemisphereWest, ShieldCheck]

export default function Footer({ theme, copy }) {
  const ref = useRef(null)
  const currentLogo = theme === 'light' ? logoImgLight : logoImg

  useGSAP(() => {
    gsap.from('.footer-panel', {
      y: 26,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 90%' },
    })
  }, { scope: ref })

  return (
    <footer ref={ref} className="site-footer">
      <div className="container">
        <div className="footer-panel liquid-card">
          <div className="footer-brand">
            <img src={currentLogo} alt="Aure Up" />
            <p>{copy.description}</p>
          </div>

          <div className="footer-points">
            {copy.points.map((point, index) => {
              const Icon = FOOTER_ICONS[index]

              return (
                <div key={point} className="footer-point">
                  <span className="footer-point-icon">
                    <Icon size={18} weight="fill" />
                  </span>
                  <span>{point}</span>
                </div>
              )
            })}
          </div>

          <div className="foot-bottom">
            <p>{copy.madeBy}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
