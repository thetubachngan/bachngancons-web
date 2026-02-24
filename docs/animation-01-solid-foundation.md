# SVG Animation Prompt — Solid Foundation (Nền Móng Vững Chắc)

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

A construction pillar/block drops from above, lands on a ground line, and "settles" with a satisfying squash-and-settle effect — symbolizing foundation work (Móng đơn, Băng, Bè, Cọc) for a construction company website.

**Output file**: `solid-foundation.svg`

---

# Prompt to Generate

## Goal

Create a standalone SVG file that animates a construction foundation block dropping and settling onto a ground line. The animation must loop infinitely and use only inline `<style>` inside the SVG (no external CSS/JS).

## Step-by-step Instructions

### Step 1: SVG Container Setup
- Create an `<svg>` element with `xmlns="http://www.w3.org/2000/svg"`.
- Set `viewBox="0 0 64 64"` for a square canvas.
- Add `class="w-16 h-16"` for default sizing.
- **Acceptance Criteria**: The SVG renders as a 64×64 coordinate space.

### Step 2: Draw the Ground Line
- Add a `<rect>` element at the bottom of the canvas.
- Position: `x="0" y="56" width="64" height="4"`.
- Fill color: `#44403C` (bordercolor token).
- **Acceptance Criteria**: A thin horizontal bar sits flush at the bottom of the SVG.

### Step 3: Draw the Foundation Pillar
- Add a `<rect>` element representing the pillar/block.
- Position: `x="20" y="8" width="24" height="48"`.
- Fill color: `#EAB308` (accent yellow).
- Add `rx="2"` for slightly rounded corners.
- Apply class `anim-foundation`.
- **Acceptance Criteria**: A tall yellow rectangle sits above the ground line, centered horizontally.

### Step 4: Create the Keyframe Animation `sink-solidify`
- Define `@keyframes sink-solidify` inside a `<style>` tag within the SVG.
- **Keyframe breakdown**:
  - `0%`: `translateY(-10px)`, `opacity: 0` — pillar starts above, invisible.
  - `40%`: `translateY(0)`, `opacity: 1`, `brightness(1)` — pillar drops into place.
  - `60%`: `scaleY(0.95) translateY(2px)`, `brightness(1.2)` — squash effect on impact, brief glow.
  - `80%`: `scaleY(1) translateY(0)`, `brightness(1)` — spring back to normal.
  - `100%`: `translateY(0)`, `opacity: 1` — hold final position.
- **Acceptance Criteria**: The pillar drops, squashes slightly on "landing", then settles. Creates a weighty, satisfying feel.

### Step 5: Apply the Animation Class
- In the `<style>`, define `.anim-foundation`:
  - `animation: sink-solidify 2.5s cubic-bezier(0.25, 1, 0.5, 1) infinite`
  - `transform-origin: bottom` (squash anchors to ground).
- **Acceptance Criteria**: The pillar continuously loops the drop → squash → settle animation anchored from its bottom edge.

## Final Acceptance Criteria

- ✅ Self-contained SVG file, zero external dependencies.
- ✅ Uses only the design tokens: `#EAB308` (accent), `#44403C` (border).
- ✅ Animation loops infinitely with smooth easing.
- ✅ Total element count: 2 `<rect>` + 1 `<style>`.
- ✅ File size under 1KB.
