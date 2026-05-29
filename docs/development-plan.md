# BDGLASS 独立站开发计划

> 项目：BDGLASS 品牌外贸独立站
> 技术栈：Next.js 16.2 + TypeScript 5 + Tailwind CSS v4
> 部署：Vercel
> 制定日期：2026-05-27
> 最后更新：2026-05-29

---

## 总览

| Phase | 内容 | 任务数 | 状态 |
|-------|------|--------|------|
| Phase 1 | 项目初始化 + 基础框架 | 8 | ✅ 已完成 |
| Phase 2 | 首页开发 | 9 | ✅ 已完成 |
| Phase 3 | 核心页面开发 | 14 | ✅ 已完成 |
| Phase 4 | 交互与转化 | 6 | ✅ 已完成 |
| Phase 5 | SEO + 性能优化 | 7 | ✅ 已完成 |
| Phase 6 | 部署上线 | 5 | 🔲 待继续 — 代码已推送 GitHub（V1.2.0），待 Vercel 部署 + 域名配置 |

---

## Phase 1：项目初始化 + 基础框架

**目标**：搭建 Next.js 项目，配置 Tailwind 设计系统，完成全局 Layout

### Task 1.1 — 项目脚手架

- [ ] `npx create-next-app@latest bd-glass-factory --typescript --tailwind --eslint --app --src-dir`
- [ ] 配置 `tsconfig.json`（路径别名 `@/` → `src/`）
- [ ] 安装依赖：
  - `next-intl`（多语言预留）
  - `lucide-react`（图标库）
  - `@next/bundle-analyzer`（构建分析）
- [ ] 清理默认文件（默认首页、默认样式）
- [ ] 初始化 Git 仓库，创建 `.gitignore`

**产出**：可 `npm run dev` 启动的空项目

### Task 1.2 — Tailwind 设计系统配置

- [ ] 按设计规范配置 `tailwind.config.ts`：
  - `colors.brand`（dark / gray / blue / green / orange / muted）
  - `fontFamily`（Inter + JetBrains Mono）
  - `fontSize`（8 级字号层级）
  - `spacing`（4px 基础单位）
  - `screens`（sm: 640, md: 1024, lg: 1280）
- [ ] 编写 `globals.css`：
  - CSS 变量（`:root`）
  - Tailwind `@layer base`（body 基础样式、标题默认样式）
  - `@layer components`（`.btn-primary`、`.btn-outline`、`.card`、`.section` 等）
  - `@layer utilities`（如有自定义工具类）
- [ ] 引入 Inter 字体（Google Fonts，`layout.tsx` 中加载）

**产出**：设计 Token 全部就绪，写代码时可直接使用 Tailwind 类名

### Task 1.3 — 全局 Layout

- [ ] `src/components/layout/Header.tsx`
  - Sticky 导航栏，高度 72px
  - Logo（先用文字占位，后续替换 SVG）
  - 菜单项：Home / About / Products / Services / Projects / Certifications / Contact
  - 右侧 CTA 按钮 "Get Quote"
  - 移动端汉堡菜单按钮
  - 滚动时添加底部边框（`scroll` 事件监听）
- [ ] `src/components/layout/MobileNav.tsx`
  - 从右侧滑入的抽屉菜单
  - 菜单项 + CTA 按钮
  - 点击空白处/关闭按钮关闭
- [ ] `src/components/layout/Footer.tsx`
  - 四列布局：Company / Quick Links / Products / Contact
  - 公司简介（2-3 句）
  - 快速链接
  - 产品链接
  - 联系方式（地址、电话、WhatsApp、Email）
  - 底部版权栏 `© 2026 BDGLASS. All rights reserved.`
- [ ] `src/app/layout.tsx`
  - 引入 Header + Footer
  - Metadata 基础配置（title template、description 默认值）
  - `<html lang="en">`

**产出**：所有页面共享的 Layout 框架

### Task 1.4 — 通用组件

- [ ] `src/components/shared/SectionTitle.tsx`
  - Props: `title`, `subtitle?`, `align?: 'left' | 'center'`
  - 标题 H2 + 副标题 Body L
- [ ] `src/components/shared/Breadcrumb.tsx`
  - Props: `items: { label, href }[]`
  - 面包屑导航 + Schema.org BreadcrumbList 结构化数据
- [ ] `src/components/shared/ImageGallery.tsx`（先占位，Phase 2 完善）

**产出**：可复用的通用 UI 组件

### Task 1.5 — 站点配置文件

