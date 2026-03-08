import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/* ── Spawn a single falling coin at viewport (x, y) ── */
function spawnCoin(x, y, opts = {}) {
  const el = document.createElement('div')
  el.className = 'trail-coin'
  document.body.appendChild(el)

  const size  = opts.size  ?? gsap.utils.random(12, 26)
  const dur   = opts.dur   ?? gsap.utils.random(0.85, 1.75)
  const fallY = opts.fallY ?? gsap.utils.random(70, 170)
  const driftX = opts.driftX ?? gsap.utils.random(-55, 55)
  const dir   = Math.random() > 0.5 ? 1 : -1

  gsap.set(el, {
    width:    size,
    height:   size,
    x:        x - size / 2,
    y:        y - size / 2,
    rotation: gsap.utils.random(-50, 50),
    scale:    gsap.utils.random(0.65, 1.05),
    opacity:  gsap.utils.random(0.72, 1),
  })

  gsap.to(el, {
    y:        `+=${fallY}`,
    x:        `+=${driftX}`,
    rotation: `+=${gsap.utils.random(220, 560) * dir}`,
    opacity:  0,
    scale:    0.04,
    duration: dur,
    ease:     'power2.in',
    onComplete: () => el.remove(),
  })
}

/* ── Burst: radial explosion of coins on click ── */
function burstCoins(x, y) {
  const count = 14
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    const r     = gsap.utils.random(18, 60)
    spawnCoin(
      x + Math.cos(angle) * r * 0.35,
      y + Math.sin(angle) * r * 0.35,
      {
        size:   gsap.utils.random(14, 28),
        dur:    gsap.utils.random(0.9, 1.8),
        fallY:  gsap.utils.random(80, 200),
        driftX: Math.cos(angle) * gsap.utils.random(30, 90),
      }
    )
  }
}

export default function CoinCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor   = cursorRef.current
    let mouseX     = -400
    let mouseY     = -400
    let isOverHero = false
    let lastSpawnX = 0
    let lastSpawnY = 0
    let lastTime   = 0

    /* Center the coin on the pointer; smooth follow */
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.1,  ease: 'power2.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.12, ease: 'power2.out' })

    const getHero  = () => document.getElementById('home')
    const overHero = (x, y) => {
      const r = getHero()?.getBoundingClientRect()
      return r && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom
    }

    /* ── Mouse move ── */
    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      const wasOver = isOverHero
      isOverHero = overHero(mouseX, mouseY)

      xTo(mouseX)
      yTo(mouseY)

      /* Fade in / out as cursor enters / leaves hero */
      if (isOverHero !== wasOver) {
        gsap.to(cursor, {
          opacity:  isOverHero ? 1 : 0,
          scale:    isOverHero ? 1 : 0.35,
          duration: 0.32,
          ease:     'power2.out',
        })
        const hero = getHero()
        if (hero) hero.style.cursor = isOverHero ? 'none' : ''
      }

      if (!isOverHero) return

      /* Throttle by distance + time */
      const now  = Date.now()
      const dist = Math.hypot(mouseX - lastSpawnX, mouseY - lastSpawnY)
      if (dist > 9 && now - lastTime > 38) {
        spawnCoin(mouseX, mouseY)
        lastSpawnX = mouseX
        lastSpawnY = mouseY
        lastTime   = now
      }
    }

    /* ── Scroll — a couple of extra coins while cursor is in hero ── */
    const onScroll = () => {
      if (!isOverHero) return
      spawnCoin(mouseX + gsap.utils.random(-18, 18), mouseY + gsap.utils.random(-12, 12))
      spawnCoin(mouseX + gsap.utils.random(-18, 18), mouseY + gsap.utils.random(-12, 12))
    }

    /* ── Click burst ── */
    const onClick = (e) => {
      if (!overHero(e.clientX, e.clientY)) return
      burstCoins(e.clientX, e.clientY)
      /* Elastic bounce on the cursor */
      gsap.fromTo(cursor,
        { scale: 1.55 },
        { scale: 1, duration: 0.55, ease: 'elastic.out(1, 0.42)' }
      )
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('click',     onClick)
    window.addEventListener('scroll',      onScroll, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('click',     onClick)
      window.removeEventListener('scroll',      onScroll)
      const hero = getHero()
      if (hero) hero.style.cursor = ''
    }
  }, [])

  return (
    <div ref={cursorRef} className="coin-cursor" style={{ opacity: 0 }}>
      <span className="coin-cursor-label">$</span>
    </div>
  )
}
