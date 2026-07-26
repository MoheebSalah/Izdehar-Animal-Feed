# Izdehar Animal Feed — ازدهار للأعلاف

A single-page marketing site for **Izdehar Animal Feed**, a Palestinian animal feed manufacturer. Built from a Figma design as a fully Arabic, right-to-left landing page with scroll-driven motion throughout.

**🔗 Live site: [izfeed.vercel.app](https://izfeed.vercel.app)**

> The interface language is Arabic (RTL) only. This README is in English for the benefit of visitors browsing the repository.

---

## ✨ Features

- **Full RTL Arabic layout** — `dir="rtl"` at the document root, with custom Arabic display and body typefaces loaded locally through `next/font/local`.
- **Smooth scrolling** — [Lenis](https://lenis.darkroom.engineering/) drives the scroll, with browser scroll restoration disabled before hydration so the page always opens at the top.
- **Scroll-triggered animation** — [GSAP](https://gsap.com/) + ScrollTrigger power the parallax collage, the footer reveal, and the section entrances.
- **Interactive product explorer** — swipeable/draggable category cards covering the full catalogue: livestock, poultry, dairy cattle, and horse feed.
- **Parallax image gallery** — a rotated, layered photo collage whose pieces move at independent speeds on desktop, with a dedicated mobile layout.
- **Animated loading screen** — a branded intro that plays before the hero is revealed.
- **Testimonials, contact form, and map** section with an adaptive desktop/mobile ordering.
- **Responsive from a fixed design canvas** — the Figma source targets a MacBook Pro 16" (1728×1117); all type and spacing are expressed in `rem` so the layout scales cleanly across desktop sizes, with tailored mobile breakpoints.

## 🛠 Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) with the React Compiler |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Animation | [GSAP 3](https://gsap.com/) + `@gsap/react` |
| Scrolling | [Lenis](https://lenis.darkroom.engineering/) |
| Hosting | [Vercel](https://vercel.com/) |

## 📁 Project Structure

Each page section lives in its own folder under `app/`, with shared building blocks in `app/components/`.

```
app/
├── layout.tsx            # RTL root layout, local fonts, smooth scroll wrapper
├── page.tsx              # Composes every section in order
├── globals.css           # Tailwind entry + design tokens
├── hero/                 # Landing hero
├── products/             # Product categories and the full feed catalogue
├── about/                # Company story
├── gallery/              # Parallax photo collage
├── testimonials/         # Customer quotes
├── contact/              # Contact form + location map
├── cta/                  # Closing call to action
├── footer/               # Animated footer
└── components/           # Navbar, LoadingScreen, ProductCard, GalleryImage,
                          # Parallax, SmoothScroll
public/
├── assets/               # Product and gallery imagery
├── fonts/                # Local Arabic typefaces
├── photos/
└── svgs/
```

## 🎨 Design System

| Token | Value |
| --- | --- |
| Primary | `#009147` |
| Secondary | `#ffc73a` |
| Text | `#000f07` |
| Subtext | `#5d6d65` |
| Light | `#84908a` |
| Muted | `#a6a7a7` |

Conventions used across the codebase:

- Tailwind utility classes only — no inline styles and no CSS modules.
- Font sizes in `rem`, converted from the Figma pixel values at the design canvas width.
- All text uses a `1.4` line height (`leading-[1.4]`).
- Copy is written directly into the markup rather than pulled from a content file.

## 🚀 Getting Started

**Prerequisites:** Node.js 20 or newer.

```bash
# 1. Clone
git clone https://github.com/MoheebSalah/Izdehar-Animal-Feed.git
cd Izdehar-Animal-Feed

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## 🚢 Deployment

The site is deployed on **Vercel** at [izfeed.vercel.app](https://izfeed.vercel.app). Pushes to `main` trigger an automatic production deployment; pull requests get their own preview URLs.

## 🤖 Built With Claude

This project was developed with the help of **[Claude](https://claude.com/claude-code)** (Anthropic). Claude Code was used throughout as a pair-programming assistant — translating the Figma design into responsive Tailwind markup, implementing the GSAP scroll animations, and refining the RTL layout. Project-specific conventions for the assistant are documented in [`CLAUDE.md`](CLAUDE.md) and [`AGENTS.md`](AGENTS.md). All code was reviewed and tested before being committed.

## 👤 Author

**Moheeb Salah**
GitHub: [@MoheebSalah](https://github.com/MoheebSalah)

## 📄 License

No open-source license is attached to this repository, so the work is under standard copyright. Brand assets, photography, and copy belong to Izdehar Animal Feed. Please get in touch before reusing any part of it.
