---
date: 2025-11-22 15:10:03
title: 音乐播放器组件演示
layout: page
---

# 🎵 MusicPlayer 组件演示

> 这是一个功能强大的 Vue 3 音乐播放器组件，基于 APlayer 和 MetingJS 封装。支持网易云歌单解析、歌词显示、吸底模式等丰富功能。

::: info 🚀 **核心特性**
*   🛠️ **零配置**：只需一个 ID 即可工作
*   🎨 **主题定制**：随心所欲的色彩搭配
*   📱 **响应式**：完美适配移动端与桌面端
*   ⚓ **多模式**：支持吸底、迷你、折叠列表等多种布局
:::

---

## 1. 基础用法：内容源

通过 `id` 和 `type` 属性，您可以轻松播放不同类型的网易云音乐内容。

### 📺 播放歌单
最常用的模式，展示完整的歌曲列表。

```html
<!-- 播放网易云歌单 ID: 2031235299 -->
<MusicPlayer id="2031235299" type="playlist" />
```

<MusicPlayer id="2031235299" type="playlist" />

<br>

### 💿 播放专辑
展示整张专辑的内容。

```html
<!-- 播放专辑 ID: 3069045 -->
<MusicPlayer id="3069045" type="album" />
```

<MusicPlayer id="3069045" type="album" />

<br>

### 🎵 播放单曲
只播放一首特定的歌曲，界面更简洁。

```html
<!-- 播放单曲 ID: 186016 -->
<MusicPlayer id="186016" type="song" />
```

<MusicPlayer id="186016" type="song" />

---

## 2. 个性化定制

### 🎨 主题色 (Theme)
你可以配合文章或网站的主色调，自定义播放器的进度条和高亮颜色。

::: details 点击查看代码示例
```html
<!-- 红色主题 -->
<MusicPlayer id="7360465359" theme="#e91e63" listFolded="true" />

<!-- 绿色主题 -->
<MusicPlayer id="7360465359" theme="#42b983" listFolded="true" />
```
:::

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
  <div>
    <p style="text-align: center; font-weight: bold; color: #e91e63;">❤️ 红色主题</p>
    <MusicPlayer id="7360465359" theme="#e91e63" listFolded="true" />
  </div>
  <div>
    <p style="text-align: center; font-weight: bold; color: #42b983;">💚 绿色主题</p>
    <MusicPlayer id="7360465359" theme="#42b983" listFolded="true" />
  </div>
</div>

---

## 3. 布局模式

### 📱 迷你模式 (Mini)
非常适合侧边栏、页脚或极简风格页面。鼠标悬停时才会显示控制面板。

```html
<MusicPlayer id="186016" mini="true" type="song" />
```

<div style="display: flex; gap: 20px; align-items: center; background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; border: 1px solid var(--vp-c-border);">
  <span style="font-size: 2rem;">👉</span>
  <MusicPlayer id="186016" mini="true" type="song" />
  <span style="color: var(--vp-c-text-2); font-size: 0.9rem;">(尝试把鼠标悬停在这个圆圈上)</span>
</div>

<br>

### 📂 默认折叠列表 (ListFolded)
如果歌单很长，为了不占用太多篇幅，可以让列表默认收起。

```html
<MusicPlayer id="7360465359" listFolded="true" />
```

<MusicPlayer id="7360465359" listFolded="true" />

---

## 4. API 参考手册

| 参数名 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| **id** | `String` | Required | 网易云音乐的 歌单/单曲/专辑 ID |
| **type** | `String` | `'playlist'` | 内容类型，可选值：`playlist`, `song`, `album` |
| **theme** | `String` | `'#667eea'` | 主题颜色，支持 HEX 格式 |
| **autoplay** | `Boolean` | `false` | 是否尝试自动播放 (受浏览器策略限制) |
| **listFolded** | `Boolean` | `false` | 是否默认折叠播放列表 |
| **fixed** | `Boolean` | `false` | 是否开启吸底模式 (固定在左下角) |
| **mini** | `Boolean` | `false` | 是否开启迷你模式 |

::: tip 💡 最佳实践
*   **全局背景音乐**：推荐使用 `fixed="true"` + `autoplay="true"`
*   **文章配乐**：推荐使用 `mini="true"` 或 `listFolded="true"`
*   **音乐专栏**：推荐使用默认模式 (完整列表)
:::
