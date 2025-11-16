# Cloudflare Pages 部署脚本 - eckes 项目
Write-Host "🔨 构建项目..." -ForegroundColor Blue
pnpm run docs:build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败！" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 构建成功！" -ForegroundColor Green
Write-Host "🚀 部署到 Cloudflare Pages (eckes)..." -ForegroundColor Blue

wrangler pages deploy ./docs/.vitepress/dist --project-name=eckes --commit-dirty=true

if ($LASTEXITCODE -eq 0) {
    Write-Host "✨ 部署成功！" -ForegroundColor Green
    Write-Host "🌐 网站地址: https://eckes.pages.dev" -ForegroundColor Cyan
} else {
    Write-Host "❌ 部署失败！" -ForegroundColor Red
    exit 1
}
