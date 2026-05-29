#!/usr/bin/env python3
"""
BD Glass Factory Logo Generator
Professional, modern, minimal B2B logo design
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Ensure output directory exists
os.makedirs("logo-output", exist_ok=True)

# Color palette
DEEP_BLUE = "#0A1F44"
CHAMPAGNE_GOLD = "#C9A96E"
PURE_WHITE = "#FFFFFF"
PURE_BLACK = "#0A0A0A"
MEDIUM_GRAY = "#6B7280"
LIGHT_GRAY = "#E5E7EB"
SUBTLE_BLUE = "#1E3A5F"

# Font paths
FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REGULAR = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def draw_rounded_rect(draw, xy, radius, fill):
    """Draw a rounded rectangle."""
    x1, y1, x2, y2 = xy
    draw.rounded_rectangle(xy, radius=radius, fill=fill)

def create_icon(size, bg_color, letter_color, accent_color, line_accent=True):
    """Create the BD icon (square format)."""
    img = Image.new("RGB", (size, size), hex_to_rgb(bg_color))
    draw = ImageDraw.Draw(img)
    
    padding = size // 8
    content_size = size - 2 * padding
    
    # Draw subtle background shape (rounded square or just keep clean)
    # We keep the icon area clean — no background shape for maximum versatility
    
    # Load font for BD
    font_size = int(content_size * 0.72)
    try:
        font = ImageFont.truetype(FONT_BOLD, font_size)
    except:
        font = ImageFont.load_default()
    
    # Calculate text position to center
    text = "BD"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    
    text_x = (size - text_w) // 2
    text_y = (size - text_h) // 2 - int(size * 0.02)
    
    # Draw letter shadows/subtle depth for glass feel
    if bg_color == PURE_WHITE:
        shadow_offset = max(1, size // 120)
        draw.text((text_x + shadow_offset, text_y + shadow_offset), text, font=font, fill=hex_to_rgb(LIGHT_GRAY))
    
    # Draw main letters
    draw.text((text_x, text_y), text, font=font, fill=hex_to_rgb(letter_color))
    
    # Draw the glass cut line (accent) — diagonal line through the letters
    if line_accent:
        line_w = max(2, size // 100)
        # Line from upper-mid to lower-mid, slicing through the letters
        x_start = size // 2 - int(size * 0.22)
        y_start = padding + int(size * 0.08)
        x_end = size // 2 + int(size * 0.22)
        y_end = size - padding - int(size * 0.08)
        
        # Draw subtle shadow under the line
        if bg_color == PURE_WHITE:
            draw.line([(x_start+1, y_start+1), (x_end+1, y_end+1)], fill=hex_to_rgb(LIGHT_GRAY), width=line_w+1)
        
        draw.line([(x_start, y_start), (x_end, y_end)], fill=hex_to_rgb(accent_color), width=line_w)
        
        # Add small glass-reflect highlight dots on the line
        dot_r = max(2, size // 80)
        mid_x = (x_start + x_end) // 2
        mid_y = (y_start + y_end) // 2
        
        # Small accent rectangles (glass fragments)
        frag_size = max(3, size // 55)
        draw.rectangle([mid_x - frag_size//2, mid_y - frag_size//2, 
                        mid_x + frag_size//2, mid_y + frag_size//2], 
                       fill=hex_to_rgb(accent_color))
    
    return img

def create_horizontal_logo(width, height, bg_color, letter_color, accent_color, subtext_color, tagline=True):
    """Create horizontal logo with icon + wordmark."""
    img = Image.new("RGB", (width, height), hex_to_rgb(bg_color))
    draw = ImageDraw.Draw(img)
    
    icon_size = int(height * 0.65)
    icon_padding_left = int(width * 0.06)
    icon_y = (height - icon_size) // 2
    
    # Draw icon
    icon = create_icon(icon_size, bg_color, letter_color, accent_color, line_accent=True)
    img.paste(icon, (icon_padding_left, icon_y))
    
    # Text area starts after icon
    text_x_start = icon_padding_left + icon_size + int(width * 0.04)
    text_y_center = height // 2
    
    # Main wordmark: "BD"
    main_font_size = int(height * 0.42)
    try:
        main_font = ImageFont.truetype(FONT_BOLD, main_font_size)
    except:
        main_font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), "BD", font=main_font)
    main_h = bbox[3] - bbox[1]
    main_y = text_y_center - main_h - int(height * 0.02)
    
    # Subtle shadow
    if bg_color == PURE_WHITE:
        off = max(1, height // 150)
        draw.text((text_x_start + off, main_y + off), "BD", font=main_font, fill=hex_to_rgb(LIGHT_GRAY))
    
    draw.text((text_x_start, main_y), "BD", font=main_font, fill=hex_to_rgb(letter_color))
    
    # Tagline / descriptor
    if tagline:
        tag_font_size = int(height * 0.12)
        try:
            tag_font = ImageFont.truetype(FONT_REGULAR, tag_font_size)
        except:
            tag_font = ImageFont.load_default()
        
        tag_text = "GLASS FACTORY"
        # Add letter spacing
        tag_bbox = draw.textbbox((0, 0), tag_text, font=tag_font)
        tag_w = tag_bbox[2] - tag_bbox[0]
        tag_h = tag_bbox[3] - tag_bbox[1]
        tag_y = text_y_center + int(height * 0.08)
        
        draw.text((text_x_start, tag_y), tag_text, font=tag_font, fill=hex_to_rgb(subtext_color))
        
        # Accent line under tagline
        line_y = tag_y + tag_h + int(height * 0.06)
        line_len = int(tag_w * 0.6)
        draw.line([(text_x_start, line_y), (text_x_start + line_len, line_y)], 
                  fill=hex_to_rgb(accent_color), width=max(2, height // 120))
    
    return img

def create_social_banner(width, height, bg_color, letter_color, accent_color):
    """Create a banner for social media (Facebook cover style)."""
    img = Image.new("RGB", (width, height), hex_to_rgb(bg_color))
    draw = ImageDraw.Draw(img)
    
    # Large centered icon
    icon_size = int(min(width, height) * 0.5)
    icon = create_icon(icon_size, bg_color, letter_color, accent_color, line_accent=True)
    icon_x = (width - icon_size) // 2
    icon_y = int(height * 0.15)
    img.paste(icon, (icon_x, icon_y))
    
    # Company name below
    name_font_size = int(height * 0.12)
    try:
        name_font = ImageFont.truetype(FONT_BOLD, name_font_size)
    except:
        name_font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), "BD GLASS FACTORY", font=name_font)
    name_w = bbox[2] - bbox[0]
    name_y = icon_y + icon_size + int(height * 0.08)
    name_x = (width - name_w) // 2
    draw.text((name_x, name_y), "BD GLASS FACTORY", font=name_font, fill=hex_to_rgb(letter_color))
    
    # Tagline
    tag_font_size = int(height * 0.06)
    try:
        tag_font = ImageFont.truetype(FONT_REGULAR, tag_font_size)
    except:
        tag_font = ImageFont.load_default()
    
    tag = "Professional China Glass Manufacturer"
    bbox2 = draw.textbbox((0, 0), tag, font=tag_font)
    tag_w = bbox2[2] - bbox2[0]
    tag_x = (width - tag_w) // 2
    tag_y = name_y + int(height * 0.14)
    draw.text((tag_x, tag_y), tag, font=tag_font, fill=hex_to_rgb(MEDIUM_GRAY))
    
    return img

# ========== GENERATE ALL LOGO VARIANTS ==========

print("Generating logo variants...")

# 1. Main horizontal logo (Primary — Deep Blue on White)
logo_main = create_horizontal_logo(1200, 500, PURE_WHITE, DEEP_BLUE, CHAMPAGNE_GOLD, MEDIUM_GRAY, tagline=True)
logo_main.save("logo-output/logo-main.png", "PNG")
print("✓ logo-main.png")

# 2. Horizontal logo (Dark background — White on Deep Blue)
logo_dark = create_horizontal_logo(1200, 500, DEEP_BLUE, PURE_WHITE, CHAMPAGNE_GOLD, LIGHT_GRAY, tagline=True)
logo_dark.save("logo-output/logo-dark.png", "PNG")
print("✓ logo-dark.png")

# 3. Black & White version
logo_bw = create_horizontal_logo(1200, 500, PURE_WHITE, PURE_BLACK, MEDIUM_GRAY, MEDIUM_GRAY, tagline=True)
logo_bw.save("logo-output/logo-bw.png", "PNG")
print("✓ logo-bw.png")

# 4. Icon only — Primary (for social avatars)
icon_main = create_icon(500, PURE_WHITE, DEEP_BLUE, CHAMPAGNE_GOLD, line_accent=True)
icon_main.save("logo-output/icon-main.png", "PNG")
print("✓ icon-main.png")

# 5. Icon only — Dark (for dark backgrounds)
icon_dark = create_icon(500, DEEP_BLUE, PURE_WHITE, CHAMPAGNE_GOLD, line_accent=True)
icon_dark.save("logo-output/icon-dark.png", "PNG")
print("✓ icon-dark.png")

# 6. Icon only — Black & White
icon_bw = create_icon(500, PURE_WHITE, PURE_BLACK, MEDIUM_GRAY, line_accent=True)
icon_bw.save("logo-output/icon-bw.png", "PNG")
print("✓ icon-bw.png")

# 7. Social media banner (Facebook cover style)
banner = create_social_banner(1200, 630, PURE_WHITE, DEEP_BLUE, CHAMPAGNE_GOLD)
banner.save("logo-output/social-banner.png", "PNG")
print("✓ social-banner.png")

# 8. Compact horizontal (for small spaces like email signature)
logo_compact = create_horizontal_logo(600, 250, PURE_WHITE, DEEP_BLUE, CHAMPAGNE_GOLD, MEDIUM_GRAY, tagline=True)
logo_compact.save("logo-output/logo-compact.png", "PNG")
print("✓ logo-compact.png")

# 9. Gold accent version (luxury feel)
logo_gold = create_horizontal_logo(1200, 500, PURE_WHITE, DEEP_BLUE, CHAMPAGNE_GOLD, MEDIUM_GRAY, tagline=True)
logo_gold.save("logo-output/logo-gold-accent.png", "PNG")
print("✓ logo-gold-accent.png")

print("\nAll logos generated in logo-output/")
