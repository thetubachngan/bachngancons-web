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
| 1 | **Solid Foundation** | Pillar drops & settles — foundation work (Móng đơn, Băng, Bè, Cọc) | [animation-01-solid-foundation.md](./animation-01-solid-foundation.md) |
| 2 | **Blueprint Scan** | Document scanning reveal — transparent pricing (Báo giá minh bạch) | [animation-02-blueprint-scan.md](./animation-02-blueprint-scan.md) |
| 3 | **Growing Structure** | House builds on hover — turnkey service (Thi công trọn gói) | [animation-03-growing-structure.md](./animation-03-growing-structure.md) |

### How to use
1. Open one of the prompt files above.
2. Copy the entire **"# Prompt to Generate"** section.
3. Paste it to any LLM (e.g., Claude, GPT, Gemini).
4. The LLM will output a standalone `.svg` file — save it to `docs/design/showcase/svg-animations/`.