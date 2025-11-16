@echo off
set CLOUDFLARE_API_TOKEN=SIPi1Gq0lsnZpY2LfgVUVVuWA6vkq5aMLQ_maRop
pnpm run docs:build && wrangler pages deploy ./docs/.vitepress/dist --project-name=eckes --commit-dirty=true
pause
