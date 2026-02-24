# SVG Animation Prompt — Blueprint Scan (Bản Vẽ Minh Bạch)

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

A document/blueprint icon is revealed by a scanning light that sweeps top-to-bottom, then disappears bottom-up — symbolizing transparent pricing and survey process (Báo giá minh bạch, khảo sát) for a construction company website.

**Output file**: `blueprint-scan.svg`

---

# Prompt to Generate

## Goal

Create a standalone SVG file that shows a document/blueprint icon with a scanning highlight effect that sweeps top-to-bottom and then disappears bottom-to-top, looping infinitely. Uses CSS `clip-path` animation inside the SVG.

## Step-by-step Instructions

### Step 1: SVG Container Setup
- Create an `<svg>` element with `xmlns="http://www.w3.org/2000/svg"`.
- Set `viewBox="0 0 24 24"` (standard icon grid).
- Add `fill="none"` for stroke-based icon.
- Add `class="w-16 h-16"` for default sizing.
- **Acceptance Criteria**: SVG renders as a 24×24 coordinate space, no fills by default.

### Step 2: Draw the Static Document Outline (Ghost Layer)
- Add a `<path>` element with **all** of these sub-paths combined into one `d` attribute:
  - Two horizontal text lines: `M9 12h6` and `M9 16h6` (representing document content lines).
  - Document body with folded corner: `M2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z`.
- Stroke: `#F5F5F4` (textmain), `stroke-width="1"`, `opacity="0.3"`.
- Add `stroke-linecap="round"` and `stroke-linejoin="round"`.
- **Acceptance Criteria**: A faint, semi-transparent document icon is always visible as the base layer.

### Step 3: Draw the Scanning Highlight Layer
- Duplicate the same `<path>` from Step 2 but with different styling:
  - Stroke: `#EAB308` (accent yellow), `stroke-width="2"`.
  - Apply class `anim-scan`.
- **Acceptance Criteria**: A bright yellow version of the same icon sits on top, ready for animation.

### Step 4: Create the Keyframe Animation `blueprint-scan`
- Define `@keyframes blueprint-scan` inside a `<style>` tag:
  - `0%`:
    - `clip-path: polygon(0 0, 100% 0, 100% 0, 0 0)` — fully clipped (invisible).
    - `filter: drop-shadow(0 0 1px #EAB308)` — subtle glow.
  - `50%`:
    - `clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)` — fully revealed.
    - `filter: drop-shadow(0 0 5px #EAB308)` — peak glow.
  - `100%`:
    - `clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%)` — clipped from top (disappears upward).
    - `filter: drop-shadow(0 0 1px #EAB308)` — subtle glow.
- **Acceptance Criteria**: The yellow highlight sweeps down to fully reveal, then sweeps up to fully hide. The `drop-shadow` creates a scanner glow effect.

### Step 5: Apply the Animation Class
- Define `.anim-scan`:
  - `animation: blueprint-scan 3s ease-in-out infinite`.
- **Acceptance Criteria**: The scan loop runs continuously at a comfortable pace (3 seconds per cycle).

## Final Acceptance Criteria

- ✅ Self-contained SVG, zero external dependencies.
- ✅ Uses design tokens: `#EAB308` (accent), `#F5F5F4` (textmain).
- ✅ Two-layer approach: ghost outline + animated highlight on top.
- ✅ `clip-path` polygon animation creates the scanning reveal/hide.
- ✅ `drop-shadow` filter creates the glowing scanner effect.
- ✅ Total element count: 2 `<path>` + 1 `<style>`.
- ✅ File size under 1.5KB.
