---
name: swiss
description: Design system for the Swiss / International Typographic Style used across this repo (Nexo frontend). Use when creating or changing any UI, layout, typography, color, spacing, component, icon, chart or motion in the frontend, or when reviewing visual consistency against the design system. Enforces a single variable grotesque, a 4/8/12 grid, hairline rules, flat color and zero-radius shapes.
---

# Swiss Design System

The visual system for this repo is the **Swiss / International Typographic Style**: a single variable grotesque, a mathematical grid, hairline rules, flat color, and nothing that does not carry information.

This skill is the authority on visual decisions. `DESIGN.md` holds the token values; `docs/design/swiss-style-research.md` holds the primary sources behind the rules. `AGENTS.md` holds the repo-wide working rules.

## Intent in one sentence

Order before decoration: content, then hierarchy, then grid, then color — and every accent, rule or motion must justify itself against the content it serves.

## Foundations

- **One typeface.** Archivo Variable, self-hosted via `@fontsource-variable/archivo/wdth.css` (wght 100–900, wdth 62–125). No second family, ever.
- **One grid.** 12 columns on desktop, 8 on tablet, 4 on mobile. Asymmetric spans are the default; equal thirds are the exception.
- **The grid aligns, it does not frame.** This is the single most common way to drift back into neobrutalism. A grid of equal cells, each with its own border, is a bento grid, not Swiss. The grid exists to align content to shared columns; it never draws a box around a cell.
- **No element gets a frame.** Nothing is outlined unless it is a real control that needs a visible boundary, or it carries data that a rule organizes (a table row, a chart baseline, an active tab).
- **Rules divide zones and data, not content blocks.** A rule earns its place when it separates two zones or organizes comparable data. It does not earn a place because a block needs a border.
- **Space is the separator.** Prefer whitespace over a rule, always.
- **Flat color.** No shadows, no gradients, no glass, no offset blocks. `border-radius: 0` everywhere.
- **One accent plane.** At most one block of accent color per viewport. It anchors the page; it does not decorate it.

## Rules: Do

- Use the semantic tokens in `frontend/src/index.css` (`:root`). Never hardcode a hex value in a component.
- Reserve condensed width (`font-stretch: 75%`, `wght` 700–850) for display type only: hero titles, section headings at large sizes, big numerals.
- Keep body and UI text at normal width (`wdth 100`, `wght 400`) and left-aligned; cap body copy at `65ch`.
- Use uppercase only for short labels (eyebrows, buttons, table headers) with positive tracking (`0.12em`–`0.16em`).
- Use tabular numerals for anything comparable across rows (prices, limits, counts, dates).
- Build sections on the grid with unequal spans and deliberate vertical offsets; let whitespace carry the asymmetry.
- Separate content with space first. Add a rule only when it divides zones or organizes comparable data.
- Keep the whole system fully usable in the neutral palette. Activate the accent only after both `--accent` and `--accent-ink` are validated.

## Rules: Don't

- Don't use `scaleX()` or any synthetic condensation. Use the `wdth` axis.
- Don't compress display type into more than 3 lines, and don't set fixed heights on headings or containers.
- Don't put a border on a content block. No card frames, no cell borders, no boxed sections, no outlined chips.
- Don't build a grid of equal cells with borders. That is a bento grid.
- Don't outline a label, a badge or an avatar as if it were a control. Labels are type, not objects.
- Don't rely on the faint hairline as the only indicator of a control, focus state or status.
- Don't use color alone to signal state. Pair it with text, a rule or a position change.
- Don't add motion that delays reading: no parallax, no scroll-jacking, no autoplay, no letter-by-letter reveals.
- Don't reach for a second typeface to solve a hierarchy problem. Fix the scale.

## Components

### Buttons

Three levels, no elevation:

| Level | Rest | Hover | Focus |
|---|---|---|---|
| Primary | ink fill, bone label | accent fill | 2px ink outline, 3px offset |
| Secondary | transparent fill, ink border | ink fill, bone label | same |
| Tertiary | underlined text | underline stays | same |

Minimum target size `44x44`. Never shrink, translate, or add a shadow on hover.

### Section head

Every section opens with a grid: an index label in the left 3 columns (`01 — Producto`, uppercase, tracked, muted) and the content in columns 4–12. This asymmetry is the signature of the style; do not center it.

### Feature block

