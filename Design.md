# Aure Up Landing Page Design Standards

This document translates the provided Aure Up design-system brief into an implementation-ready standard for the landing page. It is the reference for all future landing-page edits.

## Purpose

The landing page must feel premium, modern, trustworthy, mobile-first, and visually distinctive without becoming generic SaaS, flashy, noisy, childish, crypto-like, gaming-like, or overloaded with effects.

Emotional direction:
- calm confidence
- intelligent clarity
- premium usefulness
- modern financial control

Creative expression:
- editorial finance meets contemporary product intelligence

## North Star

The visual north star is **Midnight Obsidian**:
- dark, cinematic, editorial-first
- deep navy surfaces instead of pure black
- electric blue emphasis
- restrained cyan technical highlights
- soft atmospheric depth through tone, spacing, and contrast

The page should feel sovereign, fluid, precise, and premium.

## Core Principles

1. Clarity before spectacle
2. Premium through restraint
3. Depth through tone, not borders
4. Soft interaction, sharp execution
5. Mobile-first hierarchy
6. Financial trustworthiness above visual drama

## Color System

Primary colors:
- Electric Blue: `#316CFF`
- Royal Navy: `#09006E`
- Obsidian Navy: `#050D21`
- Technical Cyan: `#00DAF3`

Dark neutrals:
- Surface High: `#0A1327`
- Surface Base: `#0B1630`
- Surface Low: `#08101F`
- Primary text: `#F6F8FF`
- Secondary text: `rgba(246, 248, 255, 0.72)`
- Tertiary text: `rgba(246, 248, 255, 0.52)`
- Outline subtle: `rgba(255, 255, 255, 0.08)`

Rules:
- use `#050D21` as the dark base, not pure black
- use blue for emphasis, not decoration
- use cyan sparingly for data/status details
- avoid hard section borders as the main separation tool
- never rely on gradient text for normal content

## Typography

Typography stack:
- Headlines: `Plus Jakarta Sans`
- Body/UI: `Manrope`
- Fallback: `Inter`, `system-ui`, sans-serif

Usage:
- headlines should feel decisive and premium
- body text should feel calm and readable
- section labels should be uppercase and disciplined
- italics are optional only in rare editorial moments, never in utility UI

## Scale

Desktop:
- Display: `72px` to `88px`
- H1: `48px`
- H2: `36px`
- H3: `28px`
- Body large: `20px`
- Body base: `18px`
- Helper: `14px` to `15px`
- Eyebrow: `12px`

Mobile:
- Display: `44px` to `56px`
- H1: `34px` to `40px`
- H2: `28px` to `32px`
- H3: `22px` to `24px`
- Body large: `18px`
- Body base: `16px`
- Helper: `13px` to `14px`
- Eyebrow: `11px` to `12px`

## Spacing

Token scale:
- `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96`

Guidance:
- desktop card padding: `24px` to `32px`
- mobile card padding: `20px` to `24px`
- desktop section padding: `96px` to `144px`
- mobile section padding: `56px` to `80px`

## Radius

Recommended radius hierarchy:
- chips/icons: `14px` to `18px`
- inputs/small controls: `18px` to `22px`
- standard cards: `24px` to `28px`
- featured callouts: `32px`
- buttons: pill or near-pill

## Surfaces and Depth

Use layered tonal surfaces instead of flat blocks.

Recommended hierarchy:
- page base: Obsidian Navy
- section variants: darker/lighter navy steps
- elevated cards: low-opacity light overlays on dark surfaces
- featured cards: richer tonal or gradient treatment

Use shadows for atmosphere, not heaviness:
- large object: `0 40px 100px -20px rgba(0, 0, 0, 0.50)`
- standard card: `0 20px 50px -24px rgba(0, 0, 0, 0.38)`
- small chip: `0 12px 32px -18px rgba(0, 0, 0, 0.32)`

## Glassmorphism Rules

Glass is allowed only in controlled contexts:
- navbar / controls
- hero support surfaces
- small contextual chips
- special CTA surfaces

Avoid glass for:
- long text cards
- FAQ blocks
- dense feature grids
- information-heavy content

## Component Standards

### Hero
- badge or micro-label
- strong headline
- concise supporting paragraph
- primary CTA
- one support visual object

Rules:
- use only one or two notable visual effects
- keep supporting copy digestible
- the app mockup must support the story, not dominate it

### Problem
- grounded and editorial
- pain points easy to scan
- never wall-of-text heavy

### Features
- cards may vary in hierarchy and rhythm
- avoid bland equal-weight repetition

### How It Works
- process-oriented and immediately scannable
- clearer than a generic 3-card SaaS strip

### Testimonials
- believable and premium
- calm, not hype-driven

### Waitlist
- strongest conversion surface
- clear and frictionless on mobile

### FAQ
- calm and compact
- clarity over drama

## Mobile-First Rules

Mobile is the primary experience.

Requirements:
- single-column first unless two columns are clearly better
- reduce decorative complexity
- keep CTA visibility strong
- keep tap targets at least `44px`
- optimize line breaks for French and Arabic copy lengths

## Motion

Motion should feel polished and subtle:
- slight hover lift
- soft opacity/tonal transitions
- gentle dropdown and accordion motion
- restrained CTA shadow changes

Avoid:
- bouncy motion
- playful gimmicks
- over-animated landing-page behavior

## Do / Don’t

Do:
- build contrast through tonal layering
- use blue as emphasis
- prioritize readability
- keep interactions soft and premium
- let a few moments become visually iconic

Don’t:
- use pure black
- use generic SaaS gradients everywhere
- separate every section with obvious borders
- over-round every element
- overuse blur, glow, or floating objects
- sacrifice trust for spectacle

## Implementation Rules

When editing the landing page:
- prefer reusable tokens and utilities
- centralize color, spacing, radius, and shadow decisions
- avoid one-off visual hacks
- preserve accessibility and contrast
- choose the cleaner and more legible solution when in doubt

Primary success metric:
- the landing page should feel more premium, more intentional, more differentiated, and more trustworthy, especially on mobile
