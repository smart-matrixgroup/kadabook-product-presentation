# KadaBook — Presentation website (v2, 3D light mode)

Supervisor / investor presentation for KadaBook, built with React + Three.js (3D) + Framer Motion.
Uses the real app screenshots and logo from `KadaBook/design/KadaBook-Redesign`.

## Run
```
npm install      # only first time
npm run dev      # opens on http://localhost:5180
```
Build a static copy (works offline, can be opened from any web host): `npm run build` → `dist/`.

## Presenting
| Key | Action |
|---|---|
| → / Space / PageDown / clicker | next slide |
| ← / PageUp | previous |
| **N** | speaker notes (Tamil) on the side |
| **P** | **presenter window** — open on your laptop, drag the main window to the projector. Next/Back in the presenter window moves the projector. Shows notes, next slide, timer. |
| **G** | all slides grid |
| **F** | full screen |
| **L** or the top-right switch | language: English / සිංහල / தமிழ் (also keys **1 / 2 / 3**) — remembered next time |
| **M** or the ♫ button | background music on/off, volume slider appears next to it |

Slide 17 ("The numbers") has live sliders — move them during the meeting.

## Music
By default a soft upbeat track is generated live in the browser (royalty-free, works offline).
To use your own song instead, put an MP3 you have the rights to at `public/music.mp3` — it is picked up automatically.

## Edit content
- All slide text: `src/slides.jsx` — every string is `l(English, Sinhala, Tamil)`. The `SLIDES` list at the bottom holds the Tamil speaker notes.
- A printable copy of the notes: `PRESENTER-NOTES-TA.md` (regenerate with `node scripts/export-notes.mjs`).
- Colours follow `design-system/tokens.ts` from the redesign pack.

`_old-chatgpt/` = the earlier ChatGPT version, kept only for reference.
