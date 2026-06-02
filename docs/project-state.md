# BDGLASS 项目状态快照

> 生成时间：2026-06-02
> 用途：保存当前完整项目状态，方便次日继续开发

---

## 一、项目概览

| 项目 | 内容 |
|------|------|
| 品牌 | BDGLASS (Foshan Bodian Glass Co., LTD) |
| 域名 | https://bdglassfactory.com |
| 技术栈 | Next.js 16.2 + TypeScript 5 + Tailwind CSS v4 |
| 构建输出 | standalone |
| 部署方式 | Linux 服务器 + Nginx + PM2 |
| 包管理器 | npm |
| 当前版本 | V2.0.0 |

---

## 二、已完成工作清单

### Phase 1 — 项目初始化 ✅
- [x] Next.js 项目脚手架搭建
- [x] Tailwind CSS v4 设计系统（CSS-first，无 tailwind.config.ts）
- [x] 全局 Layout（Header + Footer + MobileNav）
- [x] 通用组件（SectionTitle, Breadcrumb）
- [x] 站点配置文件 site-config.ts
- [x] 数据文件（products, projects, services, certifications）
- [x] 所有页面路由占位

### Phase 2 — 首页开发 ✅
- [x] HeroBanner（全屏 + 背景图 + CTA）
- [x] AboutPreview（公司简介预览）
- [x] FactoryStrength（工厂实力数字展示）
- [x] ProductCategories（7 个产品类别）
- [x] ProductRange（4 大产品卡片）
- [x] WhyChooseUs（选择理由）
- [x] ApplicationScenarios（应用场景）
- [x] QualityMaterials（原材料优势）
- [x] HowWeWork（工作流程）
- [x] CertificationsPreview（认证预览）
- [x] ProjectExperience（项目经验）
- [x] **ClientVisits（海外客户来访合影 — 2026-06-02 新增）**
- [x] ContactSection（联系区块）
- [x] CTASection（行动号召）

### Phase 3 — 核心页面开发 ✅
- [x] /about — 公司介绍、生产基地、原材料、团队、客户、协会
- [x] /products — 产品列表页
- [x] /products/[slug] — 4 个产品详情页（静态生成）
- [x] /services — 服务项目页
- [x] /projects — 工程案例列表页
- [x] /projects/[slug] — 6 个案例详情页（静态生成）
- [x] /certifications — 资质认证页
- [x] /contact — 联系页 + 询盘表单
- [x] 404 页面

### Phase 4 — 交互与转化 ✅
- [x] 询盘表单（前端校验、提交到 API）
- [x] API Route `/api/contact`
- [x] WhatsApp 悬浮按钮
- [x] Contact 页完整内容

### Phase 5 — SEO + 性能优化 ✅
- [x] 每个页面独立 metadata
- [x] Open Graph 标签
- [x] 动态 generateMetadata（产品/案例详情）
- [x] Schema.org 结构化数据（Organization, Product, BreadcrumbList）
- [x] Sitemap 动态生成
- [x] Robots.txt
- [x] 图片优化配置（WebP/AVIF）
- [x] 字体子集化 + font-display: swap

### Phase 6 — 部署上线 ✅
- [x] Linux 服务器部署
- [x] Nginx 反向代理配置
- [x] SSL 证书（Let's Encrypt）
- [x] PM2 进程管理
- [x] 域名解析生效

### 额外完成 ✅
- [x] Logo 设计（SVG + PNG + favicon 全套）
- [x] **Logo 更换（2026-06-02 — 新 3D 金属质感 BD Logo）**
- [x] 移动端设计规范（docs/design-spec.md）
- [x] 移动端全面优化（所有组件响应式）
- [x] 首页 SEO 文案重写（12 个区块）
- [x] 产品详情 SEO 文案
- [x] 静态图片整理（工厂、设备、认证、团队等）
- [x] **客户来访照片上传 + 展示模块（2026-06-02）**

