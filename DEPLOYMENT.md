# 📚 Cloudflare Pages 部署说明

## 🌐 当前部署项目

您现在有**两个**Cloudflare Pages项目：

### 1. **eckes-blog** 项目
- 🔗 主域名: https://eckes-blog.pages.dev
- 🔗 分支URL: https://main.eckes-blog.pages.dev
- 📦 项目名称: eckes-blog
- 🚀 部署命令: `pnpm run deploy`

### 2. **eckes** 项目（新）
- 🔗 主域名: https://eckes.pages.dev
- 🔗 最新部署: https://521121e1.eckes.pages.dev
- 📦 项目名称: eckes
- 🚀 部署命令: `pnpm run deploy:eckes`

## 🚀 部署方法

### 部署到 eckes-blog
```bash
# 方法1: 使用npm脚本
pnpm run deploy

# 方法2: 使用PowerShell脚本
.\deploy.ps1

# 方法3: 手动部署
wrangler pages deploy ./docs/.vitepress/dist --project-name=eckes-blog
```

### 部署到 eckes
```bash
# 方法1: 使用npm脚本
pnpm run deploy:eckes

# 方法2: 使用PowerShell脚本
.\deploy-eckes.ps1

# 方法3: 手动部署
wrangler pages deploy ./docs/.vitepress/dist --project-name=eckes
```

## 📝 配置文件说明

- **package.json**: 包含两个部署脚本
  - `deploy`: 部署到 eckes-blog
  - `deploy:eckes`: 部署到 eckes
  
- **wrangler.toml**: Cloudflare配置文件
- **deploy.ps1**: eckes-blog 部署脚本
- **deploy-eckes.ps1**: eckes 部署脚本

## 🔧 管理项目

访问 [Cloudflare Dashboard](https://dash.cloudflare.com) 可以：
- 查看部署历史
- 配置自定义域名
- 查看访问统计
- 管理环境变量
- 设置重定向规则

## 💡 使用建议

1. **eckes.pages.dev** - 更简短的域名，适合作为主站
2. **eckes-blog.pages.dev** - 更明确的域名，适合作为博客

您可以选择其中一个作为主站，或者两个都保留作为不同用途。

## 🌟 自定义域名

如需绑定自定义域名（如 eckes.com）：
1. 在Cloudflare Dashboard选择项目
2. 进入"自定义域"设置
3. 添加您的域名
4. 按提示配置DNS

## 📊 项目对比

| 特性 | eckes | eckes-blog |
|-----|-------|-----------|
| 域名长度 | 短 ✅ | 较长 |
| 含义明确 | 品牌名 | 明确是博客 |
| 部署时间 | 2025-11-16 | 2025-11-16 |
| 文件数 | 631 | 631 |
| 内容 | 相同 | 相同 |

---

更新时间: 2025-11-16
