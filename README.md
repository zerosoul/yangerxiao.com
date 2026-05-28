杨二的个人主页

## 技术栈

- TanStack Start + TanStack Router（文件路由 + 静态预渲染）
- Vite 7 + React 19 + TypeScript
- Tailwind CSS v4（`@tailwindcss/vite`，CSS-first `@theme`）
- lucide-react（图标）+ 自定义品牌 SVG（微信 / 微博）
- vite-plugin-pwa（manifest + service worker）

## 开发

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 产物在 dist/client/
pnpm start      # 本地预览构建产物
```

预渲染的页面：`/`、`/resume`、`/resume_en`。其他路径会落到 `__root.tsx` 的
`notFoundComponent`。

## 部署（Coolify 自建服务器）

本项目为纯静态站点（TanStack Start `prerender` 开启），无需运行 Node 进程。

**Coolify 配置（Static Site）**：

| 字段 | 值 |
| --- | --- |
| Application Type | Static Site |
| Build Pack | Nixpacks（或 Dockerfile，见下方备选） |
| Install Command | `pnpm install --frozen-lockfile` |
| Build Command | `pnpm build` |
| Publish Directory | `dist/client` |
| Port | 80（Coolify 自动用内置 Caddy/Nginx 容器托管） |

Coolify 会自动签发 HTTPS。开启 webhook 后，`git push` 触发自动构建。

**404 回退**：Coolify Static Site 默认会回退到 `/404.html`，但目前预渲染只输出了
`/`、`/resume`、`/resume_en/index.html`，未生成独立 404 页面。如需自定义未匹配
路径行为，可在 Coolify 的 Caddyfile 自定义里加：

```
try_files {path} {path}/ /index.html
```

让所有未匹配路径回退到 SPA，由 TanStack Router 的 `notFoundComponent` 处理。

**备选方案：Dockerfile（如未来需要 SSR/API）**

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY --from=builder /app/dist/client /usr/share/nginx/html
```
