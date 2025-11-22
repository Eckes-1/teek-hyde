<template>
  <div 
    class="music-player-wrapper" 
    :class="{ 'is-transparent': transparent, 'is-mini': mini, 'is-fixed': fixed }"
  >
    <!-- 骨架屏加载状态 -->
    <transition name="fade">
      <div v-if="loading" class="player-skeleton">
        <div class="skeleton-cover"></div>
        <div class="skeleton-info">
          <div class="skeleton-title"></div>
          <div class="skeleton-author"></div>
          <div class="skeleton-bar"></div>
        </div>
      </div>
    </transition>

    <!-- 播放器容器 -->
    <div ref="playerContainer" class="aplayer-container" v-show="!loading"></div>
    
    <!-- 错误提示 -->
    <div v-if="error" class="player-error">
      <p>播放器加载失败</p>
      <button @click="initPlayer">重试</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  type: { type: String, default: 'playlist' },
  theme: { type: String, default: '#667eea' },
  autoplay: { type: Boolean, default: false },
  listFolded: { type: Boolean, default: false },
  fixed: { type: Boolean, default: false },
  mini: { type: Boolean, default: false },
  transparent: { type: Boolean, default: false } // 新增透明模式
})

const playerContainer = ref<HTMLElement | null>(null)
const loading = ref(true)
const error = ref(false)
let metingElement: HTMLElement | null = null

// 资源缓存检查
const isScriptLoaded = (src: string) => !!document.querySelector(`script[src="${src}"]`)
const isStyleLoaded = (href: string) => !!document.querySelector(`link[href="${href}"]`)

const loadResource = (type: 'script' | 'style', url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (type === 'script' ? isScriptLoaded(url) : isStyleLoaded(url)) {
      resolve()
      return
    }
    
    const element = document.createElement(type === 'script' ? 'script' : 'link')
    if (type === 'script') {
      ;(element as HTMLScriptElement).src = url
    } else {
      ;(element as HTMLLinkElement).rel = 'stylesheet'
      ;(element as HTMLLinkElement).href = url
    }
    
    element.onload = () => resolve()
    element.onerror = () => reject(new Error(`Failed to load ${url}`))
    document.head.appendChild(element)
  })
}

// 辅助函数兼容旧代码
const loadScript = (src: string) => loadResource('script', src)
const loadStyle = (href: string) => loadResource('style', href)

const initPlayer = async () => {
  loading.value = true
  error.value = false
  
  try {
    // 1. 并行加载资源
    await Promise.all([
      loadStyle('https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css'),
      loadScript('https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js')
    ])
    // Meting 依赖 APlayer，需最后加载
    await loadScript('https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js')

    // 2. 清理旧实例
    if (playerContainer.value) {
      playerContainer.value.innerHTML = ''
    }

    // 3. 创建新实例
    await nextTick()
    if (playerContainer.value) {
      metingElement = document.createElement('meting-js')
      
      const attrs = {
        server: 'netease',
        type: props.type,
        id: props.id,
        theme: props.theme,
        autoplay: props.autoplay.toString(),
        'list-folded': props.listFolded.toString(),
        fixed: props.fixed.toString(),
        mini: props.mini.toString(),
        loop: 'all',
        order: 'list',
        preload: 'auto',
        'list-max-height': '400px',
        'lrc-type': '0'
      }

      Object.entries(attrs).forEach(([key, value]) => {
        metingElement?.setAttribute(key, value)
      })

      playerContainer.value.appendChild(metingElement)
    }
    
    // 给一点时间让 DOM 渲染，避免闪烁
    setTimeout(() => {
      loading.value = false
    }, 500)

  } catch (e) {
    console.error('MusicPlayer init failed:', e)
    error.value = true
    loading.value = false
  }
}

// 监听 ID 变化，重新初始化
watch(() => props.id, () => {
  initPlayer()
})

onMounted(() => {
  initPlayer()
})
</script>

