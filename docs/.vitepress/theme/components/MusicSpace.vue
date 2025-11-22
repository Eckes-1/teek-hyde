<template>
  <div class="nebula-os" :class="{ 'zen-mode': isZenMode }" :style="{ '--accent': activeTheme }">
    <!-- 动态网格背景 -->
    <div class="nebula-bg">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <!-- 顶部导航栏 -->
    <nav class="os-navbar">
      <div class="nav-left">
        <div class="brand">
          <span class="logo-icon">🌌</span>
          <span class="logo-text">Nebula OS</span>
        </div>
        <div class="greeting-pill">
          <span class="time-icon">{{ timeIcon }}</span>
          <span class="greeting-text">{{ greeting }}</span>
          <span class="live-clock">{{ currentTime }}</span>
        </div>
      </div>

      <div class="nav-center">
        <div class="search-capsule">
          <i class="icon-search">🔍</i>
          <input 
            type="text" 
            v-model="searchQuery" 
            @keyup.enter="performSearch"
            placeholder="搜索歌曲 / 歌手..." 
            class="search-input"
          >
          <button v-if="searchQuery" class="clear-btn" @click="clearSearch">✕</button>
        </div>
      </div>

      <div class="nav-right">
        <button 
          class="action-btn" 
          :class="{ active: isZenMode }" 
          @click="toggleZenMode" 
          title="禅模式"
        >
          <span class="icon">{{ isZenMode ? '🧘‍♂️' : '🧘' }}</span>
          <span class="label">{{ isZenMode ? 'Exit Zen' : 'Zen Mode' }}</span>
        </button>
      </div>
    </nav>

    <!-- 主内容区 -->
    <main class="os-viewport">
      
      <!-- 左侧：播放控制台 -->
      <aside class="control-deck">
        <div class="deck-glass">
          <div class="now-playing-visual">
            <div class="album-art" :class="{ playing: true }">
              <div class="art-inner" :style="{ backgroundImage: `url(${currentPlaylist?.cover})` }">
                <span class="note-icon" v-if="!currentPlaylist?.cover">🎵</span>
              </div>
              <div class="wave-ring"></div>
              <div class="wave-ring delay"></div>
            </div>
          </div>

          <div class="track-meta">
            <h2>{{ currentPlaylist?.title || 'Ready to Play' }}</h2>
            <p>{{ currentPlaylist?.desc || 'Select a playlist to start' }}</p>
          </div>

          <div class="player-slot">
            <MusicPlayer 
              :key="playerKey"
              :id="currentId" 
              :theme="activeTheme" 
              :type="playerType"
              :autoplay="true"
              :listFolded="false"
              :mini="isMobile"
              class="os-player"
            />
          </div>
        </div>
      </aside>

      <!-- 右侧：资源管理器 -->
      <section class="explorer-panel" v-show="!isZenMode">
        
        <!-- 快捷访问区 (历史 & 收藏) -->
        <div class="section-header" v-if="history.length > 0 || favorites.length > 0">
          <h3>Dashboard</h3>
        </div>
        
        <div class="dashboard-grid" v-if="history.length > 0 || favorites.length > 0">
          <!-- 收藏夹 -->
          <div class="dash-card favorites-card" v-if="favorites.length > 0">
            <div class="card-header">
              <span class="icon">❤️</span> 收藏夹
            </div>
            <div class="mini-list">
              <div 
                v-for="p in favoritePlaylists" 
                :key="p.id" 
                class="mini-item"
                @click="switchPlaylist(p)"
              >
                <span class="dot" :style="{ background: p.theme }"></span>
                <span class="name">{{ p.title }}</span>
              </div>
            </div>
          </div>

          <!-- 最近播放 -->
          <div class="dash-card history-card" v-if="history.length > 0">
            <div class="card-header">
              <span class="icon">🕒</span> 最近播放
            </div>
            <div class="mini-list">
              <div 
                v-for="p in historyPlaylists" 
                :key="p.id" 
                class="mini-item"
                @click="switchPlaylist(p)"
              >
                <span class="time-tag">Recent</span>
                <span class="name">{{ p.title }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 歌单探索区 -->
        <div class="section-header">
          <h3>Explore Library</h3>
          <div class="filter-tags">
            <button 
              v-for="tag in tags" 
              :key="tag"
              class="tag-pill"
              :class="{ active: activeTag === tag }"
              @click="activeTag = tag"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <transition-group name="stagger" tag="div" class="library-grid">
          <div 
            v-for="p in displayPlaylists" 
            :key="p.id" 
            class="library-card"
            :class="{ 'is-playing': currentId === p.id }"
            @click="switchPlaylist(p)"
          >
            <div class="card-glow" :style="{ '--glow-color': p.theme }"></div>
            <div class="card-main">
              <div class="card-top">
                <span class="card-emoji">{{ p.icon }}</span>
                <button 
                  class="fav-btn" 
                  :class="{ active: isFavorite(p.id) }"
                  @click.stop="toggleFavorite(p.id)"
                >
                  {{ isFavorite(p.id) ? '❤️' : '🤍' }}
                </button>
              </div>
              <div class="card-body">
                <h4>{{ p.title }}</h4>
                <span class="tag-badge">{{ p.mood }}</span>
              </div>
            </div>
          </div>
        </transition-group>

        <!-- 空状态 -->
        <div v-if="displayPlaylists.length === 0" class="empty-state">
          <span class="empty-icon">🛸</span>
          <p>未找到相关信号...</p>
        </div>

      </section>
    </main>

    <!-- 移动端底部播放条 -->
    <div class="mobile-bar" v-if="isMobile">
      <div class="bar-info" @click="isMobileExpanded = !isMobileExpanded">
        <span class="bar-icon">🎵</span>
        <div class="bar-text">
          <span class="bar-title">{{ currentPlaylist?.title }}</span>
          <span class="bar-status">Tap to control</span>
        </div>
      </div>
      <div class="mobile-controls">
        <MusicPlayer 
          :id="currentId" 
          type="playlist" 
          :mini="true" 
          :theme="activeTheme" 
          :key="currentId + '_mobile'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import MusicPlayer from './MusicPlayer.vue'

// --- 类型定义 ---
interface Playlist {
  id: string
  title: string
  desc: string
  theme: string
  mood: string
  icon: string
  cover: string
}

// --- 数据源 ---
const rawPlaylists: Playlist[] = [
  { 
    id: '7360465359', 
    title: '年度精选集', 
    desc: 'Eckes 私人宝藏，百听不厌', 
    theme: '#8e44ad', 
    mood: '精选', 
    icon: '💎',
    cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&q=80'
  },
  { 
    id: '26467411', 
    title: '深度专注', 
    desc: 'Coding & Reading 白噪音', 
    theme: '#2980b9', 
    mood: '专注', 
    icon: '🧠',
    cover: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?w=400&q=80'
  },
  { 
    id: '2793639651', 
    title: '学习心流', 
    desc: '沉浸式学习体验', 
    theme: '#16a085', 
    mood: '专注', 
    icon: '📚',
    cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80'
  },
  { 
    id: '2031235299', 
    title: '流行脉冲', 
    desc: '捕捉当下的律动与潮流', 
    theme: '#e74c3c', 
    mood: '活力', 
    icon: '🔥',
    cover: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=400&q=80'
  },
  { 
    id: '19723756', 
    title: '赛博电音', 
    desc: '未来城市的霓虹脉搏', 
    theme: '#f39c12', 
    mood: '活力', 
    icon: '⚡',
    cover: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&q=80'
  },
  { 
    id: '24381616', 
    title: '午后爵士', 
    desc: '一杯咖啡的慵懒陪伴', 
    theme: '#d35400', 
    mood: '放松', 
    icon: '🎷',
    cover: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&q=80'
  },
  { 
    id: '513625210', 
    title: '公路民谣', 
    desc: '永远在路上的自由灵魂', 
    theme: '#27ae60', 
    mood: '放松', 
    icon: '🎸',
    cover: 'https://images.unsplash.com/photo-1465847899078-b413929f7120?w=400&q=80'
  },
  { 
    id: '2884035', 
    title: '治愈纯音', 
    desc: '让心灵回归平静的港湾', 
    theme: '#9b59b6', 
    mood: '放松', 
    icon: '🌙',
    cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=400&q=80'
  },
  { 
    id: '9690238', 
    title: '经典摇滚', 
    desc: '永不熄灭的摇滚之火', 
    theme: '#34495e', 
    mood: '活力', 
    icon: '🤘',
    cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80'
  },
  { 
    id: '7457685370', 
    title: '二次元', 
    desc: '打破次元壁的幻想乡', 
    theme: '#ff9ff3', 
    mood: '二次元', 
    icon: '🎀',
    cover: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80'
  },
  { 
    id: '5059642708', 
    title: '游戏原声', 
    desc: '史诗级的游戏配乐', 
    theme: '#54a0ff', 
    mood: '专注', 
    icon: '🎮',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80'
  },
  { 
    id: '3136952023', 
    title: '后摇空间', 
    desc: '没有歌词的情绪爆炸', 
    theme: '#576574', 
    mood: '放松', 
    icon: '🌌',
    cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80'
  },
  { 
    id: '2201879658', 
    title: '华语金曲', 
    desc: 'KTV 必点怀旧经典', 
    theme: '#c0392b', 
    mood: '精选', 
    icon: '🎤',
    cover: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80'
  },
  { 
    id: '3102961863', 
    title: '欧美流行', 
    desc: 'Billboard 热单收录', 
    theme: '#2980b9', 
    mood: '活力', 
    icon: '🌍',
    cover: 'https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=400&q=80'
  },
  { 
    id: '2182968685', 
    title: '古风雅韵', 
    desc: '高山流水遇知音', 
    theme: '#16a085', 
    mood: '放松', 
    icon: '🎋',
    cover: 'https://images.unsplash.com/photo-1527534736432-774aa449e3a7?w=400&q=80'
  },
  { 
    id: '5362236005', 
    title: 'Lo-Fi HipHop', 
    desc: '学习/工作背景音乐', 
    theme: '#fdcb6e', 
    mood: '专注', 
    icon: '☕',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80'
  },
  { 
    id: '2003373695', 
    title: '钢琴曲', 
    desc: '黑白键上的浪漫', 
    theme: '#2c3e50', 
    mood: '放松', 
    icon: '🎹',
    cover: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80'
  },
  { 
    id: '2829883282', 
    title: 'R&B 节奏', 
    desc: '灵魂乐的律动', 
    theme: '#8e44ad', 
    mood: '活力', 
    icon: '🕶️',
    cover: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&q=80'
  }
]

const tags = ['全部', '精选', '专注', '活力', '放松', '二次元']

// --- 响应式状态 ---
const currentId = ref('7360465359')
const activeTheme = ref('#8e44ad')
const searchQuery = ref('')
const activeTag = ref('全部')
const isZenMode = ref(false)
const isMobile = ref(false)
const isMobileExpanded = ref(false)
const playerType = ref('playlist')

// 计算播放器 Key，强制刷新
const playerKey = computed(() => `${playerType.value}-${currentId.value}`)

// 持久化数据
const favorites = ref<string[]>([])
const history = ref<string[]>([])

// 时间状态
const currentTime = ref('')
const greeting = ref('')
const timeIcon = ref('')

// --- 计算属性 ---
const currentPlaylist = computed(() => rawPlaylists.find(p => p.id === currentId.value))

const displayPlaylists = computed(() => {
  let result = rawPlaylists

  // 1. 标签过滤
  if (activeTag.value !== '全部') {
    result = result.filter(p => p.mood === activeTag.value)
  }

  // 2. 搜索过滤 (仅过滤歌单，不改变播放器状态，除非回车)
  if (searchQuery.value && playerType.value === 'playlist') {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.desc.toLowerCase().includes(query) ||
      p.mood.toLowerCase().includes(query)
    )
  }

  return result
})

