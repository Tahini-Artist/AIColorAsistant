# Vercel 部署指南（根目录部署）

## 📋 项目结构

```
AIColorAsistant/
├── package.json              # 根目录配置（用于 Vercel 构建）
├── vercel.json              # Vercel 部署配置
├── .gitignore               # Git 忽略规则
├── .env.example             # 环境变量示例
└── template/app/
    ├── package.json          # 应用程序配置
    ├── vite.config.ts        # Vite 配置
    ├── .env.client.example   # 客户端环境变量示例
    └── src/                # 源代码
```

## 🚀 Vercel 部署步骤

### 1. 连接 Vercel 到 GitHub

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择您的 GitHub 仓库 `Tahini-Artist/AIColorAsistant`
5. **Root Directory**: 选择 `/`（根目录）

### 2. 配置构建设置

在 Vercel 项目设置中：

**Framework Preset**: `Other` 或 `Vite`

**Build Command**:
```bash
npm run build
```

**Output Directory**:
```
template/app/dist
```

**Install Command**:
```bash
cd template/app && npm install
```

### 3. 配置环境变量

在 Vercel 项目设置 → Environment Variables 中添加：

| 变量名 | 值 | 说明 |
|---------|------|------|
| `VITE_BASE_URL` | `https://your-app.vercel.app` | 应用的基础 URL（部署后替换为实际域名） |
| `VITE_GOOGLE_ANALYTICS_ID` | `G-XXXXXXXXXX` | Google Analytics ID（可选） |

**重要**:
- 所有客户端环境变量必须以 `VITE_` 开头
- 部署后记得将 `VITE_BASE_URL` 更新为实际的 Vercel 域名

### 4. 部署

1. 点击 "Deploy" 按钮
2. 等待构建完成（通常需要 1-3 分钟）
3. 部署完成后，Vercel 会提供一个 URL

### 5. 验证部署

1. 访问部署的 URL
2. 检查所有页面是否正常加载
3. 测试颜色选择器功能
4. 检查 AI prompt 生成的 URL 是否正确

## 🔧 本地开发

### 安装依赖

```bash
cd template/app
npm install
```

### 启动开发服务器

```bash
# 方式 1：从根目录
npm run dev

# 方式 2：直接进入 app 目录
cd template/app
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
# 从根目录
npm run build

# 查看构建结果
ls template/app/dist
```

## 📁 文件说明

### 根目录文件

- **package.json**: 包含构建脚本，调用 `template/app` 的命令
- **vercel.json**: Vercel 部署配置，指定输出目录为 `template/app/dist`
- **.gitignore**: 忽略构建产物和环境变量文件
- **.env.example**: 环境变量示例（不提交到 Git）

### template/app 文件

- **package.json**: 应用程序的实际配置
- **vite.config.ts**: Vite 构建配置
- **.env.client.example**: 客户端环境变量示例
- **src/**: 源代码目录

## 🐛 常见问题

### Q: 构建失败 "Cannot find module"

**A**: 确保在 `template/app` 目录安装依赖：
```bash
cd template/app && npm install
```

### Q: 部署后页面 404

**A**: 检查以下几点：
1. Vercel 的 Output Directory 设置为 `template/app/dist`
2. 根目录的 `vercel.json` 文件存在
3. 重新部署项目

### Q: 环境变量不生效

**A**:
1. 确保变量名以 `VITE_` 开头
2. 在 Vercel 项目设置中配置
3. 重新部署以应用新变量

### Q: 本地开发时环境变量问题

**A**:
1. 复制 `.env.example` 到 `.env.local`
2. 在 `template/app` 目录下创建 `.env.local`
3. 配置 `VITE_BASE_URL=http://localhost:5173`

### Q: 如何更新部署？

**A**:
1. 推送代码到 GitHub
2. Vercel 自动检测更新并重新部署
3. 或在 Vercel 控制台手动点击 "Redeploy"

## 🎯 Vercel 配置文件详解

### vercel.json

```json
{
  "buildCommand": "npm run build",        // 构建命令
  "outputDirectory": "template/app/dist", // 输出目录
  "framework": "vite",                // 框架类型
  "installCommand": "cd template/app && npm install", // 安装依赖
  "rewrites": [                        // SPA 路由配置
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### package.json (根目录)

```json
{
  "scripts": {
    "dev": "cd template/app && npm run dev",      // 开发服务器
    "build": "cd template/app && npm run build",  // 构建
    "preview": "cd template/app && npm run preview" // 预览
  }
}
```

## 📊 性能优化

1. **代码分割**: 已在 `vite.config.ts` 中配置
2. **CDN**: Vercel 自动提供全球 CDN
3. **缓存策略**: Vercel 自动优化静态资源缓存
4. **图片优化**: 使用 Vercel 的图片优化功能

## 🔐 安全建议

1. **不要提交敏感信息**: 使用 `.env.local` 和 `.gitignore`
2. **使用环境变量**: 所有配置通过环境变量管理
3. **定期更新依赖**: 保持依赖包最新
4. **启用 HTTPS**: Vercel 自动提供

## 📈 监控和分析

- **Vercel Analytics**: 查看访问量和性能
- **Google Analytics**: 配置 `VITE_GOOGLE_ANALYTICS_ID`
- **Vercel Logs**: 查看错误和警告

## 🔄 回滚

如果新部署出现问题：

1. 在 Vercel 控制台查看部署历史
2. 选择之前的稳定版本
3. 点击 "Promote to Production" 回滚

## 📞 支持

- Vercel 文档: https://vercel.com/docs
- Vite 文档: https://vitejs.dev/guide/
- GitHub Issues: https://github.com/Tahini-Artist/AIColorAsistant/issues
