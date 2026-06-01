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

## 6. 移动端设计规范

> 本规范针对 Mobile（375px - 639px）和 Tablet（640px - 1023px）两端的交互、布局与视觉细节作出补充规定。桌面端规范未覆盖或与之冲突的条款，以本节为准。

### 6.1 触控目标与点击区域

| 元素类型 | 最小触控尺寸 | 推荐触控尺寸 | 说明 |
|----------|-------------|-------------|------|
| 按钮 / CTA | 44 × 44 px | 48 × 48 px | 主按钮全宽（`width: 100%`）显示 |
| 图标按钮 | 44 × 44 px | 48 × 48 px | 图标居中，四周保留足够热区 |
| 导航链接 | 44 × 44 px | — | 抽屉菜单中的链接项 |
| 表单输入框 | 48 px 高度 | — | 确保 iOS Safari 正常渲染，禁止缩放 |
| 复选框 / 单选 | 24 × 24 px 可见 | 44 × 44 px 热区 | 热区覆盖标签区域 |
| 卡片整体 | — | — | 整卡可点击时热区覆盖整张卡片 |

- **相邻可点击元素间距 ≥ 8px**，防止误触
- 禁止出现小于 32px 的纯文本链接，必须扩充为块级点击区域

### 6.2 移动端导航

#### 汉堡菜单按钮
```css
.mobile-menu-btn {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
}
```
- 位于 Header 右侧，始终可见（Mobile / Tablet）
- 图标使用 Lucide `Menu` / `X`，尺寸 24px
- 点击后按钮本身立即切换为关闭图标

#### 全屏抽屉菜单（Drawer）
```css
.mobile-nav-drawer {
  position: fixed;
  inset: 0;
  background: #0F1923;
  z-index: 200;
  padding: 88px 24px 32px;  /* 顶部留 Header 高度 + 安全间距 */
}
```
- **进入动效**：从右侧滑入（`translateX(100%) → translateX(0)`），0.35s ease-out
- **退出动效**：向右滑出，0.3s ease-in
- **背景遮罩**：半透明黑色 `rgba(0,0,0,0.5)`，点击遮罩关闭抽屉
- **菜单项样式**：
  - 字体：18px / 600 / `#FFFFFF`
  - 项间距：24px
  - 底部边框：`1px solid #243240`
  - Hover / Active：文字变为 `#00A3E0`
- **CTA 按钮**：抽屉底部固定放置主按钮 "Get Free Quote"，全宽
- **关闭方式**：点击关闭按钮、点击遮罩、按下 ESC 键、从右边缘侧滑返回

#### 子菜单处理
- 桌面端 Hover 展开的二级菜单，在移动端改为**手风琴折叠面板（Accordion）**
- 点击父级展开/收起子项，展开高度动画 0.25s ease-out
- 子项缩进 16px，字号 16px，颜色 `#8A9BA8`

### 6.3 移动端布局调整

#### 网格堆叠规则
| 桌面端布局 | 移动端转换 | 说明 |
|------------|-----------|------|
| 多列卡片网格（3-4 列） | 单列堆叠 | 卡片 100% 宽度，纵向排列 |
| 左右分栏（图文并排） | 单列堆叠，图在上文在下 | 图片保持 16:9 或 4:3 比例 |
| 数字统计横向排列 | 2×2 网格 或 单列 | 视数据量而定，间距 24px |
| Logo 墙横向滚动 | 保持横向滚动 或 2 列网格 | 禁止过度缩小 Logo |
| 页脚多列链接 | 单列堆叠，分组合并 | 可折叠为手风琴节省空间 |

#### 水平边距
```css
.page-container {
  padding-left: 16px;
  padding-right: 16px;
}
@media (min-width: 640px) {
  .page-container {
    padding-left: 24px;
    padding-right: 24px;
  }
}
```
- Mobile：内容区两侧各 **16px** 内边距
- Tablet：两侧各 **24px** 内边距
- 任何内容元素不得紧贴屏幕边缘（避免误触和视觉拥挤）

#### 最大宽度限制
- 即使在小屏设备上，文字段落、表单、按钮等内容**不宜超过屏幕宽度的 100%**
- 图片/视频允许全宽，但需保留 `object-fit: cover` 防止拉伸

### 6.4 移动端表单设计

