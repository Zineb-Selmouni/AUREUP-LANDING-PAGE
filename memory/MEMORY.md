# Aure Up Landing Page — Project Memory

## Stack
- Vite 5 + React 18 + GSAP 3.12 + @gsap/react 2.1

## Brand Colors
- Royal Blue: #09006E
- Deep Indigo: #316CFF
- Dark Navy: #050D21 (background)
- Gradient: linear-gradient(135deg, #316CFF 0%, #09006E 100%)

## Key File Paths
- Entry: `index.html` → `src/main.jsx`
- Global CSS: `src/index.css` (all styles in one file, BEM-like naming)
- Image registry: `src/images.js` (all asset imports centralised here)
- Components: `src/components/` (10 components)

## Asset Strategy
- Images imported via ES6 `import` in `src/images.js` — Vite handles spaces in paths fine
- Filenames with spaces (e.g. `Social Cover (1).jpg`) work as named imports
- gsap.registerPlugin(ScrollTrigger) called once in `src/main.jsx`

## GSAP Pattern Used
- `useGSAP` hook from `@gsap/react` with `scope` ref for all animations
- ScrollTrigger for scroll-based reveals
- `ScrollTrigger.batch()` for card stagger animations
- Continuous animations (floating, marquee) run outside timeline

## Sections
Navbar → Hero → LogoStrip (infinite marquee) → Features → HowItWorks → Gallery → Stats → Testimonials → CTA → Footer

## Dev Server
`npm run dev` → http://localhost:5173
`npm run build` → dist/ (verified working, build in ~661ms)

## User Preferences
- Wants React + GSAP for the landing page (not plain HTML)
- Wants beautiful, premium animations
