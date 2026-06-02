# 构建注意事项 — BDGLASS

> ⚠️ **必读**：Next.js standalone 模式下的构建后步骤，漏执行会导致前端样式丢失。

---

## Standalone 模式的坑

本项目使用 `output: "standalone"`（见 `next.config.ts`）。

`npm run build` 后，`.next/standalone/` 目录**只包含**服务端代码，**不包含**：
- ❌ `public/` 目录（图片、favicon、字体等）
- ❌ `.next/static/` 目录（CSS 样式、JS chunk 文件）

如果直接 `pm2 restart`，前端会：
- 页面白屏 / 无样式
- 图片 404
- JS 无法加载

---

## 正确构建流程

### 方式一：用 deploy.sh（推荐）

```bash
bash deploy.sh
```

`deploy.sh` 已包含完整的构建 + 复制 + 重启流程。

### 方式二：手动执行

```bash
cd bd-glass-factory

# 1. 构建
npm run build

# 2. 复制 public 目录到 standalone（必须！）
cp -r public .next/standalone/

# 3. 复制 static 目录到 standalone（必须！）
mkdir -p .next/standalone/.next
cp -r .next/static .next/standalone/.next/

# 4. 重启服务
pm2 restart bd-glass-factory
```

### 方式三：快速重启（不重新构建）

如果只需要重启服务，不修改代码：

```bash
pm2 restart bd-glass-factory
```

---

## 常见症状对照

| 症状 | 根因 | 修复 |
|------|------|------|
| 页面白屏，无样式 | `.next/static/` 未复制到 standalone | 执行 `cp -r .next/static .next/standalone/.next/` 后重启 |
| 图片 404 | `public/` 未复制到 standalone | 执行 `cp -r public .next/standalone/` 后重启 |
| 字体无法加载 | `public/` 未复制到 standalone | 同上 |
| 构建通过但线上异常 | 漏了复制步骤 | 执行完整构建流程 |

---

## 本地开发 vs 生产部署

| 环境 | 命令 | 是否需要复制步骤 |
|------|------|-----------------|
| 本地开发 | `npm run dev` | ❌ 不需要 |
| 生产构建 | `npm run build` | ✅ 必须复制 public + static |
| 生产启动 | `pm2 restart` / `pm2 start` | — |

---

## 相关文件

- `next.config.ts` — `output: "standalone"` 配置
- `ecosystem.config.js` — PM2 进程配置
- `deploy.sh` — 完整部署脚本
