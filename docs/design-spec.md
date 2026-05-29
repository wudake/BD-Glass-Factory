# BDGLASS 独立站设计规范

## 1. 设计理念

- **品牌定位**：中国专业玻璃制造商，面向全球 B2B 采购商
- **设计目标**：传递专业、可靠、现代的品牌形象，突出制造实力和产品品质
- **设计原则**：工业感 × 专业性 × 国际化 — 少即是多，用数据和视觉说话

---

## 2. 色彩系统

### 主色调

| 色值 | 名称 | 用途 |
|------|------|------|
| `#0F1923` | 深炭黑 | 主背景色、Header、Footer |
| `#1A2532` | 炭灰 | 次级背景、卡片底色 |
| `#243240` | 浅炭灰 | 边框、分割线 |
| `#FFFFFF` | 白色 | 正文区域背景、文字 |

### 强调色

| 色值 | 名称 | 用途 |
|------|------|------|
| `#00A3E0` | 科技蓝 | 主 CTA 按钮、链接、高亮元素 |
| `#007BA7` | 深科技蓝 | 按钮 hover、激活态 |
| `#00C2FF` | 亮科技蓝 | 渐变高光、图标高亮 |

### 辅助色

| 色值 | 名称 | 用途 |
|------|------|------|
| `#26D07C` | 工业绿 | 成功状态、认证标识 |
| `#FF6B35` | 警示橙 | 数字亮点、关键词高亮 |
| `#8A9BA8` | 中性灰 | 次要文字、辅助说明 |
| `#5C6E7F` | 深中性灰 | 图标默认色 |

### 渐变

```css
/* 主渐变 - CTA 按钮、Hero 标题 */
--gradient-primary: linear-gradient(135deg, #00A3E0, #00C2FF);

/* 深色渐变 - Hero 背景遮罩 */
--gradient-dark: linear-gradient(180deg, rgba(15,25,35,0.9), rgba(15,25,35,0.7));

/* 发光效果 - 卡片 hover */
--glow-blue: 0 0 30px rgba(0, 163, 224, 0.15);
```

---

## 3. 字体系统

### 字体家族

| 层级 | 字体 | 后备字体 |
|------|------|----------|
| 标题 | Inter | system-ui, -apple-system, sans-serif |
| 正文 | Inter | system-ui, -apple-system, sans-serif |
| 数字 | JetBrains Mono | monospace |

> Inter 通过 Google Fonts 引入（子集化 latin + latin-ext），使用 `font-display: swap`

### 字号层级

| 级别 | 字号 | 行高 | 字重 | 用途 |
|------|------|------|------|------|
| H1 | 56px / 3.5rem | 1.1 | 800 | 首页 Hero 大标题 |
| H2 | 40px / 2.5rem | 1.2 | 700 | 页面标题、区块大标题 |
| H3 | 28px / 1.75rem | 1.3 | 700 | 区块次标题 |
| H4 | 22px / 1.375rem | 1.4 | 600 | 卡片标题 |
| H5 | 18px / 1.125rem | 1.4 | 600 | 小型标题 |
| Body L | 18px / 1.125rem | 1.6 | 400 | 引导段落 |
| Body | 16px / 1rem | 1.6 | 400 | 正文 |
| Body S | 14px / 0.875rem | 1.5 | 400 | 辅助说明、标签 |
| Caption | 12px / 0.75rem | 1.4 | 500 | 脚注、标签文字 |
| Number | 48px / 3rem | 1 | 700 | 数字展示（产能、年份等） |

### 移动端字号

| 级别 | 桌面 | 移动端 |
|------|------|--------|
| H1 | 56px | 32px |
| H2 | 40px | 28px |
| H3 | 28px | 22px |
| H4 | 22px | 18px |
| Body | 16px | 15px |

### 文字规范

- 标题使用 `letter-spacing: -0.02em`
- 英文全大写（ALL CAPS）用于标签和小标题，`letter-spacing: 0.08em`
- 正文确保 WCAG AA 对比度（深色背景上 ≥ 4.5:1）
- 段落宽度不超过 72ch

---

## 4. 间距系统

基于 4px 基础单位的增量体系：

