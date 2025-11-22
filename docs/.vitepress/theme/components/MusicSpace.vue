<template>
  <div class="music-app-container">
    <!-- 背景网格装饰 -->
    <div class="bg-grid"></div>
    
    <div class="app-layout">
      <!-- 左侧：沉浸式播放控制台 (固定) -->
      <aside class="player-sidebar">
        <div class="now-playing-card">
          <div class="vinyl-wrapper" :class="{ 'is-playing': true }">
            <div class="vinyl-disc">
              <div class="disc-center" :style="{ background: currentTheme }"></div>
            </div>
          </div>
          
          <div class="track-info">
            <h2 class="station-title">Eckes Station</h2>
            <div class="live-indicator">
              <span class="pulse-dot"></span>
              LIVE BROADCAST
            </div>
          </div>

          <div class="player-dock">
            <MusicPlayer 
              :key="currentId"
              :id="currentId" 
              :theme="currentTheme" 
              type="playlist"
              :autoplay="true"
              :listFolded="false"
              class="docked-player"
            />
          </div>
        </div>
      </aside>

      <!-- 右侧：探索与歌单 (滚动) -->
      <main class="discovery-content">
        <header class="discovery-header">
          <h1>Discover</h1>
          <p class="date">{{ currentDate }}</p>
        </header>

        <!-- 情绪标签 -->
        <div class="mood-selector">
          <button 
            v-for="mood in moods" 
            :key="mood.id"
            class="mood-btn"
            :class="{ active: activeMood === mood.id }"
            @click="activeMood = mood.id"
          >
            {{ mood.name }}
          </button>
        </div>

        <!-- 歌单网格 (Bento Grid 风格) -->
        <div class="playlist-bento">
          <div 
            v-for="(playlist, index) in filteredPlaylists" 
            :key="playlist.id"
            class="bento-item"
            :class="{ 'item-large': index === 0 }" 
            @click="switchPlaylist(playlist)"
          >
            <div class="bento-bg" :style="{ '--accent': playlist.theme }"></div>
            <div class="bento-content">
              <div class="bento-icon">{{ playlist.icon }}</div>
              <div class="bento-text">
                <h3>{{ playlist.title }}</h3>
                <p>{{ playlist.desc }}</p>
              </div>
              <button class="play-fab" :style="{ background: playlist.theme }">
                <span class="play-triangle"></span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MusicPlayer from './MusicPlayer.vue'

// --- 数据 ---
const moods = [
  { id: 'all', name: '全部' },
  { id: 'focus', name: '深度专注' },
  { id: 'energy', name: '活力充能' },
  { id: 'relax', name: '以及放松' }
]

const playlists = [
  { id: '7360465359', title: '年度精选', desc: 'Eckes 的私人宝藏库', theme: '#6c5ce7', mood: 'focus', icon: '💎' },
  { id: '2031235299', title: '流行趋势', desc: '捕捉当下的律动', theme: '#ff7675', mood: 'energy', icon: '🔥' },
  { id: '26467411', title: '代码心流', desc: '构建数字世界的背景音', theme: '#0984e3', mood: 'focus', icon: '💻' },
  { id: '24381616', title: '午后爵士', desc: '慵懒的 Coffee Time', theme: '#e17055', mood: 'relax', icon: '🎷' },
  { id: '19723756', title: '赛博电音', desc: '未来城市的脉搏', theme: '#00cec9', mood: 'energy', icon: '⚡' },
  { id: '2884035', title: '纯净治愈', desc: '放空大脑 归于平静', theme: '#00b894', mood: 'relax', icon: '🍃' },
  { id: '513625210', title: '公路民谣', desc: '一直在路上', theme: '#fdcb6e', mood: 'relax', icon: '🎸' },
]

// --- 状态 ---
const currentId = ref(playlists[0].id)
const currentTheme = ref(playlists[0].theme)
const activeMood = ref('all')
const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

const filteredPlaylists = computed(() => {
  if (activeMood.value === 'all') return playlists
  return playlists.filter(p => p.mood === activeMood.value)
})

const switchPlaylist = (p: any) => {
  currentId.value = p.id
  currentTheme.value = p.theme
}
</script>

<style scoped lang="scss">
.music-app-container {
  --bg-color: #f8f9fa;
  --sidebar-bg: #ffffff;
  --text-main: #2d3436;
  --text-sub: #636e72;
  --card-bg: #ffffff;
  --card-hover: #fcfcfc;
  --shadow-soft: 0 10px 40px rgba(0,0,0,0.04);
  --shadow-strong: 0 20px 60px rgba(0,0,0,0.08);
  
  position: relative;
  min-height: 90vh;
  background: var(--bg-color);
  border-radius: 30px;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow: var(--shadow-soft);
}

