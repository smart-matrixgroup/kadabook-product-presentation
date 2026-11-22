# KadaBook – Interactive Product Presentation

An immersive, interactive product presentation website for **KadaBook**, a smart business management application designed for small retail shops, grocery stores and kitchen businesses.

Built to demonstrate KadaBook's features, benefits, subscription plans, launch offer and growth plan through a modern, animated, light-mode 3D experience — in **English, Sinhala and Tamil**.

## ✨ Overview

KadaBook helps small business owners manage their daily shop operations in one place: sales, credit (කඩ ණය / கடன்), stock and profit.

This website can be used two ways:
- **Presenting** to supervisors, investors and partners (with Tamil speaker notes and a presenter window).
- **Publicly**, as a product website people can browse on their own.

## 🚀 Key Features

- 19 animated, slide-based sections in a fixed 16:9 stage that scales to any screen or projector.
- **3 languages:** English · සිංහල · தமிழ் — switch any time with the top-right button. Always opens in English.
- Live 3D background and 3D app-logo hero (Three.js) — generated locally, no downloads, works offline.
- Real KadaBook app screens inside 3D-tilting phone mockups.
- **Background music** (♫ button / `M`) with volume — generated royalty-free in the browser, or drop your own `public/music.mp3`.
- Opens **full screen** on the first click (or directly with `Start-Presentation.bat`).
- **Speaker notes in Tamil** (`N`) and a separate **presenter window** (`P`) with notes, next slide and timer that drives the main screen.
- Interactive revenue calculator for the meeting.
- Keyboard, presentation clicker and touch-swipe navigation.

## 📱 KadaBook Features

- Quick Sales & Billing (Quick sale, menu bill, hold bills, print / WhatsApp receipt)
- Credit Book with one-tap WhatsApp reminders and partial payments
- Customer Management
- Product & Stock Management (barcode scan, low-stock alerts, Excel import/export)
- Expense Management
- Sales Reports & Profit Tracking
- Kitchen Operations (raw materials → recipes → menu)
- Staff Logins & Permissions
- Branch Management
- Offline mode + cloud sync, Google Drive backup, PIN lock
- Multi-language Support (Tamil, Sinhala, English)

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| Vite | Development & Build Tool |
| Three.js | 3D Graphics |
| React Three Fiber | Three.js integration |
| Drei | 3D Helpers |
| Framer Motion | Animations |
| Lucide React | Icons |
| Web Audio API | Generated background music |
| CSS | Styling, glassmorphism & responsive scaling |

## 📂 Project Structure

```text
kadabook-product-presentation/
│
├── public/
│   ├── assets/kadabook-logo.png
│   ├── screenshots/          Original app screens from the redesign pack
│   └── app/                  Same screens with square corners (used in the phone mockups)
│
├── src/
│   ├── main.jsx              Entry (deck or ?presenter=1 console)
│   ├── App.jsx               Stage, navigation, language, music, full screen, notes
│   ├── Presenter.jsx         Presenter window (notes, next slide, timer)
│   ├── slides.jsx            All 19 slides — every text is l(English, Sinhala, Tamil) — + Tamil notes
│   ├── music.js              Background music engine
│   ├── styles.css            Design (colours from the KadaBook design tokens)
│   └── components/
│       ├── Scene3D.jsx       3D background + 3D logo
│       └── ui.jsx            Phone mockup, animations, language helpers
│
├── scripts/
│   ├── export-notes.mjs      Regenerates PRESENTER-NOTES-TA.md from slides.jsx
│   └── square-corners.py     Builds public/app/ from public/screenshots/
│
├── Start-Presentation.bat    Windows: start server + open browser in full screen
├── PRESENTER-NOTES-TA.md     Printable Tamil speaker notes
├── index.html
└── package.json
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/smart-matrixgroup/kadabook-product-presentation.git
```

### 2. Navigate to the project

```bash
cd kadabook-product-presentation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start development server

```bash
npm run dev
```

Open http://localhost:5180 — or on Windows just double-click **`Start-Presentation.bat`** (opens Chrome/Edge in full screen; close Chrome first, it ignores the full-screen flag if already running).

### 5. Build for production

```bash
npm run build
```

The production-ready files will be generated inside the `dist/` directory.

## 🎤 Presentation Controls

| Action | Control |
|---|---|
| Next slide | → · Space · PageDown · clicker |
| Previous slide | ← · PageUp |
| Language | Top-right switch · `L` · `1` English `2` සිංහල `3` தமிழ் |
| Background music | ♫ button · `M` |
| Speaker notes (Tamil) | `N` |
| Presenter window | `P` (keep on the laptop, main window on the projector) |
| All slides | `G` |
| Full screen on / off | `F` · Esc to exit |
| Mobile / tablet | Swipe left / right |

A link can open directly in another language: `?lang=ta` or `?lang=si`.

## 💼 Subscription Packages

| Package | Monthly Price | For |
|---|---:|---|
| Credit Book | LKR 750 | Small shops that mainly need credit tracking |
| Shop | LKR 1,500 | Retail shops with products & stock |
| Pro | LKR 2,500 | Restaurants, kitchens & multi-branch shops |

Pay yearly: 12 months for the price of 10.

## 🎁 Launch Offer

**First 100 Customers**

- Free installation and initial setup at the shop.
- 1 month (30 days) free, all features.
- Pay only if they like it — no obligation to subscribe after the trial.
- Daily usage follow-up during the trial.

## 🤝 Referral Program

- Every shop gets its own code in the app (`KB-XXXXXX`).
- When a referred shop pays its first month, **both shops get +1 month free**.
- Up to 10 rewards per shop per month.

## 🌐 Deployment

This project can be deployed using:

- Firebase Hosting
- Vercel
- Netlify

Build the project before deployment:

```bash
npm run build
```

Deploy the generated `dist/` folder (paths are relative, so it also works from a sub-folder).

## 📝 Important Notes

- This is a product presentation website, not the production KadaBook application.
- Application screenshots are used to demonstrate product functionality.
- Illustrative charts, sample dashboards and the revenue calculator are not actual customer or financial records.
- Fonts load from Google Fonts; without internet the site still works with system fonts.

## 👨‍💻 Development

Developed for the KadaBook product by **SMART Pvt Ltd**.

**Product:** KadaBook  
**Company:** SMART Pvt Ltd  
**Repository:** `kadabook-product-presentation`

---

© 2026 SMART Pvt Ltd. All rights reserved.
