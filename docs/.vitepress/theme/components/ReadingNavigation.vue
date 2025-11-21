<template>
  <Transition name="dock-fade">
    <div v-show="showButtons" class="nav-dock">
      <!-- 顶部进度指示器 -->
      <div class="dock-item progress-indicator" @click="scrollToTop" title="当前进度">
        <svg class="progress-ring" width="40" height="40" viewBox="0 0 40 40">
          <circle class="ring-bg" cx="20" cy="20" r="18" fill="none" stroke-width="3" />
          <circle class="ring-bar" cx="20" cy="20" r="18" fill="none" stroke-width="3" 
                  :stroke-dasharray="circumference" 
                  :stroke-dashoffset="dashOffset"
                  transform="rotate(-90 20 20)" />
        </svg>
        <span class="progress-text">{{ Math.round(scrollPercentage * 100) }}%</span>
      </div>

      <!-- 分隔线 -->
      <div class="divider"></div>

      <!-- 回到顶部按钮 -->
      <div class="dock-item action-btn top-btn" @click="scrollToTop" title="回到顶部">
        <svg class="icon rocket-up" viewBox="0 0 24 24">
          <!-- Remix Icon: Rocket-2-Line -->
          <path fill="currentColor" d="M13,2.05C17.45,2.59 21,6.34 21,11C21,12.38 20.64,13.68 20,14.83V22H17L13,19V22H11V19L7,22H4V14.83C3.36,13.68 3,12.38 3,11C3,6.34 6.55,2.59 11,2.05V0H13V2.05M12,4C8.13,4 5,7.13 5,11C5,13.85 6.7,16.29 9.09,17.4L12,15.74L14.91,17.4C17.3,16.29 19,13.85 19,11C19,7.13 15.87,4 12,4M12,6C13.38,6 14.5,7.12 14.5,8.5C14.5,9.88 13.38,11 12,11C10.62,11 9.5,9.88 9.5,8.5C9.5,7.12 10.62,6 12,6Z"/>
        </svg>
        <div class="tooltip">顶部</div>
      </div>

      <!-- 返回阅读位置按钮 (条件渲染) -->
      <Transition name="scale-in">
        <div v-if="hasReadingPosition" class="dock-item action-btn read-btn" 
             :class="{ 'highlight': isJumpingToPosition }"
             @click="goToReadingPosition" title="返回上次位置">
          <svg class="icon bookmark" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"/>
          </svg>
          <span v-if="isJumpingToPosition" class="particle-effect"></span>
          <div class="tooltip">继续阅读</div>
        </div>
      </Transition>

      <!-- 回到底部按钮 -->
      <div class="dock-item action-btn bottom-btn" 
           :class="{ 'active': isScrollingToBottom }"
           @click="scrollToBottom" title="回到底部">
        <svg class="icon rocket-down" viewBox="0 0 24 24" style="transform: rotate(180deg)">
          <!-- Remix Icon: Rocket-2-Line -->
          <path fill="currentColor" d="M13,2.05C17.45,2.59 21,6.34 21,11C21,12.38 20.64,13.68 20,14.83V22H17L13,19V22H11V19L7,22H4V14.83C3.36,13.68 3,12.38 3,11C3,6.34 6.55,2.59 11,2.05V0H13V2.05M12,4C8.13,4 5,7.13 5,11C5,13.85 6.7,16.29 9.09,17.4L12,15.74L14.91,17.4C17.3,16.29 19,13.85 19,11C19,7.13 15.87,4 12,4M12,6C13.38,6 14.5,7.12 14.5,8.5C14.5,9.88 13.38,11 12,11C10.62,11 9.5,9.88 9.5,8.5C9.5,7.12 10.62,6 12,6Z"/>
        </svg>
        <div class="tooltip">底部</div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vitepress'
import { TkMessage } from 'vitepress-theme-teek'

const route = useRoute()

// 状态管理
const showButtons = ref(false)
const scrollPercentage = ref(0)
const hasReadingPosition = ref(false)
const savedScrollPosition = ref(0)
const isScrollingToBottom = ref(false)
const isJumpingToPosition = ref(false)

// 进度环配置
const radius = 18
const circumference = 2 * Math.PI * radius
const dashOffset = computed(() => circumference * (1 - scrollPercentage.value))

const STORAGE_KEY = 'reading-position-'

// 工具函数
const getCurrentStorageKey = () => STORAGE_KEY + route.path

