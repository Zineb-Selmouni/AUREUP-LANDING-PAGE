import { ArrowRight } from '@phosphor-icons/react'

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function joinClassNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function scrollToWaitlist(email, onEmailChange) {
  const waitlistSection = document.getElementById('waitlist')
  if (!waitlistSection) return

  const trimmed = email.trim()
  if (trimmed) {
    onEmailChange(trimmed)
  }

  waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function PhoneFrame({
  src,
  alt,
  className,
  frameClassName = 'phone-frame',
  islandClassName = 'phone-island',
  screenClassName = 'phone-screen',
}) {
  return (
    <div className={joinClassNames(className)}>
      <div className={frameClassName}>
        <div className={islandClassName}>
          <span className="phone-island-speaker" />
          <span className="phone-island-camera" />
        </div>
        <div className="phone-btn phone-silent" />
        <div className="phone-btn phone-vol-up" />
        <div className="phone-btn phone-vol-down" />
        <div className="phone-btn phone-power" />
        <div className={screenClassName}>
          <img src={src} alt={alt} />
        </div>
      </div>
    </div>
  )
}

export function HeroCopyBlock({
  copy,
  waitlistCopy,
  email,
  onEmailChange,
  badgeClassName,
  titleClassName,
  subtitleClassName,
  actionsClassName,
  formClassName,
  buttonClassName,
  helperClassName,
  trustListClassName,
  buttonIconSize = 18,
}) {
  const signupForm = (
    <form
      className={joinClassNames('hero-signup-form', formClassName)}
      onSubmit={(event) => {
        event.preventDefault()
        scrollToWaitlist(email, onEmailChange)
      }}
    >
      <input
        type="email"
        className="hero-signup-input"
        placeholder={waitlistCopy.placeholder}
        value={email}
        onChange={(event) => onEmailChange(event.target.value)}
        autoComplete="email"
        dir="ltr"
        aria-label={waitlistCopy.placeholder}
      />

      <button
        type="submit"
        className={joinClassNames('btn', 'btn-primary', buttonClassName)}
        disabled={email.trim().length > 0 && !EMAIL_RE.test(email.trim())}
      >
        {waitlistCopy.cta}
        <ArrowRight size={buttonIconSize} weight="bold" />
      </button>
    </form>
  )

  return (
    <>
      <div className={joinClassNames('hero-badge', badgeClassName)}>
        <span className="hero-badge-dot" />
        {copy.badge}
      </div>

      <h1 className={titleClassName}>
        {copy.titleLines.map((line, lineIndex) => (
          <span key={lineIndex} className="hero-title-line">
            {line.map(({ text, accent }, wordIndex) => (
              <span key={`${text}-${wordIndex}`} className={accent ? 'grad-text' : ''}>
                {text}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p className={subtitleClassName}>{copy.subtitle}</p>

      {actionsClassName ? (
        <div className={actionsClassName}>{signupForm}</div>
      ) : signupForm}

      {copy.helper ? (
        <p className={joinClassNames('hero-helper', helperClassName)}>{copy.helper}</p>
      ) : null}

      {copy.trustItems?.length ? (
        <ul className={joinClassNames('hero-trust-list', trustListClassName)}>
          {copy.trustItems.map((item) => (
            <li key={item} className="hero-trust-item">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}
