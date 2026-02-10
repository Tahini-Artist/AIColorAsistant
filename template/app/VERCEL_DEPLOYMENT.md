# Vercel 部署指南

## 前置要求

1. 确保项目在 GitHub 仓库中
2. 拥有 Vercel 账号（可使用 GitHub 账号登录）

## 部署步骤

### 1. 连接 Vercel 到 GitHub

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择您的 GitHub 仓库 `Tahini-Artist/AIColorAsistant`
5. 选择项目目录：`template/app`

### 2. 配置构建设置

在 Vercel 项目设置中：

**Framework Preset**: `Vite`

**Build Command**:
```bash
npm run build
```

**Output Directory**:
```
dist
```

**Install Command**:
```bash
npm install
```

### 3. 配置环境变量

在 Vercel 项目设置中添加以下环境变量：

**客户端环境变量** (Environment Variables):

| 变量名 | 值 | 说明 |
|---------|------|------|
| `VITE_BASE_URL` | `https://your-app.vercel.app` | 应用的基础 URL（部署后替换为实际域名） |
| `VITE_GOOGLE_ANALYTICS_ID` | `G-XXXXXXXXXX` | Google Analytics ID（可选） |

**注意**：所有客户端环境变量必须以 `VITE_` 开头，这样 Vite 才能在构建时注入它们。

### 4. 部署

1. 点击 "Deploy" 按钮
2. 等待构建完成（通常需要 1-3 分钟）
3. 部署完成后，Vercel 会提供一个 URL，例如：`https://your-app-name.vercel.app`

### 5. 验证部署

1. 访问部署的 URL
2. 检查所有页面是否正常加载
3. 测试颜色选择器功能
4. 检查 AI prompt 生成的 URL 是否正确（应该使用 Vercel 域名）

## 常见问题

### Q: 构建失败怎么办？

**A**: 检查以下几点：
- 确保 `package.json` 中的 scripts 正确
- 确保所有依赖都已安装
- 检查构建日志中的错误信息

### Q: 环境变量不生效？

**A**: 确保变量名以 `VITE_` 开头，并且：
- 在 Vercel 项目设置中正确配置
- 重新部署项目以应用新的环境变量

### Q: 页面刷新后 404？

**A**: `vercel.json` 中的 rewrites 配置应该解决这个问题。如果仍然存在：
- 确保 `vercel.json` 文件在项目根目录
- 重新部署项目

### Q: 如何更新部署？

**A**:
1. 推送代码到 GitHub
2. Vercel 会自动检测到更新并重新部署
3. 或者手动在 Vercel 控制台点击 "Redeploy"

## 自定义域名（可选）

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加您的自定义域名
3. 按照提示配置 DNS 记录

## 性能优化建议

1. **启用 CDN**: Vercel 自动提供全球 CDN
2. **图片优化**: 使用 Vercel 的图片优化功能
3. **缓存策略**: 合理配置静态资源缓存
4. **代码分割**: 已在 `vite.config.ts` 中配置

## 监控和分析

- Vercel 提供内置的分析工具
- 可以查看访问量、性能指标等
- 配置 Google Analytics 获取更详细的数据

## 回滚

如果新部署出现问题：

1. 在 Vercel 控制台查看部署历史
2. 选择之前的稳定版本
3. 点击 "Promote to Production" 回滚

## 联系支持

如果遇到问题：
- Vercel 文档: https://vercel.com/docs
- Vite 文档: https://vitejs.dev/guide/
