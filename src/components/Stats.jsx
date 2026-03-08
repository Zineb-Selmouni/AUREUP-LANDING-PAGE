import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const STATS = [
  { target: 50000,    suffix: '+', label: 'Happy Users', format: 'K' },
  { target: 1000000,  suffix: '+', label: 'Goals Completed', format: 'M' },
  { target: 4.9,      suffix: '★', label: 'App Store Rating', format: 'float' },
  { target: 99,       suffix: '%', label: 'Uptime SLA', format: 'int' },
]

function formatVal(val, fmt, suffix) {
  if (fmt === 'M')     return (val / 1e6).toFixed(1) + 'M' + suffix
  if (fmt === 'K')     return Math.round(val / 1000) + 'K' + suffix
  if (fmt === 'float') return val.toFixed(1) + suffix
  return Math.round(val) + suffix
}

export default function Stats() {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.stats-wrap', {
      y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.stats-wrap', start: 'top 82%' },
    })

    document.querySelectorAll('.stat-big[data-target]').forEach(el => {
      const target = parseFloat(el.dataset.target)
      const fmt    = el.dataset.fmt
      const suffix = el.dataset.suffix

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          const obj = { val: 0 }
          gsap.to(obj, {
            val: target,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate() {
              el.textContent = formatVal(obj.val, fmt, suffix)
            },
            onComplete() {
              el.textContent = formatVal(target, fmt, suffix)
            },
          })
        },
      })
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="stats">
      <div className="container">
        <div className="stats-wrap">
          {STATS.map(s => (
            <div key={s.label} className="stat-box">
              <span
                className="stat-big"
                data-target={s.target}
                data-fmt={s.format}
                data-suffix={s.suffix}
              >
                0{s.suffix}
              </span>
              <p className="stat-desc">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
