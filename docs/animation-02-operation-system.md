# SVG Animation Prompt — Hệ Thống Vận Hành (Operational System)

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

Sử dụng chuỗi chuyển động mượt mà liên kết các khâu (Thiết kế -> Xin phép -> Thi công -> Nghiệm thu -> Bảo hành) bằng hệ thống 5 bánh răng (gears) quay đồng bộ khớp vào nhau.

**Output file**: `operation-system.svg`

---

# Prompt to Generate

## Goal

Create a standalone SVG file that animates a system of 5 interlocking gears operating seamlessly. The animation must loop infinitely and use only inline `<style>` inside the SVG (no external CSS/JS).

## Setup & Layout

- **Background**: Dark `#0C0A09` or dark grid.
- **Composition**: 5 gears overlapping and arranged diagonally or left-to-right.
- **Physics**: Gear 1 (Clockwise) -> Gear 2 (Counter-Clockwise) -> Gear 3 (CW) -> Gear 4 (CCW) -> Gear 5 (CW). Ensure teeth correctly mesh without slipping.

## Step-by-step Instructions

### Gear 1: Thiết Kế (Design)
- **Visual**: Start gear. Contains animated AutoCAD-style blueprints inside.
- **Motion**: Starts slowly (Ease-In) drawing the blueprint lines with `stroke-dasharray`, then accelerates to a stable speed, driving the next gear. Camera pans slightly right.

### Gear 2: Xin Phép (Permits)
- **Visual**: Driven by Gear 1. Contains a legal document/permit icon.
- **Motion**: A stamp drops with a "THUD" (scale 150% -> 100%, slight wiggle/shake). A light sweep runs along its rim immediately after, transferring energy.

### Gear 3: Thi Công (Construction)
- **Visual**: The largest, core gear. Inside are cranes or bricks/scaffolding.
- **Motion**: Feels "heavy". Bricks drop-in (translateY + bounce). Once the frame forms, it finishes a slow, powerful revolution and locks into Gear 4.

### Gear 4: Nghiệm Thu (Handover)
- **Visual**: Bright, polished gear (yellow `#EAB308`). Icon: A checklist with checkmarks and a key.
- **Motion**: Smooth turning. Green checkmarks pop up sequentially. A key icon spins once brightly. Emits a glow transferring to Gear 5.

### Gear 5: Bảo Hành (Warranty)
- **Visual**: The final gear. Icon: A shield surrounding a house, wrapped with a clock/calendar.
- **Motion**: Smooth, reassuring turn. The shield pulses with a soft expanding glow (`box-shadow` or filter equivalent).

### Final Polish
- Zoom out to show all 5 gears turning in perfect harmony.
- Display a core message like "Vận Hành Khép Kín - Chất Lượng Trường Tồn" in the center.

## Final Acceptance Criteria

- ✅ Self-contained SVG, inline CSS animations.
- ✅ Gear teeth accurately interlock (`@keyframes rotate`).
- ✅ Smooth sequence of micro-animations within each gear.
