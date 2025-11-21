---
title: 音乐播放器功能演示
layout: page
---

# 🎵 音乐播放器功能演示

本文档通过实际案例演示 `<MusicPlayer />` 组件的各项参数效果。

---

## 1. 基础参数演示

### 🆔 ID 与 Type (播放内容)

通过 `id` 和 `type` 属性，您可以播放歌单、单曲或专辑。

#### 播放歌单 (`type="playlist"`)
默认模式，展示完整的歌单列表。
```html
<MusicPlayer id="2031235299" type="playlist" />
```
<MusicPlayer id="2031235299" type="playlist" />

#### 播放单曲 (`type="song"`)
只播放一首特定的歌曲，没有列表。
```html
<MusicPlayer id="186016" type="song" />
```
<MusicPlayer id="186016" type="song" />

#### 播放专辑 (`type="album"`)
播放整张专辑的内容。
```html
<MusicPlayer id="3069045" type="album" />
```
<MusicPlayer id="3069045" type="album" />

---

## 2. 外观参数演示

### 🎨 Theme (主题色)

通过 `theme` 属性自定义播放器的主题颜色（进度条、选中项颜色）。

#### 默认紫色 (`#667eea`)
<MusicPlayer id="7360465359" listFolded="true" />

#### 红色主题 (`#e91e63`)
```html
<MusicPlayer id="7360465359" theme="#e91e63" listFolded="true" />
```
<MusicPlayer id="7360465359" theme="#e91e63" listFolded="true" />

#### 绿色主题 (`#42b983`)
```html
<MusicPlayer id="7360465359" theme="#42b983" listFolded="true" />
```
<MusicPlayer id="7360465359" theme="#42b983" listFolded="true" />

---

## 3. 布局模式演示

### 📱 Mini (迷你模式)

通过 `mini="true"` 开启迷你模式，播放器变身为一个紧凑的圆形按钮，鼠标悬停时显示控制面板。非常适合侧边栏或不希望占用太多空间的场景。

```html
<MusicPlayer id="186016" mini="true" type="song" />
```
<div style="display: flex; gap: 20px; align-items: center; background: var(--vp-c-bg-soft); padding: 20px; border-radius: 8px;">
  <span>👈 左侧是迷你播放器效果：</span>
  <MusicPlayer id="186016" mini="true" type="song" />
</div>

### 📂 ListFolded (列表折叠)

通过 `listFolded="true"` 让播放列表默认处于收起状态，只显示当前播放的歌曲信息。点击右下角的列表图标可展开。

```html
<MusicPlayer id="7360465359" listFolded="true" />
```
<MusicPlayer id="7360465359" listFolded="true" />

---

## 4. 特殊模式演示

### ⚓ Fixed (吸底模式)

通过 `fixed="true"` 开启吸底模式。播放器会固定在浏览器窗口的左下角，**不会随页面滚动而移动**。
(注意：为了不遮挡本页内容，吸底模式仅在此处演示代码，您可以在全局配置中使用)

```html
<MusicPlayer id="7360465359" fixed="true" />
```

### ▶️ Autoplay (自动播放)

通过 `autoplay="true"` 尝试自动播放。
(注意：现代浏览器通常会拦截带有声音的自动播放，用户必须先与页面交互)

```html
<MusicPlayer id="7360465359" autoplay="true" />
```

---

## 5. 总结

| 参数 | 推荐用途 |
| :--- | :--- |
| **id / type** | 控制播放内容，核心参数 |
| **theme** | 配合网站主色调，保持风格统一 |
| **mini** | 用于侧边栏、页脚或极简风格页面 |
| **listFolded** | 用于文章内部插入，避免列表太长占用篇幅 |
| **fixed** | 用于全局背景音乐播放器 |

::: tip 提示
您可以根据需要在不同页面组合使用这些参数，打造最适合的音乐体验！
:::
