# BDGLASS 网站 SEO 页面开发计划

> **原则**：逐个页面深度优化，不一次性全部开发。每完成一个页面，用户确认后再进入下一个。

---

## 当前网站 SEO 现状总览

| 页面 | 状态 | 主要问题 |
|------|------|----------|
| `/` (首页) | ✅ 已完成 | H1、Metadata、JSON-LD、文案已优化 |
| `/about` | ⚠️ 中等 | 内容丰富，但 H1 缺少核心关键词，可补充 FAQ、结构化数据 |
| `/products` | ⚠️ 中等 | 列表页 OK，但产品卡片可更丰富 |
| `/products/[slug]` (4个) | ❌ 薄弱 | **内容太简单**，仅有基础描述+规格表，缺少 FAQ、应用场景故事、相关推荐 |
| `/services` | ⚠️ 中等 | 6 个服务卡片描述简短，缺少服务流程图、案例关联 |
| `/projects` | ⚠️ 中等 | 列表页 OK |
| `/projects/[slug]` (6个) | ❌ 薄弱 | **内容极简**，仅有基本信息，缺少项目背景、挑战、解决方案、成果 |
| `/certifications` | ⚠️ 中等 | 认证展示 OK，但缺少 3C 认证详情页、下载功能 |
| `/contact` | ✅ 基本OK | 表单+联系信息完整 |

---

## 优先级排序（按 SEO 价值 + 转化价值）

### Phase 1：产品详情页（最高优先级）

**为什么优先？**
- 产品页是 **核心转化页面**，直接影响询盘量
- 每个产品对应大量 **长尾搜索词**（如 "tempered glass 10mm price China"、"insulated glass for curtain wall"）
- Google 偏好内容丰富、有深度的产品页面

**4 个产品详情页：**
1. `/products/tempered-glass`
2. `/products/insulating-glass`
3. `/products/laminated-glass`
4. `/products/craft-glass`

**每个产品页需要补充的内容：**

| 模块 | SEO 价值 | 说明 |
|------|----------|------|
| 产品主图 + 多图展示 | ⭐⭐⭐ | 带 alt 文本的产品实拍图（暂用占位符标注） |
| 详细产品描述 | ⭐⭐⭐⭐⭐ | 500-800 字，自然融入关键词 |
| 技术参数表 | ⭐⭐⭐⭐ | 已有，可扩展更多参数行 |
| 核心特性（Features） | ⭐⭐⭐⭐ | 已有，可优化文案 |
| 应用场景（Applications） | ⭐⭐⭐⭐ | 已有，可扩展为带图卡片 |
| **FAQ 模块** | ⭐⭐⭐⭐⭐ | 新增！回答 5-8 个常见采购问题，对 Featured Snippet 极友好 |
| **相关推荐** | ⭐⭐⭐ | "You May Also Like" — 内链到其他产品 |
| **询盘 CTA** | ⭐⭐⭐⭐ | 每个产品页底部独立询盘表单或快速询价按钮 |
| 结构化数据优化 | ⭐⭐⭐⭐ | 扩展 Product Schema：aggregateRating、offers、brand |

**建议开发顺序：**
1. 先开发 **Tempered Glass**（搜索量最大）
2. 再开发 **Insulating Glass**
3. 然后 **Laminated Glass**
4. 最后 **Craft Glass**

---

### Phase 2：About 页面深度优化

**为什么其次？**
- About 页是 **信任建设** 的核心，影响转化率
- "About us glass factory China" 是常见搜索词
- 丰富的公司信息有助于 Google 理解品牌实体（E-E-A-T）

**需要补充的内容：**

| 模块 | SEO 价值 | 说明 |
|------|----------|------|
| H1 优化 | ⭐⭐⭐⭐ | 当前 H1="About BDGLASS" → 改为 "About BDGLASS — Professional China Glass Factory" |
| 公司故事时间线 | ⭐⭐⭐ | 2018-2026 发展历程 |
| **FAQ 模块** | ⭐⭐⭐⭐⭐ | 新增！"Are you a factory or trading company?" 等 6-8 个问题 |
| 团队介绍 | ⭐⭐⭐ | 管理层/核心团队 |
| 工厂实景 | ⭐⭐⭐ | 生产车间、设备照片（占位符标注） |
| 出口地图 | ⭐⭐⭐ | 展示出口国家的可视化地图 |
| 结构化数据 | ⭐⭐⭐⭐ | 增强 Organization Schema：founder, employee count, areaServed |

---

### Phase 3：项目案例详情页（6个）

**为什么第三？**
- 案例页是 **信任背书**，对 B2B 采购决策影响很大
- 项目名+地点+产品类型形成独特长尾关键词
- 但搜索量低于产品页

**6 个项目详情页：**
1. `/projects/shenzhen-guangqi-future-center`
2. `/projects/foshan-european-industrial-park`
3. `/projects/shenzhen-bright-science-city`
4. `/projects/zhuhai-golden-bay-aviation-new-city`
5. `/projects/foshan-fenjiang-zhongxincheng`
6. `/projects/guangzhou-xiaolong-villa`

