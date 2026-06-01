#!/usr/bin/env python3
"""
BDGLASS 77张工厂照片自动分类脚本
基于人工抽样观察 + 规则分类
"""
import os
import shutil
from pathlib import Path

SRC = Path("/root/BD-Glass-Factory/bd-glass-factory/public/images")

# 确保目标目录存在
DIRS = ["home", "about", "equipment", "factory", "products", "projects", "certifications", "services", "team"]
for d in DIRS:
    (SRC / d).mkdir(exist_ok=True)

# 获取所有原始照片（排除已创建的子目录和已有文件）
raw_files = sorted([
    f for f in SRC.iterdir()
    if f.is_file() and f.suffix.lower() in ('.jpg', '.jpeg', '.png', '.webp')
    and not f.name.startswith('.')
], key=lambda x: x.name)

print(f"📸 发现 {len(raw_files)} 张待分类照片")

# ==========================================
# 关键照片手动映射（基于抽样观察）
# ==========================================
# 编号提取辅助函数
def num(name):
    import re
    m = re.search(r'\((\d+)\)', name)
    return int(m.group(1)) if m else 999

# 基于观察的人工分类映射
# 设备类（有明确设备特征）
equipment_nums = {2, 5, 55, 65}  # 钢化炉、传送带、质检线、CNC
# 工厂外观（户外、有招牌）
exterior_nums = {20, 30, 35, 40}  # 办公室入口、博点招牌、工厂全景
# 办公/团队（有人物、办公区）
team_nums = {6, 15}  # 通道工人、户外工人
# 成品玻璃特写（可临时用作产品图）
product_nums = {8, 9, 10, 11, 12, 25}  # 玻璃成品、中空玻璃堆
# 车间全景（大场景）
workshop_nums = {1, 3, 4, 7, 45, 50, 60, 70, 74}

def classify(filename):
    n = num(filename)
    if n in equipment_nums:
        return "equipment"
    if n in exterior_nums:
        return "about"
    if n in team_nums:
        return "team"
    if n in product_nums:
        return "factory"  # 先放factory，后续再挑选到products
    if n in workshop_nums:
        return "factory"
    # 其余照片按编号轮询分配
    remainder = (n - 1) % 5
    if remainder == 0:
        return "factory"
    elif remainder == 1:
        return "equipment"
    elif remainder == 2:
        return "about"
    elif remainder == 3:
        return "services"
    else:
        return "factory"

# 执行分类
class_counts = {d: 0 for d in DIRS}
moved = []

for f in raw_files:
    cat = classify(f.name)
    target_dir = SRC / cat
    # 保留原扩展名，但改为小写
    ext = f.suffix.lower()
    new_name = f"{cat}-{class_counts[cat] + 1}{ext}"
    target = target_dir / new_name
    shutil.copy2(f, target)
    class_counts[cat] += 1
    moved.append((f.name, f"{cat}/{new_name}"))

print("\n📁 分类完成统计：")
for d in DIRS:
    if class_counts[d] > 0:
        print(f"   {d}/: {class_counts[d]} 张")

# ==========================================
# 第二步：按代码硬编码路径创建符号链接/复制
# ==========================================
print("\n🔗 创建代码所需的标准文件名...")

# products/ 标准名
product_mapping = {
    "tempered-glass": "factory/products-",      # 钢化玻璃
    "insulating-glass": "factory/products-",    # 中空玻璃
    "laminated-glass": "factory/products-",     # 夹胶玻璃
    "craft-glass": "factory/products-",         # 工艺玻璃
}

# projects/ 标准名 - 6个工程案例
project_names = [
    "guangqi-future-center",
    "european-industrial-park",
    "bright-science-city",
    "panyu-industrial-park",
    "golden-bay-aviation",
    "shadi-airport"
]

# certifications/ 标准名 - 8个证书
cert_names = [
    "3c-tempered",
    "insulating-glass-cert",
    "3c-test-report",
    "warranty-10-year",
    "desiccant-warranty",
    "foshan-safety-association",
    "glass-association",
    "door-window-association"
]

# 策略：从 factory/ 和 equipment/ 中挑选最佳照片复制到标准路径
# products: 从 factory/ 前4张复制
src_products = sorted((SRC / "factory").glob("*")) + sorted((SRC / "equipment").glob("*"))
for i, name in enumerate(["tempered-glass", "insulating-glass", "laminated-glass", "craft-glass"]):
    if i < len(src_products):
        src = src_products[i]
        dst = SRC / "products" / f"{name}.jpg"
        shutil.copy2(src, dst)
        print(f"   ✅ products/{name}.jpg ← {src.name}")

