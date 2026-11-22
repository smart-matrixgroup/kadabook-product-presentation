// Writes PRESENTER-NOTES-TA.md from the SLIDES list (strips JSX by regex, no React needed).
import { readFileSync, writeFileSync } from 'node:fs';
const src = readFileSync(new URL('../src/slides.jsx', import.meta.url), 'utf8');
const list = src.slice(src.indexOf('export const SLIDES'));
const re = /nav: '([^']+)'[^]*?time: '([^']+)',\s*ta: '([^']+)',\s*points: \[([^\]]+)\]/g;
let out = '# KadaBook — Presenter notes (தமிழ்)\n\n';
let m, n = 1;
while ((m = re.exec(list))) {
  const pts = [...m[4].matchAll(/'([^']+)'/g)].map((x) => `- ${x[1]}`).join('\n');
  out += `## ${String(n++).padStart(2, '0')} · ${m[1]}  _(${m[2]})_\n\n${m[3]}\n\n**Must mention**\n${pts}\n\n`;
}
writeFileSync(new URL('../PRESENTER-NOTES-TA.md', import.meta.url), out);
console.log('slides exported:', n - 1);
