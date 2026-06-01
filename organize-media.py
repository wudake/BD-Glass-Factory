#!/usr/bin/env python3
"""
BDGLASS 素材自动分类重命名脚本
用法：
  1. 把原始素材放到 /root/BD-Glass-Factory/bd-glass-factory/public/images/_raw/ 目录
  2. 运行：python organize-media.py
  3. 脚本会按预设规则自动移动到对应目录并重命名

你也可以手动把素材丢到对应文件夹，然后按下面的命名规范改名。
"""

import os
import shutil
from pathlib import Path

# 项目根目录
PROJECT_ROOT = Path("/root/BD-Glass-Factory/bd-glass-factory/public/images")
RAW_DIR = PROJECT_ROOT / "_raw"

# 命名规范映射：目标目录 -> 文件名列表（按顺序对应）
# 你可以把素材按类别分组后放入对应目录
NAMING_MAP = {
    "products": [
        "tempered-glass",
        "insulating-glass",
        "laminated-glass",
        "craft-glass",
    ],
    "projects": [
        "guangqi-future-center",
        "european-industrial-park",
        "bright-science-city",
        "panyu-industrial-park",
        "golden-bay-aviation",
        "shadi-airport",
    ],
    "certifications": [
        "3c-tempered",
        "insulating-glass-cert",
        "3c-test-report",
        "warranty-10-year",
        "desiccant-warranty",
        "foshan-safety-association",
        "glass-association",
        "door-window-association",
    ],
    "home": [
        "hero-bg",
        "about-preview",
    ],
    "about": [
        "factory-exterior",
        "factory-interior",
        "team-photo",
    ],
    "equipment": [
        "tempering-furnace",
        "cnc-cutting",
        "edge-grinding",
        "cleaning-line",
        "autoclave",
    ],
    "factory": [
        "workshop-1",
        "workshop-2",
        "warehouse",
        "quality-inspection",
    ],
    "services": [
        "custom-processing",
        "one-stop-solution",
        "oem-odm",
        "global-delivery",
    ],
    "team": [
        "team-1",
        "team-2",
        "training",
    ],
    "partners": [
        "partner-1",
        "partner-2",
        "partner-3",
        "partner-4",
    ],
}

def get_extension(filename: str) -> str:
    """获取文件扩展名（小写）"""
    return Path(filename).suffix.lower()

def is_image(filename: str) -> bool:
    """检查是否为图片文件"""
    return get_extension(filename) in {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"}

def organize_raw():
    """自动整理 _raw 目录下的素材"""
    if not RAW_DIR.exists():
        print(f"❌ 素材目录不存在：{RAW_DIR}")
        print("   请先创建该目录并把素材放进去")
        return

    raw_files = [f for f in RAW_DIR.iterdir() if f.is_file() and is_image(f.name)]
    if not raw_files:
        print(f"⚠️  {RAW_DIR} 目录下没有找到图片素材")
        return

    print(f"📁 发现 {len(raw_files)} 张素材图片")
    print("=" * 60)

    # 按子目录分组（假设用户已手动把素材分到了子目录）
    for subdir in RAW_DIR.iterdir():
        if not subdir.is_dir():
            continue

        category = subdir.name
        if category not in NAMING_MAP:
            print(f"⚠️  跳过未知分类：{category}")
            continue

        files = sorted([f for f in subdir.iterdir() if f.is_file() and is_image(f.name)])
        names = NAMING_MAP[category]

        print(f"\n📂 [{category}] 找到 {len(files)} 张素材，需要 {len(names)} 张")

        target_dir = PROJECT_ROOT / category
        target_dir.mkdir(parents=True, exist_ok=True)

        for i, file in enumerate(files):
            if i >= len(names):
                # 多余素材，保留原编号
                new_name = f"{category}-{i + 1 - len(names)}{get_extension(file.name)}"
            else:
                new_name = f"{names[i]}{get_extension(file.name)}"

            target = target_dir / new_name
            shutil.copy2(file, target)
            print(f"   ✅ {file.name:40s} → {target}")

    print("\n" + "=" * 60)
    print("🎉 素材整理完成！")
    print("   如需调整，直接替换对应文件即可。")

def show_checklist():
    """输出当前图片素材缺口清单"""
    print("\n📋 当前图片素材缺口检查")
    print("=" * 60)

    for category, names in NAMING_MAP.items():
        target_dir = PROJECT_ROOT / category
        existing = set()
        if target_dir.exists():
            for f in target_dir.iterdir():
                if f.is_file() and is_image(f.name):
                    existing.add(f.stem)

        missing = [n for n in names if n not in existing]

        if missing:
            print(f"\n📂 [{category}] — 缺 {len(missing)}/{len(names)} 张")
            for m in missing:
                print(f"   ⬜ {m}.jpg")
        else:
            print(f"\n📂 [{category}] — ✅ 全部就绪 ({len(names)} 张)")

        # 显示已有的额外素材
        extra = existing - set(names)
        if extra:
            print(f"   📝 额外素材：{', '.join(sorted(extra))}")

    print("\n" + "=" * 60)

def convert_to_webp(quality: int = 85):
    """把所有图片转换为 WebP 格式（需要 Pillow）"""
    try:
        from PIL import Image
    except ImportError:
        print("❌ 需要安装 Pillow：pip install Pillow")
        return

    print("\n🔄 开始转换为 WebP 格式...")
    count = 0

    for category in NAMING_MAP.keys():
        target_dir = PROJECT_ROOT / category
        if not target_dir.exists():
            continue

        for file in target_dir.iterdir():
            if not file.is_file() or file.suffix.lower() == ".webp":
                continue
            if not is_image(file.name):
                continue

            try:
                img = Image.open(file)
                webp_path = file.with_suffix(".webp")
                img.save(webp_path, "WEBP", quality=quality)
                count += 1
                print(f"   ✅ {file.name} → {webp_path.name}")
            except Exception as e:
                print(f"   ❌ {file.name} 转换失败：{e}")

    print(f"\n🎉 共转换 {count} 张图片为 WebP")

if __name__ == "__main__":
    import sys

    if len(sys.argv) > 1:
        cmd = sys.argv[1]
        if cmd == "check":
            show_checklist()
        elif cmd == "webp":
            convert_to_webp()
        elif cmd == "help":
            print(__doc__)
        else:
            print(f"未知命令：{cmd}")
            print("用法：python organize-media.py [check|webp|help]")
    else:
        # 默认执行检查和整理
        show_checklist()
        print("\n")
        organize_raw()