const favoritePlaylists = computed(() => {
  return rawPlaylists.filter(p => favorites.value.includes(p.id))
})

const historyPlaylists = computed(() => {
  // 获取最近播放的3个，排除当前正在播放的
  return history.value
    .slice(0, 3)
    .map(id => rawPlaylists.find(p => p.id === id))
    .filter(Boolean) as Playlist[]
})

// --- 方法 ---

// 切换歌单
const switchPlaylist = (p: Playlist) => {
  // 如果当前是搜索模式，或者 ID 不同，则切换
  if (playerType.value === 'search' || currentId.value !== p.id) {
    playerType.value = 'playlist'
    currentId.value = p.id
    activeTheme.value = p.theme
    searchQuery.value = '' // 清空搜索框，回归歌单模式
    
    // 记录历史 (去重并置顶)
    history.value = [p.id, ...history.value.filter(h => h !== p.id)].slice(0, 5)
    saveToLocal()
    
    // 移动端点击后，可选震动反馈
    if (navigator.vibrate) navigator.vibrate(10)
  }
}

// 执行搜索
const performSearch = () => {
  if (!searchQuery.value.trim()) return
  
  playerType.value = 'search'
  currentId.value = searchQuery.value
  activeTheme.value = '#667eea' // 搜索模式使用默认主题
}