const saveReadingPosition = () => {
  const scrollY = window.scrollY
  if (scrollY > 200) {
    localStorage.setItem(getCurrentStorageKey(), scrollY.toString())
    savedScrollPosition.value = scrollY
    hasReadingPosition.value = true
  }
}

const loadReadingPosition = () => {
  const saved = localStorage.getItem(getCurrentStorageKey())
  if (saved) {
    savedScrollPosition.value = parseInt(saved)
    hasReadingPosition.value = true
  } else {
    hasReadingPosition.value = false
  }
}

// 滚动动作
const scrollToTop = (e) => {
  if (e) launchRocket(e, 'up')
  saveReadingPosition()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  TkMessage({ message: '已回到顶部 🚀', type: 'success' })
}

const launchRocket = (event, direction) => {
  // 获取点击的按钮元素
  const button = event.currentTarget
  const originalIcon = button.querySelector('svg')

  // 如果图标已经飞出去了（不可见），则不再触发，防止重复点击
  if (originalIcon.style.opacity === '0') return

  const rect = button.getBoundingClientRect()
  
  // 克隆图标
  const icon = originalIcon.cloneNode(true)
  
  // 隐藏原图标，制造"飞出去"的错觉
  originalIcon.style.opacity = '0'
  
  // 创建飞行容器
  const flyer = document.createElement('div')
  flyer.className = `flying-rocket flying-${direction}`
  
  // 设置初始位置（与按钮图标重合）
  // 按钮 padding 导致图标居中，这里直接利用 rect 定位
  // 图标是 24x24，按钮是 40x40
  flyer.style.left = `${rect.left + (rect.width - 24) / 2}px`
  flyer.style.top = `${rect.top + (rect.height - 24) / 2}px`
  
  flyer.appendChild(icon)
  document.body.appendChild(flyer)
  
  // 动画结束后清理并恢复原图标
  setTimeout(() => {
    flyer.remove()
    originalIcon.style.opacity = ''
  }, 1000)
}

const scrollToBottom = (e) => {
  if (isScrollingToBottom.value) return
  if (e) launchRocket(e, 'down')
  saveReadingPosition()
  isScrollingToBottom.value = true
  
  const totalHeight = document.documentElement.scrollHeight
  window.scrollTo({ top: totalHeight, behavior: 'smooth' })
  
  const checkScrollEnd = () => {
    const scrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    if (scrollY >= maxScroll - 10) {
      setTimeout(() => {
        isScrollingToBottom.value = false
        TkMessage({ message: '已到达底部 📍', type: 'success' })
      }, 300)
      window.removeEventListener('scroll', checkScrollEnd)
    }
  }
  window.addEventListener('scroll', checkScrollEnd)
}

const goToReadingPosition = () => {
  if (isJumpingToPosition.value || savedScrollPosition.value <= 0) return
  isJumpingToPosition.value = true
  
  window.scrollTo({ top: savedScrollPosition.value, behavior: 'smooth' })
  
  setTimeout(() => {
    isJumpingToPosition.value = false
    TkMessage({ message: '已恢复阅读位置 📖', type: 'success' })
  }, 800)
}

// 滚动监听
const updateScrollProgress = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  const maxScroll = documentHeight - windowHeight
  
  showButtons.value = scrollY > 300
  scrollPercentage.value = maxScroll > 0 ? Math.min(Math.max(scrollY / maxScroll, 0), 1) : 0
  
  // 自动保存
  if (scrollY > 200 && scrollY % 500 < 50) {
    saveReadingPosition()
  }
}

let scrollTimer = null
const handleScroll = () => {
  if (scrollTimer) return
  scrollTimer = setTimeout(() => {
    updateScrollProgress()
    scrollTimer = null
  }, 100)
}

const handleBeforeUnload = () => saveReadingPosition()

// 生命周期
watch(() => route.path, () => {
  loadReadingPosition()
  updateScrollProgress()
})

onMounted(() => {
  loadReadingPosition()
  updateScrollProgress()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('beforeunload', handleBeforeUnload)
})

