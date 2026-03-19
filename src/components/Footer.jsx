import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { logoImg, logoImgLight } from '../images.js'

export default function Footer({ theme, copy }) {
  const ref = useRef(null)
  const currentLogo = theme === 'light' ? logoImgLight : logoImg

  useGSAP(() => {
    gsap.from('footer', {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: 'footer', start: 'top 92%' },
    })
  }, { scope: ref })

  return (
    <footer ref={ref}>
      <div className="container">
        <div className="foot-grid foot-grid-minimal">
          <div className="foot-brand">
            <img src={currentLogo} alt="Aure Up" />
            <p>
              {copy.description}
            </p>
          </div>
        </div>

        <div className="foot-bottom">
          <p>{copy.madeBy}</p>
        </div>
      </div>
    </footer>
  )
}
