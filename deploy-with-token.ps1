# 使用Token进行本地部署
Write-Host "🔑 使用本地Token部署..." -ForegroundColor Cyan

# 设置环境变量
$env:CLOUDFLARE_API_TOKEN = "SIPi1Gq0lsnZpY2LfgVUVVuWA6vkq5aMLQ_maRop"

# 构建项目
Write-Host "🔨 构建项目..." -ForegroundColor Blue
pnpm run docs:build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败！" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 构建成功！" -ForegroundColor Green
Write-Host "🚀 部署到 Cloudflare Pages..." -ForegroundColor Blue

# 部署
wrangler pages deploy ./docs/.vitepress/dist --project-name=eckes --commit-dirty=true

if ($LASTEXITCODE -eq 0) {
    Write-Host "✨ 部署成功！" -ForegroundColor Green
    Write-Host "🌐 网站地址: https://eckes.pages.dev" -ForegroundColor Cyan
} else {
    Write-Host "❌ 部署失败！" -ForegroundColor Red
    exit 1
}