onBeforeUnmount(() => {
  saveReadingPosition()
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<style scoped>
/* 导航坞容器 */
.nav-dock {
  position: fixed;
  bottom: 100px;
  right: 24px;
  z-index: 998;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px 8px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px) saturate(180%);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 
    0 10px 30px -5px rgba(0, 0, 0, 0.1),
    0 4px 10px rgba(0, 0, 0, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.dark .nav-dock {
  background: rgba(30, 30, 35, 0.7);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 10px 30px -5px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.nav-dock:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 35px -5px rgba(0, 0, 0, 0.15),
    0 8px 15px rgba(0, 0, 0, 0.1);
}

/* 分隔线 */
.divider {
  width: 20px;
  height: 2px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
}
.dark .divider {
  background: rgba(255, 255, 255, 0.1);
}

/* 进度指示器 */
.progress-indicator {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.progress-ring {
  transform: rotate(0deg);
}

.ring-bg {
  stroke: rgba(0, 0, 0, 0.1);
  .dark & { stroke: rgba(255, 255, 255, 0.1); }
}

.ring-bar {
  stroke: #646cff;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease;
  filter: drop-shadow(0 0 2px rgba(100, 108, 255, 0.5));
}

.progress-text {
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  color: #333;
  font-family: var(--vp-font-family-mono);
  .dark & { color: #eee; }
}

/* 按钮通用样式 */
.dock-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #666;
  cursor: pointer;
  background: transparent;
  perspective: 1000px; /* 为3D旋转做准备 */
  .dark & { color: #aaa; }
}

.action-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  transform: translateY(-2px); /* 整体上浮 */
  .dark & { 
    background: rgba(255, 255, 255, 0.1); 
  }
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.4s ease;
  /* 3D 效果核心 */
  filter: drop-shadow(1px 1px 0px rgba(0,0,0,0.1)) 
          drop-shadow(2px 2px 0px rgba(0,0,0,0.05));
}

.action-btn:hover .icon {
  color: #646cff;
  filter: drop-shadow(2px 2px 0px #4a51c4) 
          drop-shadow(4px 4px 2px rgba(0,0,0,0.2));
  transform: translateZ(20px) scale(1.1); /* 3D 突起 */
  .dark & { color: #a8b1ff; filter: drop-shadow(2px 2px 0px #3b4299) drop-shadow(4px 4px 2px rgba(0,0,0,0.3)); }
}

/* Tooltip */
.tooltip {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%) translateX(10px);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-right: 12px;
  pointer-events: none;
}

.action-btn:hover .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(0);
}

/* 各个按钮特效 */
.top-btn:hover .rocket-up {
  animation: rocket-fly-up 0.8s ease infinite;
}

.bottom-btn:hover .rocket-down {
  animation: rocket-fly-down 0.8s ease infinite;
}

.read-btn {
  color: #30cfd0;
}
.read-btn:hover .bookmark {
  animation: bookmark-nod 0.6s ease infinite;
}

/* 动画定义 */
@keyframes rocket-fly-up {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes rocket-fly-down {
  0%, 100% { transform: translateY(0) rotate(180deg); }
  50% { transform: translateY(6px) rotate(180deg); }
}

@keyframes bookmark-nod {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}

/* 容器进出动画 */
.dock-fade-enter-active,
.dock-fade-leave-active {
  transition: all 0.5s ease;
}
.dock-fade-enter-from,
.dock-fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.scale-in-enter-active,
.scale-in-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.scale-in-enter-from,
.scale-in-leave-to {
  opacity: 0;
  transform: scale(0.5);
  height: 0;
  margin: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .nav-dock {
    bottom: 80px;
    right: 16px;
    padding: 8px 6px;
    gap: 8px;
  }
  
  .progress-indicator {
    width: 36px;
    height: 36px;
  }
  
  .action-btn {
    width: 36px;
    height: 36px;
  }
  
  .tooltip {
    display: none;
  }
}
</style>

<style>
/* 全局火箭飞行特效 - 动态插入body的元素需要全局样式 */
.flying-rocket {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  width: 24px;
  height: 24px;
  color: #646cff; /* 默认主题色 */
  filter: drop-shadow(0 0 8px rgba(100, 108, 255, 0.8));
}

.flying-rocket svg {
  width: 100%;
  height: 100%;
}

/* 向上发射 */
.flying-rocket.flying-up {
  animation: rocket-launch-up 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

/* 向下发射 */
.flying-rocket.flying-down {
  animation: rocket-launch-down 1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}

@keyframes rocket-launch-up {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  20% {
    transform: translateY(10px) scale(0.8); /* 蓄力效果 */
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(0.4); /* 限制高度为 100px */
    opacity: 0;
  }
}

@keyframes rocket-launch-down {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  20% {
    transform: translateY(-10px) scale(0.8); /* 蓄力效果 */
    opacity: 1;
  }
  100% {
    transform: translateY(100px) scale(0.4); /* 限制高度为 100px */
    opacity: 0;
  }
}
</style>
