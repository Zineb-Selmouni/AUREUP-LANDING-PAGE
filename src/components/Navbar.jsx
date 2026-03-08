import { useRef, useState, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { logoImg } from '../images.js'

export default function Navbar() {
  const navRef   = useRef(null)
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  // Slide in from top on mount
  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.1,
    })
  }, { scope: navRef })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Features',    href: '#features' },
    { label: 'How It Works', href: '#how'     },
    { label: 'Gallery',     href: '#gallery'  },
    { label: 'Reviews',     href: '#reviews'  },
  ]

  const handleLink = () => setMenuOpen(false)

  return (
    <nav ref={navRef} className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <img src={logoImg} alt="Aure Up" />
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <div className="nav-cta">
            <a href="#cta" className="btn btn-primary">Get Started Free</a>
          </div>

          <div
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={handleLink}>{l.label}</a>
        ))}
        <a href="#cta" className="btn btn-primary" onClick={handleLink}>
          Get Started Free
        </a>
      </div>
    </nav>
  )
}
