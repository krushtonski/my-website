# my-website — Design & Build Guidelines

This repo is a from-scratch website. These rules govern every design and
frontend decision made in this repo. Read them before writing UI code.

## Prime directive: never look "vibe coded"

Vibe-coded sites share a recognizable, low-effort tell: a purple or
purple/blue gradient hero, generic rounded pill buttons, oversized bold
sans headlines with vague gradient-text treatment, a floating glass search
card, emoji-in-a-colored-square icons, and copy like "Instantly transform
X into Y." Treat that whole aesthetic as a failure state, not a starting
point.

Concretely:
- **No purple.** No purple, indigo, or purple-to-blue/pink gradients
  anywhere — not in buttons, hero backgrounds, icon chips, or text.
  Purple gradients are the single most reliable tell of an AI-generated
  template; avoid them even in small accents.
- **No decorative gradients as a design crutch.** Backgrounds are solid
  color or, at most, a very subtle one-directional tint using the palette
  below. Don't reach for a gradient to make a section feel "finished."
- **No stock hero formula.** Avoid: giant bold claim + one-line subhead +
  floating search/input card + row of pill "trending" tags. If a design
  brief calls for a hero, make the layout, type scale, and composition
  specific to this brand, not a reskin of that template.
- **No generic icon-in-colored-box grids** for feature lists. If icons are
  used, they should be a considered, singular icon set (e.g. Lucide/Phosphor
  used consistently), not mixed emoji or default Heroicons in flat squares.
- Before shipping any page, ask: "does this read as a specific, designed
  thing, or could it be swapped onto any SaaS/marketplace landing page
  with a find-and-replace?" If the latter, redo it.

## Color palette

Use only these colors. This is a black/white/grey palette with a single
warm accent — treat the accent as a spice, not a base color.

| Name | Hex | Role |
|---|---|---|
| Ink Black | `#011627` | Primary text, dark backgrounds/sections |
| Blush Rose | `#e36588` | The one accent color — CTAs, links, small highlights, focus states |
| Dim Grey | `#666b6a` | Secondary/muted text, borders, dividers |
| Bright Snow | `#f6f7f8` | Light section backgrounds, cards |
| White | `#ffffff` | Base background, cards on dark sections |

Rules:
- Bulk of every page is white / bright-snow / ink-black / dim-grey.
  Blush Rose is an accent used sparingly (primary CTA, key link states,
  a thin highlight, active nav state) — never as a large fill or gradient
  partner.
- No rainbow gradients across the full palette (the auto-generated
  `$gradient-*` swatches from a palette export are not a real design —
  ignore them as a source of gradients to use).
- Maintain WCAG AA contrast: body text is Ink Black or Dim Grey on White
  / Bright Snow, or White on Ink Black. Never place Blush Rose text on
  White at small sizes — reserve it for buttons/large or bold text where
  contrast holds up, and verify contrast before shipping.

## Typography

- Headings: **Sora**, weight 700.
- Body text: **Nunito**, weight 400.
- Import both from Google Fonts (`<link>` or `@import` in the primary
  stylesheet — self-host instead if the project has a font-loading
  convention).
- Set sane fallbacks (`Sora, sans-serif` / `Nunito, sans-serif`) and load
  only the weights actually used to keep pages fast.
- Don't substitute a different display font "because it looks nice" —
  Sora/Nunito is the fixed brand pairing for this project.

## Responsive requirements

Every screen and component must work at both mobile and desktop widths
before it's considered done:
- Build mobile-first (or verify mobile explicitly, not as an afterthought).
- Check common breakpoints: ~375px (mobile), ~768px (tablet), ~1280px+
  (desktop).
- No horizontal scrolling, no overlapping/clipped text, tap targets ≥44px
  on touch layouts, nav collapses to a usable mobile pattern (not a tiny
  squeezed desktop bar).

## Follow provided reference designs

When the user shares a screenshot, URL, or existing design as a reference,
treat it as the source of truth for layout/spacing/tone — match its
structure and quality bar while still obeying the color and type rules
above. Don't override a supplied reference with a generic default layout.

## Always verify before calling it done

After any visual/frontend change:
1. Actually run the site locally and load the changed page(s) in a
   browser (use the `run` skill / Playwright if available) — don't judge
   the result from source code alone.
2. Check both a mobile viewport and a desktop viewport.
3. Confirm no purple/gradient regressions, correct fonts are loading,
   and the palette above is being used correctly.
4. Only report the work as complete after this check has actually been
   performed.
