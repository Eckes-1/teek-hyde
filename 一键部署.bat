@echo off
chcp 65001 >nul
echo ====================================
echo    🚀 一键部署到 Cloudflare Pages
echo ====================================
echo.

echo 📦 开始构建项目...
call pnpm run docs:build

if errorlevel 1 (
    echo ❌ 构建失败！请检查错误信息
    pause
    exit /b 1
)

echo.
echo ✅ 构建成功！
echo.
echo 🌐 开始部署到线上...

set CLOUDFLARE_API_TOKEN=SIPi1Gq0lsnZpY2LfgVUVVuWA6vkq5aMLQ_maRop
wrangler pages deploy ./docs/.vitepress/dist --project-name=eckes --commit-dirty=true

echo.
echo ====================================
echo    ✨ 部署完成！
echo    🌐 网站地址: https://eckes.pages.dev
echo ====================================
echo.
pause
