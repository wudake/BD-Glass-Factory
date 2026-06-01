# BD Glass Factory - 项目记忆

## 🎯 项目概述

- **项目名称**: BD Glass Factory（博点玻璃厂）
- **域名**: https://bdglassfactory.com
- **备用域名**: https://www.bdglassfactory.com
- **部署方式**: 自托管 VPS
- **服务器 IP**: 46.250.249.99
- **VPS 位置**: `/root/BD-Glass-Factory/bd-glass-factory/`

---

## 🛠 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 16.2.6 (App Router) |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 4 |
| 运行时 | Node.js 20 |
| 进程管理 | PM2 |
| 反向代理 | Nginx 1.28.3 |
| SSL | Let's Encrypt (自动续期) |

---

## 📁 关键文件位置

### 项目文件
```
/root/BD-Glass-Factory/bd-glass-factory/
├── next.config.ts          # Next.js 配置 (output: standalone)
├── ecosystem.config.js     # PM2 进程配置
├── nginx.conf              # Nginx 配置备份
├── deploy.sh               # 一键部署脚本
├── src/app/                # 页面路由
│   ├── page.tsx            # 首页
│   ├── layout.tsx          # 根布局
│   ├── about/              # 关于我们
│   ├── products/           # 产品页 (SSG)
│   ├── projects/           # 项目案例 (SSG)
│   ├── services/           # 服务页
│   ├── contact/            # 联系我们
│   ├── certifications/     # 资质认证
│   ├── api/contact/        # 联系表单 API
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── public/                 # 静态资源
└── PROJECT_MEMORY.md       # 本文件
```

### 服务器配置
```
/etc/nginx/sites-available/bdglassfactory.com   # Nginx 站点配置
/etc/letsencrypt/live/bdglassfactory.com/        # SSL 证书
/var/www/certbot/                                 # Certbot 验证目录
/root/.pm2/                                       # PM2 配置和日志
```

---

## 🚀 部署与运维

### 一键更新（推荐）
```bash
cd /root/BD-Glass-Factory/bd-glass-factory
./deploy.sh
```

### 手动操作
```bash
# 构建
cd /root/BD-Glass-Factory/bd-glass-factory
npm install && npm run build

# 复制静态资源到 standalone
mkdir -p .next/standalone/.next
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# PM2 管理
pm2 status                    # 查看状态
pm2 reload bd-glass-factory   # 热重启
pm2 logs bd-glass-factory     # 查看日志
pm2 restart bd-glass-factory  # 冷重启
pm2 stop bd-glass-factory     # 停止

# Nginx
sudo nginx -t                 # 测试配置
sudo systemctl reload nginx   # 重载
sudo systemctl restart nginx  # 重启

# SSL 证书
sudo certbot renew --dry-run  # 测试续期
```

---

## 🌐 部署架构

```
用户 → DNS (bdglassfactory.com)
         → VPS:46.250.249.99
              → Nginx (80/443)
                   → PM2 → Next.js (localhost:3000)
```

### Nginx 功能
- HTTP → HTTPS 强制重定向
- SSL/TLS 终止
- 静态资源缓存 (`/_next/static/` 缓存 1 年)
- gzip 压缩
- Security Headers (XSS/Frame/Content-Type)

### PM2 配置
- 端口: 3000
- 自动重启: 开启
- 内存上限: 150MB (超限时重启)
- 开机自启: 已配置

---

## 📋 已完成页面

| 页面 | 路径 | 类型 |
|------|------|------|
| 首页 | `/` | 静态 |
| 关于我们 | `/about` | 静态 |
| 产品中心 | `/products` | 静态 |
| 产品详情 | `/products/[slug]` | SSG |
| 项目案例 | `/projects` | 静态 |
| 项目详情 | `/projects/[slug]` | SSG |
| 服务介绍 | `/services` | 静态 |
| 联系我们 | `/contact` | 静态 |
| 资质认证 | `/certifications` | 静态 |
| 联系 API | `/api/contact` | 动态 |
| SEO | `/robots.txt`, `/sitemap.xml` | 动态 |

### 产品数据
- tempered-glass（钢化玻璃）
- insulating-glass（中空玻璃）
- laminated-glass（夹层玻璃）
- craft-glass（工艺玻璃）

### 项目案例数据
- shenzhen-guangqi-future-center
- foshan-european-industrial-park
- shenzhen-bright-science-city
- (+3 more)

---

## ⚠️ 注意事项

1. **80 端口冲突**: 这台 VPS 之前常有 Next.js 开发服务器占用 80 端口，部署前务必 `lsof -i :80` 检查并清理。

2. **Standalone 模式**: `next.config.ts` 中设置了 `output: "standalone"`，构建后必须手动复制 `public` 和 `.next/static` 到 `.next/standalone/` 目录。

3. **SSL 续期**: Certbot 已配置自动续期，无需手动干预。证书有效期至 2026-08-30。

4. **防火墙**: UFW 已开放 22/80/443。

---

## 📌 后续开发建议

- [ ] 联系表单 API (`/api/contact`) 目前可能缺少邮件发送逻辑
- [ ] 可考虑添加 Google Analytics / 百度统计
- [ ] 产品/项目图片资源需要实际替换
- [ ] 多语言支持 (i18n)
- [ ] 后台管理 CMS

---

*最后更新: 2026-06-01*