// 清除搜索
const clearSearch = () => {
  searchQuery.value = ''
  // 如果在搜索模式下清除，回归默认歌单
  if (playerType.value === 'search') {
    switchPlaylist(rawPlaylists[0])
  }
}

// 收藏逻辑
const toggleFavorite = (id: string) => {
  if (favorites.value.includes(id)) {
    favorites.value = favorites.value.filter(fid => fid !== id)
  } else {
    favorites.value.push(id)
  }
  saveToLocal()
}

const isFavorite = (id: string) => favorites.value.includes(id)

// 禅模式
const toggleZenMode = () => {
  isZenMode.value = !isZenMode.value
}

// 本地存储
const saveToLocal = () => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('nebula_favs', JSON.stringify(favorites.value))
    localStorage.setItem('nebula_history', JSON.stringify(history.value))
  }
}

const loadFromLocal = () => {
  if (typeof localStorage !== 'undefined') {
    const favs = localStorage.getItem('nebula_favs')
    const hist = localStorage.getItem('nebula_history')
    if (favs) favorites.value = JSON.parse(favs)
    if (hist) history.value = JSON.parse(hist)
  }
}

// 时钟逻辑
const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  
  const hour = now.getHours()
  if (hour < 12) {
    greeting.value = 'Good Morning'
    timeIcon.value = '🌅'
  } else if (hour < 18) {
    greeting.value = 'Good Afternoon'
    timeIcon.value = '☀️'
  } else {
    greeting.value = 'Good Evening'
    timeIcon.value = '🌙'
  }
}

