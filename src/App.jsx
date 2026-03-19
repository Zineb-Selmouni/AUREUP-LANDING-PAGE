import { useEffect, useState } from 'react'
import Navbar       from './components/Navbar.jsx'
import Hero         from './components/Hero.jsx'
import HeroMobile   from './components/HeroMobile.jsx'
import Problem      from './components/Problem.jsx'
import Features     from './components/Features.jsx'
import HowItWorks   from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import Waitlist     from './components/Waitlist.jsx'
import FAQ          from './components/FAQ.jsx'
import Footer       from './components/Footer.jsx'
import { applyLanguage, getCopy, getStoredLanguage, LANGUAGE_STORAGE_KEY } from './i18n.js'
import { applyTheme, getStoredTheme, THEME_STORAGE_KEY, THEMES } from './theme.js'

export default function App() {
  const [theme, setTheme] = useState(getStoredTheme)
  const [language, setLanguage] = useState(getStoredLanguage)
  const copy = getCopy(language)

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    applyLanguage(language)
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  const toggleTheme = () => {
    setTheme((currentTheme) => (
      currentTheme === THEMES.dark ? THEMES.light : THEMES.dark
    ))
  }

  return (
    <>
      <Navbar
        theme={theme}
        language={language}
        copy={copy.nav}
        menuCtaLabel={copy.waitlist.cta}
        onLanguageChange={setLanguage}
        onToggleTheme={toggleTheme}
      />

      <div className="desktop-only"><Hero copy={copy.hero} /></div>
      <div className="mobile-only"><HeroMobile copy={copy.hero} /></div>

      <Problem copy={copy.problem} />
      <Features copy={copy.features} />
      <HowItWorks copy={copy.how} />
      <Testimonials copy={copy.testimonials} />
      <Waitlist copy={copy.waitlist} />
      <FAQ copy={copy.faq} />
      <Footer theme={theme} copy={copy.footer} />
    </>
  )
}
