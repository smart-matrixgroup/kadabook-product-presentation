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

Slide 17 ("The numbers") has live sliders — move them during the meeting.

## Edit content
- All slide text + Tamil notes: `src/slides.jsx` (the `SLIDES` list at the bottom holds the notes).
- A printable copy of the notes: `PRESENTER-NOTES-TA.md` (regenerate with `node scripts/export-notes.mjs`).
- Colours follow `design-system/tokens.ts` from the redesign pack.

`_old-chatgpt/` = the earlier ChatGPT version, kept only for reference.
