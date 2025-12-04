# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Quick commands

- Run a local static server (recommended for development):
  - macOS/Linux (Python 3):
    - `python3 -m http.server 8000`
    - open http://localhost:8000
- Open a single page without a server (less realistic for relative links):
  - `open index.html`
- Linting / tests: none are configured in this repo.

## Project essentials (architecture)

- Stack: plain HTML + CSS + minimal vanilla JS. No build system, package manager, or framework.
- Structure (multi‑page app):
  - Root pages: `index.html`, `about.html`, `contact.html`, `labs/index.html`.
  - Textbook hub: `textbook/index.html` with subject sections:
    - Physics → `textbook/physics/index.html`
    - Engineering Fundamentals → `textbook/engineering-fundamentals/index.html`
  - Shared assets: `assets/css/styles.css`, `assets/js/main.js`.
- Reusable UI patterns across pages:
  - Header/nav duplicated in each page; active link indicated by `a.active`.
  - “Skip to content” link for accessibility targets the main heading or `#main`.
  - Layout utilities in CSS: `.container`, `.grid.cols-2/.cols-3`, `.card`, `.btn`, `.small`.
- Accessibility & design system:
  - High‑contrast palette via CSS variables in `:root`.
  - Focus styles for links and form inputs; WCAG‑conscious color and contrast.
  - Minimal JS; pages are fully functional without JavaScript.

## Editing and extending

- Navigation: because there’s no templating, update the header/nav in each page when adding or renaming sections; keep hrefs relative (e.g., `../index.html`).
- New subject or section:
  - Mirror the directory pattern used by Physics/Engineering under `textbook/` and add a corresponding card/link in `textbook/index.html` and the global nav of each page.
- Styles:
  - Prefer existing tokens (`--primary`, `--surface`, etc.) and utilities before adding new rules. Keep components semantic (e.g., `.card`, `.btn`).
- Scripts:
  - Place any light progressive enhancement code in `assets/js/main.js`. Avoid heavy client‑side dependencies to preserve performance and accessibility.

## Notes from README.md

- “Open `index.html` with any static server (or your editor’s live server). All assets are under `assets/`.”
- Intentional scope: Biology, Chemistry, and Maths are omitted in this edition.
