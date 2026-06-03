# Session Memory — 2026-06-03

## 本次会话完成的工作

### 1. 网站联系电话全面更新
- **旧号码**: +86 13723810568 → **新号码**: +86 13786871098
- **WhatsApp**: +8613723810568 → +8613786871098
- **涉及文件**（全局替换）:
  - `src/data/site-config.ts`（phone / whatsapp）
  - `src/app/contact/page.tsx`（metadata + 正文 + FAQ）
  - `src/app/about/page.tsx`
  - `src/app/api/contact/route.ts`（邮件模板）
  - `src/components/home/CTASection.tsx`
  - `src/components/shared/WhatsAppButton.tsx`
  - `src/components/contact/InquiryForm.tsx`（placeholder 提示）
  - `src/data/seo-draft-contact.md`
  - `src/data/seo-draft-about.md`

### 2. 首页 ProjectExperience 项目详细信息更新
- **移除 TODO**: 之前标记为 "Coming Soon" 的 6 个项目详情已全部补充
- **数据结构升级**: `ProjectPhoto` interface 新增 `config` / `area` / `address` 字段
- **Modal 内容重构**:
  - Product Configuration — 玻璃配置列表（带圆点）
  - Engineering Glass Usage — 用量面积
  - Project Address — 项目地址
  - 移除旧的 "Coming Soon" 占位内容
- **6 个项目详情**:
  | 项目 | 配置 | 用量 | 地址 |
  |------|------|------|------|
  | Shenzhen Kuang-Chi Future Center | 6mm+12A+6mm Low-E / 6mm+12A+6mm Custom Shape | 28,000 m² | Shenzhen, Guangdong |
  | Foshan European Industrial Park | 8mm+12A+8mm / 6mm+12A+6mm Low-E | 10,000 m² | Foshan, Guangdong |
  | Shenzhen Bright Science City | 8mm+12A+8mm / 6mm+12A+6mm Low-E | 16,000 m² | Shenzhen, Guangdong |
  | Panyu Huge Industrial Park | 8mm+12A+6mm / 6mm+12A+6mm Low-E | 15,000 m² | Panyu, Guangzhou, Guangdong |
  | Zhuhai Golden Bay Aviation New City | 8mm+12A+8mm / 6mm+12A+6mm Low-E | 21,000 m² | Zhuhai, Guangdong |
  | Foshan Shadi Airport | 10mm+12A+10mm / 6mm+12A+6mm Low-E | 5,000 m² | Foshan, Guangdong |

### 3. Contact 页面修改
- **删除 Working Hours 板块**（含 Clock icon）
- **删除 Languages 板块**（含 MessageCircle icon）
- **更新 Factory Visit 文案**:
  - 原: `Airport pickup from CAN available for serious buyers`
  - 新: `Airport pickup from Guangzhou Baiyun International Airport for serious buyers`

### 4. 修复反复出现的"前端样式丢失"Bug（根本解决）
- **根因诊断**: Next.js `output: "standalone"` 构建后，`.next/standalone/.next/` 目录下**缺少 `static/` 文件夹**，导致 CSS/JS 返回 404
- **根因诊断**: 同理，`.next/standalone/` 目录下**缺少 `public/` 文件夹**，导致图片、logo、favicon 返回 404
- **当前修复**: 手动复制 `static` 和 `public` 到 standalone 目录并重启
- **根本解决**: 修改 `package.json`:
  ```json
  "build": "next build && cp -r .next/static .next/standalone/.next/static && cp -r public .next/standalone/public"
  ```
  以后每次 `npm run build` 自动完成复制，此 Bug 不再复发。

### 5. GitHub 提交 V2.2.0
- 提交 70 个文件变更
- 推送 `main` 分支到 https://github.com/wudake/BD-Glass-Factory
- 创建并推送标签 `V2.2.0`

---

## 关键决策记录

### 电话号码变更决策
- 用户明确要求全局统一替换为 +86 13786871098
- WhatsApp 链接格式同步更新（去掉 `+` 保留数字：`8613786871098`）

### Contact 页面精简决策
- 用户明确删除 Working Hours 和 Languages 两个信息卡片
- 保留其余 4 个卡片：Factory Address / Phone / Email / Factory Visit

### ProjectExperience Modal 展示决策
- 采用三栏信息卡片布局（Product Configuration / Engineering Glass Usage / Project Address）
- 配置项用无序列表 + 圆点展示
- 使用 lucide-react 图标：`ClipboardList` / `Ruler` / `MapPin`

### Standalone 构建修复决策
- **这是第二次出现此 Bug**（首次在 2026-06-01 的 project-state.md 中已记录）
- 之前通过 `deploy.sh` 脚本解决，但用户手动执行 `npm run build` 时容易遗漏
- 最终方案：将复制逻辑直接写入 `package.json` 的 `build` script，确保任何方式调用 `npm run build` 都会自动完成

---

## 遗留问题 / 待优化项

1. **Contact 页面 SEO metadata** 中的电话号码硬编码 — 可改为从 `siteConfig.phone` 动态读取
2. **API 邮件模板** 中的电话号码硬编码 — 可改为从环境变量或 siteConfig 读取
3. **ProjectExperience** 仍使用 Masonry 瀑布流布局，用户可能后续要求改为统一高度网格
4. **6 个项目图片** 目前使用 `aspect-[4/3]` 和 `aspect-[3/4]` 混排，部分图片比例可能需要调整
5. **ProjectExperience 的 Stats Cards** 中 "95,000+" 数据未按实际项目面积更新（实际总计约 95,000 m²，已吻合）

---

## 关键文件变更

```
src/data/site-config.ts                       (phone / whatsapp)
src/app/contact/page.tsx                      (删除 Working Hours / Languages, 更新 Factory Visit 文案)
src/components/home/ProjectExperience.tsx     (重构数据结构 + Modal 内容)
src/components/contact/InquiryForm.tsx        (placeholder 电话号码)
src/app/about/page.tsx                        (电话号码硬编码)
src/app/api/contact/route.ts                  (邮件模板电话号码)
src/components/home/CTASection.tsx            (WhatsApp 链接)
src/components/shared/WhatsAppButton.tsx      (WhatsApp 号码)
src/data/seo-draft-contact.md                 (SEO 文案)
src/data/seo-draft-about.md                   (SEO 文案)
package.json                                  (build 脚本添加 static + public 复制)
```

## 会话结束状态

- 生产环境：https://bdglassfactory.com 已更新并正常运行
- PM2 状态：online
- GitHub: V2.2.0 已发布
- 构建脚本已修复，standalone 样式/图片丢失 Bug 不再复发