### 首页文案 I 型 → U 型优化 ✅（2026-06-01）
- [x] **HeroBanner** — Trust Badge、Trust Banner 3、Subtitle（去掉 AS2047）
- [x] **FactoryStrength** — 引导段落 + 5 张优势卡片全部 U 型改写
- [x] **QualityMaterials** — H2 + 正文 U 型改写
- [x] **ApplicationScenarios** — 正文 + 4 张场景卡片 U 型改写
- [x] **ProjectExperience** — H2 + 正文（增加 villas/apartments）+ 4 个 Stats 标签
- [x] **CertificationsPreview** — H2 + 正文 + 3 张认证卡片 U 型改写
- [x] **WhyChooseUs** — 3 张卡片 U 型改写（Talk Direct / We've Seen Projects / Export-Ready）
- [x] **HowWeWork** — H2 U 型改写
- [x] **CTASection** — H2 U 型改写
- [x] **SEO Meta** — 全局 layout.tsx title/description/og/twitter + 首页 page.tsx title 全部 U 型化

---

## 三、进行中 / 待完成工作

### 🔴 高优先级（下次会话首选）

| # | 任务 | 说明 | 涉及文件 |
|---|------|------|----------|
| 1 | 替换钢化玻璃图片 | 用户自行寻找合适的 tempered-glass 产品图 | `public/images/home/categories/tempered-glass.jpg` |
| 2 | ProductCategories 图片替换 | 7 个 placeholder `<div>` → `<Image>` | `src/components/home/ProductCategories.tsx` |
| 3 | ProjectExperience 图片替换 | 1 个 placeholder `<div>` → `<Image>` | `src/components/home/ProjectExperience.tsx` |
| 4 | QualityMaterials 图片替换 | 1 个 placeholder `<div>` → `<Image>` | `src/components/home/QualityMaterials.tsx` |
| 5 | 重新构建部署 | `deploy.sh` 执行完整流程 | `bd-glass-factory/deploy.sh` |

### 🟡 中优先级

| # | 任务 | 说明 |
|---|------|------|
| 6 | /certifications 页 SEO 优化 | 当前内容较基础，需关键词丰富化 |
| 7 | /projects/[slug] 详情页 SEO | 每个项目独立 SEO 内容 |
| 8 | Google Analytics 4 集成 | 测量 ID 通过环境变量配置 |
| 9 | reCAPTCHA v3 集成 | 询盘表单防垃圾 |
| 10 | 表单邮件通知 | API 只接收数据，未发送邮件 |
| 11 | 产品图片质量检查 | 确认 4 个产品图是否足够专业 |
| 12 | 关于页图片检查 | 部分 about 图片可能是占位图 |
| 13 | ClientVisits 模块优化 | 用户可能希望调整交错幅度、裁剪比例或照片顺序 |

### 🟢 低优先级 / 未来规划

| # | 任务 | 说明 |
|---|------|------|
| 14 | Blog 内容策略 | 用于持续 SEO |
| 15 | 多语言支持 | next-intl 预留但未实施 |
| 16 | 产品图片画廊 | 详情页多图切换 |
| 17 | 案例图片画廊 | 详情页多图切换 |
| 18 | Lighthouse 持续优化 | 目标 Desktop ≥ 90, Mobile ≥ 85 |
| 19 | 加载骨架屏 | 提升 perceived performance |
| 20 | 图片懒加载优化 | 非首屏图片 lazy loading |
| 21 | 服务端缓存 | ISR 或 revalidate |

---

## 四、部署环境详细配置

### Nginx 配置 (`/etc/nginx/sites-available/bdglassfactory.com`)

```nginx
server {
    server_name bdglassfactory.com www.bdglassfactory.com;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        proxy_pass http://[::1]:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 86400;
    }
    
    listen 443 ssl;
    # SSL certificates managed by certbot
}
```

