<template>
  <div class="netease-layout">
    <!-- 1. 左侧侧边栏 -->
    <aside class="app-sidebar">
      <div class="logo-area">
        <span class="logo-icon">☁️</span>
        <span class="logo-text">云音乐</span>
      </div>

      <div class="menu-scroll">
        <div class="menu-group">
          <div class="group-title">在线音乐</div>
          <div class="menu-item" @click="switchMode('discover')" :class="{ active: currentMode === 'discover' }">
            <span class="icon">🎵</span> 发现音乐
          </div>
          <div class="menu-item">
            <span class="icon">📻</span> 私人FM
          </div>
          <div class="menu-item">
            <span class="icon">🎥</span> 视频
          </div>
        </div>

        <div class="menu-group">
          <div class="group-title">我的音乐</div>
          <div class="menu-item">
            <span class="icon">❤️</span> 我喜欢的音乐
          </div>
          <div class="menu-item">
            <span class="icon">🕒</span> 最近播放
          </div>
        </div>

        <div class="menu-group">
          <div class="group-title">
            <span>创建的歌单</span>
            <span class="action">+</span>
          </div>
          <div 
            v-for="p in rawPlaylists" 
            :key="p.id"
            class="menu-item playlist-item"
            :class="{ 'is-playing': currentId === p.id && currentMode === 'player' }"
            @click="switchPlaylist(p)"
          >
            <span class="icon playlist-icon">📑</span>
            <span class="text">{{ p.title }}</span>
            <span v-if="currentId === p.id" class="playing-icon">🔊</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- 2. 右侧主内容区 -->
    <main class="app-main">
      <!-- 顶部 Header -->
      <header class="main-header">
        <div class="nav-controls">
          <button class="nav-btn" @click="goBack">&lt;</button>
          <button class="nav-btn">&gt;</button>
        </div>
        
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            v-model="searchQuery" 
            @keyup.enter="performSearch"
            placeholder="搜索音乐" 
          />
        </div>

        <div class="user-area">
          <div class="avatar"></div>
          <span class="username">Eckes</span>
          <span class="vip-badge">SVIP</span>
        </div>
      </header>

      <!-- 内容区域 -->
      <div class="content-body">
        
        <!-- 模式 A: 发现页 (歌单墙) -->
        <div v-if="currentMode === 'discover'" class="discover-view">
          <!-- Banner -->
          <div class="banner-section">
            <div class="banner-card">
              <h3>每日推荐</h3>
              <p>根据你的口味生成</p>
              <div class="play-btn-big">▶</div>
            </div>
          </div>

          <div class="playlist-section">
            <h3>推荐歌单 <span class="arrow">&gt;</span></h3>
            <div class="grid-container">
              <div 
                v-for="p in displayPlaylists" 
                :key="p.id"
                class="grid-card"
                @click="switchPlaylist(p)"
              >
                <div class="cover-wrapper">
                  <img :src="p.cover" loading="lazy" />
                  <div class="play-count">▷ 125万</div>
                  <div class="hover-play">▶</div>
                </div>
                <div class="card-title">{{ p.title }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 模式 B: 播放器详情页 (列表+歌词+封面) -->
        <div v-else class="player-view">
          <!-- 我们在这里放置一个巨大的、全功能的播放器 -->
          <!-- 它可以显示列表、歌词、封面，所有功能一应俱全 -->
          <div class="full-player-container">
            <div class="player-header-info" v-if="currentPlaylist">
              <img :src="currentPlaylist.cover" class="header-cover" />
              <div class="header-text">
                <span class="tag">歌单</span>
                <h2>{{ currentPlaylist.title }}</h2>
                <div class="creator">
                  <div class="avatar-small"></div>
                  <span class="name">Eckes</span>
                  <span class="date">2023-11-22 创建</span>
                </div>
                <div class="buttons">
                  <button class="btn-primary">▶ 播放全部</button>
                  <button class="btn-secondary">收藏</button>
                  <button class="btn-secondary">分享</button>
                </div>
              </div>
            </div>

            <!-- 这里是核心：一个非吸底的、完整展开的播放器 -->
            <MusicPlayer 
              :key="playerKey"
              :id="currentId" 
              :type="playerType" 
              :theme="activeTheme"
              :autoplay="true"
              :listFolded="false" 
              class="embedded-player"
            />
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MusicPlayer from './MusicPlayer.vue'

// --- 数据源 ---
interface Playlist {
  id: string
  title: string
  desc: string
  theme: string
  mood: string
  icon: string
  cover: string
}

const rawPlaylists: Playlist[] = [
  { id: '7360465359', title: '年度精选集', desc: 'Eckes 私人宝藏', theme: '#ec4141', mood: '精选', icon: '💎', cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&q=80' },
  { id: '26467411', title: '深度专注 Coding', desc: 'Coding 白噪音', theme: '#ec4141', mood: '专注', icon: '🧠', cover: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&q=80' },
  { id: '2793639651', title: '学习心流状态', desc: '高效学习状态', theme: '#ec4141', mood: '专注', icon: '📚', cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80' },
  { id: '2031235299', title: '热门流行脉冲', desc: '捕捉当下律动', theme: '#ec4141', mood: '活力', icon: '🔥', cover: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=400&q=80' },
  { id: '19723756', title: '赛博朋克电音', desc: '未来城市脉搏', theme: '#ec4141', mood: '活力', icon: '⚡', cover: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&q=80' },
  { id: '24381616', title: '午后慵懒爵士', desc: '慵懒 Coffee Time', theme: '#ec4141', mood: '放松', icon: '🎷', cover: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&q=80' },
  { id: '513625210', title: '在路上的民谣', desc: '一直在路上', theme: '#ec4141', mood: '放松', icon: '🎸', cover: 'https://images.unsplash.com/photo-1465847899078-b413929f7120?w=400&q=80' },
  { id: '2884035', title: '治愈系纯音乐', desc: '回归内心平静', theme: '#ec4141', mood: '放松', icon: '🌙', cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80' },
  { id: '9690238', title: '经典摇滚不死', desc: '永不熄灭的火', theme: '#ec4141', mood: '活力', icon: '🤘', cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80' },
  { id: '7457685370', title: '二次元幻想乡', desc: '打破次元壁', theme: '#ec4141', mood: '二次元', icon: '🎀', cover: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80' },
  { id: '5059642708', title: '史诗游戏原声', desc: '史诗级配乐', theme: '#ec4141', mood: '专注', icon: '🎮', cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80' },
  { id: '3136952023', title: '后摇情绪空间', desc: '情绪爆炸', theme: '#ec4141', mood: '放松', icon: '🌌', cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80' },
  { id: '2201879658', title: '华语KTV金曲', desc: 'KTV 必点', theme: '#ec4141', mood: '精选', icon: '🎤', cover: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80' },
  { id: '3102961863', title: '欧美Billboard', desc: 'Billboard 热单', theme: '#ec4141', mood: '活力', icon: '🌍', cover: 'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=400&q=80' },
  { id: '2182968685', title: '古风雅韵集', desc: '高山流水', theme: '#ec4141', mood: '放松', icon: '🎋', cover: 'https://images.unsplash.com/photo-1527534736432-774aa449e3a7?w=400&q=80' },
  { id: '5362236005', title: 'Lo-Fi HipHop', desc: '工作背景音', theme: '#ec4141', mood: '专注', icon: '☕', cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80' },
  { id: '2003373695', title: '钢琴曲精选', desc: '黑白键', theme: '#ec4141', mood: '放松', icon: '🎹', cover: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80' },
  { id: '2829883282', title: 'R&B 灵魂节奏', desc: '灵魂乐', theme: '#ec4141', mood: '活力', icon: '🕶️', cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&q=80' }
]

const tags = ['全部', '精选', '专注', '活力', '放松', '二次元']

// --- 状态 ---
const currentId = ref('7360465359')
const activeTheme = ref('#ec4141')
const searchQuery = ref('')
const activeTag = ref('全部')
const playerType = ref('playlist')
const currentMode = ref<'discover' | 'player'>('discover')

// --- Computed ---
const playerKey = computed(() => `${playerType.value}-${currentId.value}`)
const currentPlaylist = computed(() => rawPlaylists.find(p => p.id === currentId.value))

const displayPlaylists = computed(() => {
  let result = rawPlaylists
  if (activeTag.value !== '全部') {
    result = result.filter(p => p.mood === activeTag.value)
  }
  return result
})

// --- Methods ---
const switchPlaylist = (p: Playlist) => {
  playerType.value = 'playlist'
  currentId.value = p.id
  searchQuery.value = ''
  currentMode.value = 'player' // 切换到播放器视图
}

const performSearch = () => {
  if (!searchQuery.value.trim()) return
  playerType.value = 'search'
  currentId.value = searchQuery.value
  currentMode.value = 'player' // 切换到播放器视图
}

const switchMode = (mode: 'discover' | 'player') => {
  currentMode.value = mode
}

const goBack = () => {
  currentMode.value = 'discover'
}
</script>

<style scoped lang="scss">
.netease-layout {
  --primary-color: #ec4141;
  --sidebar-bg: #ededed;
  --main-bg: #ffffff;
  --text-main: #333333;
  --text-sub: #666666;
  --border-color: #e0e0e0;
  --sidebar-width: 200px;
  
  display: flex;
  height: 100vh;
  width: 100%;
  background: var(--main-bg);
  color: var(--text-main);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  overflow: hidden;
}

/* 暗黑模式 */
:root.dark .netease-layout {
  --sidebar-bg: #2b2b2b;
  --main-bg: #2b2b2b;
  --text-main: #dcdcdc;
  --text-sub: #888888;
  --border-color: #3f3f3f;
}

/* 1. 左侧侧边栏 */
.app-sidebar {
  width: var(--sidebar-width);
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.logo-area {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 1.2rem;
  font-weight: bold;
  gap: 8px;
  color: var(--primary-color);
}

.menu-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
}

.menu-group {
  margin-bottom: 20px;
}

.group-title {
  padding: 0 20px;
  font-size: 0.8rem;
  color: var(--text-sub);
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
}

.menu-item {
  padding: 8px 20px;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-main);
  
  &:hover {
    background: rgba(0,0,0,0.05);
  }
  
  &.active {
    background: rgba(0,0,0,0.05);
    font-weight: bold;
    border-left: 3px solid var(--primary-color);
  }
  
  &.is-playing {
    color: var(--primary-color);
  }
}

.playlist-item .text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 2. 右侧主内容区 */
.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--main-bg);
  min-width: 0;
}

.main-header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  gap: 20px;
  border-bottom: 1px solid var(--border-color);
}

.nav-controls {
  display: flex;
  gap: 10px;
  
  .nav-btn {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(0,0,0,0.1);
    border: none;
    color: var(--text-sub);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
  }
}

.search-bar {
  position: relative;
  background: rgba(0,0,0,0.05);
  border-radius: 20px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  
  .search-icon {
    color: var(--text-sub);
    font-size: 0.9rem;
  }
  
  input {
    border: none;
    background: transparent;
    outline: none;
    font-size: 0.85rem;
    color: var(--text-main);
    width: 150px;
  }
}

.user-area {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-sub);
  
  .avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ddd;
  }
  
  .vip-badge {
    background: #ccc;
    color: white;
    font-size: 0.6rem;
    padding: 1px 4px;
    border-radius: 2px;
  }
}

/* 内容主体 */
.content-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
}

/* 视图 A: 发现页 */
.discover-view {
  padding: 20px 30px;
}

.banner-section {
  margin-bottom: 30px;
}

.banner-card {
  height: 200px;
  background: linear-gradient(135deg, #ec4141, #ff7675);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.banner-card h3 { font-size: 2rem; margin: 0 0 10px 0; }
.banner-card p { opacity: 0.8; }
.play-btn-big {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: white;
  color: #ec4141;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
}

.grid-card {
  cursor: pointer;
  
  .cover-wrapper {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    aspect-ratio: 1;
    margin-bottom: 8px;
    border: 1px solid rgba(0,0,0,0.05);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }
    
    .play-count {
      position: absolute;
      top: 4px;
      right: 6px;
      color: white;
      font-size: 0.7rem;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }
    
    .hover-play {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 32px;
      height: 32px;
      background: rgba(255,255,255,0.9);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s;
    }
  }
  
  &:hover img { transform: scale(1.05); }
  &:hover .hover-play { opacity: 1; transform: translateY(0); }
  
  .card-title {
    font-size: 0.9rem;
    line-height: 1.4;
    color: var(--text-main);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

/* 视图 B: 播放器详情页 (歌单详情) */
.player-view {
  padding: 30px;
}

.player-header-info {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.header-cover {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
}

.header-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tag {
  display: inline-block;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8rem;
  width: fit-content;
  margin-bottom: 10px;
}

.header-text h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 10px 0;
}

.creator {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 0.85rem;
  color: var(--text-sub);
  
  .avatar-small {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ddd;
  }
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.btn-primary, .btn-secondary {
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  font-size: 0.9rem;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.btn-secondary {
  background: white;
  color: var(--text-main);
}

/* 嵌入式播放器 - 强制覆盖样式 */
.embedded-player {
  width: 100%;
}

:deep(.aplayer) {
  box-shadow: none !important;
  background: transparent !important;
  font-family: inherit !important;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .netease-layout {
    flex-direction: column;
  }
  
  .app-sidebar {
    display: none; /* 移动端隐藏侧边栏 */
  }
  
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
