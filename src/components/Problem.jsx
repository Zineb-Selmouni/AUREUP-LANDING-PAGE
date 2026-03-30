import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Bank, ChartPieSlice, MagnifyingGlass, WarningCircle } from '@phosphor-icons/react'

const PROBLEM_ICONS = [Bank, ChartPieSlice, MagnifyingGlass, WarningCircle]

export default function Problem({ copy }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.from('.problem-card-visual, .problem-point-card', {
      y: 28,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out',
      scrollTrigger: { trigger: ref.current, start: 'top 78%' },
    })
  }, { scope: ref })

  return (
    <section ref={ref} className="problem-section" id="problem">
      <div className="container">
        <div className="problem-layout">
          <div className="problem-copy-block">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2 className="section-title">{copy.title}</h2>
            <p className="sub problem-intro">{copy.intro}</p>
            <div className="problem-highlight liquid-card">{copy.highlight}</div>
          </div>

          <div className="problem-visual-grid">
            <div className="problem-card-visual liquid-card problem-card-main">
              <div className="problem-card-main-head">
                <span className="problem-card-caption">{copy.visual.caption}</span>
                <span className="problem-card-status">{copy.visual.status}</span>
              </div>

              <div className="problem-noise-chart" aria-hidden="true">
                <div className="problem-noise-grid" />

                <svg viewBox="0 0 360 220" className="problem-noise-svg" role="presentation">
                  <path
                    className="problem-noise-path problem-noise-path-a"
                    d="M10 160 C40 40, 95 180, 135 90 S220 20, 260 120 S320 190, 350 70"
                  />
                  <path
                    className="problem-noise-path problem-noise-path-b"
                    d="M10 70 C55 150, 92 30, 145 140 S215 210, 255 84 S320 18, 350 150"
                  />
                  <path
                    className="problem-noise-path problem-noise-path-c"
                    d="M10 118 C48 118, 92 52, 136 164 S218 146, 262 52 S320 110, 350 108"
                  />
                </svg>

                <div className="problem-noise-legend">
                  {copy.visual.legend.map((label, index) => (
                    <span key={label}>
                      <i className={`problem-noise-dot dot-${String.fromCharCode(97 + index)}`} />
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="problem-card-main-foot">
                <strong>{copy.visual.summaryTitle}</strong>
                <p>{copy.highlight}</p>
              </div>
            </div>

            <ul className="problem-points" aria-label={copy.ariaLabel}>
              {copy.items.map((text, index) => {
                const Icon = PROBLEM_ICONS[index]

                return (
                  <li key={text} className="problem-point-card liquid-card">
                    <span className="problem-point-icon" aria-hidden="true">
                      <Icon size={20} weight="fill" />
                    </span>
                    <span>{text}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
