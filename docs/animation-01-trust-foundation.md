# SVG Animation Prompt — Xây Dựng Phễu Niềm Tin (Trust Foundation)

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

Chuyển động mang đậm tính kỹ thuật. Bắt đầu từ hệ lưới tọa độ (grid), các đường nét Autocad đo đạc chính xác với các con số nhảy liên tục, sau đó mới dựng thành khối 3D.

**Output file**: `trust-foundation.svg`

---

# Prompt to Generate

## Goal

Create a standalone SVG file that animates from a 2D technical blueprint metric into a simulated 3D isometric structure. The animation must loop infinitely and use only inline `<style>` inside the SVG (no external CSS/JS).

## Step-by-step Instructions

### Step 1: SVG Config & Background Grid
- Create an `<svg>` with `xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"`.
- Set background color to dark mode (`#0C0A09`).
- Draw X and Y axes originating from the center (0,0) and extending outwards.
- Fade in a subtle background coordinate grid.
- *Visual perspective*: Top-down orthogonal 2D view.

### Step 2: AutoCAD Blueprint & Dimensions
- Draw technical lines using `stroke-dasharray` and `stroke-dashoffset` CSS animations to simulate a "Trim Paths" drawing effect.
- Shoot out dimension lines from the drawn blueprint.
- Add text elements (e.g., "0.00" to "5000.00 mm") appearing quickly at the dimension lines' ends. 

### Step 3: Transition 2D to 3D (Isometric Simulation)
- Use a CSS `transform` (e.g., `rotateX(60deg) rotateZ(45deg)`) on a grouping `<g>` element to gracefully rotate the entire flat ground grid from Top-Down to an isometric perspective over 1-2 seconds.
- The Z-axis appears, popping up vertically from the center.

### Step 4: 3D Extrusion & Material Transition
- Start extruding 2D shapes on the grid upwards along the new Z-axis to build a simulated 3D stacked structure (like a 2-story house).
- Transition from wireframe (yellow/blue strokes) to solid shapes filled with a brand color gradient (using `#EAB308`). 
- Run a "sweep light" (a fast-moving linear gradient mask or white overlay polygon with opacity) across the faces of the 3D block to add shine.

### Step 5: Final Callout
- Once the structure is solidly formed on the grid, reveal the text "BÁCH NGÂN" beside or center-aligned.
- Text can fade in or typewrite, underscored by a sharp technical line.

## Final Acceptance Criteria

- ✅ Self-contained SVG, inline CSS animations.
- ✅ Simulates 3D transformations via isometric angles (`transform: scaleY() skewX() rotate()`).
- ✅ Rich interactions mimicking Trim paths, Extrusion, and Light Sweeps.
