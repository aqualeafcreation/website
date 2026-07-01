# Aqua Leaf Creation — Next.js Website
**aqualeafcreation.in**

Heritage Modern / Architectural Studio aesthetic — single-page scroll website for a bespoke aquascaping and terrarium startup based in Chhatrapati Sambhajinagar, Maharashtra.

---

## 🚀 Setup Instructions

### Step 1 — Copy Images
Before running, copy the 6 generated images into `public/images/`:

| Source file (from artifact dir)                | Destination in `public/images/`    |
|------------------------------------------------|------------------------------------|
| `hero_aquarium_1782900134734.png`              | `hero_aquarium.png`                |
| `philosophy_sketch_1782900149748.png`          | `philosophy_sketch.png`            |
| `dutch_aquarium_1782900176062.png`             | `dutch_aquarium.png`               |
| `hardscape_aquarium_1782900187934.png`         | `hardscape_aquarium.png`           |
| `terrarium_geometric_1782900200514.png`        | `terrarium_geometric.png`          |
| `paludarium_transition_1782900211590.png`      | `paludarium_transition.png`        |

Or simply **double-click** `copy_images.bat` in the parent folder (`wajahat bhaiya/`).

### Step 2 — Install Dependencies
Open a terminal in this folder and run:
```bash
npm install
```

### Step 3 — Start Dev Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
```
aqualeaf-creation/
├── app/
│   ├── layout.js          ← Root layout, SEO metadata, Google Fonts
│   ├── page.js            ← Single page — assembles all sections
│   └── globals.css        ← Design system tokens, animations
├── components/
│   ├── Navbar.js/.module.css       ← Sticky nav, dropdown, mobile overlay
│   ├── Hero.js/.module.css         ← Full-screen parallax hero
│   ├── Philosophy.js/.module.css   ← Split-screen manifesto
│   ├── Exhibitions.js/.module.css  ← 4 alternating exhibition cards
│   ├── Process.js/.module.css      ← 3-step process grid
│   ├── QuoteStrip.js/.module.css   ← Dark quote band
│   ├── Booking.js/.module.css      ← Inquiry form + contact
│   ├── Footer.js/.module.css       ← 4-column footer
│   └── ClientEffects.js            ← Cursor, scroll, reveal (client only)
├── public/
│   └── images/                     ← Place all 6 .png images here
├── jsconfig.json
├── next.config.js
└── package.json
```

## 🎨 Design System
- **Background**: Parchment White `#F5F0E8`
- **Text**: Graphite Grey `#2C2C2A`
- **Accent**: Aged Brass `#B8924A`
- **Headings**: Cormorant Garamond (Serif)
- **Body/Nav**: Space Grotesk (Sans)
- **Labels**: Roboto Mono (Mono)

## 🌐 Deployment
For **aqualeafcreation.in**:
```bash
npm run build
npm start
```
Or deploy to **Vercel** (recommended for Next.js):
```bash
npx vercel
```
