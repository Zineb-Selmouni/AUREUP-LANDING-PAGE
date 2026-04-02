import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { DeviceMobile, FacebookLogo, GlobeHemisphereWest, InstagramLogo, LinkedinLogo, ShieldCheck, TiktokLogo, XLogo } from '@phosphor-icons/react'
import { logoImg, logoImgLight } from '../images.js'

const FOOTER_ICONS = [DeviceMobile, GlobeHemisphereWest, ShieldCheck]

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#', Icon: LinkedinLogo },
  { label: 'Instagram', href: '#', Icon: InstagramLogo },
  { label: 'Facebook', href: '#', Icon: FacebookLogo },
  { label: 'TikTok', href: '#', Icon: TiktokLogo },
  { label: 'X', href: '#', Icon: XLogo },
]

export default function Footer({ theme, copy }) {
  const ref = useRef(null)
  const currentLogo = theme === 'light' ? logoImgLight : logoImg

  useGSAP(() => {
    gsap.from('.footer-panel', {
      y: 22,
      opacity: 0,
      duration: 0.65,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 90%' },
    })
  }, { scope: ref })

  return (
    <footer ref={ref} className="site-footer">
      <div className="container">
        <div className="footer-panel liquid-card">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={currentLogo} alt="Aure Up" />
              <p>{copy.description}</p>

              <div className="footer-social" aria-label="Social media links">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="footer-social-link"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={17} weight="fill" />
                  </a>
                ))}
              </div>
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
          </div>

          <div className="foot-bottom">
            <p>{copy.madeBy}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
