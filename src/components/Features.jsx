import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { BookOpenText, Brain, ChartLineUp, HouseLine, Target } from '@phosphor-icons/react'

const FEATURE_ICONS = [ChartLineUp, BookOpenText, Brain, Target]

function FeatureVisual({ index }) {
  if (index === 0) {
    return (
      <div className="feature-visual feature-visual-transactions" aria-hidden="true">
        {[
          { label: 'Carrefour', meta: 'Groceries', amount: '-340 MAD' },
          { label: 'Netflix', meta: 'Subscriptions', amount: '-119 MAD' },
          { label: 'Taxi', meta: 'Transport', amount: '-85 MAD' },
        ].map((item) => (
          <div key={item.label} className="feature-transaction-row">
            <div className="feature-transaction-left">
              <span className="feature-transaction-dot" />
              <div>
                <strong>{item.label}</strong>
                <span>{item.meta}</span>
              </div>
            </div>
            <strong>{item.amount}</strong>
          </div>
        ))}
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="feature-visual feature-visual-learning" aria-hidden="true">
        <div className="feature-learning-card">
          <strong>Budget basics</strong>
          <span>8 min lesson</span>
        </div>
        <div className="feature-learning-card active">
          <strong>Saving mindset</strong>
          <span>Interactive path</span>
        </div>
      </div>
    )
  }

  if (index === 2) {
    return (
      <div className="feature-visual feature-visual-ai" aria-hidden="true">
        <div className="feature-ai-bubble">
          Spending is lower this week. You can safely move more toward savings.
        </div>
        <div className="feature-ai-tags">
          <span>Dining -18%</span>
          <span>Savings on track</span>
        </div>
      </div>
    )
  }

  return (
    <div className="feature-visual feature-visual-goal" aria-hidden="true">
      <div className="feature-goal-summary">
        <HouseLine size={18} weight="fill" />
        <div>
          <strong>Emergency fund</strong>
          <span>7,300 MAD of 10,000 MAD</span>
        </div>
      </div>
      <div className="feature-goal-progress">
        <span className="feature-goal-bar" />
        <strong>73%</strong>
      </div>
    </div>
  )
}

export default function Features({ copy }) {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.feature-card', {
      y: 36,
      opacity: 0,
      stagger: 0.12,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 76%' },
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="features" id="features">
      <div className="container">
        <div className="features-header tc">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title">{copy.title}</h2>
          <p className="sub">{copy.subtitle}</p>
        </div>

        <div className="feature-grid">
          {copy.items.map((feature, index) => {
            const Icon = FEATURE_ICONS[index]

            return (
              <article key={feature.title} className="feature-card liquid-card">
                <div className="feature-card-head">
                  <span className="feature-icon">
                    <Icon size={22} weight="fill" />
                  </span>
                  <div className="feature-card-copy">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
                <FeatureVisual index={index} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