| Token | 值 | 用途 |
|-------|-----|------|
| `space-xs` | 4px | 紧密元素间距 |
| `space-sm` | 8px | 内边距、图标间距 |
| `space-md` | 16px | 组件内间距 |
| `space-lg` | 24px | 卡片内边距 |
| `space-xl` | 32px | 区块上下间距 |
| `space-2xl` | 48px | Section 内上下间距 |
| `space-3xl` | 64px | Section 之间间距 |
| `space-4xl` | 96px | 主页大区块间距 |
| `space-5xl` | 128px | Hero 与第一区块间距 |

对应 Tailwind 配置：

```
spacing: {
  4:  '4px',
  8:  '8px',
  16: '16px',
  24: '24px',
  32: '32px',
  48: '48px',
  64: '64px',
  96: '96px',
  128:'128px',
}
```

---

## 5. 布局网格

### 内容区宽度

| 断点 | 内容最大宽度 | 用途 |
|------|-------------|------|
| 通用 | 1200px | 所有内容区的最大宽度 |
| 窄内容 | 800px | 文章/详情页正文宽度 |
| 宽内容 | 1440px | Hero/案例画廊等全宽内容 |

### 响应式断点

| 断点 | 宽度 | 列数 | 间距 |
|------|------|------|------|
| Mobile | 375px - 639px | 4 列 | 16px |
| Tablet | 640px - 1023px | 8 列 | 24px |
| Desktop | 1024px - 1279px | 12 列 | 32px |
| Wide | 1280px+ | 12 列 | 32px |

---

## 6. 组件规范

### 6.1 按钮

```css
/* 主按钮 */
.btn-primary {
  background: linear-gradient(135deg, #00A3E0, #00C2FF);
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: linear-gradient(135deg, #007BA7, #00A3E0);
  box-shadow: 0 4px 20px rgba(0, 163, 224, 0.3);
  transform: translateY(-1px);
}

/* 次按钮 / Outline */
.btn-outline {
  background: transparent;
  color: #00A3E0;
  border: 1.5px solid #00A3E0;
  font-weight: 600;
  font-size: 16px;
  padding: 14px 32px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.btn-outline:hover {
  background: rgba(0, 163, 224, 0.08);
}

/* 文字按钮 / Link */
.btn-text {
  color: #00A3E0;
  font-weight: 600;
  font-size: 16px;
  padding: 0;
  transition: color 0.2s;
}
.btn-text:hover { color: #00C2FF; }
.btn-text::after { content: " →"; transition: margin 0.2s; }
.btn-text:hover::after { margin-left: 4px; }
```

### 6.2 卡片

```css
/* 产品/案例卡片 */
.card {
  background: #FFFFFF;
  border: 1px solid #E5E9EC;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}
.card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

/* 深色主题卡片 */
.card-dark {
  background: #1A2532;
  border: 1px solid #243240;
  border-radius: 10px;
}
.card-dark:hover {
  border-color: #00A3E0;
  box-shadow: 0 0 30px rgba(0, 163, 224, 0.15);
}
```

### 6.3 表单

```css
/* 文本输入 */
.input-field {
  background: #FFFFFF;
  border: 1.5px solid #E5E9EC;
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 16px;
  color: #0F1923;
  transition: border-color 0.2s;
}
.input-field:focus {
  border-color: #00A3E0;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 163, 224, 0.1);
}

/* 文本域 */
.textarea {
  /* 继承 .input-field */;
  min-height: 140px;
  resize: vertical;
}

/* 标签 */
.label {
  font-size: 14px;
  font-weight: 600;
  color: #0F1923;
  margin-bottom: 8px;
}
```

### 6.4 导航

```css
/* 顶部导航 */
.header {
  background: #0F1923;
  height: 72px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

/* 导航链接 */
.nav-link {
  color: #8A9BA8;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;
  transition: color 0.2s;
}
.nav-link:hover,
.nav-link.active {
  color: #00A3E0;
}
```

### 6.5 Section 区块

每个 Section 遵循统一的内边距：

```css
.section {
  padding: 96px 0;  /* space-4xl */
  @media (max-width: 768px) {
    padding: 64px 0;  /* space-3xl */
  }
}
```

### 6.6 图标

- 使用 **Lucide Icons** / **Phosphor Icons**（线性风格，2px 描边）
- 默认颜色：`#5C6E7F`，hover 为 `#00A3E0`
- 尺寸：16px / 20px / 24px / 32px
- 社交/联系图标使用彩色原版

---

## 7. 图片规范

