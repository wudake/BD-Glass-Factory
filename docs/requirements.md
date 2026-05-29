# BDGLASS 独立站需求文档

> 项目名称：BDGLASS 品牌外贸独立站
> 域名：bdglassfactory.com
> 品牌：Foshan Bodian Glass Co., LTD（佛山市博点玻璃有限公司）
> 技术栈：Next.js (App Router) + Tailwind CSS
> 创建日期：2026-05-27

---

## 1. 项目概述

### 1.1 项目背景

佛山博点玻璃有限公司成立于 2018 年，拥有两个生产基地（15,000 平方米），80+ 员工团队，专注于钢化玻璃、中空玻璃、夹胶玻璃和工艺玻璃的生产加工。产品通过 3C 认证，已出口至澳大利亚、非洲、中东、东南亚等国家和地区，拥有深圳广启未来中心（28,000 ㎡）、佛山沙堤机场等标杆工程案例。

目前公司缺乏独立的海外品牌官网，依赖线下渠道和 B2B 平台获取外贸订单。需要建立一个专业的品牌独立站，用于展示公司实力、产品能力和工程案例，承接海外询盘。

### 1.2 项目目标

| 目标 | 说明 | 衡量指标 |
|------|------|----------|
| 品牌展示 | 建立 BDGLASS 国际化品牌形象，展示制造实力 | 品牌搜索量、官网访问量 |
| 产品推广 | 清晰展示 4 大产品线和应用场景 | 产品页浏览量、停留时间 |
| 询盘转化 | 通过表单、WhatsApp、邮件获取采购询盘 | 月询盘量、表单提交率 |
| 信任建立 | 展示 3C 认证、工程案例、合作客户背书 | 页面跳出率 |
| SEO 获客 | 通过搜索引擎获取自然流量 | 关键词排名、自然搜索流量 |

### 1.3 目标用户

| 用户类型 | 需求 | 行为 |
|----------|------|------|
| 海外门窗品牌采购商 | 寻找稳定的玻璃供应商（OEM/ODM） | 搜索 "tempered glass manufacturer China" 等关键词 |
| 海外建筑工程商 | 为大项目采购幕墙玻璃、工程玻璃 | 关注产能、认证、工程案例 |
| 海外经销商/批发商 | 寻找中国玻璃产品代理/分销 | 关注产品线、价格竞争力、出口经验 |
| 国内门窗企业 | 了解产品规格和合作方式 | 浏览产品详情、查看合作伙伴 |

---

## 2. 功能需求

### 2.1 全局功能

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 响应式设计 | 适配 Desktop / Tablet / Mobile 三端 | P0 |
| 顶部导航 | Sticky 导航栏，包含 Logo、菜单项、语言切换入口、CTA 按钮 | P0 |
| 页脚 | 公司信息、快速链接、联系方式、社交媒体图标 | P0 |
| SEO Metadata | 每个页面的 title、description、og:image | P0 |
| Sitemap | 自动生成 sitemap.xml | P0 |
| Google Analytics | GA4 追踪代码集成 | P1 |
| 页面加载动画 | 渐显过渡效果 | P2 |

### 2.2 首页（`/`）

**定位**：品牌第一印象，快速传达"我们是谁 + 做什么 + 为什么选择我们"

| 区块 | 内容 | 优先级 |
|------|------|--------|
| Hero Banner | 大幅工厂/产品图背景 + BDGLASS Logo + 一句话品牌标语 + CTA 按钮（Get Quote / View Products） | P0 |
| About Preview | 公司简介摘要：2018 年成立、15,000 ㎡ 基地、80+ 团队、3C 认证 | P0 |
| Advantage Numbers | 数据展示：生产基地数量、年产能、出口国家数、工程案例数 | P0 |
| Product Highlights | 4 大产品卡片（钢化/中空/夹胶/工艺玻璃），点击进入产品详情 | P0 |
| Service Preview | 服务能力摘要（定制加工、一站式解决方案、全球交付），链接到 Services 页 | P0 |
| Project Showcase | 精选 3-4 个标杆案例 Logo + 图片轮播，链接到 Projects 页 | P0 |
| Partner Logos | 合作客户品牌 Logo 墙（滚动展示） | P1 |
| CTA Section | "Looking for glass supplier?" + 询盘按钮 + WhatsApp 悬浮 | P0 |

### 2.3 关于我们（`/about`）

| 区块 | 内容 | 优先级 |
|------|------|--------|
| 公司介绍 | 公司历史、定位、核心价值观 | P0 |
| 生产基地 | 两个基地介绍、总面积、设备清单（SouthTech 钢化炉、CNC 切割机等 5 大设备线） | P0 |
| 原材料优势 | 信义/南玻原片、一线品牌丁基胶、硅宝硅酮胶 | P0 |
| 团队介绍 | 80+ 人、平均 29 岁、培训体系、员工关怀 | P1 |
| 合作客户 | 客户 Logo 墙 + 合作品牌列表（爱尚美门窗、珠创展览、BOSS 门窗等） | P0 |
| 协会会员 | 佛山安全生产协会、中国建筑玻璃与工业玻璃协会、广东省门窗协会等 | P0 |
| 出口市场 | 世界地图标注出口国家（澳大利亚、非洲、中东、柬埔寨、越南等） | P1 |

