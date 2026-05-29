# BDGLASS 网站内容管理文档

> 本目录下的 MD 文件对应网站各页面的文案内容。
> 修改 MD 文件后，需同步更新对应的数据文件（`src/data/`）或组件文件以生效。
>
> **内容 ↔ 代码映射关系：**
> - `homepage.md` → `src/app/page.tsx` + `src/components/home/*.tsx`
> - `about.md` → `src/app/about/page.tsx`
> - `products.md` → `src/data/products.ts` + `src/app/products/*.tsx`
> - `services.md` → `src/data/services.ts` + `src/app/services/page.tsx`
> - `projects.md` → `src/data/projects.ts` + `src/app/projects/*.tsx`
> - `certifications.md` → `src/data/certifications.ts` + `src/app/certifications/page.tsx`
> - `contact.md` → `src/app/contact/page.tsx`
> - `site-config.md` → `src/data/site-config.ts`（全局配置）
>
> 最后更新：2026-05-27

---

## 内容修改流程

1. 找到对应页面的 `.md` 文件
2. 修改文案内容
3. 告知开发者同步更新对应的 TypeScript 数据文件或组件
4. 重新构建项目（`npm run build`）

## 图片替换说明

所有图片目前使用占位符（灰色方块 + 标注文字），标记格式为：
```
Replace with XXX photo (尺寸 WebP)
```

修改图片时，只需替换 `public/images/` 目录下的文件，或修改数据文件中的 `imagePath` 字段。