| 类型 | 比例 | 推荐尺寸 | 格式 |
|------|------|----------|------|
| Hero 背景 | 16:9 或全宽 | 1920×1080 | WebP |
| 产品卡片 | 4:3 | 800×600 | WebP |
| 案例缩略图 | 16:10 | 960×600 | WebP |
| 工厂实拍 | 3:2 | 1200×800 | WebP |
| 证书图片 | 自适应 | 600px 宽 | WebP |
| Logo | 矢量 | SVG | SVG |

> 所有图片优先使用 WebP 格式，同时提供 JPEG 后备。使用 Next.js `<Image>` 组件自动优化。

---

## 8. 动效规范

| 元素 | 动效 | 时长 | 缓动 |
|------|------|------|------|
| 页面载入 | 渐显 + 上移 20px | 0.6s | ease-out |
| 滚动进入 | 渐显 + 上移 30px | 0.5s | ease-out |
| 按钮 hover | 上移 1px + 阴影 | 0.3s | ease |
| 卡片 hover | 上移 4px + 阴影 | 0.3s | ease |
| 链接 hover | 颜色过渡 | 0.2s | ease |
| 图片 hover | 缩放 1.05x | 0.4s | ease |
| 导航下拉 | 渐显 + 下滑 | 0.25s | ease-out |
| 移动端菜单 | 从右滑入 | 0.35s | ease-out |

原则：
- 动效服务于引导注意力，不为了炫技
- 所有动效需考虑 `prefers-reduced-motion`
- 滚动触发使用 `Intersection Observer`

---

## 9. 代码规范

### 9.1 Tailwind CSS + CSS 变量

```css
/* globals.css */
:root {
  --color-bg-primary: #0F1923;
  --color-bg-secondary: #1A2532;
  --color-bg-tertiary: #243240;
  --color-bg-white: #FFFFFF;
  --color-accent: #00A3E0;
  --color-accent-dark: #007BA7;
  --color-accent-light: #00C2FF;
  --color-text-primary: #0F1923;
  --color-text-secondary: #5C6E7F;
  --color-text-muted: #8A9BA8;
  --color-text-inverse: #FFFFFF;
  --color-border: #E5E9EC;
  --color-border-dark: #243240;
  --color-success: #26D07C;
  --color-warning: #FF6B35;
}
```

### 9.2 Tailwind 配置扩展

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        dark: '#0F1923',
        gray: '#1A2532',
        'gray-light': '#243240',
        blue: '#00A3E0',
        'blue-dark': '#007BA7',
        'blue-light': '#00C2FF',
        green: '#26D07C',
        orange: '#FF6B35',
        muted: '#8A9BA8',
        'muted-dark': '#5C6E7F',
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: { /* 见字号层级表 */ },
    spacing: { /* 见间距系统 */ },
    screens: {
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
    },
  }
}
```

### 9.3 组件命名

- React 组件文件：PascalCase（`ProductCard.tsx`）
- 页面文件：按 Next.js 约定（`page.tsx`）
- CSS 类名：优先 Tailwind 原子类，复杂样式抽取 `@layer components`
- 变量命名：camelCase
- 数据文件：kebab-case（`site-config.ts`）

---

## 10. 多语言设计（后续扩展）

虽有中文文件预留，但该外贸独立站设计默认以英文界面为主，后续如有中文界面需求，将遵循以下原则：

- URL 结构：`/en/` 英文（默认）、`/zh/` 中文
- 语言切换器位于 Header 右上角
- 使用 `next-intl` 管理翻译文案
- 视觉设计统一，仅文字内容切换

---

## 11. 浏览器支持

| 浏览器 | 最低版本 |
|--------|----------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Edge | 90+ |
| Mobile Safari | 15+ |
| Chrome Android | 90+ |

---

## 12. 设计 Checklist

开发每个页面/组件前，检查以下项：

- [ ] 色彩是否符合色板系统
- [ ] 字号/行高是否符合层级表
- [ ] 间距是否使用 spacing tokens（避免随意数字）
- [ ] 移动端断点是否适配
- [ ] hover/focus 状态是否到位
- [ ] 图片是否使用 WebP + Next.js Image
- [ ] 动效是否流畅（无卡顿）
- [ ] 对比度是否达标（暗底白字 ≥ 4.5:1）
- [ ] 是否语义化 HTML（SEO 友好）

---

> 最后更新：2026-05-27
> 品牌：BDGLASS | 域名：bdglassfactory.com