// 响应式检测
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

// --- 生命周期 ---
let timer: any
onMounted(() => {
  loadFromLocal()
  updateTime()
  timer = setInterval(updateTime, 1000)
  
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped lang="scss">
/* --- Nebula OS Design System --- */
.nebula-os {
  --glass-surface: rgba(255, 255, 255, 0.6);
  --glass-border: rgba(255, 255, 255, 0.4);
  --glass-highlight: rgba(255, 255, 255, 0.8);
  --text-main: #2c3e50;
  --text-sub: #57606f;
  --accent-glow: var(--accent, #8e44ad);
  
  position: relative;
  width: 100%;
  min-height: 90vh;
  background: #f0f2f5;
  border-radius: 24px;
  overflow: hidden;
  font-family: 'Outfit', -apple-system, sans-serif;
  color: var(--text-main);
  transition: all 0.5s ease;
}

/* 暗黑模式 */
:root.dark .nebula-os {
  --glass-surface: rgba(20, 20, 30, 0.6);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-highlight: rgba(255, 255, 255, 0.1);
  --text-main: #ecf0f1;
  --text-sub: #95a5a6;
  background: #0a0a0e;
}

/* 动态背景 */
.nebula-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s infinite ease-in-out;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: var(--accent-glow);
  top: -100px;
  left: -100px;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: #4a90e2;
  bottom: -100px;
  right: -100px;
  animation-delay: -5s;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(128,128,128,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(128,128,128,0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, 50px); }
}

/* 导航栏 */
.os-navbar {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background: var(--glass-surface);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--glass-border);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.greeting-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-sub);
  background: rgba(128,128,128,0.05);
  padding: 4px 12px;
  border-radius: 20px;
}

.live-clock {
  font-weight: 700;
  color: var(--accent-glow);
}

.search-capsule {
  display: flex;
  align-items: center;
  background: var(--glass-highlight);
  border: 1px solid var(--glass-border);
  padding: 8px 16px;
  border-radius: 50px;
  width: 300px;
  transition: all 0.3s;
  
  &:focus-within {
    width: 350px;
    box-shadow: 0 0 0 2px var(--accent-glow);
  }
}

.search-input {
  border: none;
  background: transparent;
  flex: 1;
  margin-left: 8px;
  outline: none;
  color: var(--text-main);
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--glass-highlight);
  border: 1px solid var(--glass-border);
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  color: var(--text-main);
  font-weight: 600;
  transition: all 0.2s;
  
  &:hover {
    background: var(--accent-glow);
    color: white;
    border-color: transparent;
  }
  
  &.active {
    background: var(--accent-glow);
    color: white;
  }
}

/* 主视口布局 */
.os-viewport {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 320px 1fr;
  height: calc(90vh - 80px); /* 减去导航栏高度 */
  overflow: hidden;
}

/* 左侧控制台 */
.control-deck {
  padding: 30px;
  border-right: 1px solid var(--glass-border);
  background: rgba(255,255,255,0.02);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.deck-glass {
  background: var(--glass-surface);
  border: 1px solid var(--glass-border);
  border-radius: 30px;
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  text-align: center;
  backdrop-filter: blur(20px);
}

.now-playing-visual {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.album-art {
  width: 180px;
  height: 180px;
  position: relative;
}

.art-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  position: relative;
  z-index: 2;
  animation: spin 20s linear infinite;
  background-size: cover;
  background-position: center;
  border: 4px solid rgba(255,255,255,0.1);
}

.wave-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid var(--accent-glow);
  border-radius: 50%;
  opacity: 0;
  z-index: 1;
  animation: ripple 2s infinite;
}