### 2.4 产品中心（`/products`、`/products/[slug]`）

**列表页需求：**

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 产品分类 | 4 大品类：Tempered Glass / Insulating Glass / Laminated Glass / Craft Glass | P0 |
| 产品卡片 | 产品图 + 名称 + 一句话描述 + 应用场景标签 | P0 |
| 筛选 | 按产品类型、应用场景筛选 | P1 |

**详情页需求：**

| 区块 | 内容 | 优先级 |
|------|------|--------|
| 产品图片画廊 | 多角度产品图，支持放大查看 | P0 |
| 产品描述 | 产品特性、技术参数、优势说明 | P0 |
| 规格参数表 | 厚度范围、尺寸范围、颜色选项、认证标准 | P0 |
| 应用场景 | 阳台窗、幕墙、扶手、隔断、淋浴房等场景图文 | P0 |
| 质保信息 | 10 年质保、3C 认证标识 | P1 |
| 相关产品 | 推荐其他品类产品 | P1 |
| 询盘 CTA | "Inquiry This Product" 按钮 | P0 |

### 2.5 服务项目（`/services`）

| 服务 | 描述 | 优先级 |
|------|------|--------|
| 定制玻璃加工 | 钢化/中空/夹胶/工艺玻璃全品类定制，来图来样加工 | P0 |
| 一站式解决方案 | 从测量、设计、生产到物流的一站式玻璃解决方案 | P0 |
| OEM/ODM 服务 | 门窗品牌代工贴牌，灵活的合作模式 | P0 |
| 技术支持 | 玻璃选型咨询、幕墙参数计算（U 值、遮阳系数等）、安装指导 | P1 |
| 全球交付 | 出口至澳大利亚、中东、非洲、东南亚的物流能力和经验 | P0 |
| 售后服务 | 10 年质保、质量问题快速响应、补片服务 | P1 |

### 2.6 工程案例（`/projects`、`/projects/[slug]`）

**列表页需求：**

| 功能 | 描述 | 优先级 |
|------|------|--------|
| 案例卡片 | 项目图片 + 项目名 + 所在地 + 玻璃用量 | P0 |
| 排序 | 按面积从大到小默认排列 | P1 |

**详情页需求：**

| 区块 | 内容 | 优先级 |
|------|------|--------|
| 项目图片 | 项目实拍图，支持画廊查看 | P0 |
| 项目信息 | 项目名称、地址、玻璃用量（㎡）、产品配置 | P0 |
| 玻璃规格 | 详细配置（如 8LOW-E+12A+8+1.52PVB+6） | P0 |
| 相关案例 | 推荐其他案例 | P1 |

**已有案例数据：**

| 项目 | 用量 | 配置 |
|------|------|------|
| 深圳广启未来中心 | 28,000 ㎡ | 6+12A+6LOW-E+1.52PVB+6 |
| 佛山欧洲工业园 | 21,000 ㎡ | 8LOW-E+12A+8 / 6LOW-E+12A+6 |
| 深圳光明科学城 | 16,000 ㎡ | 8LOW-E+12A+8 / 6LOW-E+12A+6 |
| 番禺大型工业园 | 15,000 ㎡ | 8LOW-E+12A+6+1.52PVB+6 / 6LOW-E+12A+6 |
| 珠海金湾航空新城 | 10,000 ㎡ | 8LOW-E+12A+8 / 6LOW-E+12A+6 |
| 佛山沙堤机场 | 5,000 ㎡ | 10LOW-E+12A+10 / 6LOW-E+12A+6 |

### 2.7 资质认证（`/certifications`）

| 内容 | 优先级 |
|------|--------|
| 3C 认证（中国国家强制性产品认证） | P0 |
| 中空玻璃产品认证 | P0 |
| 钢化玻璃 3C 检测报告 | P0 |
| 10 年质保书（硅酮胶 + 干燥剂 15 年品质承保） | P0 |
| 协会会员证书（4 个协会） | P1 |
| 设备/产线图片展示 | P1 |

### 2.8 联系我们（`/contact`）

| 区块 | 内容 | 优先级 |
|------|------|--------|
| 公司信息 | 公司全称、地址（中英文）、电话、邮箱 | P0 |
| 询盘表单 | Name / Email / Phone / Company / Country / Message / Product Interest 字段 | P0 |
| 表单验证 | 前端字段校验 + reCAPTCHA 防垃圾 | P0 |
| WhatsApp 按钮 | 悬浮 WhatsApp 快捷联系按钮（全局） | P0 |
| 微信二维码 | 微信二维码展示 | P1 |
| Google Maps | 工厂位置地图嵌入 | P1 |
| 社交媒体 | LinkedIn / Facebook 页面链接 | P2 |

---

## 3. 非功能需求

### 3.1 性能