<style scoped lang="scss">
.music-player-wrapper {
  position: relative;
  margin: 20px 0;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: var(--vp-c-bg-soft);
  
  /* 透明模式 */
  &.is-transparent {
    background: transparent !important;
    box-shadow: none !important;
    
    :deep(.aplayer) {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }
    
    :deep(.aplayer .aplayer-info) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    }
    
    :deep(.aplayer .aplayer-body) {
      background: transparent !important;
    }
    
    :deep(.aplayer-list) {
      border-color: transparent !important;
    }
  }

  /* 迷你模式 */
  &.is-mini {
    width: fit-content;
    margin: 0;
    background: transparent;
    overflow: visible;
  }

  /* 吸底模式 */
  &.is-fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    margin: 0;
    width: 100%;
    border-radius: 0;
  }
}

/* 骨架屏样式 */
.player-skeleton {
  display: flex;
  padding: 15px;
  gap: 15px;
  background: rgba(255, 255, 255, 0.05);
  
  .skeleton-cover {
    width: 66px;
    height: 66px;
    background: rgba(128, 128, 128, 0.1);
    border-radius: 4px;
    animation: pulse 1.5s infinite;
  }
  
  .skeleton-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    
    .skeleton-title {
      width: 40%;
      height: 16px;
      background: rgba(128, 128, 128, 0.1);
      border-radius: 4px;
      animation: pulse 1.5s infinite;
    }
    
    .skeleton-author {
      width: 20%;
      height: 12px;
      background: rgba(128, 128, 128, 0.08);
      border-radius: 4px;
      animation: pulse 1.5s infinite 0.2s;
    }
    
    .skeleton-bar {
      width: 100%;
      height: 4px;
      background: rgba(128, 128, 128, 0.05);
      border-radius: 2px;
      margin-top: 5px;
    }
  }
}

@keyframes pulse {
  0% { opacity: 0.6; }
  50% { opacity: 0.3; }
  100% { opacity: 0.6; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.player-error {
  padding: 20px;
  text-align: center;
  color: #ff4d4f;
  
  button {
    margin-top: 10px;
    padding: 5px 15px;
    border: 1px solid #ff4d4f;
    background: transparent;
    color: #ff4d4f;
    border-radius: 4px;
    cursor: pointer;
    
    &:hover {
      background: #ff4d4f;
      color: white;
    }
  }
}

/* APlayer 深度定制 */
:deep(.aplayer) {
  font-family: inherit !important;
  border-radius: 12px !important;
  margin: 0 !important;
  
  /* 隐藏默认阴影 */
  box-shadow: none !important;
  
  /* 适配深色模式文本 */
  .aplayer-title {
    color: var(--vp-c-text-1) !important;
  }
  
  .aplayer-author {
    color: var(--vp-c-text-2) !important;
  }
  
  /* 列表项 */
  .aplayer-list ol li {
    border-top-color: var(--vp-c-divider) !important;
    
    &:hover {
      background: var(--vp-c-bg-mute) !important;
    }
    
    &.aplayer-list-light {
      background: var(--vp-c-bg-soft) !important;
      
      .aplayer-list-index,
      .aplayer-list-title,
      .aplayer-list-author {
        color: var(--vp-c-brand) !important;
      }
    }
    
    .aplayer-list-index {
      color: var(--vp-c-text-3) !important;
    }
    
    .aplayer-list-title {
      color: var(--vp-c-text-1) !important;
    }
    
    .aplayer-list-author {
      color: var(--vp-c-text-2) !important;
    }
  }
  
  /* 歌词 */
  .aplayer-lrc {
    text-shadow: none !important;
    
    &:before,
    &:after {
      background: linear-gradient(180deg, var(--vp-c-bg-soft) 0, transparent 100%) !important;
      opacity: 0; /* 隐藏渐变遮罩，更清爽 */
    }
    
    p {
      color: var(--vp-c-text-2) !important;
      font-size: 14px !important;
      opacity: 0.8;
      
      &.aplayer-lrc-current {
        color: var(--vp-c-brand) !important;
        opacity: 1;
        font-size: 16px !important;
        font-weight: bold;
      }
    }
  }
  
  /* 进度条背景 */
  .aplayer-bar-wrap {
    background: rgba(128, 128, 128, 0.1) !important;
  }
  
  /* 按钮颜色适配 */
  .aplayer-icon {
    path {
      fill: var(--vp-c-text-2) !important;
    }
    
    &:hover path {
      fill: var(--vp-c-brand) !important;
    }
  }
}
</style>