/* 暗色模式适配 */
:root.dark .music-app-container {
  --bg-color: #1e1e2e;
  --sidebar-bg: #181825;
  --text-main: #cdd6f4;
  --text-sub: #a6adc8;
  --card-bg: #313244;
  --card-hover: #45475a;
  --shadow-soft: 0 10px 40px rgba(0,0,0,0.2);
  --shadow-strong: 0 20px 60px rgba(0,0,0,0.4);
}

/* 背景网格 */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(var(--text-sub) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.05;
  z-index: 0;
}

.app-layout {
  display: grid;
  grid-template-columns: 350px 1fr;
  height: 90vh;
  position: relative;
  z-index: 1;
}

/* 左侧侧边栏 */
.player-sidebar {
  background: var(--sidebar-bg);
  border-right: 1px solid rgba(128,128,128,0.1);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.now-playing-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* 黑胶唱片动画 */
.vinyl-wrapper {
  width: 220px;
  height: 220px;
  background: #1a1a1a;
  border-radius: 50%;
  padding: 6px;
  box-shadow: var(--shadow-strong);
  margin-bottom: 40px;
  animation: spin 20s linear infinite;
}

.vinyl-disc {
  width: 100%;
  height: 100%;
  background: repeating-radial-gradient(
    #111 0, 
    #111 2px, 
    #222 3px, 
    #222 4px
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.disc-center {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: background 0.5s ease;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.track-info {
  text-align: center;
  margin-bottom: 30px;
}

.station-title {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-main);
  margin: 0 0 10px 0;
  letter-spacing: -0.5px;
}

.live-indicator {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #ff7675;
  letter-spacing: 1px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #ff7675;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.5); }
  100% { opacity: 1; transform: scale(1); }
}

.player-dock {
  width: 100%;
}

/* 右侧内容区 */
.discovery-content {
  padding: 40px 60px;
  overflow-y: auto;
}

.discovery-header {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.discovery-header h1 {
  font-size: 3rem;
  font-weight: 900;
  color: var(--text-main);
  margin: 0;
  line-height: 1;
}

.date {
  color: var(--text-sub);
  font-size: 1.1rem;
  font-weight: 500;
}

/* 情绪标签 */
.mood-selector {
  display: flex;
  gap: 15px;
  margin-bottom: 40px;
}

.mood-btn {
  padding: 10px 24px;
  border-radius: 14px;
  background: transparent;
  border: 1px solid rgba(128,128,128,0.2);
  color: var(--text-sub);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mood-btn:hover {
  border-color: var(--text-main);
  color: var(--text-main);
}

.mood-btn.active {
  background: var(--text-main);
  color: var(--bg-color);
  border-color: var(--text-main);
}

/* Bento Grid 布局 */
.playlist-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 24px;
}

.bento-item {
  background: var(--card-bg);
  border-radius: 24px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  border: 1px solid rgba(128,128,128,0.05);
}

.bento-item.item-large {
  grid-column: span 2;
  grid-row: span 1;
}

.bento-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: var(--accent);
  filter: blur(80px);
  opacity: 0.15;
  border-radius: 50%;
  transform: translate(30%, -30%);
  transition: opacity 0.3s;
}

.bento-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-soft);
  border-color: rgba(128,128,128,0.1);
}

.bento-item:hover .bento-bg {
  opacity: 0.3;
}

.bento-icon {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.bento-text h3 {
  font-size: 1.2rem;
  color: var(--text-main);
  margin: 0 0 6px 0;
  font-weight: 700;
}

.bento-text p {
  font-size: 0.9rem;
  color: var(--text-sub);
  margin: 0;
}

.play-fab {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.bento-item:hover .play-fab {
  opacity: 1;
  transform: scale(1);
}

.play-triangle {
  width: 0;
  height: 0;
  border-left: 12px solid white;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-left: 4px;
}

/* 响应式适配 */
@media (max-width: 1024px) {
  .app-layout {
    grid-template-columns: 1fr;
    height: auto;
  }
  
  .player-sidebar {
    padding: 30px;
    border-right: none;
    border-bottom: 1px solid rgba(128,128,128,0.1);
  }

  .discovery-content {
    padding: 30px;
  }

  .playlist-bento {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .bento-item.item-large {
    grid-column: span 2;
  }
}

@media (max-width: 600px) {
  .playlist-bento {
    grid-template-columns: 1fr;
  }
  
  .bento-item.item-large {
    grid-column: span 1;
  }
}
</style>
