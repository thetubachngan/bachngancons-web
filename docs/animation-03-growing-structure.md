# SVG Animation Prompt — Growing Structure (Thi Công Trọn Gói)

## Design Tokens

| Token        | Hex       | Usage                   |
|-------------|-----------|-------------------------|
| `primary`    | `#0C0A09` | Background (Obsidian)   |
| `secondary`  | `#292524` | Card background         |
| `accent`     | `#EAB308` | CTA / Highlight (Yellow)|
| `textmain`   | `#F5F5F4` | Main text (Light)       |
| `textmuted`  | `#A8A29E` | Muted text              |
| `bordercolor`| `#44403C` | Borders                 |

## Concept

On hover, a multi-story house builds itself layer-by-layer from bottom to top (first floor → second floor → roof) — symbolizing the full turnkey construction service (Thi công trọn gói) for a construction company website.

**Output file**: `growing-structure.svg`

---

# Prompt to Generate

## Goal

Create a standalone SVG file that shows a multi-story house building itself layer-by-layer **on hover**. The animation is triggered by the user hovering over the SVG (CSS `:hover`). No JavaScript.

## Step-by-step Instructions

### Step 1: SVG Container Setup
- Create an `<svg>` element with `xmlns="http://www.w3.org/2000/svg"`.
- Set `viewBox="0 0 80 80"` for a rectangular canvas.
- Add `class="w-full h-full"` for responsive sizing.
- **Acceptance Criteria**: SVG fills its container and uses an 80×80 coordinate space.

### Step 2: Create the Wrapper Group with Hover Target
- Add a `<g>` element with `class="anim-group"` and `cursor="pointer"`.
- Inside, add a transparent hit-area rect: `<rect width="80" height="80" fill="transparent" />`.
- **Acceptance Criteria**: The entire SVG area is hoverable, hover state won't flicker when moving between child elements.

### Step 3: Draw the First Floor (Layer 1)
- Inside the `<g>`, add a group `<g class="build-layer-1" transform="translate(8, 48)">`:
  - Main wall: `<rect width="64" height="32" fill="#F5F5F4" />` (textmain).
  - Left window: `<rect x="8" y="16" width="12" height="16" fill="#0C0A09" />` (primary/dark).
  - Door (accent): `<rect x="24" y="10" width="16" height="22" fill="#EAB308" />`.
  - Right window: `<rect x="44" y="16" width="12" height="16" fill="#0C0A09" />`.
- **Acceptance Criteria**: First floor has a light wall with dark windows and a yellow accent door.

### Step 4: Draw the Second Floor (Layer 2)
- Add `<g class="build-layer-2" transform="translate(8, 16)">`:
  - Main wall: `<rect width="64" height="32" fill="#F5F5F4" />`.
  - Left window: `<rect x="16" y="12" width="12" height="16" fill="#0C0A09" />`.
  - Right window: `<rect x="36" y="12" width="12" height="16" fill="#0C0A09" />`.
- **Acceptance Criteria**: Second floor sits directly above first floor, with two dark windows.

### Step 5: Draw the Roof (Layer 3)
- Add a `<polygon>` with `points="40,0 72,16 8,16"` and `fill="#EAB308"` (accent).
- Apply `class="build-layer-3"`.
- **Acceptance Criteria**: A triangular yellow roof caps the building.

### Step 6: Create the Keyframe Animation `build-up`
- Define `@keyframes build-up`:
  - `0%`: `translateY(20px)`, `opacity: 0` — element starts below and invisible.
  - `100%`: `translateY(0)`, `opacity: 1` — element slides up into final position.
- **Acceptance Criteria**: A simple slide-up + fade-in effect.

### Step 7: Set Default Hidden State
- In `<style>`, set `.build-layer-1, .build-layer-2, .build-layer-3`:
  - `opacity: 0; transform: translateY(20px);`
- **Acceptance Criteria**: All building layers are invisible by default (before hover).

### Step 8: Apply Staggered Hover Animations
- Define hover rules in `<style>`:
  - `.anim-group:hover .build-layer-1`: `animation: build-up 0.5s ease-out forwards;` (no delay).
  - `.anim-group:hover .build-layer-2`: `animation: build-up 0.5s ease-out 0.2s forwards;` (0.2s delay).
  - `.anim-group:hover .build-layer-3`: `animation: build-up 0.5s ease-out 0.4s forwards;` (0.4s delay).
- Use `animation-fill-mode: forwards` (via the `forwards` keyword) so layers stay visible after animation.
- **Acceptance Criteria**: On hover, layers build bottom → middle → top with 200ms stagger between each. Layers remain visible while hovering. On mouse-out, layers snap back to hidden.

## Final Acceptance Criteria

- ✅ Self-contained SVG, zero external dependencies, **no JavaScript**.
- ✅ Uses design tokens: `#EAB308` (accent), `#F5F5F4` (textmain), `#0C0A09` (primary).
- ✅ Hover-triggered, **not** auto-playing.
- ✅ 3 staggered layers: First Floor → Second Floor → Roof.
- ✅ Transparent hit-area prevents hover flicker.
- ✅ Total element count: ~10 shapes + 1 `<style>`.
- ✅ File size under 2KB.
