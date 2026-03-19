import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { CaretDown, GlobeHemisphereWest, MoonStars, SunDim } from '@phosphor-icons/react'
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
      y: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.1,
    })
  }, { scope: navRef })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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
    if (!menuOpen) return undefined

    const media = window.matchMedia('(min-width: 768px)')
    const handleChange = (event) => {
      if (event.matches) {
        setMenuOpen(false)
      }
    }

    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [menuOpen])

  useEffect(() => {
    if (typeof document === 'undefined') return undefined

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
        <div className="nav-inner">
          <a href="#home" className="nav-logo">
            <img src={currentLogo} alt="Aure Up" />
          </a>

          <ul className="nav-links">
            {copy.links.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
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
                <GlobeHemisphereWest size={15} weight="regular" className="lang-dropdown-icon" aria-hidden="true" />
                <span>{LANGUAGES.find((option) => option.id === language)?.label}</span>
                <CaretDown size={14} weight="bold" className="lang-dropdown-caret" aria-hidden="true" />
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
              <span className="theme-toggle-track">
                <MoonStars size={14} weight="fill" className="theme-toggle-moon" aria-hidden="true" />
                <SunDim size={14} weight="regular" className="theme-toggle-sun" aria-hidden="true" />
                <span className="theme-toggle-thumb" />
              </span>
            </button>
          </div>

          <button
            type="button"
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label={copy.toggleMenu}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((value) => !value)
              setIsLanguageOpen(false)
            }}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        onClick={handleCloseMenu}
      >
        <div className="mobile-menu-panel" onClick={(event) => event.stopPropagation()}>
          <div className="mobile-menu-links">
            {copy.links.map((link) => (
              <a key={link.href} href={link.href} onClick={handleCloseMenu}>{link.label}</a>
            ))}
          </div>

          <div className="mobile-menu-language">
            <span className="mobile-menu-label">{copy.languageSelector}</span>
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
          </div>

          <button
            type="button"
            className="mobile-theme-button"
            aria-label={themeLabel}
            onClick={onToggleTheme}
          >
            <span className="mobile-menu-label">{themeLabel}</span>
            <span className="theme-toggle-track">
              <MoonStars size={14} weight="fill" className="theme-toggle-moon" aria-hidden="true" />
              <SunDim size={14} weight="regular" className="theme-toggle-sun" aria-hidden="true" />
              <span className="theme-toggle-thumb" />
            </span>
          </button>

          <a href="#waitlist" className="btn btn-primary mobile-menu-cta" onClick={handleCloseMenu}>
            {menuCtaLabel}
          </a>
        </div>
      </div>
    </nav>
  )
}