| 指标 | 目标值 |
|------|--------|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3s |
| Cumulative Layout Shift | < 0.1 |

### 3.2 SEO

| 需求 | 说明 |
|------|------|
| 结构化数据 | Organization、Product、BreadcrumbList、FAQPage Schema |
| Meta Tags | 每页独立 title（≤ 60 字符）、description（≤ 160 字符） |
| URL 结构 | 语义化、短 URL、小写字母 + 连字符 |
| Sitemap | 自动生成，包含所有页面和产品/案例详情 |
| Robots.txt | 允许爬虫，排除管理页面 |
| 图片 Alt | 所有产品/案例图片含描述性 Alt 文本 |
| Canonical | 页面添加 canonical 标签防止重复内容 |
| 301 重定向 | 旧 URL 到新 URL 的 301 跳转 |

### 3.3 安全

| 需求 | 说明 |
|------|------|
| HTTPS | 全站强制 HTTPS |
| 表单安全 | reCAPTCHA v3 + 服务端校验 |
| XSS 防护 | Next.js 默认 XSS 防护 |
| CSP | Content Security Policy 头配置 |
| 环境变量 | API 密钥等敏感信息使用环境变量，不提交代码库 |

### 3.4 可维护性

| 需求 | 说明 |
|------|------|
| 产品/案例数据 | 使用 TypeScript 数据文件，便于非技术人员修改 |
| 文案管理 | 集中管理（`messages/`），方便后续多语言扩展 |
| 代码规范 | ESLint + Prettier 统一代码风格 |
| 组件化 | 可复用组件独立存放，遵循设计规范 |

---

## 4. 内容需求

### 4.1 文案要求

- **语言**：英文为主（外贸独立站定位）
- **风格**：专业、简洁、数据驱动
- **关键词覆盖**：tempered glass, insulating glass, laminated glass, glass manufacturer China, glass factory, custom glass processing, glass supplier

### 4.2 图片/视频需求

| 类型 | 数量（最低） | 说明 |
|------|-------------|------|
| Hero 背景图 | 2-3 张 | 工厂全景、生产线、产品特写 |
| 产品图片 | 每种 3-5 张 | 产品正面、侧面、细节、应用场景 |
| 工程案例图 | 每项目 3-5 张 | 项目外观、玻璃细节、安装现场 |
| 工厂照片 | 5-8 张 | 车间、设备、质检、仓库 |
| 证书扫描件 | 5-8 张 | 3C 证书、检测报告、质保书、会员证 |
| 团队照片 | 2-3 张 | 团队合照、工作场景 |
| Logo | 1 个 | BDGLASS 品牌 Logo（SVG 矢量） |

---

## 5. 第三方集成

| 集成 | 用途 | 优先级 |
|------|------|--------|
| Google Analytics 4 | 流量分析 | P0 |
| Google Search Console | SEO 监控 | P0 |
| Google reCAPTCHA v3 | 表单防垃圾 | P0 |
| 表单提交 API | 询盘数据存储 + 邮件通知 | P0 |
| WhatsApp Business API | 悬浮联系按钮 | P0 |
| Google Maps | 工厂位置展示 | P1 |
| Google Fonts | Inter 字体加载 | P0 |
| Vercel | 部署托管 | P0 |

---

## 6. 页面结构总览

| 路由 | 页面标题（Title） | 优先级 |
|------|-------------------|--------|
| `/` | BDGLASS - China Tempered & Insulating Glass Manufacturer | P0 |
| `/about` | About BDGLASS - Foshan Glass Factory Since 2018 | P0 |
| `/products` | Glass Products - Tempered, Insulating, Laminated & Craft Glass | P0 |
| `/products/[slug]` | [产品名] - BDGLASS | P0 |
| `/services` | Glass Processing Services - Custom Solutions & Global Delivery | P0 |
| `/projects` | Engineering Projects - Glass Curtain Wall & Building Cases | P0 |
| `/projects/[slug]` | [项目名] - BDGLASS Project Case | P0 |
| `/certifications` | Certifications - 3C, Quality Assurance & Warranty | P0 |
| `/contact` | Contact BDGLASS - Get Quote & Inquiry | P0 |

---

## 7. 开发阶段

### Phase 1 — 基础框架（MVP）
- 项目脚手架搭建（Next.js + Tailwind CSS + TypeScript）
- Layout 组件（Header + Footer）
- 首页核心区块
- 基础路由页面框架

### Phase 2 — 核心页面
- 产品列表 + 详情页
- 服务项目页
- 工程案例列表 + 详情页
- 关于我们页

### Phase 3 — 交互与转化
- 联系页 + 询盘表单
- 资质认证页
- WhatsApp 悬浮按钮
- Google Analytics + reCAPTCHA

### Phase 4 — 优化与上线
- SEO 优化（Metadata、Schema、Sitemap）
- 性能优化（图片优化、Lighthouse 调优）
- Vercel 部署 + 域名绑定
- Google Search Console 提交

---

> 最后更新：2026-05-27
> 品牌：BDGLASS | 域名：bdglassfactory.com
