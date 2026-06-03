#!/usr/bin/env python3
"""
Generate rounded favicon variants for BD Glass Factory
"""

from PIL import Image, ImageDraw, ImageFont
import os

DEEP_BLUE = "#0A1F44"
CHAMPAGNE_GOLD = "#C9A96E"
PURE_WHITE = "#FFFFFF"

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def create_rounded_favicon(size):
    """Create a rounded favicon with BD logo."""
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Background with rounded corners
    bg_color = hex_to_rgb(DEEP_BLUE) + (255,)
    radius = int(size * 0.2)
    
    draw.rounded_rectangle([0, 0, size-1, size-1], radius=radius, fill=bg_color)
    
    padding = max(2, int(size * 0.15))
    content_size = size - 2 * padding
    
    # Font for BD
    font_size = int(content_size * 0.65)
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    text = "BD"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    text_x = (size - text_w) // 2
    text_y = (size - text_h) // 2 - int(size * 0.02)
    
    # Draw BD text
    draw.text((text_x, text_y), text, font=font, fill=hex_to_rgb(PURE_WHITE) + (255,))
    
    # Draw accent line (gold)
    line_w = max(1, size // 30)
    x_start = size // 2 - int(size * 0.18)
    y_start = padding + int(size * 0.1)
    x_end = size // 2 + int(size * 0.18)
    y_end = size - padding - int(size * 0.1)
    
    draw.line([(x_start, y_start), (x_end, y_end)], fill=hex_to_rgb(CHAMPAGNE_GOLD) + (255,), width=line_w)
    
    # Small accent square
    frag_size = max(1, size // 45)
    mid_x = (x_start + x_end) // 2
    mid_y = (y_start + y_end) // 2
    draw.rectangle([mid_x - frag_size//2, mid_y - frag_size//2, 
                    mid_x + frag_size//2, mid_y + frag_size//2], 
                   fill=hex_to_rgb(CHAMPAGNE_GOLD) + (255,))
    
    return img

def create_favicon_ico(sizes=[16, 32, 48]):
    """Create multi-size ICO file with transparency."""
    images = []
    for size in sizes:
        img = create_rounded_favicon(size)
        images.append(img)
    
    # Save as ICO - RGBA images preserve transparency
    images[0].save("logo-output/favicon.ico", format="ICO", append_images=images[1:], sizes=[(s, s) for s in sizes])

os.makedirs("logo-output", exist_ok=True)

# Generate favicon PNGs
for size in [16, 32, 48]:
    favicon = create_rounded_favicon(size)
    favicon.save(f"logo-output/favicon-{size}x{size}.png", "PNG")
    print(f"✓ favicon-{size}x{size}.png")

# Generate ICO
create_favicon_ico()
print("✓ favicon.ico")

print("\nAll rounded favicons generated!")
