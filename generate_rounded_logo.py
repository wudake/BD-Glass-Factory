#!/usr/bin/env python3
"""
Generate rounded-corner versions of the BD Glass Factory logo.
Uses the existing AI-generated 3D logo and applies rounded corners.
"""

from PIL import Image, ImageDraw
import os

INPUT_LOGO = "logo-output/Logo.png"
OUTPUT_DIR = "logo-output"
PUBLIC_DIR = "bd-glass-factory/public"

# Ensure directories exist
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(PUBLIC_DIR, exist_ok=True)

def add_rounded_corners(img: Image.Image, radius_ratio: float = 0.156) -> Image.Image:
    """Add rounded corners to an image using a mask."""
    size = img.size
    radius = int(min(size) * radius_ratio)
    
    # Create rounded rectangle mask
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radius=radius, fill=255)
    
    # Apply mask to image
    result = img.copy()
    if result.mode != "RGBA":
        result = result.convert("RGBA")
    result.putalpha(mask)
    return result

def resize_maintain_ratio(img: Image.Image, target_size: tuple) -> Image.Image:
    """Resize image to fit within target_size while maintaining aspect ratio."""
    img.thumbnail(target_size, Image.LANCZOS)
    
    # Center on a transparent canvas of target size
    canvas = Image.new("RGBA", target_size, (0, 0, 0, 0))
    x = (target_size[0] - img.width) // 2
    y = (target_size[1] - img.height) // 2
    canvas.paste(img, (x, y), img)
    return canvas

def create_ico(sizes=[16, 32, 48]) -> Image.Image:
    """Create a multi-size ICO from the rounded logo."""
    # For ICO, we generate square versions at each size
    # Small favicons need smaller corner radius to look good
    images = []
    base = Image.open(INPUT_LOGO).convert("RGBA")
    
    for size in sizes:
        # Resize first
        img = base.copy()
        img = img.resize((size, size), Image.LANCZOS)
        
        # Apply rounded corners with larger ratio for tiny icons
        radius_ratio = 0.22 if size >= 48 else 0.25
        radius = max(3, int(size * radius_ratio))
        
        mask = Image.new("L", (size, size), 0)
        draw = ImageDraw.Draw(mask)
        draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
        
        img.putalpha(mask)
        images.append(img)
    
    return images

def main():
    print("Loading source logo...")
    base = Image.open(INPUT_LOGO).convert("RGBA")
    print(f"Source: {base.size}")
    
    # 1. Main rounded logo (512x512)
    print("Generating rounded logo.png...")
    rounded_512 = add_rounded_corners(base, radius_ratio=0.156)
    rounded_512.save(f"{OUTPUT_DIR}/logo-rounded-512.png", "PNG")
    rounded_512.save(f"{PUBLIC_DIR}/logo.png", "PNG")
    print("  → logo.png (512x512, rounded)")
    
    # 2. Android Chrome 192x192
    print("Generating android-chrome-192x192.png...")
    img_192 = base.copy()
    img_192 = img_192.resize((192, 192), Image.LANCZOS)
    img_192 = add_rounded_corners(img_192, radius_ratio=0.156)
    img_192.save(f"{OUTPUT_DIR}/android-chrome-192x192.png", "PNG")
    img_192.save(f"{PUBLIC_DIR}/android-chrome-192x192.png", "PNG")
    print("  → android-chrome-192x192.png")
    
    # 3. Android Chrome 512x512
    print("Generating android-chrome-512x512.png...")
    rounded_512.save(f"{OUTPUT_DIR}/android-chrome-512x512.png", "PNG")
    rounded_512.save(f"{PUBLIC_DIR}/android-chrome-512x512.png", "PNG")
    print("  → android-chrome-512x512.png")
    
    # 4. Apple Touch Icon (180x180, no transparency needed, use white bg)
    print("Generating apple-touch-icon.png...")
    img_180 = base.copy()
    img_180 = img_180.resize((180, 180), Image.LANCZOS)
    # Apple touch icon should have some padding and rounded corners (Apple applies its own mask)
    # But we can provide a slightly padded version
    canvas = Image.new("RGBA", (180, 180), (0, 0, 0, 0))
    padding = 18  # 10% padding
    inner_size = 180 - 2 * padding
    img_inner = base.copy().resize((inner_size, inner_size), Image.LANCZOS)
    img_inner = add_rounded_corners(img_inner, radius_ratio=0.156)
    canvas.paste(img_inner, (padding, padding), img_inner)
    canvas.save(f"{OUTPUT_DIR}/apple-touch-icon.png", "PNG")
    canvas.save(f"{PUBLIC_DIR}/apple-touch-icon.png", "PNG")
    print("  → apple-touch-icon.png (180x180 with padding)")
    
    # 5. Favicon sizes
    print("Generating favicon PNGs...")
    for size in [16, 32, 48]:
        img = base.copy()
        img = img.resize((size, size), Image.LANCZOS)
        radius = max(3, int(size * 0.22))
        mask = Image.new("L", (size, size), 0)
        draw = ImageDraw.Draw(mask)
        draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
        img.putalpha(mask)
        img.save(f"{OUTPUT_DIR}/favicon-{size}x{size}.png", "PNG")
        img.save(f"{PUBLIC_DIR}/favicon-{size}x{size}.png", "PNG")
        print(f"  → favicon-{size}x{size}.png")
    
    # 6. Favicon ICO (multi-size)
    print("Generating favicon.ico...")
    ico_images = create_ico(sizes=[16, 32, 48])
    ico_images[0].save(f"{OUTPUT_DIR}/favicon.ico", format="ICO", sizes=[(16,16), (32,32), (48,48)])
    ico_images[0].save(f"{PUBLIC_DIR}/favicon.ico", format="ICO", sizes=[(16,16), (32,32), (48,48)])
    print("  → favicon.ico (16x16, 32x32, 48x48)")
    
    print("\nAll rounded logos generated successfully!")
    print(f"Output: {OUTPUT_DIR}/")
    print(f"Public: {PUBLIC_DIR}/")

if __name__ == "__main__":
    main()