- [ ] `src/data/site-config.ts`
  ```ts
  export const siteConfig = {
    name: 'BDGLASS',
    fullName: 'Foshan Bodian Glass Co., LTD',
    domain: 'bdglassfactory.com',
    address: { en: '...', zh: '...' },
    phone: '+86 13723810568',
    email: '...',
    whatsapp: '...',
    social: { linkedin: '', facebook: '' },
    founded: 2018,
    baseArea: '15,000 ㎡',
    employees: '80+',
    exportCountries: ['Australia', 'Africa', 'Middle East', 'Cambodia', 'Vietnam'],
  }
  ```

**产出**：全局站点数据源

### Task 1.6 — 数据文件准备

- [ ] `src/data/products.ts` — 4 个产品数据（name, slug, description, features, specs, images, applications）
- [ ] `src/data/projects.ts` — 6 个工程案例数据（name, slug, location, area, config, images）
- [ ] `src/data/services.ts` — 6 个服务项目数据
- [ ] `src/data/certifications.ts` — 认证数据

**产出**：所有静态数据就绪

### Task 1.7 — 占位页面路由

- [ ] 创建所有页面路由的占位文件：
  - `src/app/page.tsx`
  - `src/app/about/page.tsx`
  - `src/app/products/page.tsx`
  - `src/app/products/[slug]/page.tsx`
  - `src/app/services/page.tsx`
  - `src/app/projects/page.tsx`
  - `src/app/projects/[slug]/page.tsx`
  - `src/app/certifications/page.tsx`
  - `src/app/contact/page.tsx`
- [ ] 每个页面包含基础的 `<SectionTitle>` + 占位内容
- [ ] 验证所有路由可访问、Header/Footer 正常显示

**产出**：所有页面路由可导航

### Task 1.8 — Phase 1 验证

- [ ] `npm run build` 无报错
- [ ] Desktop / Tablet / Mobile 三端 Layout 正常
- [ ] 导航菜单点击跳转正常
- [ ] 移动端菜单打开/关闭正常

---

## Phase 2：首页开发

**目标**：首页完整开发，所有区块到位

### Task 2.1 — HeroBanner

- [ ] 全宽 Hero 区域，高度 `min-h-screen`
- [ ] 背景：工厂/产品大图 + 深色渐变遮罩
- [ ] 内容居中：H1 标题 + 副标题 + 2 个 CTA 按钮（"View Products" + "Get Quote"）
- [ ] 响应式：移动端字号缩小、按钮竖向排列
- [ ] 背景图使用 Next.js `<Image>` + `priority` 预加载

### Task 2.2 — AboutPreview

- [ ] 2 列布局：左文字 + 右图片
- [ ] 文字：SectionTitle + 段落简介 + "Learn More →" 链接
- [ ] 图片：工厂车间或团队照片
- [ ] 移动端：上下堆叠，图片在上

### Task 2.3 — AdvantageNumbers

- [ ] 4 列数字展示：2018（Founded）、15,000 ㎡（Production Area）、80+（Team）、6+（Countries Exported）
- [ ] 数字大字（Inter 700）+ 下方描述小字
- [ ] 数字滚动动画（`countup` 效果，使用 Intersection Observer 触发）
- [ ] 移动端：2×2 网格

### Task 2.4 — ProductHighlights

- [ ] SectionTitle: "Our Products"
- [ ] 4 列产品卡片网格
- [ ] ProductCard 组件：图片（4:3）+ 品名 + 一句话描述 + "Learn More →"
- [ ] 卡片 hover 动效（上浮 + 阴影）
- [ ] 移动端：单列滚动或 2 列

### Task 2.5 — ServicePreview

- [ ] SectionTitle: "What We Offer"
- [ ] 3×2 或 4×2 服务图标 + 标题 + 简短描述
- [ ] 底部 "View All Services →" 链接
- [ ] 图标使用 Lucide Icons（如 Factory、Wrench、Globe 等）

### Task 2.6 — ProjectShowcase

- [ ] 精选 3-4 个标杆案例
- [ ] 大图 + 项目名 + 地点 + 玻璃用量 叠加显示
- [ ] 可选：自动轮播或左右箭头切换
- [ ] 底部 "View All Projects →" 链接

### Task 2.7 — PartnerLogos

- [ ] 合作客户 Logo 墙
- [ ] 自动横向滚动（marquee 效果）或网格展示
- [ ] Logo 图片灰度处理，hover 恢复彩色

### Task 2.8 — CTASection

- [ ] 全宽深色背景
- [ ] 居中文字："Ready to Start Your Glass Project?"
- [ ] 副标题："Contact us today for a free quote and expert consultation"
- [ ] 主 CTA 按钮 + WhatsApp 快捷按钮

