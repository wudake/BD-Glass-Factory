# 会话记忆 — 2026-06-01 首页文案 I→U 型优化

> **用途**：记录本次交互式文案优化的完整决策过程，供后续会话快速恢复上下文。
> **关联文档**：`docs/homepage-copy-u-type-optimization.md`（U型文案方案库）

---

## 会话背景

用户要求将首页文案从 **I 型（以自我为中心）** 转换为 **U 型（以客户为中心）**，采用**交互式逐段优化**方式：
- 我逐段展示当前文案 + U 型建议
- 用户实时决策（采用 / 保持 / 修改）
- 确认后立即写入代码并构建

---

## 用户偏好总结

### 采纳 U 型文案的模式
用户倾向于**简洁有力、结果导向**的文案，不喜欢过度冗长。

### 明确拒绝改动的区块
| 区块 | 用户决策 | 原因 |
|------|---------|------|
| HeroBanner H1 | **保持原样** | "Your Trusted China Glass Factory for Glass Solution" |
| ProductRange H2 + 正文 | **保持原样** | 用户说"不变" / "保持" |
| ContactSection | **保持原样** | 已偏 U 型，用户认为无需改动 |

### 明确的文案调整要求
- 去掉 HeroBanner Subtitle 中的 **AS2047**（仅保留 3C 认证）
- ProjectExperience 正文去掉 airports，增加 **villas, apartments**

---

## 逐段决策记录

### 1. HeroBanner Trust Badge
- **我的建议**：`◆ Helping Builders & Contractors Source Glass Since 2019`
- **用户选择**：方案 A（强调帮助客户）✅

### 2. HeroBanner H1
- **我的建议**：`Get the Right Glass for Your Project — Without the Headaches`
- **用户决策**：**不改变** ✅ 保持原样

### 3. HeroBanner Trust Banner 3
- **我的建议**：`Scaled to your timeline and order size`
- **用户选择**：方案 A ✅

### 4. ProductRange
- **我的建议**：2 套 U 型 H2 + 正文
- **用户决策**：**不变** ✅ 保持原样

### 5. FactoryStrength 引导段落
- **我的建议**：`When you partner with BDGLASS, you get more than a supplier...`
- **用户决策**：**按照我的建议** ✅

### 6. FactoryStrength 5 张卡片
- **我的建议**：全部 U 型改写
- **用户决策**：**采用 U 型文案** ✅ 全部采纳

### 7. QualityMaterials
- **我的建议**：方案 A `Glass That Performs — Year After Year`
- **用户选择**：方案 A ✅

### 8. ProductCategories H2 + 正文
- **我的建议**：2 套 U 型方案
- **用户决策**：**保持** ✅ 保持原样

### 9. ApplicationScenarios 正文 + 4 张卡片
- **我的建议**：U 型改写
- **用户决策**：**改写** ✅

### 10. ProjectExperience H2 + 正文 + Stats
- **我的建议**：H2 `Project Experience That Protects Your Timeline`
- **用户补充**：去掉 airports，增加 villas, apartments
- **用户决策**：Stats **改** ✅

### 11. CertificationsPreview H2 + 正文 + 3 张卡片
- **我的建议**：U 型改写
- **用户决策**：**改** ✅

### 12. WhyChooseUs 3 张卡片
- **我的建议**：Talk Direct / We've Seen Projects / Export-Ready Support
- **用户决策**：**改** ✅

### 13. HowWeWork H2
- **我的建议**：方案 A `From First Message to Delivery — Five Simple Steps`
- **用户选择**：方案 A ✅

### 14. CTASection H2
- **我的建议**：`Ready to Get Your Glass Sorted?`
- **用户选择**：该方案 ✅

### 15. ContactSection
- **我的建议**：微调 H2
- **用户决策**：**保持** ✅

### 16. SEO Meta Title
- **我的建议**：`Tempered & Insulating Glass Supplier | Factory-Direct from China | BDGLASS`
- **用户决策**：**改** ✅

### 17. 全局 layout.tsx Meta
- 后续检查发现残留旧 I 型文案，用户同意一起改
- **我的建议**：U 型化 title + description + og + twitter
- **用户决策**：**改** ✅

### 18. 去掉 AS2047
- **用户要求**：从所有文案中移除 AS2047
- **执行**：HeroBanner Subtitle + page.tsx description + og description ✅

---

## 已修改文件清单（本次会话）

| # | 文件路径 | 改动内容 |
|---|---------|---------|
| 1 | `src/components/home/HeroBanner.tsx` | Trust Badge、Subtitle（去AS2047）、Trust Banner 3 |
| 2 | `src/components/home/FactoryStrength.tsx` | 引导段落、5 张优势卡片 |
| 3 | `src/components/home/QualityMaterials.tsx` | H2 + 正文 |
| 4 | `src/components/home/ApplicationScenarios.tsx` | 正文 + 4 张卡片 |
| 5 | `src/components/home/ProjectExperience.tsx` | H2 + 正文 + Stats 标签 |
| 6 | `src/components/home/CertificationsPreview.tsx` | H2 + 正文 + 3 张卡片 |
| 7 | `src/components/home/WhyChooseUs.tsx` | 3 张卡片（1,4,6） |
| 8 | `src/components/home/HowWeWork.tsx` | H2 + 正文 |
| 9 | `src/components/home/CTASection.tsx` | H2 |
| 10 | `src/app/page.tsx` | Title + description + og description |
| 11 | `src/app/layout.tsx` | 全局 title + description + og + twitter |

---

## 验证结果

- 构建通过 ✅
- PM2 重启成功 ✅
- 新 U 型文案 12 处关键词全部命中 ✅
- 旧 I 型文案残留 **0** ✅
- 页面正常渲染 ✅

---

## 待继续方向（用户可能的需求）

1. **ProductCategories 7 个产品描述 U 型化** — 用户本次跳过，可能下次继续
2. **其他页面文案 U 型化** — About、Products、Services、Projects 等
3. **图片替换** — ProductCategories / ProjectExperience / QualityMaterials 仍有 placeholder
4. **ProductRange H2 改写** — 用户本次决定不改，但可下次再讨论

---

> 此文件用于帮助后续 AI 会话快速恢复上下文，理解用户的文案偏好和已做决策。