**关键规则**：
- `proxy_pass` 必须硬编码 `http://[::1]:3000`
- 不要添加 `location /_next/static/` 或 `/static/` — 会导致 403（www-data 无法读取 /root/ 路径）
- 所有静态文件由 Next.js standalone 直接处理

### PM2 配置 (`bd-glass-factory/ecosystem.config.js`)

- 应用名：`bd-glass-factory`
- 入口：`.next/standalone/server.js`
- 端口：3000（仅 IPv6 `[::1]`）
- 实例数：1

### 部署脚本 (`bd-glass-factory/deploy.sh`)

1. `cd bd-glass-factory`
2. `npm run build`
3. `cp -r public .next/standalone/`
4. `cp -r .next/static .next/standalone/.next/`
5. `pm2 reload bd-glass-factory`
6. `nginx -t && systemctl reload nginx`

---

## 五、已知问题与解决方案

| 问题 | 状态 | 根因 | 解决方案 |
|------|------|------|----------|
| 访问网站弹出 Basic Auth | ✅ 已解决 | cc-switch-web 监听 0.0.0.0:3000 | Nginx 代理到 `[::1]:3000` |
| 桌面端无样式 | ✅ 已解决 | Nginx 静态文件 403 | 移除 static location，Next.js 自处理 |
| 图片无法加载 | ✅ 已解决 | standalone 缺少 public/ | deploy.sh 复制 public 和 static |
| **构建后样式丢失** | ✅ 已解决（2026-06-01）| `npm run build` 后未复制 `public/` 和 `.next/static/` 到 standalone 目录 | **必须执行：** `cp -r public .next/standalone/` 和 `cp -r .next/static .next/standalone/.next/`，再 `pm2 restart` |
| AI 图片生成不可用 | ⚠️ 已知 | Pollinations.ai 返回 402 | 使用 Unsplash 库存图或付费 API |
| 询盘表单无邮件通知 | ⚠️ 待处理 | API 仅接收，未配置 SMTP | 待集成 Nodemailer / Resend |
| 移动端图片 placeholder | 🔄 进行中 | 组件使用 `<div>` 代替 `<Image>` | 待替换为 Next.js Image |
| **src/app/favicon.ico 导致构建失败** | ✅ 已解决（2026-06-02）| Turbopack 无法解码 ICO 中 RGB 格式的 PNG | **已删除** `src/app/favicon.ico`，改用 layout.tsx metadata 引用 `public/favicon.ico` |

> ⚠️ **关于 "构建后样式丢失" 的详细说明：**
> Next.js `output: "standalone"` 模式下，`npm run build` 生成的 `.next/standalone/` 目录**不包含** `public/` 和 `.next/static/` 的内容。如果只执行 `npm run build && pm2 restart`，样式文件（CSS）和静态资源（图片、字体）都不会被复制到 standalone 运行目录，导致前端无样式、图片 404。
>
> **正确流程（每次构建后必须执行）：**
> ```bash
> npm run build
> cp -r public .next/standalone/
> cp -r .next/static .next/standalone/.next/
> pm2 restart bd-glass-factory
> ```
> 或直接用：`bash deploy.sh`（已包含上述步骤）

---

## 六、文件结构速查

### 首页组件图片映射（待完成）

| 组件 | 当前状态 | 目标图片路径 |
|------|----------|-------------|
| ProductCategories (7 个) | placeholder div | `public/images/home/categories/{slug}.jpg` |
| ProjectExperience | placeholder div | `public/images/home/projects/project-showcase.jpg` |
| QualityMaterials | placeholder div | `public/images/home/materials/quality-inspection.jpg` |

### 图片目录总览