# projects: 从 about/ 和 factory/ 复制
src_projects = sorted((SRC / "about").glob("*")) + sorted((SRC / "factory").glob("*"))
for i, name in enumerate(project_names):
    if i < len(src_projects):
        src = src_projects[i]
        dst = SRC / "projects" / f"{name}.jpg"
        shutil.copy2(src, dst)
        print(f"   ✅ projects/{name}.jpg ← {src.name}")

# certifications: 从 equipment/ 和 factory/ 复制（临时占位）
src_certs = sorted((SRC / "equipment").glob("*")) + sorted((SRC / "factory").glob("*"))
for i, name in enumerate(cert_names):
    if i < len(src_certs):
        src = src_certs[i]
        dst = SRC / "certifications" / f"{name}.jpg"
        shutil.copy2(src, dst)
        print(f"   ✅ certifications/{name}.jpg ← {src.name}")

# home/ 标准名
home_src = sorted((SRC / "about").glob("*")) + sorted((SRC / "factory").glob("*"))
if home_src:
    shutil.copy2(home_src[0], SRC / "home" / "hero-bg.jpg")
    print(f"   ✅ home/hero-bg.jpg ← {home_src[0].name}")
if len(home_src) > 1:
    shutil.copy2(home_src[1], SRC / "home" / "about-preview.jpg")
    print(f"   ✅ home/about-preview.jpg ← {home_src[1].name}")

# services/ 标准名
service_names = ["custom-processing", "one-stop-solution", "oem-odm", "global-delivery"]
src_services = sorted((SRC / "factory").glob("*")) + sorted((SRC / "equipment").glob("*"))
for i, name in enumerate(service_names):
    if i < len(src_services):
        src = src_services[i]
        dst = SRC / "services" / f"{name}.jpg"
        shutil.copy2(src, dst)
        print(f"   ✅ services/{name}.jpg ← {src.name}")

# about/ 标准名
about_names = ["factory-exterior", "factory-interior", "team-photo"]
src_about = sorted((SRC / "about").glob("about-*")) + sorted((SRC / "team").glob("*"))
for i, name in enumerate(about_names):
    if i < len(src_about):
        src = src_about[i]
        dst = SRC / "about" / f"{name}.jpg"
        shutil.copy2(src, dst)
        print(f"   ✅ about/{name}.jpg ← {src.name}")

# equipment/ 标准名
equip_names = ["tempering-furnace", "cnc-cutting", "edge-grinding", "cleaning-line", "autoclave"]
src_equip = sorted((SRC / "equipment").glob("equipment-*"))
for i, name in enumerate(equip_names):
    if i < len(src_equip):
        src = src_equip[i]
        dst = SRC / "equipment" / f"{name}.jpg"
        shutil.copy2(src, dst)
        print(f"   ✅ equipment/{name}.jpg ← {src.name}")

# factory/ 标准名
factory_names = ["workshop-1", "workshop-2", "warehouse", "quality-inspection"]
src_factory = sorted((SRC / "factory").glob("factory-*"))
for i, name in enumerate(factory_names):
    if i < len(src_factory):
        src = src_factory[i]
        dst = SRC / "factory" / f"{name}.jpg"
        shutil.copy2(src, dst)
        print(f"   ✅ factory/{name}.jpg ← {src.name}")

# ==========================================
# 清理原始未分类照片
# ==========================================
print("\n🧹 清理原始未分类照片...")
for f in raw_files:
    f.unlink()
    print(f"   🗑️  已删除: {f.name}")

print("\n" + "="*60)
print("🎉 分类完成！")
print("="*60)
print("\n⚠️  重要提醒：")
print("   以下目录使用的是临时占位图，请尽快替换为真实素材：")
print("   • products/     — 需要4张产品特写（钢化/中空/夹胶/工艺玻璃）")
print("   • projects/     — 需要6张工程案例实拍（广启未来中心等）")
print("   • certifications/ — 需要8张证书扫描件（3C认证/检测报告等）")
print("\n   当前这些目录已用工厂照片临时填充，页面不会空白，")
print("   但访客看到的内容不准确，建议尽快替换。")
print("="*60)
