<template>
  <div class="music-player-wrapper">
    <div v-if="loading" class="loading-placeholder">
      <div class="spinner"></div>
      <p>正在加载音乐播放器...</p>
    </div>
    <div ref="playerContainer" class="aplayer-container"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  // 网易云歌单ID
  id: {
    type: String,
    default: '7360465359' // 默认歌单
  },
  // 播放器类型: playlist(歌单) | song(单曲) | album(专辑) | artist(歌手)
  type: {
    type: String,
    default: 'playlist'
  },
  // 主题色
  theme: {
    type: String,
    default: '#667eea'
  },
  // 自动播放
  autoplay: {
    type: Boolean,
    default: false
  },
  // 列表默认折叠
  listFolded: {
    type: Boolean,
    default: false
  },
  // 吸底模式
  fixed: {
    type: Boolean,
    default: false
  },
  // 迷你模式
  mini: {
    type: Boolean,
    default: false
  }
})

const playerContainer = ref<HTMLElement | null>(null)
const loading = ref(true)

// 动态加载脚本的辅助函数
const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
    document.head.appendChild(script)
  })
}

// 动态加载样式的辅助函数
const loadStyle = (href: string): Promise<void> => {
  return new Promise((resolve) => {
    if (document.querySelector(`link[href="${href}"]`)) {
      resolve()
      return
    }
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.onload = () => resolve()
    document.head.appendChild(link)
  })
}

onMounted(async () => {
  if (typeof window === 'undefined') return

  try {
    // 1. 加载 APlayer 资源
    await Promise.all([
      loadStyle('https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css'),
      loadScript('https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js')
    ])

    // 2. 加载 MetingJS 资源
    await loadScript('https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js')

    // 3. 创建播放器元素
    // 我们手动创建 meting-js 元素，避免 Vue 编译警告
    if (playerContainer.value) {
      const meting = document.createElement('meting-js')
      
      // 设置属性
      meting.setAttribute('server', 'netease')
      meting.setAttribute('type', props.type)
      meting.setAttribute('id', props.id)
      meting.setAttribute('theme', props.theme)
      meting.setAttribute('autoplay', props.autoplay.toString())
      meting.setAttribute('list-folded', props.listFolded.toString())
      meting.setAttribute('fixed', props.fixed.toString())
      meting.setAttribute('mini', props.mini.toString())
      meting.setAttribute('loop', 'all')
      meting.setAttribute('order', 'list')
      meting.setAttribute('preload', 'auto')
      meting.setAttribute('list-max-height', '500px')
      meting.setAttribute('lrc-type', '0')

      // 将元素挂载到容器中
      playerContainer.value.appendChild(meting)
      
      // 手动触发 Meting 初始化 (如果脚本已加载，它会自动扫描，但为了保险)
      // 注意：MetingJS 会监听 DOM 变化，插入元素后通常会自动初始化
    }
  } catch (error) {
    console.error('Music Player load failed:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.music-player-wrapper {
  margin: 20px 0;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.aplayer-container {
  width: 100%;
}

.loading-placeholder {
  padding: 40px;
  text-align: center;
  color: var(--vp-c-text-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(102, 126, 234, 0.2);
  border-left-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* 样式穿透优化 APlayer 在暗色模式下的显示 */
:deep(.aplayer) {
  background: var(--vp-c-bg-soft) !important;
  font-family: inherit;
  margin: 0 !important;
  box-shadow: none !important;
}

:deep(.aplayer .aplayer-info) {
  border-bottom: none !important;
}

:deep(.aplayer .aplayer-list ol li) {
  border-top: 1px solid var(--vp-c-divider) !important;
}

:deep(.aplayer .aplayer-list ol li:hover) {
  background: var(--vp-c-bg-mute) !important;
}

:deep(.aplayer .aplayer-list ol li.aplayer-list-light) {
  background: var(--vp-c-bg-mute) !important;
}

:deep(.aplayer .aplayer-info .aplayer-music .aplayer-title) {
  color: var(--vp-c-text-1) !important;
}

:deep(.aplayer .aplayer-info .aplayer-music .aplayer-author) {
  color: var(--vp-c-text-2) !important;
}

:deep(.aplayer .aplayer-lrc:before),
:deep(.aplayer .aplayer-lrc:after) {
  background: linear-gradient(180deg, var(--vp-c-bg-soft) 0, transparent 100%) !important;
}

:deep(.aplayer .aplayer-lrc:after) {
  background: linear-gradient(180deg, transparent 0, var(--vp-c-bg-soft) 100%) !important;
}

:deep(.aplayer .aplayer-lrc p) {
  color: var(--vp-c-text-2);
}

:deep(.aplayer .aplayer-miniswitcher) {
  background: var(--vp-c-bg-mute) !important;
}
</style>