#### 输入框规范
```css
.input-field-mobile {
  width: 100%;
  height: 48px;
  font-size: 16px;  /* 关键：防止 iOS 自动缩放 */
  padding: 12px 16px;
  border-radius: 8px;
  border: 1.5px solid #E5E9EC;
  -webkit-appearance: none;  /* 移除 iOS 默认内阴影 */
}
```
- **字号必须 ≥ 16px**：`<input>`、`<textarea>`、`<select>` 统一 16px，否则 iOS Safari 聚焦时会自动缩放页面
- 输入框高度 **48px**，确保手指易于选中
- 所有表单字段**垂直堆叠**，标签位于输入框上方（避免左侧标签导致过窄）
- 标签与输入框间距 8px，字段之间间距 20px

#### 键盘适配
- 邮箱输入框：`type="email"`，唤起邮箱键盘
- 电话输入框：`type="tel"`，唤起数字键盘
- 搜索输入框：`type="search"`，显示搜索按钮
- 提交按钮应位于键盘可及区域，或提供键盘上的 "Go"/"Done" 支持

#### 错误提示
- 行内显示：输入框下方即时出现错误文本
- 颜色：`#FF6B35`（警示橙），字号 14px
- 输入框边框变为 `#FF6B35`，获得焦点时恢复为 `#00A3E0`

### 6.5 移动端图片与媒体

| 类型 | 移动端尺寸建议 | 比例 | 说明 |
|------|---------------|------|------|
| Hero 背景 | 750 × 1000 px（竖版裁切） | 3:4 或 1:1 | 移动端常改用竖版构图 |
| 产品卡片图 | 400 × 300 px | 4:3 | 单列时大图展示 |
| 案例缩略图 | 640 × 400 px | 16:10 | 保持与桌面一致 |
| 工厂实拍 | 800 × 533 px | 3:2 | 允许全宽 |

- **图片懒加载**：所有首屏以下图片使用 `loading="lazy"`
- **响应式图片**：使用 `<picture>` 或 Next.js `<Image>` 提供不同尺寸 `srcset`
- **禁止横向滚动条**：任何图片/媒体不得导致页面出现横向滚动

### 6.6 手势与交互

| 手势 | 触发区域 | 动作 | 说明 |
|------|----------|------|------|
| 点击 | 全局 | 导航、按钮、卡片展开 | 300ms 延迟已移除（`touch-action: manipulation`） |
| 左滑 | 抽屉菜单内 | 关闭抽屉 | 与 iOS 返回手势冲突时降低灵敏度 |
| 长按 | 产品图片 | 保存图片 / 放大查看 | 提供视觉反馈（图片轻微缩放） |
| 双指缩放 | 产品画廊 | 图片放大查看 | 仅在画廊模态框中启用 |

- **禁用非必要缩放**：页面级 `user-scalable` 保持可缩放（无障碍要求），但组件级不应意外触发缩放
- **滚动性能**：使用 `will-change: transform` 优化固定头部和抽屉的动画性能
- **惯性滚动**：抽屉菜单和横向滚动区域启用 `-webkit-overflow-scrolling: touch`

### 6.7 安全区域与刘海屏适配

```css
/* 适配 iPhone 刘海屏、圆角屏 */
.safe-area-top {
  padding-top: env(safe-area-inset-top);
}
.safe-area-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
.safe-area-x {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```
- 全局布局需考虑 `safe-area-inset-*`，防止内容被刘海、圆角、Home Indicator 遮挡
- 固定底部按钮栏必须增加 `env(safe-area-inset-bottom)` 的额外内边距
- Header 固定定位时，`padding-top` 需加上 `env(safe-area-inset-top)`
- 背景色延伸到安全区域外，内容在安全区域内

### 6.8 横屏模式（Landscape）

- **触发宽度**：`orientation: landscape` 且 `max-height: 500px`
- **Header 高度压缩**：从 72px 降至 56px，Logo 缩小
- **Hero 区域**：高度限制在 `60vh`，防止占满整个横屏
- **抽屉菜单**：改为从右侧覆盖半屏（宽度 70%），而非全屏
- **表单输入**：保持单列，但字段高度可降至 44px（可视区域有限时）
- **数字统计**：恢复横向排列（空间充足时）

### 6.9 移动端动效调整

