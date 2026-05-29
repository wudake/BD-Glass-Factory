#!/usr/bin/env python3
"""Generate SVG vector logos and favicon set for BD Glass Factory."""

import os
from PIL import Image

os.makedirs("logo-output", exist_ok=True)

# Color palette
DEEP_BLUE = "#0A1F44"
CHAMPAGNE_GOLD = "#C9A96E"
PURE_WHITE = "#FFFFFF"
PURE_BLACK = "#0A0A0A"
MEDIUM_GRAY = "#6B7280"
LIGHT_GRAY = "#E5E7EB"

# ------------------------------------------------------------------
# SVG Templates
# ------------------------------------------------------------------

def svg_icon(size, bg, letter, accent, with_accent=True):
    """Square BD icon SVG."""
    padding = size * 0.18
    font_size = size * 0.58
    line_w = max(1.5, size / 120)
    
    # Diagonal line coordinates
    x1 = size * 0.32
    y1 = size * 0.18
    x2 = size * 0.68
    y2 = size * 0.82
    
    # Small square fragment at center
    frag = size * 0.04
    cx = (x1 + x2) / 2
    cy = (y1 + y2) / 2
    
    accent_line = f'''<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{accent}" stroke-width="{line_w}" stroke-linecap="square"/>
    <rect x="{cx - frag/2}" y="{cy - frag/2}" width="{frag}" height="{frag}" fill="{accent}"/>''' if with_accent else ""
    
    shadow = f'''<text x="{size/2 + 2}" y="{size/2 + font_size*0.35 + 2}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="{font_size}" fill="#E5E7EB" text-anchor="middle" dominant-baseline="middle">BD</text>''' if bg == PURE_WHITE else ""
    
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 {size} {size}">
  <rect width="{size}" height="{size}" fill="{bg}"/>
  {shadow}
  <text x="{size/2}" y="{size/2 + font_size*0.35}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="{font_size}" fill="{letter}" text-anchor="middle" dominant-baseline="middle">BD</text>
  {accent_line}
</svg>'''

def svg_horizontal(width, height, bg, letter, accent, subtext, with_tagline=True):
    """Horizontal logo with icon + wordmark."""
    icon_size = height * 0.55
    icon_x = width * 0.05
    icon_y = (height - icon_size) / 2
    
    # Icon mini
    mini_font = icon_size * 0.58
    mini_line = max(1, icon_size / 120)
    mx1 = icon_x + icon_size * 0.32
    my1 = icon_y + icon_size * 0.18
    mx2 = icon_x + icon_size * 0.68
    my2 = icon_y + icon_size * 0.82
    mfrag = icon_size * 0.04
    mcx = (mx1 + mx2) / 2
    mcy = (my1 + my2) / 2
    
    icon_svg = f'''<g transform="translate({icon_x}, {icon_y})">
      <rect width="{icon_size}" height="{icon_size}" fill="{bg}"/>
      <text x="{icon_size/2 + 1}" y="{icon_size/2 + mini_font*0.35 + 1}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="{mini_font}" fill="#E5E7EB" text-anchor="middle" dominant-baseline="middle">BD</text>
      <text x="{icon_size/2}" y="{icon_size/2 + mini_font*0.35}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="{mini_font}" fill="{letter}" text-anchor="middle" dominant-baseline="middle">BD</text>
      <line x1="{icon_size*0.32}" y1="{icon_size*0.18}" x2="{icon_size*0.68}" y2="{icon_size*0.82}" stroke="{accent}" stroke-width="{mini_line}" stroke-linecap="square"/>
      <rect x="{icon_size*0.48}" y="{icon_size*0.48}" width="{mfrag}" height="{mfrag}" fill="{accent}"/>
    </g>'''
    
    # Wordmark
    text_x = icon_x + icon_size + width * 0.035
    main_font = height * 0.38
    main_y = height * 0.52
    
    wordmark = f'''<text x="{text_x + 2}" y="{main_y + 2}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="{main_font}" fill="#E5E7EC" text-anchor="start" dominant-baseline="middle">BD</text>
    <text x="{text_x}" y="{main_y}" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="{main_font}" fill="{letter}" text-anchor="start" dominant-baseline="middle">BD</text>'''
    
    tagline_svg = ""
    if with_tagline:
        tag_font = height * 0.11
        tag_y = height * 0.72
        tagline_svg = f'''<text x="{text_x}" y="{tag_y}" font-family="Arial, Helvetica, sans-serif" font-weight="400" font-size="{tag_font}" fill="{subtext}" text-anchor="start" dominant-baseline="middle" letter-spacing="{height*0.008}">GLASS FACTORY</text>
    <line x1="{text_x}" y1="{tag_y + tag_font*0.9}" x2="{text_x + width*0.22}" y2="{tag_y + tag_font*0.9}" stroke="{accent}" stroke-width="{max(1.5, height/150)}" stroke-linecap="square"/>'''
    
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <rect width="{width}" height="{height}" fill="{bg}"/>
  {icon_svg}
  {wordmark}
  {tagline_svg}
</svg>'''

