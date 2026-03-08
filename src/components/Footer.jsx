import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { logoImg } from '../images.js'

const LINKS = {
  Product: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About Us', 'Blog', 'Careers', 'Contact'],
  Legal:   ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Security'],
}

export default function Footer() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('footer', {
      y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: 'footer', start: 'top 92%' },
    })
  }, { scope: ref })

  return (
    <footer ref={ref}>
      <div className="container">
        <div className="foot-grid">

          <div className="foot-brand">
            <img src={logoImg} alt="Aure Up" />
            <p>
              Empowering achievers worldwide to reach their fullest potential through
              smart, beautifully crafted tools.
            </p>
            <div className="foot-socials">
              {[
                { label: 'X',  char: '𝕏' },
                { label: 'in', char: 'in' },
                { label: 'fb', char: 'f' },
                { label: 'ig', char: '◎' },
              ].map(s => (
                <a key={s.label} href="#" className="soc-icon" aria-label={s.label}>
                  {s.char}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="foot-col">
              <h5>{heading}</h5>
              <ul>
                {items.map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="foot-bottom">
          <p>© 2026 Aure Up. All rights reserved.</p>
          <div className="foot-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