| 动效 | 桌面端 | 移动端调整 | 原因 |
|------|--------|-----------|------|
| 滚动渐显 | 上移 30px | 上移 16px | 小屏幕位移过大会显得突兀 |
| 卡片 Hover | 上移 4px + 阴影 | 取消 Hover 位移，改为点击态 | 触控设备无 Hover |
| 按钮 Hover | 上移 1px | 点击时缩放 0.97 | 提供触控反馈 |
| 页面载入 | 0.6s | 0.4s | 移动端用户更期待即时响应 |
| 图片 Hover 缩放 | 1.05x | 取消 | 避免误触放大 |

- **点击态（Active State）**：所有可点击元素在 `:active` 时需有视觉反馈
  - 按钮：背景变深或缩放 0.97
  - 卡片：边框高亮 `#00A3E0`
  - 链接：颜色变为 `#00C2FF`
- **减少动效**：遵循 `prefers-reduced-motion: reduce`，关闭所有非必要动画

### 6.10 底部固定工具栏

移动端部分页面（如产品详情页）提供底部固定操作栏：
```css
.mobile-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  border-top: 1px solid #E5E9EC;
  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  display: flex;
  gap: 12px;
  z-index: 100;
}
```
- 左侧："WhatsApp" 快捷按钮（图标 + 文字，Outline 样式）
- 右侧："Inquiry Now" 主按钮（全宽主按钮）
- 按钮高度：48px
- 需为页面主体增加 `padding-bottom: 80px` 防止内容被遮挡

### 6.11 下拉刷新与上拉加载

- **页面级下拉刷新**：不使用（与 iOS Safari 自带刷新冲突）
- **列表上拉加载**：产品列表、案例列表使用 "Load More" 按钮代替无限滚动
  - 按钮样式：全宽 Outline 按钮，文字 "Load More Projects"
  - 加载中状态：按钮内显示 Spinner，禁用点击
  - 无更多内容：显示文字提示 "No more items"

### 6.12 移动端设计 Checklist

在移动端开发/验收时，逐项检查：

- [ ] 所有可点击区域 ≥ 44 × 44 px
- [ ] 输入框字号 ≥ 16px，防止 iOS 自动缩放
- [ ] 内容两侧保留 16px（Mobile）/ 24px（Tablet）安全边距
- [ ] 导航抽屉可正常打开/关闭，支持遮罩点击和滑动手势关闭
- [ ] 二级菜单使用手风琴，非 Hover 展开
- [ ] 底部固定按钮考虑 `safe-area-inset-bottom`
- [ ] 横屏模式布局不崩坏，无横向滚动条
- [ ] 图片使用响应式 `srcset`，懒加载正常
- [ ] 虚拟键盘弹出时布局不被顶出屏幕或遮挡输入框
- [ ] 触控反馈（Active 态）清晰可感知
- [ ] `prefers-reduced-motion` 下所有动效关闭
- [ ] Lighthouse 移动端 Performance ≥ 90

---

## 7. 组件规范

### 7.1 按钮

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

### 7.2 卡片

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

### 7.3 表单

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

### 7.4 导航

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

### 7.5 Section 区块

每个 Section 遵循统一的内边距：

```css
.section {
  padding: 96px 0;  /* space-4xl */
  @media (max-width: 768px) {
    padding: 64px 0;  /* space-3xl */
  }
}
```

### 7.6 图标

- 使用 **Lucide Icons** / **Phosphor Icons**（线性风格，2px 描边）
- 默认颜色：`#5C6E7F`，hover 为 `#00A3E0`
- 尺寸：16px / 20px / 24px / 32px
- 社交/联系图标使用彩色原版

---

## 8. 图片规范

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

## 9. 动效规范

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

## 10. 代码规范

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

## 11. 多语言设计（后续扩展）

虽有中文文件预留，但该外贸独立站设计默认以英文界面为主，后续如有中文界面需求，将遵循以下原则：

- URL 结构：`/en/` 英文（默认）、`/zh/` 中文
- 语言切换器位于 Header 右上角
- 使用 `next-intl` 管理翻译文案
- 视觉设计统一，仅文字内容切换

---

## 12. 浏览器支持

| 浏览器 | 最低版本 |
|--------|----------|
| Chrome | 90+ |
| Firefox | 90+ |
| Safari | 15+ |
| Edge | 90+ |
| Mobile Safari | 15+ |
| Chrome Android | 90+ |

---

## 13. 设计 Checklist

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