.wave-ring.delay {
  animation-delay: 0.6s;
}

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes ripple {
  0% { width: 100%; height: 100%; opacity: 0.8; }
  100% { width: 150%; height: 150%; opacity: 0; }
}

.track-meta h2 {
  font-size: 1.4rem;
  margin: 0 0 5px 0;
}

.track-meta p {
  font-size: 0.9rem;
  color: var(--text-sub);
  margin-bottom: 20px;
}

/* 右侧探索区 */
.explorer-panel {
  padding: 30px 50px;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
  
  h3 {
    font-size: 1.2rem;
    color: var(--text-sub);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
  }
}

/* 仪表盘 (历史 & 收藏) */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* 增加最小宽度，避免在大屏拉伸太长 */
  gap: 20px;
  margin-bottom: 40px;
}

.dash-card {
  background: var(--glass-surface);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 20px;
  height: 100%; /* 统一高度 */
  display: flex;
  flex-direction: column;
}

.card-header {
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.mini-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mini-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(128,128,128,0.05);
  }
}

.dot { width: 8px; height: 8px; border-radius: 50%; }
.time-tag { font-size: 0.7rem; background: rgba(128,128,128,0.1); padding: 2px 6px; border-radius: 4px; }

/* 过滤标签 */
.filter-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag-pill {
  background: transparent;
  border: 1px solid rgba(128,128,128,0.2);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  cursor: pointer;
  color: var(--text-sub);
  transition: all 0.2s;
  
  &.active, &:hover {
    background: var(--text-main);
    color: var(--glass-surface);
    border-color: transparent;
  }
}

/* 歌单库网格 */
.library-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.library-card {
  background: var(--glass-surface);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  height: 180px;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    z-index: 2;
  }
  
  &.is-playing {
    border-color: var(--accent-glow);
    box-shadow: 0 0 0 2px var(--accent-glow);
  }
}

.card-glow {
  position: absolute;
  top: -20%;
  right: -20%;
  width: 100px;
  height: 100px;
  background: var(--glow-color);
  filter: blur(50px);
  opacity: 0.2;
  transition: opacity 0.3s;
}

.library-card:hover .card-glow {
  opacity: 0.4;
}

.card-main {
  position: relative;
  z-index: 1;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.card-emoji {
  font-size: 2rem;
}

.fav-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  opacity: 0.5;
  transition: all 0.2s;
  
  &:hover, &.active {
    opacity: 1;
    transform: scale(1.2);
  }
}

.card-body h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  line-height: 1.3;
}

.tag-badge {
  font-size: 0.75rem;
  color: var(--text-sub);
  background: rgba(128,128,128,0.08);
  padding: 4px 10px;
  border-radius: 8px;
}

/* 禅模式 */
.zen-mode .os-navbar,
.zen-mode .control-deck {
  /* 在禅模式下，导航栏和左侧边栏仍然可见，但右侧会被隐藏 */
}

.zen-mode .os-viewport {
  grid-template-columns: 1fr; /* 只有播放器居中 */
}

.zen-mode .control-deck {
  border-right: none;
  align-items: center;
}

.zen-mode .deck-glass {
  transform: scale(1.2);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .os-viewport {
    grid-template-columns: 1fr;
    height: auto;
    padding-bottom: 80px;
  }
  
  .control-deck {
    display: none; /* 移动端隐藏左侧大播放器 */
  }
  
  .os-navbar {
    flex-wrap: wrap;
    gap: 15px;
    padding: 15px;
  }
  
  .search-capsule {
    width: 100%;
    order: 3;
  }
  
  .nav-right {
    display: none;
  }
  
  .explorer-panel {
    padding: 20px;
  }
  
  .mobile-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--glass-surface);
    backdrop-filter: blur(20px);
    padding: 10px;
    border-top: 1px solid var(--glass-border);
    z-index: 100;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .bar-info {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .bar-icon {
    font-size: 1.5rem;
  }

  .bar-text {
    display: flex;
    flex-direction: column;
  }

  .bar-title {
    font-weight: 700;
    font-size: 0.9rem;
  }

  .bar-status {
    font-size: 0.75rem;
    color: var(--text-sub);
  }

  .mobile-controls {
    flex: 0 0 auto;
  }
}
</style>
