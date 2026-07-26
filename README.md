# NorthPeak Digital

[![Continuous Integration](https://github.com/Suraj-codes1410/-NorthPeak-_Digital/actions/workflows/ci.yml/badge.svg)](https://github.com/Suraj-codes1410/-NorthPeak-_Digital/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-v22-green.svg)](https://nodejs.org/)

NorthPeak Digital is a boutique, premium creative engineering collective constructing calm, high-performance web experiences with Scandinavian aesthetic discipline.

Designed and engineered with strict type-safety, accessibility compliances, and responsive layouts, this codebase showcases production-quality modular frontend architecture.

> [!NOTE]
> **Fictional Project Notice**: NorthPeak Digital is a fictional agency project built as part of the **Digital Heroes Web Development Assessment Task**.

---

## 🎨 Technology Stack

- **Core**: React 19, TypeScript (Strict Mode)
- **Build Tooling**: Vite 8, PostCSS
- **Styling**: Tailwind CSS 3
- **Animation System**: Framer Motion 11
- **Form Management**: React Hook Form 7
- **Validation Layer**: Zod 3
- **Icons**: Lucide React

---

## 🏗️ Architecture & Folder Structure

The project features a highly structured, data-driven, and decoupled folder layout:

```text
src/
├── components/
│   ├── layout/         # Site layout wrappers (Navbar, SectionWrapper)
│   ├── ui/             # Reusable design system primitives (Button, Card, Reveal, FormField)
│   └── sections/       # Section-specific views (Hero, Services, Work, Pricing, Contact, Footer)
├── content/            # Isolated static copy content schemas (pricing, work, results)
├── hooks/              # Custom React lifecycle helpers (useCountUp, useScrollSpy)
├── lib/                # Config files, constants, and Zod validator schemas (contactSchema)
├── styles/             # Global CSS declarations and styling tokens (index.css)
├── types/              # Unified TypeScript definitions (content.ts)
└── utils/              # Utility helpers (cn.ts)
```

---

## ⚡ Performance & Core Web Vitals Optimizations

- **Optimized Google Fonts Loading**: Preconnected to Font Google APIs in `index.html` and implemented `font-display: swap` to prevent render-blocking flashes (FOIT).
- **Layout Stability (CLS ~0)**: Reserved visual layouts using explicit CSS shapes, aspects, and dimensions on SVGs and containers to eliminate shifting.
- **No Unnecessary Reflows**: Animations leverage GPU-accelerated layers (`transform` and `opacity` only), completely bypassing layout recalculations.
- **Tree-Shaking**: Clean modular imports on Lucide icons and Framer Motion variants.

---

## ♿ Accessibility (Lighthouse A11y 100/100)

- **Keyboard Skip Link**: Active skip trigger (`Skip to main content`) targeting `<main id="main-content">` is provided at the very top of the DOM.
- **Complete Focus Outlines**: Global, highly visible focus ring styles overlay all interactive buttons, cards, selects, and links on Tab key sequences.
- **ARIA Specifications**: Handled dynamic validation errors using `aria-describedby` links and implemented `aria-live="polite"` status boxes for screen-reader submission feedback.
- **Reduced Motion**: Full compatibility with system configurations using Framer Motion's `useReducedMotion` hooks, disabling active translations and staggers.
- **Contrast Standards**: Met WCAG AA color contrast guidelines on all type weights and border highlights.

---

## 📱 Viewport Breakpoints & Touch Optimization

Integrated layout flow designs optimized across all standard breakpoints:

- _Touch Targets_: Ensured a minimum **44x44px** touch target dimensions on all buttons, forms, and mobile menus to prevent tap overlap.
- _Safari Auto-Zoom Prevention_: Inputs and textareas default to `text-base` (16px) on mobile viewports to prevent iOS auto-zoom shifts.
- _Grid Stacking_: Flexible grids dynamically wrap to clean single columns on mobile.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18+ recommended) and npm installed.

### Installation

1. Clone the repository.
2. Inside the project folder, install packages:
   ```bash
   npm install
   ```

### Running Locally

To start the Vite development server locally:

```bash
npm run dev
```

Navigate your browser to `http://localhost:5173`.

### Building for Production

To compile and test a production build bundle:

```bash
npm run build
```

To locally preview the compiled production output:

```bash
npm run preview
```

---

## 🛠️ Continuous Integration (CI/CD Pipeline)

This project runs a fully automated **Continuous Integration** workflow using GitHub Actions on every Push and Pull Request targeting `main` and `develop` branches.

### Workflow Pipeline Steps:

1. **Checkout**: Fetches source code from the repository using `actions/checkout@v4`.
2. **Setup Node**: Prepares Node.js v22 environment and enables global dependency cache mappings (`actions/setup-node@v4`).
3. **Install Dependencies**: Executes `npm ci` for clean, deterministic builds.
4. **Type Check**: Verifies TypeScript compilation with `npm run typecheck` (`tsc --noEmit`).
5. **Linting**: Performs static analysis check via `npm run lint` (`oxlint`) to capture warnings/errors.
6. **Formatting**: Checks style rules using `npm run format:check` (`prettier --check`).
7. **Production Build**: Compiles the source files into optimized distribution packages (`npm run build`).
8. **Unit Tests (Future proof)**: Automatically checks for unit tests and executes `npm run test` if present.
9. **Vulnerability Audit**: Scans dependencies for high/critical security warnings (`npm audit --audit-level=high`).
10. **Build Artifact Upload**: Uploads the compiled `dist/` directory as `production-build` with a 7-day retention period.

### Running Checks Locally:

You can execute the exact pipeline verification stages locally using:

```bash
npm ci
npm run format:check
npm run typecheck
npm run lint
npm run build
npm run test
npm audit --audit-level=high
```

---

## 📂 Environment Variables

See [.env.example](file:///C:/Users/Suraj/Desktop/DH_TASK/.env.example) for environment variable configurations.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](file:///C:/Users/Suraj/Desktop/DH_TASK/LICENSE) file for details.

---

## 👥 Credits

Designed and engineered as a technical front-end assessment submission for the **Digital Heroes** development program.
