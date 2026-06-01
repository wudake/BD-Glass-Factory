#!/usr/bin/env python3
"""
AI Image Generator - 使用 Pollinations.ai 免费 API
无需 API Key，直接通过文本描述生成图片

用法:
    python3 generate-ai-image.py "描述文本" [--output 输出路径] [--width 宽] [--height 高]

示例:
    python3 generate-ai-image.py "a modern glass factory building, blue sky, professional photography"
    python3 generate-ai-image.py "tempered glass production line, industrial setting, high quality" --output factory.png --width 1024 --height 768
"""

import argparse
import urllib.parse
import urllib.request
import os
import sys


def generate_image(prompt: str, output_path: str = None, width: int = 1024, height: int = 1024, seed: int = None):
    """
    使用 Pollinations.ai 免费 API 生成图片
    """
    # URL 编码提示词
    encoded_prompt = urllib.parse.quote(prompt)

    # 构建请求 URL
    params = f"width={width}&height={height}&nologo=true"
    if seed is not None:
        params += f"&seed={seed}"

    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?{params}"

    print(f"🎨 正在生成图片...")
    print(f"   描述: {prompt}")
    print(f"   尺寸: {width}x{height}")

    # 发送请求
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    )

    try:
        with urllib.request.urlopen(req, timeout=120) as response:
            image_data = response.read()

            # 自动命名输出文件
            if output_path is None:
                safe_name = "".join(c if c.isalnum() or c in "-_ " else "_" for c in prompt[:30]).strip().replace(" ", "_")
                output_path = f"ai-generated/{safe_name}.png"

            # 确保输出目录存在
            os.makedirs(os.path.dirname(output_path) if os.path.dirname(output_path) else ".", exist_ok=True)

            with open(output_path, "wb") as f:
                f.write(image_data)

            file_size_kb = len(image_data) / 1024
            print(f"✅ 图片已保存: {output_path} ({file_size_kb:.1f} KB)")
            return output_path

    except urllib.error.HTTPError as e:
        print(f"❌ HTTP 错误: {e.code} - {e.reason}")
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"❌ 网络错误: {e.reason}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ 错误: {e}")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="使用 Pollinations.ai 免费 API 生成 AI 图片",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  python3 generate-ai-image.py "modern glass factory, professional photo"
  python3 generate-ai-image.py "tempered glass close up, crystal clear" --width 1920 --height 1080
  python3 generate-ai-image.py "glass curtain wall building" --output building.png --seed 42
        """
    )
    parser.add_argument("prompt", help="图片描述文本（英文效果最佳）")
    parser.add_argument("--output", "-o", help="输出文件路径（默认自动命名）")
    parser.add_argument("--width", "-W", type=int, default=1024, help="图片宽度（默认 1024）")
    parser.add_argument("--height", "-H", type=int, default=1024, help="图片高度（默认 1024）")
    parser.add_argument("--seed", "-s", type=int, help="随机种子（相同种子生成相同图片）")

    args = parser.parse_args()

    generate_image(
        prompt=args.prompt,
        output_path=args.output,
        width=args.width,
        height=args.height,
        seed=args.seed
    )


if __name__ == "__main__":
    main()
