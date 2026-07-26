# Changelog

All notable changes to the NorthPeak Digital project will be documented in this file.

---

## [1.0.0] - 2026-07-26

### 🚀 Added Features

- **Phase 1 — Design System**: Established core typographic hierarchy (Fraunces, Inter, IBM Plex Mono) and color palettes (Warm gray background, primary slate, and gold highlight badge).
- **Phase 2 — Content Layer**: Created type-safe JSON/TS structures to isolate copy from UI components.
- **Phase 3 — Navigation**: Built responsive navigation with desktop Spy-Scroll tracking and accessible mobile menu drawer with focus trapping.
- **Phase 4 — Hero**: Designed premium hero section featuring delayed vital metrics overlays and contour SVG art.
- **Phase 5 — Services**: Implemented capabilities grids supporting staggered animation reveals.
- **Phase 6 — Selected Work**: Built project grids showcasing italicized client testimonials, SVGs, and stack tables.
- **Phase 7 — Results & Testimonials**: Created viewport-triggered counting hooks (`useCountUp`) and customer quotes sections.
- **Phase 8 — Pricing**: Designed service packages layout showing Basecamp, Ascent, and Summit tiers.
- **Phase 9 — Contact**: Integrated validation schemas (Zod) and form binders (React Hook Form) to handle inquiries.
- **Phase 10 — Assessment Attribution**: Added visual attribution cards indicating the task context for submission.
- **Phase 11 — Footer**: Built semantic footers with scroll-to-top actions and custom social vectors.
- **Phase 12 — Motion System**: Centralized animation speeds in `motion.ts` and unified card/button lifts.
- **Phase 13 — Responsive Refinement**: Patched iOS Safari auto-zoom, forced metric nowrap properties, and set mobile buttons to 44px min-height.
- **Phase 14 — Production Readiness**: Implemented skip-to-main links, comprehensive canonical/OG/Twitter SEO metadata, and screen-reader polite status regions.

### ♿ Accessibility Improvements

- Keyboard navigation audits ensure every button, card, and select is focusable with clear focus ring indicators.
- Supports reduced-motion properties globally, silencing translate/stagger animations and running quiet fades.
- Input validations connect to inputs via `aria-describedby` elements.

### ⚡ Performance Optimizations

- Strict tree-shaking of SVG icons and layout components.
- Font displaying is configured as swap to maintain fast visual paint times.
- Lighthouse testing targets: 95+ Performance, 100 Accessibility, 100 Best Practices, and 100 SEO.
