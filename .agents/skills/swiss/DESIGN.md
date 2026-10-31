---
name: Swiss
colors:
  bone: "#F2F0EB"
  boneRaised: "#FAF9F6"
  boneSunken: "#E7E5DC"
  ink: "#171717"
  inkSoft: "#5B5A55"
  rule: "#C9C7C0"
  control: "#6A6862"
  accent: "#171717"
  accentInk: "#F2F0EB"
surfaces:
  bg: "#F2F0EB"
  contrast: "#E7E5DC"
  raised: "#FAF9F6"
  inverse: "#171717"
typography:
  h1:
    fontFamily: "Archivo Variable"
    fontWeight: 850
    fontStretch: "75%"
    fontSize: "clamp(44px, 8vw, 96px)"
    lineHeight: 0.88
    textTransform: "uppercase"
  h2:
    fontFamily: "Archivo Variable"
    fontWeight: 700
    fontStretch: "100%"
    fontSize: "36px"
    lineHeight: 1.02
    textTransform: "uppercase"
  body-md:
    fontFamily: "Archivo Variable"
    fontWeight: 400
    fontStretch: "100%"
    fontSize: "16px"
    lineHeight: 1.6
  label-caps:
    fontFamily: "Archivo Variable"
    fontWeight: 600
    fontStretch: "100%"
    fontSize: "11px"
    letterSpacing: "0.16em"
    textTransform: "uppercase"
  sourceScale: "11/12/14/16/18/22/28/36/48 + display clamp"
  weights: "400, 500, 600, 700, 800, 850"
  axes: "wght 100-900, wdth 62-125"
rounded:
  all: "0px"
spacing:
  sourceScale: "4/8/12/16/24/32/48/64/96/128"
grid:
  columns: "12 desktop / 8 tablet / 4 mobile"
  maxWidth: "1320px"
  gutter: "clamp(16px, 4vw, 48px)"
  gap: "clamp(12px, 1.5vw, 24px)"
borders:
  hairline: "1px"
  strong: "2px"
  radius: "0px"
  shadow: "none"
motion:
  fast: "120ms"
  base: "180ms"
  slow: "240ms"
  easing: "cubic-bezier(0.2, 0, 0, 1)"
---

## Overview

Swiss / International Typographic Style, applied to a product landing page. One variable grotesque, a mathematical grid, hairline rules, flat color, zero radius.

## Colors

- **Bone (`#F2F0EB`):** page background. Warm off-white, not gray.
- **Bone Raised (`#FAF9F6`):** raised planes on top of the background, one step above the page.
- **Bone Sunken (`#E7E5DC`):** the contrast tone, one step denser than the background.
- **Ink (`#171717`):** primary text, icon strokes, and inverted bands.
- **Ink Soft (`#5B5A55`):** secondary text, `6.07:1` on bone.
- **Rule (`#C9C7C0`):** decorative hairline only, `1.49:1`. Never the sole indicator of a control.
- **Control (`#6A6862`):** borders that must be perceived as interactive, `4.89:1`.
- **Accent / Accent Ink:** pending brand decision. Currently resolves to ink/bone so the system is complete in monochrome.

### Surfaces

| Token | Value | Role |
|---|---|---|
| `--bg` | `#F2F0EB` | App background. Tone of every primary content section ("01 — Flujo de trabajo" is the reference). |
| `--surface-contrast` | `#E7E5DC` | Contrast tone: alternating bands, sidebars, lateral panels ("02 — Producto" is the reference). |
| `--surface` | `#FAF9F6` | Raised planes sitting on the background: menus, popovers, tables inside a panel. |
| `--surface-inverse` | `#171717` | Inverted band, reserved for the closing CTA. |

The set does not change between pages. Do not introduce a second background hue: when a page needs more separation, use whitespace and rules.

### Contrast ratios (measured)

| Pair | Ratio | Use |
|---|---|---|
| Ink / Bone | 15.74:1 | Body and display text |
| Ink Soft / Bone | 6.07:1 | Secondary text, labels |
| Control / Bone | 4.89:1 | Interactive borders |
| Rule / Bone | 1.49:1 | Decorative hairlines only |
| Bone / Ink | 15.74:1 | Inverted sections |
| Ink / Bone Sunken | 14.20:1 | Text on the contrast tone |
| Ink Soft / Bone Sunken | 5.48:1 | Secondary text on the contrast tone |
| Control / Bone Sunken | 4.41:1 | Control borders on the contrast tone |

## Typography

One family: **Archivo Variable**, self-hosted via `@fontsource-variable/archivo/wdth.css` (SIL OFL 1.1). Axes `wght 100–900`, `wdth 62–125`.

| Role | Weight | Width | Size |
|---|---|---|---|
| Display | 850 | 75% | `clamp(44px, 8vw, 96px)`, line-height 0.88, uppercase |
| Heading | 700 | 100% | 36px, line-height 1.02, uppercase |
| Subheading | 600 | 100% | 22px |
| Lead | 400 | 100% | 18px, max `65ch` |
| Body | 400 | 100% | 16px, line-height 1.6 |
| Small | 400 | 100% | 14px |
| Micro | 600 | 100% | 11px, tracking `0.16em`, uppercase |

Rules: condensed width only on display type; body left-aligned at `65ch`; uppercase only for short labels; tabular numerals for comparable values; no synthetic condensation via `scaleX()`.

## Spacing

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px. Use `24` and `48` as the workhorses between blocks, `64` and `96` between sections.

## Grid

- 12 columns desktop, 8 tablet, 4 mobile.
- Max width `1320px`, outer margin `clamp(16px, 4vw, 48px)`, gap `clamp(12px, 1.5vw, 24px)`.
- Section head: index label in columns 1–3, content in columns 4–12.
- Feature grid spans `5 / 6 / 7` with explicit column starts and vertical offsets. Never 3 equal columns, never bordered cells.
- The grid aligns content to shared columns. It never draws a box around a cell.

## Borders and shapes

- `1px` hairline for structural rules, `2px` for focus and functional emphasis.
- **No content block carries a border.** Frames turn the layout into a bento grid.
- Rules are allowed where they express structure: table rows, chart baselines, active tab, control boundaries.
- `border-radius: 0` on every element.
- No shadows, no gradients, no glass.
- At most one accent plane per viewport.

## Motion

`120ms` feedback, `180ms` standard, `240ms` major, easing `cubic-bezier(0.2, 0, 0, 1)`. State, opacity and small offsets only. `prefers-reduced-motion: reduce` strips everything non-essential.

## Source of truth

`frontend/src/index.css` holds the live tokens. This file documents them; when one changes, change both.