# ------------------------------------------------------------------
# Generate SVGs
# ------------------------------------------------------------------

variants = [
    ("logo-main.svg",       lambda: svg_horizontal(1200, 500, PURE_WHITE, DEEP_BLUE, CHAMPAGNE_GOLD, MEDIUM_GRAY)),
    ("logo-dark.svg",       lambda: svg_horizontal(1200, 500, DEEP_BLUE, PURE_WHITE, CHAMPAGNE_GOLD, LIGHT_GRAY)),
    ("logo-bw.svg",         lambda: svg_horizontal(1200, 500, PURE_WHITE, PURE_BLACK, MEDIUM_GRAY, MEDIUM_GRAY)),
    ("icon-main.svg",       lambda: svg_icon(500, PURE_WHITE, DEEP_BLUE, CHAMPAGNE_GOLD)),
    ("icon-dark.svg",       lambda: svg_icon(500, DEEP_BLUE, PURE_WHITE, CHAMPAGNE_GOLD)),
    ("icon-bw.svg",         lambda: svg_icon(500, PURE_WHITE, PURE_BLACK, MEDIUM_GRAY)),
    ("logo-compact.svg",    lambda: svg_horizontal(600, 250, PURE_WHITE, DEEP_BLUE, CHAMPAGNE_GOLD, MEDIUM_GRAY)),
]

for fname, generator in variants:
    with open(f"logo-output/{fname}", "w") as f:
        f.write(generator())
    print(f"✓ {fname}")

# ------------------------------------------------------------------
# Generate Favicon PNGs from icon-main
# ------------------------------------------------------------------

print("\nGenerating favicon set...")

# Render SVG icon to PNG via Pillow (use existing PNG as source)
icon_src = Image.open("logo-output/icon-main.png").convert("RGBA")

sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "favicon-48x48.png": (48, 48),
    "apple-touch-icon.png": (180, 180),
    "android-chrome-192x192.png": (192, 192),
    "android-chrome-512x512.png": (512, 512),
}

for fname, size in sizes.items():
    img = icon_src.resize(size, Image.LANCZOS)
    img.save(f"logo-output/{fname}", "PNG")
    print(f"✓ {fname}")

# Create multi-resolution ICO
ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_imgs = [icon_src.resize(s, Image.LANCZOS).convert("RGBA") for s in ico_sizes]
# PIL ICO saving requires first image to contain all sizes... workaround: save 32x32 as main
ico_imgs[1].save("logo-output/favicon.ico", format="ICO", sizes=ico_sizes)
print("✓ favicon.ico")

# Dark version favicon for dark-mode browsers
icon_dark_src = Image.open("logo-output/icon-dark.png").convert("RGBA")
icon_dark_src.resize((32, 32), Image.LANCZOS).save("logo-output/favicon-dark-32x32.png", "PNG")
print("✓ favicon-dark-32x32.png")

print("\nAll SVG & favicon files generated in logo-output/")
