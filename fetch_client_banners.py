import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import os

clients = [
    ("derchiwindow.com", "https://www.derchiwindow.com/"),
    ("vincowindow.com", "https://www.vincowindow.com/"),
    ("smart-alwew.com", "https://www.smart-alwew.com/"),
    ("boswindor.com", "https://boswindor.com/"),
    ("georgebuildings.com", "https://georgebuildings.com/"),
    ("forgewindow.com", "https://www.forgewindow.com/"),
]

output_dir = "bd-glass-factory/public/images/about/clients"
os.makedirs(output_dir, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
}

results = {}

for name, url in clients:
    try:
        print(f"\n=== Fetching {name} ===")
        resp = requests.get(url, headers=headers, timeout=20, allow_redirects=True)
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")

        # 1. Try og:image
        og_img = soup.find("meta", property="og:image")
        if og_img and og_img.get("content"):
            img_url = og_img["content"]
            print(f"  og:image: {img_url}")
            results[name] = img_url
            continue

        # 2. Try first <img> inside a banner/hero/slider section
        selectors = [
            "section.banner img",
            "section.hero img",
            "div.banner img",
            "div.hero img",
            "div.slider img",
            "div.carousel img",
            ".banner img",
            ".hero img",
            ".slider img",
            "header img",
            "#banner img",
            "#hero img",
            "#slider img",
        ]
        found = False
        for sel in selectors:
            img = soup.select_one(sel)
            if img and img.get("src"):
                img_url = img["src"]
                if img_url.startswith("data:"):
                    continue
                img_url = urljoin(url, img_url)
                print(f"  selector '{sel}': {img_url}")
                results[name] = img_url
                found = True
                break
        if found:
            continue

        # 3. Fallback: find the largest img by width attribute in first viewport
        imgs = soup.find_all("img")
        best_img = None
        best_score = 0
        for img in imgs:
            src = img.get("src") or img.get("data-src") or img.get("data-lazy-src")
            if not src or src.startswith("data:") or "icon" in src.lower() or "logo" in src.lower():
                continue
            w = img.get("width")
            h = img.get("height")
            score = 0
            try:
                if w:
                    score += int(w)
                if h:
                    score += int(h)
            except:
                pass
            if score > best_score:
                best_score = score
                best_img = src

        if best_img:
            img_url = urljoin(url, best_img)
            print(f"  largest img: {img_url}")
            results[name] = img_url
        else:
            print(f"  NO IMAGE FOUND")
            results[name] = None

    except Exception as e:
        print(f"  ERROR: {e}")
        results[name] = None

# Download images
print("\n=== Downloading images ===")
for name, img_url in results.items():
    if not img_url:
        print(f"  SKIP {name}: no URL")
        continue
    try:
        ext = os.path.splitext(urlparse(img_url).path)[1]
        if not ext or len(ext) > 5:
            ext = ".jpg"
        ext = ext.split("?")[0]
        filename = f"{name}{ext}"
        filepath = os.path.join(output_dir, filename)

        r = requests.get(img_url, headers=headers, timeout=20)
        r.raise_for_status()
        with open(filepath, "wb") as f:
            f.write(r.content)
        print(f"  SAVED {name}: {filename} ({len(r.content)} bytes)")
    except Exception as e:
        print(f"  FAILED {name}: {e}")

print("\nDone.")
