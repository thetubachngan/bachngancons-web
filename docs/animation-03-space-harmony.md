# SVG Animation Prompt — Giao Thoa Không Gian (Space Harmony)

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

Lồng ghép nhẹ nhàng sự chuyển động của la bàn/la kinh định vị mặt bằng công năng, animation mô phỏng luồng gió, hướng nắng tự nhiên đi vào các phòng.

**Output file**: `space-harmony.svg`

---

# Prompt to Generate

## Goal

Create a standalone SVG file visualizing Feng Shui compass alignment, natural wind flow, and sunlight integration in interior spaces. The animation must loop infinitely and use only inline `<style>` inside the SVG (no external CSS/JS).

## Step-by-step Instructions

### Stage 1: Compass Alignment & Floorplan Fusion (0s - 4s)
- **0.0 - 1.5s**: A detailed Feng Shui Compass (La Kinh) appears center-screen. Smooth ease-out rotation stops precisely at an optimal angle.
- **1.5 - 3.0s**: Compass opacity drops to 20%. Architectural floorplan lines (walls, doors, furniture) fade-in and scale-up gently from the center of the compass outwards.
- **3.0 - 4.0s**: Transition the camera from a top-down view to a simulated 3D perspective (using CSS 3D transforms on the SVG container group).

### Stage 2: Natural Wind Flow (4s - 7s)
- Create soft particles or translucent ribbons (opacity 15-20%, light cyan or white).
- Animate these elements along a curved bezier path (`offset-path` or nested `<animateMotion>`).
- The airflow enters from an assumed window/door, circulates gently around the room's core furniture (bed/sofa), and exits, signifying excellent cross-ventilation.

### Stage 3: Natural Light Integration (7s - 10s)
- Introduce directional lines/polygons representing God Rays shining through blinds or a window form.
- **Time-lapse effect**: Slowly rotate the angle and stretch the shadow lengths over a few seconds representing morning to afternoon sunlight.
- Add a subtle glow/warm color overlay (`#EAB308`) when the light hits interior surfaces for an inviting warmth.

## Final Acceptance Criteria

- ✅ Self-contained SVG, inline CSS animations.
- ✅ Uses SVG masking and filters for sunlight/wind elements.
- ✅ Timed sequentially to tell the 3-part story in a hypnotic loop.
