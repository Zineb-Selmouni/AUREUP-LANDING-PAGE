import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { CaretDown, GlobeHemisphereWest, List, MoonStars, SunDim, X } from '@phosphor-icons/react'
import { logoImg, logoImgLight } from '../images.js'
import { LANGUAGES } from '../i18n.js'

export default function Navbar({
  theme,
  language,
  copy,
  menuCtaLabel,
  onLanguageChange,
  onToggleTheme,
}) {
  const navRef = useRef(null)
  const languageRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const isDarkMode = theme !== 'light'
  const currentLogo = theme === 'light' ? logoImgLight : logoImg
  const themeLabel = isDarkMode ? copy.switchThemeToLight : copy.switchThemeToDark

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
  }, { scope: navRef })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isLanguageOpen) return undefined

    const handlePointerDown = (event) => {
      if (!languageRef.current?.contains(event.target)) {
        setIsLanguageOpen(false)
      }
    }

    window.addEventListener('mousedown', handlePointerDown)
    return () => window.removeEventListener('mousedown', handlePointerDown)
  }, [isLanguageOpen])

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleCloseMenu = () => {
    setMenuOpen(false)
    setIsLanguageOpen(false)
  }

  return (
    <nav ref={navRef} className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-shell">
          <a href="#home" className="nav-logo" onClick={handleCloseMenu}>
            <img src={currentLogo} alt="Aure Up" />
          </a>

          <ul className="nav-links">
            {copy.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <div ref={languageRef} className={`lang-dropdown${isLanguageOpen ? ' open' : ''}`}>
              <button
                type="button"
                className="lang-dropdown-trigger"
                aria-haspopup="menu"
                aria-expanded={isLanguageOpen}
                aria-label={copy.languageSelector}
                onClick={() => setIsLanguageOpen((value) => !value)}
              >
                <GlobeHemisphereWest size={15} weight="regular" />
                <span>{LANGUAGES.find((option) => option.id === language)?.label}</span>
                <CaretDown size={14} weight="bold" />
              </button>

              <div className="lang-dropdown-menu" role="menu" aria-label={copy.languageSelector}>
                {LANGUAGES.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    className={`lang-dropdown-option${language === option.id ? ' active' : ''}`}
                    role="menuitemradio"
                    aria-checked={language === option.id}
                    onClick={() => {
                      onLanguageChange(option.id)
                      setIsLanguageOpen(false)
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className={`theme-toggle${isDarkMode ? ' active' : ''}`}
              aria-pressed={isDarkMode}
              aria-label={themeLabel}
              onClick={onToggleTheme}
            >
              <MoonStars size={14} weight="fill" className="theme-toggle-moon" />
              <SunDim size={14} weight="regular" className="theme-toggle-sun" />
              <span className="theme-toggle-thumb" />
            </button>

            <a href="#waitlist" className="btn btn-primary nav-join-btn">
              {menuCtaLabel}
            </a>
          </div>

          <button
            type="button"
            className="hamburger"
            aria-label={copy.toggleMenu}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((value) => !value)
              setIsLanguageOpen(false)
            }}
          >
            {menuOpen ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-panel">
          <div className="mobile-menu-links">
            {copy.links.map((link) => (
              <a key={link.href} href={link.href} onClick={handleCloseMenu}>{link.label}</a>
            ))}
          </div>

          <div className="mobile-menu-controls">
            <div className="mobile-language-list" role="group" aria-label={copy.languageSelector}>
              {LANGUAGES.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`mobile-language-chip${language === option.id ? ' active' : ''}`}
                  aria-pressed={language === option.id}
                  onClick={() => onLanguageChange(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="mobile-theme-button"
              aria-label={themeLabel}
              onClick={onToggleTheme}
            >
              {themeLabel}
            </button>
          </div>

          <a href="#waitlist" className="btn btn-primary mobile-menu-cta" onClick={handleCloseMenu}>
            {menuCtaLabel}
          </a>
        </div>
      </div>
    </nav>
  )
}
