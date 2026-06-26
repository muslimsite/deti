# Soliha — Islamic Parenting & Education Design System

A premium, modest, feminine design system for **Soliha umm Musa**, a brand teaching
home **tarbiyah** (Islamic parenting & education) to a Muslim female audience. The mood is
**luxury, elegant, spiritual, warm and trustworthy** — inspired by high-end business
presentation decks, dressed in matte gold, deep navy, near-black and warm cream.

> **Sources.** This system was built to a written creative brief (no codebase or Figma was
> provided). The only supplied asset was the author's illustrated avatar
> (`uploads/IMG_9110.PNG` → `assets/author-soliha-avatar.png`). All copy, components, screens
> and slides here are original, written in the brand voice.

---

## Content fundamentals — how copy is written

- **Voice:** warm, gentle, reassuring, sincere. Speaks mother-to-mother. Never clinical,
  never preachy. Encouraging, never guilt-driven ("gentle… never pressure", "you are
  guided, never lectured").
- **Person:** mixes a soft **"I"** (the author's personal testimony) with **"you / your child"**
  (addressing the reader directly). The brand is a trusted companion.
- **Casing:** Title Case or sentence case for headings; **UPPERCASE with wide tracking**
  only for small eyebrow labels and pills. Body is sentence case.
- **Islamic vocabulary** is woven in naturally and respectfully, with correct transliteration
  and diacritics where possible: *tarbiyah, niyyah, fitrah, adab, deen, du'ā, salah, aqeedah,
  Qur'ān, Bismillah, in shā' Allāh, iḥsān*. Use sparingly and always in service of meaning —
  never as decoration.
- **Tone words to reach for:** gentle, calm, beautiful, rooted, mercy, nurture, steady,
  joyful, sincere, honour, peace.
- **Emoji:** **never.** The brand expresses warmth through type, gold ornament and imagery,
  not emoji. Decorative accents are gold dots/diamonds and thin rules, not icons or emoji.
- **Example headline pattern:** a calm serif statement with one italic gold phrase —
  *"Raise hearts that are **rooted in faith**"*, *"A calm, structured path to **tarbiyah at
  home**"*.
- **Numbers/stats** are framed humanly ("12,000+ mothers enrolled", "30+ countries"), never
  as cold data dumps.

---

## Visual foundations

- **Palette (one accent, disciplined):** a single **muted matte gold** `#C7A86B`
  (`--gold-500`) carries every accent — headings' italic phrases, numbered badges, dividers,
  pills and CTAs — via a soft gold **gradient** (`#E3D2A8 → #C7A86B → #A77E3F`). Backgrounds
  alternate **dark** (deep navy `#0E1626`, near-black `#0D0D0D`) and **light** (cream/ivory
  `#F2EBDD`, `#FAF6EE`). Text is dark navy `#1B2A3A` on light, warm off-white `#F6F1E7` on dark.
  No second accent colour, no semantic red/green — restraint is the luxury.
- **Type:** high-contrast elegant **serif — Playfair Display** (Didot-style) for all display
  headings, often with one **italic** phrase in gold; clean geometric **sans — Montserrat**
  for body and UI; an elegant **script — Allura** used *only* for the author's name and
  signature accents (never headings or body). Body never below ~16–18px; line-height 1.7+.
- **Backgrounds:** dark sections use a soft radial navy→black gradient with a subtle
  **starfield** (tiny twinkling dots, a few in gold) and a faint gold glow — spiritual, "night
  sky" feel. Light sections are flat warm cream. No photographic full-bleeds in the kit
  (none were supplied); imagery sits in **gold circular frames** or rounded rectangles.
- **Ornaments:** the brand signature is the **thin gold line + centred dot or diamond**
  divider, plus small gold dots. Used under eyebrows and between sections. Subtle, never busy.
- **Corner radii:** large and soft — cards & buttons ~**22px** (`--radius-lg`), hero panels
  ~28px, pills/badges fully round. Photos are circles or 22px rounded rectangles.
- **Cards:** ivory (or navy on dark) fill, **1px translucent gold border**, soft warm shadow
  (`0 12px 32px rgba(27,42,58,.10)`). On hover they **lift ~6px**, deepen shadow, and the gold
  border brightens. Equal height in a row, generous internal padding (~40px).
- **Buttons:** rounded **pill** CTAs. Primary = gold gradient on dark text with a warm gold
  shadow; secondary = gold outline; ghost = gold text link; dark = gold outline for dark
  sections. Uppercase, tracked labels.
- **Shadows:** warm and soft, tinted navy on light (`--shadow-sm/md/lg`), deep black on dark
  (`--shadow-dark`), and a dedicated gold glow for primary CTAs/badges (`--shadow-gold`).
- **Animation & motion:** elegant and restrained. Scroll-reveal **fade + 32px slide-up**
  (staggered per card), gentle **parallax** on hero starfield/glow, **count-up** number
  stats on scroll-into-view, soft hover **lift** on cards, **−2px translate** + brighter
  shadow on buttons. Easing is slow ease-out (`cubic-bezier(0.16,1,0.3,1)`), ~320–800ms.
  All motion respects `prefers-reduced-motion`. No bounces, no spin, no infinite loops on
  content.
- **Press/hover states:** hover lightens/lifts and brightens gold; there is no harsh colour
  inversion. Focus uses a soft gold ring.
- **Transparency & blur:** used sparingly — the sticky nav condenses to a translucent
  near-black with `blur(14px)`; gold fills on dark use ~6–14% alpha.
- **Imagery vibe:** warm, calm, modest. The single avatar is a serene black-silhouette
  illustration on white, framed in gold.
- **Layout:** centred, generous, consistent. Max content width ~1200px (prose ~720px),
  section padding `clamp(4rem, 9vw, 7.5rem)`, 8px spacing rhythm. Fully responsive grids
  (`auto-fit, minmax`) so cards reflow cleanly on mobile.

---

## Iconography

The brand is **deliberately icon-light** — its visual language is gold **ornament**, not an
icon set. In place of icons it uses:

- **Gold geometric marks:** small **diamonds** (rotated squares) and **dots**, and the
  brand's logo mark (a single gold gradient diamond beside the "Soliha" wordmark).
- **Thin gold rules** as dividers and accents.
- **Circular numbered badges** (01, 02…) in place of bullet icons for ordered content.

No icon font, SVG icon library or emoji is used. If a future surface genuinely needs UI
icons (e.g. a dashboard), use a **thin-stroke** line set such as **Lucide** (CDN) at ~1.5px
stroke in gold or ink, to stay consistent with the delicate ornament style — and flag it.
Do **not** introduce filled/duotone/coloured icon styles.

---

## Fonts — substitution note ⚠️

No font binaries were supplied. The brief named *Playfair Display / Didot*, *Montserrat* and
an elegant script, so the system loads the closest matches from **Google Fonts** via
`@import` in `tokens/fonts.css`:

- **Playfair Display** (display serif — Didot-style substitute)
- **Montserrat** (geometric sans)
- **Allura** (script, for the author's name/signature)

Because these load from the Google Fonts CDN rather than self-hosted `@font-face` binaries,
the compiler reports *0 fonts* — this is expected; consumers linking `styles.css` still get
all three. **If you have licensed Didot / specific brand fonts, send the files and I'll
self-host them.**

---

## Index — what's in this system

**Foundations & global CSS**
- `styles.css` — root entry point (consumers link this only). `@import` list.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css`
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand).

**Components** (`components/core/`, namespace `SolihaIslamicParentingDesignSystem_1e5f6d`)
- `Button` — rounded gold CTA + secondary / ghost / dark variants.
- `LabelPill` — uppercase gold eyebrow pill (gradient / outline / soft / onDark).
- `NumberBadge` — circular gold numbered badge (01, 02…).
- `Card` — rounded soft-shadow container (light / dark / plain).
- `Avatar` — photo in a gold circular frame (About section only).
- `Ornament` — thin gold divider with dot / diamond / rule.
- `Stat` — large gold count-up number with caption.

**UI kit** (`ui_kits/landing/`)
- `index.html` — full luxury landing page: dark starry hero with parallax, alternating
  light/dark sections, numbered method cards, animated stat counters, curriculum pills, an
  **interactive "What is your tarbiyah style?" quiz**, the About-author section (avatar +
  script name + bio), and a dark closing CTA + footer. Split into `Hero / Method / Stats /
  Quiz / About / Closing / shared / App` JSX.

**Slides** (`slides/`) — 1280×720 deck templates: `TitleSlide`, `ContentSlide`, `QuoteSlide`,
`AboutSlide`.

**Assets** (`assets/`)
- `author-soliha-avatar.png` — the author's illustrated avatar. **Use only in the About
  section / About slide.**

**Skill** — `SKILL.md` (Agent-Skills compatible).
