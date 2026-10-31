# Swiss / International Typographic Style

Research notes behind the design system in `.agents/skills/swiss/`. Sources are primary: institutional archives, official font metadata and licensing, and W3C specifications.

## 1. Origin and principles

The International Typographic Style consolidated in Switzerland during the 1940s–1950s, with peak influence between 1950 and 1970. The Swiss National Library presents it as a synthesis of the Zurich and Basel schools, built on precision, typographic grid, sans serif, rational ornament-free composition, predominantly monochrome photography and restricted color.

- [Swiss National Library — The International Style](https://www.nb.admin.ch/en/the-international-style-1950-1970)
- [Swiss National Library — The Zurich Concretists](https://www.nb.admin.ch/en/the-zurich-concretists)
- [Poster House — The Swiss Grid](https://posterhouse.org/exhibition/the-swiss-grid)

Antecedents include concrete art, the Bauhaus and Jan Tschichold's *The New Typography* (1928), which brought asymmetry, graphic bars and clear solutions.

*Neue Grafik*, published 1958–1965 by Müller-Brockmann, Lohse, Neuburg and Vivarelli, spread the constructive approach internationally.

- [Lars Müller Publishers — Neue Grafik](https://www.lars-mueller-publishers.com/neue-grafiknew-graphic-designgraphisme-actuel-1958-1965)

The historical texts that frame the practice:

- **Müller-Brockmann:** the grid as the tool for conceiving, organizing and executing consistent solutions. [Niggli — *Grid Systems in Graphic Design*](https://niggli.ch/en/products/rastersysteme-fur-die-visuelle-gestaltung)
- **Ruder:** structure, rhythm, proportion and legibility as typographic fundamentals. [Niggli — *Typography. A Manual of Design*](https://niggli.ch/en/products/typographie)
- **Hofmann:** point, line, plane, contrast and composition as an elementary language. [Niggli — *Graphic Design Manual*](https://niggli.ch/en/products/methodik-der-form-und-bildgestaltung)

Translated to a digital product: content before decoration, hierarchy before variety, systematic repetition over isolated compositions, economy of means without giving up contrast.

## 2. Grid and asymmetric composition

*Grid Systems in Graphic Design* documents grids of **8 to 32 columns**: there is no single canonical 12-column grid, no mandatory 8pt scale and no universal golden ratio. The grid is a structure of relationships, not necessarily visible lines nor a set of equal cards.

Recommended here: **4 columns mobile, 8 intermediate, 12 desktop**, max width `90rem`, outer margin `clamp(1rem, 3vw, 3rem)`, gutter `clamp(.75rem, 1.5vw, 1.5rem)`, flexible tracks with `minmax(0, 1fr)`. Asymmetry through unequal spans, contrast of mass and empty columns, with edges kept aligned. Visible hairlines must indicate real relationships, not permanently reproduce a debug overlay.

Visual placement must not alter logical order: DOM order, reading and keyboard navigation stay coordinated.

- [MDN — Grid layout and accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Accessibility)

## 3. Typography

Requirement: a free, installable grotesque, preferably on Google Fonts, with editorial/newsletter character, variable format, self-hostable and able to produce genuinely condensed display type.

| Family | Documented axes | Assessment |
|---|---|---|
| **Archivo Variable** | `wght 100–900`, `wdth 62–125`; normal and italic in separate files | **Selected.** A grotesque inspired by late-19th-century American types, conceived for highlights and headlines. One family covers text and display, with real condensation and enough Black weight. |
| Inter Tight | `wght 100–900`; no `wdth` | Excellent for compact display, but "tight" is not a condensed variant. [Metadata](https://github.com/google/fonts/blob/main/ofl/intertight/METADATA.pb) · [Fontsource](https://fontsource.org/fonts/inter-tight/about) |
| Instrument Sans | `wght 400–700`, `wdth 75–100` | Contemporary alternative with less weight and width range; no Black display weight. [Metadata](https://github.com/google/fonts/blob/main/ofl/instrumentsans/METADATA.pb) |
| Roboto Flex | `wght 100–1000`, `wdth 25–151`, `opsz 8–144` + more | Technically powerful, unnecessarily complex here. More axes do not by themselves improve hierarchy. [Metadata](https://github.com/google/fonts/blob/main/ofl/robotoflex/METADATA.pb) |
| Libre Franklin | `wght 100–900`; no `wdth` | Good editorial lineage, but does not solve condensed display without a second family. [Metadata](https://github.com/google/fonts/blob/main/ofl/librefranklin/METADATA.pb) |

### Selected: Archivo Variable

Omnibus-Type describes Archivo as a grotesque inspired by late-19th-century American types, designed to work in print and on digital platforms, originally oriented to highlights and headlines. That origin makes it apt for an editorial system.

- [Omnibus-Type — Archivo repository](https://github.com/Omnibus-Type/Archivo)
- [Fontsource — Archivo, characters and axes](https://fontsource.org/fonts/archivo/about)
- [Google Fonts — Archivo specimen](https://fonts.google.com/specimen/Archivo)
- [Google Fonts — METADATA.pb](https://github.com/google/fonts/blob/main/ofl/archivo/METADATA.pb)

Confirmed axes in the official Google Fonts repository: `wdth` **62–125**, `wght` **100–900**, normal `Archivo[wdth,wght].ttf`, italic `Archivo-Italic[wdth,wght].ttf`, no `opsz` axis.

### License

**SIL Open Font License 1.1.** Allows web use, commercial use, installation, embedding and redistribution under its conditions. Copyright and license must travel with distributed files; create subsets or modify before checking the reserved-name conditions.

- [OFL for Archivo](https://github.com/google/fonts/blob/main/ofl/archivo/OFL.txt)
- [OFL — Using fonts](https://openfontlicense.org/how-to-use-ofl-fonts)

### Self-hosting

Fontsource provides WOFF2, CSS and license, avoiding runtime requests to Google and manual conversion:

```sh
npm install @fontsource-variable/archivo
```

```js
// Normal: includes both wght and wdth
import "@fontsource-variable/archivo/wdth.css";
```

`wdth.css` declares `font-weight: 100 900`, `font-stretch: 62% 125%`, variable WOFF2 files, `unicode-range` and `font-display: swap`. `wght.css` is not needed on top of it.

- [Fontsource — Archivo `wdth.css`](https://raw.githubusercontent.com/fontsource/font-files/main/fonts/variable/archivo/wdth.css)
- [Fontsource — Variable Fonts](https://fontsource.org/docs/getting-started/variable)

Applied roles: body/UI `wght 400` at `wdth 100`; labels and controls `wght 500–600` at `wdth 100`; headings `wght 650–700` at `wdth 100`; display `wght 850` at `wdth 75`. No `scaleX()` and no synthetic condensation.

## 4. Scale, spacing and alignment

| Role | Size / leading |
|---|---|
| Body | `1rem / 1.5` |
| Small / metadata | `.875rem / 1.45` |
| H3 | `1.25rem / 1.2` |
| H2 | `clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem) / 1.1` |
| Display | `clamp(3.5rem, 1.25rem + 9vw, 10rem) / .95` |

Body measure capped at `65ch`. Condensed display only on selected headings, ideally 1–3 lines. Display tracking around `-0.02em`; no negative tracking on small text. Running text left-aligned with a ragged right margin, never justified, never in all caps. Uppercase only for short labels with moderate positive tracking. Tabular numerals for tables and comparable data.

Spatial scale `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px expressed in `rem`. Do not fix heights on headings or containers, to preserve a baseline grid under zoom, translation and spacing changes.

## 5. Bone, ink and the pending accent

| Token | Value | Use |
|---|---:|---|
| `--color-bg` | `#F2F0EB` | Bone background |
| `--color-surface` | `#FAF9F6` | Lighter secondary surface |
| `--color-ink` | `#171717` | Main text and icons |
| `--color-muted` | `#5B5A55` | Secondary text |
| `--color-line` | `#C9C7C0` | Non-essential hairlines |
| `--color-control` | `#6A6862` | Borders needed to perceive controls |

Measured contrast: `ink/bg` **15.74:1**, `muted/bg` **6.07:1**, `control/bg` **4.89:1**, `line/bg` **1.49:1** (decorative or redundant structure only, never the sole indicator of a control).

The accent stays a slot with a neutral fallback:

```css
--color-accent: var(--color-brand, var(--color-ink));
--color-on-accent: var(--color-on-brand, var(--color-bg));
```

When the brand color is chosen: define brand and on-brand **together**, verify text on accent and accent on background, do not assume white text works on any accent, never use the accent as the only signal of state, and keep focus independent of the accent so it never disappears on a given surface. Restricted color is a historical trait, but there is no mandatory Swiss accent.

- [Swiss National Library — The International Style](https://www.nb.admin.ch/en/the-international-style-1950-1970)

## 6. Rules, borders, shapes, photography and icons

- Structural hairline `1px`; avoid sub-pixel values.
- Strong border `2px` only for focus, selection or functional emphasis.
- Use `--color-control`, not the faint hairline, when a border must make a control recognizable.
- Shapes rectangular, `--radius: 0`; no pills, gradients, glassmorphism or offset shadows.
- Cards only when the grouping is necessary; do not turn every row or fragment into one.
- Buttons: solid primary, neutral secondary with visible border, underlined tertiary. No elevation on hover.
- Inputs: visible label, preferably above; `44px` target height; placeholder never replaces a label.

Photography: geometric crops tied to the grid; monochrome for editorial direction, natural color when fidelity is informative; never place text over unpredictable-contrast areas; use `<picture>` for art direction rather than indiscriminate `object-fit: cover`.

- [MDN — Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [W3C — Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)

Icons: one geometric family, consistent `24` viewBox, roughly `1.5` stroke, sizes `16/20/24`, `currentColor`. Icon buttons need an accessible name; decorative SVGs are hidden from assistive technologies. Do not mix outline, filled, emoji and illustration without a criterion.

## 7. Responsive translation

- CSS Grid for two-dimensional regions; Flexbox for toolbars and one-dimensional groups.
- Container queries for components whose format depends on their actual space; media queries for overall composition. [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries)
- Fluid typography with `clamp()` and `rem` bounds. [MDN — `clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp)
- `subgrid` only when it improves a real alignment; offer a simple fallback.
- No absolute positioning for essential content and no poster-width layouts.
- No fixed heights for text, cards or headings.
- Test long words, translations, keyboard navigation and dynamic content.
- Reflow at `320` CSS px and text zoom at `200%` without loss of content or functionality. [W3C — Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) · [W3C — Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)

## 8. Accessibility and restrained motion

WCAG 2.2 AA as the floor:

- Normal text `4.5:1`; large text `3:1`. [W3C — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- Controls, focus and meaningful icons `3:1`. [W3C — Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
- Never convey information through color alone. [W3C — Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- Focus visible `2px` with offset and sufficient contrast. Focus Visible is AA; adopting the Focus Appearance dimensional guidance is good practice. [W3C — Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) · [W3C — Focus Appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html)
- Target size minimum AA `24x24` CSS px; preferred `44x44`. [W3C — Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- Support line-height, letter-spacing and word-spacing overrides without clipping. [W3C — Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
- The `65ch` measure stays under the 80-character maximum recommended by Visual Presentation, which also advises against justified text. [W3C — Visual Presentation](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html)

Motion: `120ms` for immediate feedback, `180ms` standard, `240ms` major, easing `cubic-bezier(.2, 0, 0, 1)`. Animate state, opacity and small offsets (`4–8px`); do not choreograph reading. Avoid parallax, scroll-jacking, autoplay, loops and letter-by-letter headings. Under `prefers-reduced-motion: reduce`, remove non-essential motion and keep only the feedback needed to understand a state change.

- [W3C — Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
- [MDN — `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)

## 9. Common mistakes and the difference from neobrutalism

Common mistakes:

1. Reducing Swiss to "black grotesque + grid + one loud color".
2. Making the whole grid visible when it does not communicate relationships.
3. Confusing asymmetry with arbitrary placement.
4. Using Archivo Condensed Black in body text, navigation or forms.
5. Compressing typography with transforms instead of the `wdth` axis.
6. Turning every block into a bordered card.
7. Using faint hairlines as the only indicator of inputs, focus or states.
8. Choosing an accent without verifying its paired text color.
9. Keeping a fixed desktop layout or reordering the DOM visually.
10. Adding decorative motion that delays access to content.

| Swiss | Web neobrutalism |
|---|---|
| Precision, clarity, objectivity | Raw, playful or deliberately "unfinished" expressiveness |
| Systematic grotesque | Heavy, quirky or nostalgic typography |
| Functional hairlines | Thick borders as protagonist |
| No component shadows | Offset hard shadows |
| Restricted accent | Multiple bright colors |
| Aligned asymmetry and active whitespace | Blocks, early-web and deliberate visual noise |

- [Nielsen Norman Group — Neobrutalism](https://www.nngroup.com/articles/neobrutalism/)

## 10. Twelve actionable rules

```css
:root {
  /* 1. One self-hosted variable family */
  --font-sans: "Archivo Variable", Arial, sans-serif;
  --font-weight-body: 400;
  --font-weight-label: 600;
  --font-weight-heading: 700;
  --font-weight-display: 850;
  --font-width-normal: 100%;
  --font-width-display: 75%;

  /* 2. Limited editorial scale */
  --text-small: 0.875rem;
  --text-body: 1rem;
  --text-h3: 1.25rem;
  --text-h2: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --text-display: clamp(3.5rem, 1.25rem + 9vw, 10rem);
  --leading-body: 1.5;
  --leading-display: 0.95;
  --measure-body: 65ch;

  /* 3. Neutrals; the system works without an accent */
  --color-bg: #F2F0EB;
  --color-surface: #FAF9F6;
  --color-ink: #171717;
  --color-muted: #5B5A55;
  --color-line: #C9C7C0;
  --color-control: #6A6862;

  /* 4. Pending accent, with a neutral fallback */
  --color-accent: var(--color-brand, var(--color-ink));
  --color-on-accent: var(--color-on-brand, var(--color-bg));

  /* 5. 4px spatial rhythm */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
  --space-10: 8rem;

  /* 6. Responsive grid */
  --grid-max: 90rem;
  --grid-margin: clamp(1rem, 3vw, 3rem);
  --grid-gutter: clamp(0.75rem, 1.5vw, 1.5rem);

  /* 7. Hairlines and shapes */
  --border-hairline: 1px;
  --border-strong: 2px;
  --radius: 0;

  /* 8. Functional motion */
  --duration-fast: 120ms;
  --duration-base: 180ms;
  --duration-slow: 240ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

1. Use only Archivo Variable, importing `wdth.css`; real italic only when needed.
2. Reserve `wdth 75 / wght 850` for display; all functional text stays at normal width.
3. Apply the defined scale; do not invent sizes per component.
4. Compose with 4/8/12 columns, intentional whitespace and unequal spans.
5. Separate content with space before borders; hairlines only when they add structure.
6. Keep the system fully usable in neutrals; activate the accent only after validating both of its colors.
7. No shadows, no pills, no synthetic condensation; `0` radius and rectangular shapes.
8. Align text left, cap body at `65ch`, avoid fixed heights.
9. Controls and focus must not depend on the faint hairline; use functional contrast `>= 3:1`.
10. Validate `320` px, `200%` zoom, keyboard and text spacing before closing a component.
11. Respect reduced motion; use movement only to explain state changes.
12. Review every exception against the system: if a component needs another family, border or scale, it must justify it by content, not decoration.
