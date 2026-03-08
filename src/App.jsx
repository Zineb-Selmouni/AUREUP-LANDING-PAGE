import Navbar          from './components/Navbar.jsx'
import Hero            from './components/Hero.jsx'
import HeroMobile      from './components/HeroMobile.jsx'
import LogoStrip       from './components/LogoStrip.jsx'
import Features        from './components/Features.jsx'
import Stats           from './components/Stats.jsx'
import Testimonials    from './components/Testimonials.jsx'
import CTA             from './components/CTA.jsx'
import Footer          from './components/Footer.jsx'
import CoinCursor      from './components/CoinCursor.jsx'

export default function App() {
  return (
    <>
      <CoinCursor />
      <Navbar />

      <div className="desktop-only"><Hero /></div>
      <div className="mobile-only"><HeroMobile /></div>

      <LogoStrip />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />

      <Footer />
    </>
  )
}
