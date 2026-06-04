import requests
from PIL import Image
from io import BytesIO
import os

output_dir = "bd-glass-factory/public/images/about/clients"
os.makedirs(output_dir, exist_ok=True)
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
}

def try_download(url, name):
    try:
        r = requests.get(url, headers=headers, timeout=20)
        r.raise_for_status()
        img = Image.open(BytesIO(r.content))
        w, h = img.size
        if w < 200 or h < 100:
            print(f"  SKIP {name}: too small ({w}x{h})")
            return None
        ext = os.path.splitext(url.split("?")[0])[1]
        if not ext or len(ext) > 5:
            ext = ".jpg"
        filepath = os.path.join(output_dir, f"{name}{ext}")
        with open(filepath, "wb") as f:
            f.write(r.content)
        print(f"  SAVED {name}: {w}x{h} -> {filepath}")
        return filepath
    except Exception as e:
        print(f"  FAIL {name}: {e}")
        return None

# Vinco - try banner candidates
print("=== Vinco ===")
vinco_candidates = [
    "https://cdnus.globalso.com/vincowindow/zcv-1.png",
    "https://cdnus.globalso.com/vincowindow/zcv-2.png",
    "https://cdnus.globalso.com/vincowindow/zcv-3.png",
    "https://cdnus.globalso.com/vincowindow/zcv-4.png",
    "https://cdnus.globalso.com/vincowindow/zcv-5.png",
    "https://cdnus.globalso.com/vincowindow/zcv-6.png",
    "https://cdnus.globalso.com/vincowindow/left.jpg",
    "https://cdnus.globalso.com/vincowindow/right.jpg",
]
vinco_saved = []
for url in vinco_candidates:
    result = try_download(url, f"vinco_{os.path.basename(url).split('.')[0]}")
    if result:
        vinco_saved.append(result)

# Smart Alwew - try first few images
print("\n=== Smart Alwew ===")
smart_candidates = [
    "https://www.smart-alwew.com/uploads/20250401/b7a760ae2bfddc5d0369ae9895843429.png?v=1",
    "https://www.smart-alwew.com/uploads/20250402/09d2166daaf770c9ec7c8d60e1ddebe1.png",
    "https://www.smart-alwew.com/uploads/20250402/e43f00aaf43503e5003e6c3a46837cf3.png",
    "https://www.smart-alwew.com/uploads/20250402/1b1c777ec83adfbfe5d566681d0d36cc.png",
    "https://www.smart-alwew.com/uploads/20250402/ff27342d0edc6cbab4eb1b7af5c9d709.png",
    "https://www.smart-alwew.com/uploads/20250409/2bcb82a19a67064c8b60f4d526a28b63.png",
    "https://www.smart-alwew.com/uploads/20250409/03e5893addaf1f362e44985b13927fea.png",
]
smart_saved = []
for url in smart_candidates:
    result = try_download(url, f"smart_{os.path.basename(url).split('.')[0]}")
    if result:
        smart_saved.append(result)

# Forge - try candidates
print("\n=== Forge ===")
forge_candidates = [
    "https://bsg-i.nbxc.com/upload/1598/306/dc1b8195a2c03d6e2129fd16b6a81db2.jpg",
    "https://bsg-i.nbxc.com/upload/1598/306/76f821298bfb017d003a4415b8c8afe5.jpg",
    "https://bsg-i.nbxc.com/upload/1598/306/a41d28e05e1e10a7d87736dfabfc1898.jpg",
]
forge_saved = []
for url in forge_candidates:
    result = try_download(url, f"forge_{os.path.basename(url).split('.')[0]}")
    if result:
        forge_saved.append(result)

# George - try direct access
print("\n=== George Buildings ===")
try:
    r = requests.get("https://georgebuildings.com/", headers=headers, timeout=30)
    print(f"  Status: {r.status_code}, len: {len(r.text)}")
except Exception as e:
    print(f"  FAIL: {e}")

print("\nDone.")
