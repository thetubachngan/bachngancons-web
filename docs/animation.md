# SVG Animation Specs — Bách Ngân Construction

3 business-theme SVG animations for the Bách Ngân Engineering & Construction website.
Each prompt below is a self-contained guidance file for an LLM to generate the SVG animation code.

## Design Tokens

| Token        | Hex       | Usage                   |
|-------------|-----------|-------------------------|
| `primary`    | `#0C0A09` | Background (Obsidian)   |
| `secondary`  | `#292524` | Card background         |
| `accent`     | `#EAB308` | CTA / Highlight (Yellow)|
| `textmain`   | `#F5F5F4` | Main text (Light)       |
| `textmuted`  | `#A8A29E` | Muted text              |
| `bordercolor`| `#44403C` | Borders                 |

---

## Prompt to Generate

| # | Animation | Concept | Prompt File |
|---|-----------|---------|-------------|
| 1 | **Xây Dựng Phễu Niềm Tin** | Lưới tọa độ 2D dựng thành công trình 3D | [animation-01-trust-foundation.md](./animation-01-trust-foundation.md) |
| 2 | **Hệ Thống Vận Hành** | 5 Bánh răng quay đồng bộ liên kết 5 khâu | [animation-02-operation-system.md](./animation-02-operation-system.md) |
| 3 | **Giao Thoa Không Gian** | La kinh phong thủy, luồng gió và ánh sáng | [animation-03-space-harmony.md](./animation-03-space-harmony.md) |

### How to use
1. Open one of the prompt files above.
2. Copy the entire **"# Prompt to Generate"** section.
3. Paste it to any LLM (e.g., Claude, GPT, Gemini).
4. The LLM will output a standalone `.svg` file — save it to `docs/design/showcase/svg-animations/`.