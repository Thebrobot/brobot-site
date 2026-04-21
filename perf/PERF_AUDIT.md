# Brobot site — speed and load audit

This document records **measurement methodology**, **Lighthouse results** from a local production preview after the performance pass, **bundle composition**, **code changes applied**, and **tradeoffs** for third-party scripts.

## How to reproduce

1. `npm run build && npm run preview` (default preview port may be **4321** if flags overlap; check CLI output).
2. Lighthouse (example):  
   `npx lighthouse@11.6.0 http://127.0.0.1:4321/PATH --only-categories=performance --preset=desktop --output=json --output-path=perf/lighthouse-NAME.json`
3. Bundle treemap:  
   `npm run build:analyze`  
   Then open **`dist/bundle-stats.html`** in a browser (note: `dist/` is gitignored).

**WebPageTest** was not run from CI (external service). Use [https://www.webpagetest.org/](https://www.webpagetest.org/) against production (`https://thebrobot.com/...`) for real network, CDN, and HTTP/2 behavior.

---

## Lighthouse — local preview (post-change)

Target: `http://127.0.0.1:4321` after `npm run build` + `npm run preview`.  
Google Analytics and GoHighLevel still load from the network; Unicorn Studio loads from jsDelivr when eligible.

### Desktop (`--preset=desktop`)

| Path | Performance score | FCP | LCP | Total blocking time | Speed index |
|------|--------------------:|-----|-----|----------------------:|------------:|
| `/` | **52** | 0.7 s | 2.3 s | **1,500 ms** | 2.6 s |
| `/ai-phone-crm` | **99** | 0.6 s | 0.9 s | 0 ms | 0.6 s |
| `/conversational-ai` | **96** | 0.6 s | 1.4 s | 0 ms | 0.6 s |
| `/industries/hvac` | **99** | 0.6 s | 0.8 s | 0 ms | 0.6 s |

**Reading:** The home page hero is now **static Astro** (no Unicorn, no `HeroDesktop` island). Remaining TBT on `/` is driven mainly by **AutomationEngine**, **VoicePreview**, and **Navbar** (React + Framer) plus third parties. Product and industry pages stay lighter because they omit those heavy sections.

### Mobile emulation (home only)

| Path | Performance score | LCP | TBT |
|------|------------------:|-----|-----|
| `/` | **73** | 7.1 s | 10 ms |

Mobile LCP is driven by **viewport**, **font/image discovery**, and **hero weight**; re-run on production with throttling for authoritative mobile numbers.

---

## Largest client JS chunks (`dist/_astro/*.js`, raw byte size)

| Approx. size | Module (from filename) |
|-------------:|-------------------------|
| 186 KB | `client.*` — shared React + island runtime |
| 130 KB | `VoicePreview.*` |
| 116 KB | `createLucideIcon.*` — lucide-react icon factory (shared) |
| 24 KB | `utils.*` |
| 17 KB | `AutomationEngine.*` |
| 17 KB | `CustomBuildQuestionnaire.*` |
| — | *(Home hero: static HTML; no `HeroDesktop` chunk.)* |
| 10 KB | `Navbar.*` |

Use **`npm run build:analyze`** and open **`dist/bundle-stats.html`** for gzip/brotli estimates and module nesting.

---

## Implemented changes (this pass)

| Area | Change |
|------|--------|
| **Home hero** | [`HeroDesktopStatic.astro`](src/components/HeroDesktopStatic.astro) replaces the old React hero island: **no Unicorn**, **no Framer** on the hero. Removed `HeroDesktop.tsx` and unused `Hero.tsx`. |
| **Shell** | New static [`src/components/Footer.astro`](src/components/Footer.astro); removed React [`Footer.tsx`](src/components/Footer.tsx). All pages use `<Footer />` with no `client:*`. |
| **Navbar** | All pages: `client:load` → **`client:idle`** to defer hydration until the browser is idle. |
| **Mouse** | Removed [`MouseTracker`](src/components/MouseTracker.tsx) from [`BaseLayout.astro`](src/layouts/BaseLayout.astro) and deleted the component file. |
| **GoHighLevel chat** | Injected only after **first scroll** (passive, once) **or** `requestIdleCallback` (fallback `setTimeout`, 20 s cap). |
| **Unicorn Studio** | Skipped when **`prefers-reduced-motion: reduce`**. Otherwise load deferred via **`requestIdleCallback`** (with timeout) after `load`, with an optional earlier load on **first `pointerdown`**. |
| **FAQ** | [`conversational-ai.astro`](src/pages/conversational-ai.astro) now uses [`FAQ.astro`](src/components/FAQ.astro) (vanilla accordion). Removed [`FAQ.tsx`](src/components/FAQ.tsx). Added the missing **voice cloning** FAQ entry to `FAQ.astro` for parity. |
| **Industries hub** | [`CustomBuildQuestionnaire`](src/pages/industries/index.astro): `client:load` → **`client:visible`**. |
| **VoicePreview** | `React.lazy` + `Suspense` for **DemoModal** / **VoiceCloningModal**; **IntersectionObserver** pauses the industry ticker when off-screen; **`prefers-reduced-motion`** simplifies motion and EQ bars; stable **EQ peak heights** via `useMemo` (no `Math.random()` per frame). |
| **AutomationEngine** | **Debounced** ResizeObserver/resize updates (~100 ms); **`prefers-reduced-motion`** disables heavy SVG SMIL, beam CSS animation, and hover/entrance motion. |
| **Dependencies** | Removed unused **`@fontsource/*`** from `package.json`. Added **`rollup-plugin-visualizer`** and **`npm run build:analyze`**. |

---

## Tradeoffs (hard truths)

1. **Deferred GHL chat** — Visitors who never scroll and never get an idle slice within the timeout may see the widget **later**. If chat is a primary conversion path, consider a small “Chat” control that calls `inject()` immediately on click.
2. **Deferred Unicorn** — The hero WebGL-style background may appear **after** first paint; `prefers-reduced-motion` users get **no** Unicorn load (static hero only).
3. **Navbar `client:idle`** — The hub menu hydrates **after** idle; on very busy main threads it can feel slightly delayed vs `client:load`.
4. **Home page** — Still ships the **full marketing stack** (hero + engine + voice). Further gains require **removing or lazy-gating** those islands, not more micro-optimizations.

---

## Suggested next steps (not done here)

- Home hero **Unicorn + Framer removed** (see `HeroDesktopStatic.astro`). Unicorn loader in `BaseLayout` only runs if another page adds `[data-us-project]` later.
- **Astro-native navbar** with a tiny script for mobile menu to drop React from the global baseline.
- **Server-side or deferred GTM** if analytics policy allows.
