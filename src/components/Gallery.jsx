import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cover2, cover3, cover4, blueBackground, darkBackground, blueIcon, darkIcon } from '../images.js'

const ITEMS = [
  { src: cover2,          cls: 'g1', alt: 'Aure Up' },
  { src: cover3,          cls: 'g2', alt: 'Aure Up' },
  { src: cover4,          cls: 'g3', alt: 'Aure Up' },
  { src: blueBackground,  cls: 'g4', alt: 'Aure Up Blue' },
  { src: darkBackground,  cls: 'g5', alt: 'Aure Up Dark' },
  { src: blueIcon,        cls: 'g6', alt: 'Aure Up Icon Blue' },
  { src: darkIcon,        cls: 'g7', alt: 'Aure Up Icon Dark' },
]

export default function Gallery() {
  const ref = useRef(null)

  useGSAP(() => {
    // Header
    gsap.from('.gallery-header', {
      y: 36, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.gallery-header', start: 'top 82%' },
    })

    // Grid items stagger
    gsap.from('.g-item', {
      y: 60, opacity: 0, scale: 0.94,
      duration: 0.85, stagger: { amount: 0.7, from: 'start' },
      ease: 'power3.out',
      scrollTrigger: { trigger: '.g-grid', start: 'top 82%' },
    })

    // Parallax on each image
    document.querySelectorAll('.g-item img').forEach(img => {
      gsap.to(img, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header tc">
          <span className="eyebrow">Brand Showcase</span>
          <h2 className="section-title">
            Built for the <span className="grad-text">Modern Achiever</span>
          </h2>
          <p className="sub">
            A premium experience across every touchpoint — crafted with precision, powered by purpose.
          </p>
        </div>

        <div className="g-grid">
          {ITEMS.map((item, i) => (
            <div key={i} className={`g-item ${item.cls}`}>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