**每个项目页需要补充的内容：**

| 模块 | SEO 价值 | 说明 |
|------|----------|------|
| 项目背景 | ⭐⭐⭐⭐ | 项目类型、规模、业主信息 |
| 挑战与需求 | ⭐⭐⭐⭐ | 客户遇到什么玻璃需求问题 |
| 解决方案 | ⭐⭐⭐⭐⭐ | BDGLASS 提供了什么玻璃产品、如何配置 |
| 使用的玻璃产品 | ⭐⭐⭐⭐⭐ | 具体型号、厚度、数量，链接到对应产品页 |
| 项目成果 | ⭐⭐⭐ | 安装效果、客户反馈 |
| 项目图片 | ⭐⭐⭐ | 建筑外观、玻璃细节（占位符标注） |
| 相关项目推荐 | ⭐⭐⭐ | 同类型项目内链 |
| 结构化数据 | ⭐⭐⭐ | Project Schema 或 Article Schema |

---

### Phase 4：Services 页面优化

**为什么第四？**
- 服务页更多是 **支撑转化**，而非直接引流
- 但 "custom glass processing service China" 等词有搜索量

**需要补充的内容：**

| 模块 | SEO 价值 | 说明 |
|------|----------|------|
| 每个服务的详细流程 | ⭐⭐⭐⭐ | 当前只有 3 个 bullet points，可扩展为流程图 |
| 服务案例 | ⭐⭐⭐⭐ | 每个服务关联 1-2 个真实案例 |
| 设备能力 | ⭐⭐⭐ | CNC、钢化炉等设备的最大加工尺寸 |
| MOQ & Lead Time | ⭐⭐⭐⭐ | 最低起订量、交货周期（B2B 买家高频问题） |
| **服务 FAQ** | ⭐⭐⭐⭐⭐ | 新增！每个服务 3-5 个 FAQ |

---

### Phase 5：Certifications 页面优化

**为什么最后？**
- 认证页搜索量低，主要是 **信任支撑**
- 但 3C 认证详情可以吸引特定搜索

**需要补充的内容：**

| 模块 | SEO 价值 | 说明 |
|------|----------|------|
| 每个认证的详细说明 | ⭐⭐⭐ | 认证标准、有效期、适用范围 |
| 3C 认证专题页 | ⭐⭐⭐⭐ | 可单独做一页 "What is 3C Certification for Glass?" |
| 认证下载 | ⭐⭐⭐ | PDF 下载按钮 |
| 检测报告摘要 | ⭐⭐⭐ | 关键数据可视化 |

---

## 推荐执行顺序

| 顺序 | 页面 | 预计工作量 | SEO 价值 |
|------|------|-----------|----------|
| 1 | `/products/tempered-glass` | 中（1-2小时） | ⭐⭐⭐⭐⭐ |
| 2 | `/products/insulating-glass` | 中 | ⭐⭐⭐⭐⭐ |
| 3 | `/products/laminated-glass` | 中 | ⭐⭐⭐⭐⭐ |
| 4 | `/products/craft-glass` | 中 | ⭐⭐⭐⭐ |
| 5 | `/about` | 中 | ⭐⭐⭐⭐ |
| 6 | `/projects/shenzhen-guangqi-future-center` | 中 | ⭐⭐⭐⭐ |
| 7 | `/projects/foshan-european-industrial-park` | 中 | ⭐⭐⭐⭐ |
| 8 | `/services` | 小-中 | ⭐⭐⭐⭐ |
| 9 | 其余 4 个项目详情页 | 中 | ⭐⭐⭐ |
| 10 | `/certifications` | 小 | ⭐⭐⭐ |

---

## 每个页面的交付标准

每完成一个页面，我会提供：
1. **文案预览**（如需要，Markdown 格式）
2. **代码修改**（Metadata、H1、正文、JSON-LD）
3. **构建验证**（确保无报错）
4. **SEO 检查清单**：
   - [ ] Meta Title ≤ 60 字符，含核心关键词
   - [ ] Meta Description ≤ 160 字符
   - [ ] H1 含关键词，唯一
   - [ ] 至少 1 个 H2，含语义关键词
   - [ ] 正文 ≥ 300 字（产品/项目页 ≥ 500 字）
   - [ ] 图片有描述性 alt 文本
   - [ ] 有内链到其他页面
   - [ ] 有结构化数据（JSON-LD）
   - [ ] 有明确的 CTA（询盘/联系）

---

## 下一步

请确认：**从哪个页面开始？**

建议从 **`/products/tempered-glass`**（钢化玻璃详情页）开始，因为它是搜索量最大、转化价值最高的页面。

如果你同意，我将：
1. 先给你该页面的 **SEO 优化文案**（Markdown）供你确认
2. 你确认后，我再写入代码
3. 构建验证 → 重启服务 → 你验收

或者你也可以直接指定其他页面开始。