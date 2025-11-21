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
          <path fill="currentColor" d="M12,2C12,2 7,4 7,12L9.21,12C9.21,12 10,11 12,11C14,11 14.79,12 14.79,12L17,12C17,4 12,2 12,2M12,22L10,17H14L12,22M8,12V20H10V14.92C9.38,14.44 9,13.74 9,13A2,2 0 0,1 11,11V7.91C9.22,8.37 8,9.87 8,12M16,12C16,9.87 14.78,8.37 13,7.91V11A2,2 0 0,1 15,13C15,13.74 14.62,14.44 14,14.92V20H16V12Z"/>
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
        <svg class="icon rocket-down" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,22C12,22 17,20 17,12L14.79,12C14.79,12 14,13 12,13C10,13 9.21,12 9.21,12L7,12C7,20 12,22 12,22M12,2L14,7H10L12,2M16,12V4H14V9.08C14.62,9.56 15,10.26 15,11A2,2 0 0,1 13,13V16.09C14.78,15.63 16,14.13 16,12M8,12C8,14.13 9.22,15.63 11,16.09V13A2,2 0 0,1 9,11C9,10.26 9.38,9.56 10,9.08V4H8V12Z"/>
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
const scrollToTop = () => {
  saveReadingPosition()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  TkMessage({ message: '已回到顶部 🚀', type: 'success' })
}

const scrollToBottom = () => {
  if (isScrollingToBottom.value) return
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
  .dark & { color: #aaa; }
}

.action-btn:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #646cff;
  transform: scale(1.1);
  .dark & { 
    background: rgba(255, 255, 255, 0.1); 
    color: #a8b1ff;
  }
}

.icon {
  width: 24px;
  height: 24px;
  transition: transform 0.4s ease;
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
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
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
