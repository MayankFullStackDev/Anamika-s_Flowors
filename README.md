# Anamika-s_Flowors

## Anamika Godbole — Handmade Ribbon Flower Bouquets

A luxury, mobile-first storefront for Anamika Godbole's handmade ribbon flower bouquet brand. The site pairs a cinematic black-and-rose-gold presentation with bouquet pricing, personalization options, and a WhatsApp order enquiry.

## Features

- Responsive navigation and a mobile order shortcut.
- Animated hero, collection, brand story, and custom-bouquet call to action.
- Nine bouquet sizes with the published prices.
- Custom add-ons; add-on prices are confirmed with the seller rather than estimated.
- Interactive order form with customer details, bouquet size, quantity, add-ons, occasion, colours, banner text, and instructions.
- Live bouquet subtotal and a URL-encoded WhatsApp enquiry to **+91 93220 87967**. An order is confirmed only after the seller replies.
- Booking notice: place orders at least **2 days in advance**.
- Reduced-motion support, lazy-loaded product images, meaningful image descriptions, and branded fallbacks.
- Instagram: [@anamikagodbole](https://www.instagram.com/anamikagodbole/).

## Technology

- React 19 and Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`, with project-specific styling in CSS
- Framer Motion
- Lucide React
- npm

## Project structure

```text
.
├── public/                  # Public icons and static files
├── src/
│   ├── assets/              # Local image and other source assets
│   ├── components/          # Page sections, navigation, and reusable UI
│   ├── data/bouquets.js     # Bouquet pricing, image sources, and add-ons
│   ├── App.jsx              # Page composition and bouquet selection
│   ├── App.css              # Boutique styling and responsive layouts
│   ├── index.css            # Global styles
│   └── main.jsx             # React entry point
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Requirements

Install a current Node.js LTS release with npm.

## Install and run

From the project directory:

```sh
npm install
npm run dev
```

Open [http://localhost:5180](http://localhost:5180). The Vite development server is fixed to **port 5180** with `strictPort: true`; it exits with an error if that port is unavailable rather than switching ports.

## Production build and checks

```sh
npm run build
npm run preview
npm run lint
```

The production bundle is written to `dist/`. The preview server is for local production-build review; the port 5180 requirement applies to the Vite development server.

## Deploy to GitHub Pages

The Vite configuration sets the project-site base path to `/Anamika-s_Flowors/`. The workflow in `.github/workflows/deploy.yml` installs the locked dependencies, builds the Vite site, and deploys the `dist/` artifact when changes are pushed to `main` (or when manually dispatched).

For the first deployment, open the repository's **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. GitHub Pages must use this workflow rather than publishing the repository root as a branch/Jekyll site; the unbuilt source HTML cannot load the React application. After pushing a change to `main`, follow the **Deploy to GitHub Pages** workflow in the **Actions** tab until both build and deploy jobs succeed.

## WhatsApp ordering

Select a bouquet and quantity, then provide the required customer name and phone number and any occasion, colour, add-ons, banner, or instructions. The form calculates the bouquet subtotal and opens WhatsApp with a prefilled, URL-encoded order enquiry addressed to **+91 93220 87967**. Add-on pricing and the final total are confirmed directly with the seller. Submitting the enquiry does not itself confirm the order.

## Product image credits and replacement

The image URLs are centralized in `src/data/bouquets.js`; update the `ribbonFlowerPhotos` entries with seller-approved photographs when available. The current Pexels ribbon-flower image references are stock imagery, not client photographs or a representation that they are Anamika's own products. An example source is [Elegant ribbon flowers on Pexels](https://www.pexels.com/photo/elegant-ribbon-flowers-on-textured-wall-38518675/). Each photo includes descriptive alt text and falls back to a branded visual if it cannot load.

## Environment and Git

No environment variables are required to run this frontend. Local `.env` files, dependencies, build output, and common credential files are excluded by `.gitignore`; do not commit passwords, API keys, or access tokens.