### Task 2.9 — Phase 2 验证

- [ ] 移动端所有区块正常显示
- [ ] Lighthouse 初步检测 ≥ 80
- [ ] 所有链接指向正确路由

---

## Phase 3：核心页面开发

### 3.1 关于我们（`/about`）

- [ ] 公司介绍区块（左文字右图片）
- [ ] 生产基地介绍：两个基地、设备清单时间线
- [ ] 原材料优势：3 列卡片（原片 / 丁基胶 / 硅酮胶）
- [ ] 团队介绍：团队照片 + 文字
- [ ] 合作客户 Logo 墙
- [ ] 协会会员：4 个证书/Logo 展示
- [ ] 出口市场地图（占位，可后续用地图组件）

### 3.2 产品列表（`/products`）

- [ ] 4 个产品分类卡片
- [ ] 每个卡片：产品图 + 名称 + 描述 + 应用标签
- [ ] 点击进入详情页
- [ ] （可选）分类筛选标签

### 3.3 产品详情（`/products/[slug]`）

- [ ] `generateStaticParams` 预生成 4 个产品页面
- [ ] 图片画廊（主图 + 缩略图切换）
- [ ] 产品名称 + 描述
- [ ] 规格参数表（表格形式）
- [ ] 应用场景图文列表
- [ ] 质保信息卡片
- [ ] 底部 CTA "Inquiry This Product" → 跳转 Contact 页

### 3.4 服务项目（`/services`）

- [ ] 6 个服务项目，图文卡片布局
- [ ] 每项：图标 + 标题 + 详细描述
- [ ] 交替左图右文 / 左文右图布局

### 3.5 工程案例列表（`/projects`）

- [ ] 6 个案例卡片网格
- [ ] 每卡片：项目图片 + 项目名 + 地点 + 面积 + 配置简述
- [ ] 点击进入详情页

### 3.6 工程案例详情（`/projects/[slug]`）

- [ ] `generateStaticParams` 预生成 6 个案例页面
- [ ] 项目图片画廊
- [ ] 项目信息（名称、地点、面积、配置）
- [ ] 玻璃规格详细参数
- [ ] 相关案例推荐

### 3.7 资质认证（`/certifications`）

- [ ] 证书图片网格展示
- [ ] 每张证书可点击放大查看
- [ ] 分类：产品认证 / 检测报告 / 质保书 / 协会会员
- [ ] 设备产线图片展示

### 3.8 404 页面

- [ ] `src/app/not-found.tsx`
- [ ] 简洁的 404 提示 + 返回首页链接

### 3.9 Phase 3 验证

- [ ] 所有页面路由正常
- [ ] 产品/案例详情页数据正确渲染
- [ ] 图片画廊功能正常

---

## Phase 4：交互与转化

### Task 4.1 — 询盘表单（Contact 页）

- [ ] 表单字段：
  - Full Name *（text）
  - Email *（email）
  - Phone（tel）
  - Company（text）
  - Country *（select，常用国家列表）
  - Product Interest（checkbox 多选：4 个产品）
  - Message *（textarea）
- [ ] 前端校验（required 字段、email 格式）
- [ ] reCAPTCHA v3 集成
- [ ] 表单提交 → API Route `/api/contact`
  - 数据存储（可选：存入数据库 或 发送邮件）
  - 邮件通知管理员
- [ ] 提交成功/失败提示（Toast 或内联）
- [ ] 提交按钮 loading 状态

### Task 4.2 — API Route

- [ ] `src/app/api/contact/route.ts`
  - POST 请求处理
  - reCAPTCHA 服务端验证
  - 邮件发送（Nodemailer 或 Resend API）
  - 错误处理 + 日志

### Task 4.3 — WhatsApp 悬浮按钮

- [ ] 全局悬浮 WhatsApp 按钮（右下角固定定位）
- [ ] 点击跳转 `https://wa.me/8613723810568`
- [ ] 移动端适当缩小，不遮挡内容
- [ ] 可选：显示 "Chat with us" 提示气泡

### Task 4.4 — Google Analytics 集成

- [ ] 在 `layout.tsx` 中加载 GA4 脚本
- [ ] 使用 `next/script` 的 `afterInteractive` 策略
- [ ] GA4 Measurement ID 通过环境变量配置

### Task 4.5 — Contact 页完整内容

- [ ] 左栏：表单
- [ ] 右栏：公司信息卡片 + WhatsApp 链接 + 微信二维码
- [ ] Google Maps 嵌入（可选）

### Task 4.6 — Phase 4 验证

- [ ] 表单提交端到端测试
- [ ] reCAPTCHA 正常工作
- [ ] WhatsApp 按钮跳转正确
- [ ] GA4 数据正常采集

