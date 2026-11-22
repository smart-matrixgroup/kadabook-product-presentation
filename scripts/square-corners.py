"""Make square-cornered copies of the redesign screenshots.

The design PNGs have the old mock phone's rounded screen corners (r≈42px, grey-blue fill) baked in.
Inside our own phone frame that shows as a second, odd rounded corner. For every pixel outside the
corner arc we copy the colour of the nearest pixel just inside the screen on the same row.
Input: public/screenshots/*.png  →  output: public/app/*.png
"""
from pathlib import Path
from PIL import Image

R = 44  # a bit over the measured 42px so anti-aliased edge pixels are covered
src = Path(__file__).resolve().parent.parent / 'public' / 'screenshots'
out = src.parent / 'app'
out.mkdir(exist_ok=True)

for f in sorted(src.glob('*.png')):
    im = Image.open(f).convert('RGB')
    w, h = im.size
    px = im.load()
    r_in = R - 3
    for cy, ys in ((R, range(0, R)), (h - 1 - R, range(h - R, h))):
        for y in ys:
            dy = abs(y - cy)
            # first pixel inside the arc on this row (+2 to skip the anti-aliased edge)
            inset = R - int((max(r_in * r_in - dy * dy, 0)) ** 0.5) + 2
            inset = min(inset, R + 2)
            left_fill = px[inset, y]
            right_fill = px[w - 1 - inset, y]
            for x in range(0, inset):
                px[x, y] = left_fill
            for x in range(w - inset, w):
                px[x, y] = right_fill
    im.save(out / f.name, optimize=True)
    print('ok', f.name)