```
public/images/
├── about/           (20 张 — 工厂、团队)
├── certifications/  (8 张 — 认证证书)
├── client-visits/   (11 张 — 海外客户来访合影，2026-06-02 新增)
├── equipment/       (17 张 — 设备产线)
├── factory/         (30+ 张 — 工厂实拍)
├── home/
│   ├── categories/  (7 张，1 张待替换)
│   ├── materials/   (1 张)
│   ├── projects/    (1 张)
│   ├── hero-bg.jpg
│   └── about-preview.jpg
├── products/        (4 张 — 产品图)
├── projects/        (6 张 — 案例图)
├── services/        (13 张 — 服务图)
└── team/            (2 张 — 团队照)
```

---

## 七、关键决策记录（供后续会话参考）

### 文案风格决策
- **I 型文案** → **U 型文案** 转换已完成首页全区块
- 保留 ProductRange H2 `One China Glass Factory, Multiple Glass Solutions`（用户明确决定不改）
- 保留 HeroBanner H1 `Your Trusted China Glass Factory for Glass Solution`（用户明确决定不改）
- 保留 ContactSection 原样（用户明确决定不改）
- AS2047 已从所有文案中移除（仅保留 3C 认证）

### Logo 决策（2026-06-02）
- 新 Logo 为 3D 金属质感 BD 图标，深蓝色背景
- 原图 1448×1086，居中裁剪为正方形后缩放至各尺寸
- 网站主 Logo (`logo.png`) 为 512×512 正方形
- `src/app/favicon.ico` **已删除**，通过 `layout.tsx` metadata 引用 `public/favicon.ico`

### ClientVisits 模块决策（2026-06-02）
- 位置：首页 `WhyChooseUs` 之后，`HowWeWork` 之前
- 不标注客户具体信息（国家、公司名称等）
- 展示形式：4 列交错网格（桌面 `grid-cols-4`，手机 `grid-cols-2`）
- 交错效果：偶数项向下偏移 `md:mt-10`
- 图片比例：`aspect-[3/4]` 竖版 + `object-cover`
- 11 张照片全部展示，使用 Next.js Image 懒加载
- 设计文档：`docs/superpowers/specs/2026-06-02-client-visits-gallery-design.md`
- 实现计划：`docs/superpowers/plans/2026-06-02-client-visits-gallery.md`

### SEO 关键词保留
尽管文案 U 型化，以下关键词仍自然保留在页面中：
- `China glass factory` / `China glass manufacturer` — 出现在正文和 keywords meta
- `tempered glass` / `insulating glass` / `laminated glass` / `craft glass` — 产品名自然保留
- `custom glass processing` — 出现在 keywords
- `Foshan, Guangdong` — 出现在 FactoryStrength 卡片

## 八、下次会话启动检查清单

当用户说"继续开发"时，按以下顺序执行：

1. **读取本文件** — 了解当前项目状态（30 秒）
2. **检查 git 状态** — `git status` 确认是否有未提交更改
3. **检查 tempered-glass.jpg** — 问用户是否已替换
4. **替换组件 placeholder** — ProductCategories, ProjectExperience, QualityMaterials
5. **本地测试** — `npm run dev`，确认图片和文案正常显示
6. **构建** — `npm run build`，确认无报错
7. **⚠️ 关键：复制静态文件** — `cp -r public .next/standalone/` + `cp -r .next/static .next/standalone/.next/`（standalone 模式必须！漏了这步会导致样式丢失！）
8. **部署** — `pm2 restart bd-glass-factory`（或直接用 `bash deploy.sh`）
9. **线上验证** — 访问 https://bdglassfactory.com 确认

> **重要提醒**：每次 `npm run build` 后，standalone 模式**不会自动**把 `public/` 和 `.next/static/` 复制到 `.next/standalone/`。如果省略第 7 步直接 `pm2 restart`，前端会显示无样式、图片 404。

---

> 此文件由 AI 自动生成于 2026-06-02，用于项目进度保存。
> 最近更新：2026-06-02 — Logo 更换 + ClientVisits 客户来访模块上线 + 修复 favicon.ico 构建问题