---

## Phase 5：SEO + 性能优化

### Task 5.1 — Metadata 完善

- [ ] 每个页面独立 metadata（title、description）
- [ ] Open Graph 标签（og:title、og:description、og:image、og:url）
- [ ] 产品/案例动态 metadata（generateMetadata）

### Task 5.2 — 结构化数据

- [ ] Organization Schema（首页）
- [ ] Product Schema（产品详情页）
- [ ] BreadcrumbList Schema（全局）
- [ ] FAQ Schema（如果有 FAQ 内容）

### Task 5.3 — Sitemap + Robots

- [ ] `src/app/sitemap.ts` — 动态生成 sitemap.xml
- [ ] `src/app/robots.ts` — robots.txt 配置

### Task 5.4 — 图片优化

- [ ] 所有图片使用 WebP 格式
- [ ] 所有 `<Image>` 设置 `width`/`height` + `alt`
- [ ] Hero 图片使用 `priority` + `preload`
- [ ] 其他图片使用 `loading="lazy"`
- [ ] 配置 `next.config.ts` 的 `images` 优化

### Task 5.5 — 性能调优

- [ ] 字体子集化，`font-display: swap`
- [ ] 第三方脚本懒加载（reCAPTCHA、GA）
- [ ] 检查并消除 CLS（图片/字体加载导致的布局偏移）
- [ ] Lighthouse 检测，修复低于 90 的项目

### Task 5.6 — 无障碍优化

- [ ] 所有交互元素可键盘访问
- [ ] `aria-label` 补充
- [ ] `prefers-reduced-motion` 适配
- [ ] 颜色对比度检查

### Task 5.7 — Phase 5 验证

- [ ] Lighthouse Desktop ≥ 90，Mobile ≥ 85
- [ ] Schema 结构化数据通过 Google 测试工具验证
- [ ] Sitemap 正常生成

---

## Phase 6：部署上线

### Task 6.1 — Vercel 部署

- [x] 推送代码到 GitHub 仓库（V1.2.0 / 2026-05-29）
- [ ] Vercel 连接 GitHub 仓库
- [ ] 配置环境变量（GA ID、reCAPTCHA Key、SMTP 配置等）
- [ ] 配置自定义域名 `bdglassfactory.com`
- [ ] SSL 证书自动配置

### Task 6.2 — DNS 配置

- [ ] 域名 DNS 解析到 Vercel
- [ ] `www.bdglassfactory.com` → 301 重定向到 `bdglassfactory.com`

### Task 6.3 — 上线前检查

- [ ] 全站死链检查
- [ ] 表单提交端到端测试
- [ ] 移动端全页面走查
- [ ] 所有外部链接正确（WhatsApp、Email、社媒）

### Task 6.4 — Google Search Console

- [ ] 提交 sitemap.xml
- [ ] 验证域名所有权
- [ ] 提交首页 + 核心页面 URL 收录

### Task 6.5 — 上线后监控

- [ ] GA4 数据验证
- [ ] Search Console 收录状态跟踪
- [ ] Vercel Analytics 监控性能

---

## 任务依赖关系

```
Phase 1 (1.1 → 1.2 → 1.3 → 1.4 → 1.5 → 1.6 → 1.7 → 1.8)
   ↓
Phase 2 (2.1 ~ 2.8 可并行, → 2.9)
   ↓
Phase 3 (3.1 ~ 3.8 可并行, → 3.9)
   ↓
Phase 4 (4.1 → 4.2 → 4.3 ~ 4.5 可并行 → 4.6)
   ↓
Phase 5 (5.1 ~ 5.6 可并行 → 5.7)
   ↓
Phase 6 (6.1 → 6.2 → 6.3 → 6.4 → 6.5)
```

---

## 风险与注意事项

| 风险 | 影响 | 应对 |
|------|------|------|
| 图片素材不足 | 页面视觉效果差 | 先用占位图开发，并行收集素材 |
| 英文文案质量 | SEO 效果差、用户信任度低 | 请专业英文文案审核或使用 AI 辅助润色 |
| GitHub 访问不稳定 | 无法推送代码、部署受阻 | 使用代理或 Gitee 镜像 |
| 域名备案 | .com 域名无需备案，但国内访问可能慢 | Vercel 全球 CDN，海外用户为主，影响可控 |
| 表单邮件服务 | Nodemailer 在国内服务器可能受限 | 使用 Resend / SendGrid 等海外邮件 API |

---

> 计划制定：2026-05-27
> 品牌：BDGLASS | 域名：bdglassfactory.com
