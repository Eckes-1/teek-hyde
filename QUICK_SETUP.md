# ⚡ 快速设置自动部署（3分钟完成）

## 第1步：创建Cloudflare API Token (1分钟)

👉 **[点击这里创建Token](https://dash.cloudflare.com/profile/api-tokens)**

1. 点击 **"Create Token"** → **"Custom token"**
2. 填写：
   - **Token name**: `GitHub Actions`
   - **Permissions**: `Account - Cloudflare Pages:Edit`
3. 点击 **"Create Token"**
4. **复制Token**（⚠️ 只显示一次！）

## 第2步：添加到GitHub (1分钟)

👉 **[点击这里打开Settings](https://github.com/Eckes-1/teek-hyde/settings/secrets/actions)**

添加2个Secret：

### Secret 1
- **Name**: `CLOUDFLARE_API_TOKEN`
- **Value**: 粘贴刚才复制的Token

### Secret 2
- **Name**: `CLOUDFLARE_ACCOUNT_ID`
- **Value**: `f3785603513c15eb70465410887f13fb`

## 第3步：测试自动部署 (1分钟)

```bash
# 推送代码，触发自动部署
git push github main
```

👉 **[查看部署进度](https://github.com/Eckes-1/teek-hyde/actions)**

## ✅ 完成！

现在每次您执行：
```bash
git add .
git commit -m "更新内容"
git push github main
```

网站会自动更新到：**https://eckes.pages.dev**

---

💡 **提示**：首次部署可能需要2-3分钟，后续会更快。
