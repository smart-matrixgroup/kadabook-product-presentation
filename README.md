# KadaBook — Presentation website (v2, 3D light mode)

Supervisor / investor presentation for KadaBook, built with React + Three.js (3D) + Framer Motion.
Uses the real app screenshots and logo from `KadaBook/design/KadaBook-Redesign`.

## Run
**Easiest: double-click `Start-Presentation.bat`** — starts the server and opens Chrome (or Edge) already in full screen.
(Close any open Chrome windows first; Chrome ignores the full-screen flag if it is already running.)

Or manually:
```
npm install      # only first time
npm run dev      # opens on http://localhost:5180
```
Build a static copy (works offline, can be opened from any web host): `npm run build` → `dist/`.

## Presenting
Opens full screen by default: if the browser isn't already full screen, a Start screen appears and the first click / key press goes full screen. **Esc** or **F** to leave full screen.

| Key | Action |
|---|---|
| → / Space / PageDown / clicker | next slide |
| ← / PageUp | previous |
| **N** | speaker notes (Tamil) on the side |
| **P** | **presenter window** — open on your laptop, drag the main window to the projector. Next/Back in the presenter window moves the projector. Shows notes, next slide, timer. |
| **G** | all slides grid |
| **F** | full screen |
| **L** or the top-right switch | language: English / සිංහල / தமிழ் (also keys **1 / 2 / 3**). Always opens in English; `?lang=ta` / `?lang=si` in the link opens Tamil / Sinhala |
| **M** or the ♫ button | background music on/off, volume slider appears next to it |

Slide 17 ("The numbers") has live sliders — move them during the meeting.

## Music
By default a soft upbeat track is generated live in the browser (royalty-free, works offline).
To use your own song instead, put an MP3 you have the rights to at `public/music.mp3` — it is picked up automatically.

## Edit content
- All slide text: `src/slides.jsx` — every string is `l(English, Sinhala, Tamil)`. The `SLIDES` list at the bottom holds the Tamil speaker notes.
- A printable copy of the notes: `PRESENTER-NOTES-TA.md` (regenerate with `node scripts/export-notes.mjs`).
- App screens: `public/app/` = square-cornered copies of `public/screenshots/` (made by `python scripts/square-corners.py`; rerun it if you replace a screenshot).
- Colours follow `design-system/tokens.ts` from the redesign pack.

`_old-chatgpt/` = the earlier ChatGPT version, kept only for reference.