A feature is type and space, not a box. Place it on the grid with an explicit column start, a span that is not a third, and an optional vertical offset so the row never shares a common top line. A feature may carry one accent plane of solid color. It never carries a border.

### Tabs

Flat row, hairline bottom rule in `--line-control` so the control is perceivable, active tab gets a `2px` ink underline. Never a filled pill, never a boxed button. Arrow keys move between tabs and focus follows.

### Data rows

Name left, value right, hairline rule between rows, tabular numerals on the value. Use this instead of a card grid for lists of comparable items. This is the one place where rules are expected: the rule organizes the data, it does not frame a block.

### Labels and badges

A label is type: uppercase, tracked, muted, no border, no background. A badge is a label with meaning, not a chip. If a piece of information needs a shape, it needs a reason to be a control.

### Charts

Bars in ink on a hairline baseline, `2px` gap between bars, no gridlines, no labels on every bar. A chart explains one relationship; if it needs more, split it.

### Icons

One geometric family, `24` viewBox, `1.5` stroke, `currentColor`, sizes `16/20/24`. Decorative icons get `aria-hidden`. Icon-only buttons need an accessible name.

## Accessibility acceptance criteria

- WCAG 2.2 AA is the floor.
- Text contrast `>= 4.5:1`; large text and UI boundaries `>= 3:1`.
- Visible focus on every interactive element, `2px` with `3px` offset, contrast-checked on both light and inverted surfaces.
- Target size `>= 24x24` (prefer `44x44`).
- Full keyboard operation. The tab widget supports arrow keys and roving `tabindex`.
- `prefers-reduced-motion: reduce` removes all non-essential motion.
- Reflow at `320` CSS px and text zoom at `200%` without loss of content.
- Color is never the only signal.

## Motion

- `120ms` immediate feedback, `180ms` standard, `240ms` major.
- Easing `cubic-bezier(0.2, 0, 0, 1)`.
- Animate state, opacity, and small offsets only (`4–8px`).
- Under reduced motion, keep only the feedback needed to understand a state change.

## Anti-patterns

| Pattern | Why it breaks the system | Instead |
|---|---|---|
| Every block has a border | Reads as neobrutalism, not Swiss | Space, and rules only for zones or data |
| A grid of equal bordered cells | Bento grid, not a typographic grid | Asymmetric spans and vertical offsets |
| Thick `2–3px` borders | Same reason | `1px` hairlines |
| Offset hard shadows | Same reason | Flat surfaces |
| Pastel block per section | Color becomes decoration | One neutral field, one inverted band |
| Rounded cards (`4–8px`) | Softens the typographic edge | `border-radius: 0` |
| Outlined chips and badges | Turns a label into an object | The label as type |
| Monospace for labels | Reads as a developer tool, not editorial | Uppercase grotesque with tracking |
| Centered section headings | Breaks the grid logic | Index column + left-aligned title |
| Font weight `900` in body text | Hurts legibility at small sizes | `400` body, `600` labels, `700` headings |
| A second accent color | Dilutes a restricted palette | One accent, applied sparingly |

## Workflow

1. Read `DESIGN.md` for the token values before writing any style.
2. Compose with the grid first: decide spans and the whitespace, then the type.
3. Add color last, and only if it carries meaning.
4. Check the states: default, hover, focus-visible, active, disabled, loading, error.
5. Run the QA checklist below.

## QA checklist

- [ ] Only semantic tokens used; no raw hex in components.
- [ ] One typeface; condensed width only on display type.
- [ ] Spans are asymmetric on desktop; content stacks on mobile.
- [ ] No content block carries a border; the only rules are zone dividers, data rows, chart baselines and control boundaries.
- [ ] No grid of equal bordered cells.
- [ ] No shadows, no gradients, no radius above `0`.
- [ ] At most one accent plane per viewport.
- [ ] Every interactive element has hover, focus-visible, active and disabled states.
- [ ] Focus is visible on light and inverted surfaces.
- [ ] Body copy is left-aligned and capped at `65ch`.
- [ ] Comparable numbers use tabular numerals.
- [ ] Contrast verified: text `>= 4.5:1`, boundaries and focus `>= 3:1`.
- [ ] Keyboard-only pass: tabs, links, buttons reachable and operable.
- [ ] `prefers-reduced-motion` removes non-essential motion.
- [ ] Checked at `320`, `768` and `1440` px with no horizontal overflow.
- [ ] `pnpm run typecheck` and `pnpm run build` pass in `frontend/`.
