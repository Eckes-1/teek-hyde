<template>
  <div class="reading-navigation">
    <!-- 回到底部按钮 -->
    <Transition name="back">
      <div
        v-show="showButtons"
        class="nav-btn to-bottom-btn"
        :class="{ 'scrolling': isScrollingToBottom }"
        @click="scrollToBottom"
        title="回到底部"
      >
        <!-- 进度圆环 -->
        <svg class="progress-circle" width="70" height="70" viewBox="0 0 70 70">
          <circle class="progress-circle-bg" cx="35" cy="35" r="30" fill="none" 
                  stroke="rgba(255, 255, 255, 0.2)" stroke-width="4" />
          <circle class="progress-circle-bar" cx="35" cy="35" r="30" fill="none" 
                  stroke="rgba(255, 255, 255, 0.9)" stroke-width="4" 
                  :stroke-dasharray="progressCircumference" 
                  :stroke-dashoffset="bottomProgressOffset"
                  transform="rotate(-90 35 35)" />
        </svg>
        
        <!-- 火箭向下图标 -->
        <svg class="icon rocket-down-icon" viewBox="0 0 24 24" width="24" height="24">
          <path fill="#FFF" d="M12,2C12,2 7,4 7,12L9.21,12C9.21,12 10,11 12,11C14,11 14.79,12 14.79,12L17,12C17,4 12,2 12,2M12,22L10,17H14L12,22M8,12V20H10V14.92C9.38,14.44 9,13.74 9,13A2,2 0 0,1 11,11V7.91C9.22,8.37 8,9.87 8,12M16,12C16,9.87 14.78,8.37 13,7.91V11A2,2 0 0,1 15,13C15,13.74 14.62,14.44 14,14.92V20H16V12Z"/>
        </svg>
      </div>
    </Transition>

    <!-- 返回阅读位置按钮 -->
    <Transition name="back">
      <div
        v-show="hasReadingPosition && showButtons"
        class="nav-btn reading-position-btn"
        :class="{ 'jumping': isJumpingToPosition }"
        @click="goToReadingPosition"
        title="返回阅读位置"
      >
        <!-- 光环效果 -->
        <svg class="progress-circle" width="70" height="70" viewBox="0 0 70 70">
          <circle class="glow-ring" cx="35" cy="35" r="30" fill="none" 
                  stroke="rgba(255, 255, 255, 0.3)" stroke-width="2" />
        </svg>
        
        <!-- 书签收藏图标 -->
        <svg class="icon bookmark-icon" viewBox="0 0 24 24" width="24" height="24">
          <path fill="#FFF" d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"/>
        </svg>
        
        <!-- 粒子特效 -->
        <span class="particle particle-1"></span>
        <span class="particle particle-2"></span>
        <span class="particle particle-3"></span>
        <span class="particle particle-4"></span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vitepress'
import { TkMessage } from 'vitepress-theme-teek'

const route = useRoute()

// 显示按钮
const showButtons = ref(false)
// 底部进度（0-1）
const bottomProgress = ref(0)
// 是否有保存的阅读位置
const hasReadingPosition = ref(false)
// 保存的阅读位置
const savedScrollPosition = ref(0)
// 是否正在滚动到底部
const isScrollingToBottom = ref(false)
// 是否正在跳转到阅读位置
const isJumpingToPosition = ref(false)

// 进度圆环周长
const progressCircumference = 2 * Math.PI * 30
// 底部进度偏移量
const bottomProgressOffset = ref(progressCircumference)

// 本地存储键名
const STORAGE_KEY = 'reading-position-'

// 获取当前页面的存储键
const getCurrentStorageKey = () => {
  return STORAGE_KEY + route.path
}

// 保存阅读位置到localStorage
const saveReadingPosition = () => {
  const scrollY = window.scrollY
  // 只有滚动超过200px才保存
  if (scrollY > 200) {
    localStorage.setItem(getCurrentStorageKey(), scrollY.toString())
    savedScrollPosition.value = scrollY
    hasReadingPosition.value = true
  }
}

// 加载阅读位置
const loadReadingPosition = () => {
  const saved = localStorage.getItem(getCurrentStorageKey())
  if (saved) {
    savedScrollPosition.value = parseInt(saved)
    hasReadingPosition.value = true
  } else {
    hasReadingPosition.value = false
  }
}

// 回到底部
const scrollToBottom = () => {
  if (isScrollingToBottom.value) return
  
  // 先保存当前位置
  saveReadingPosition()
  
  // 设置动画状态
  isScrollingToBottom.value = true
  
  const totalHeight = document.documentElement.scrollHeight
  window.scrollTo({
    top: totalHeight,
    behavior: 'smooth'
  })
  
  // 监听滚动结束
  const checkScrollEnd = () => {
    const scrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    
    if (scrollY >= maxScroll - 10) {
      setTimeout(() => {
        isScrollingToBottom.value = false
        TkMessage({
          message: '已到达底部 📍',
          type: 'success'
        })
      }, 300)
      window.removeEventListener('scroll', checkScrollEnd)
    }
  }
  
  window.addEventListener('scroll', checkScrollEnd)
}

// 返回阅读位置
const goToReadingPosition = () => {
  if (isJumpingToPosition.value) return
  
  if (savedScrollPosition.value > 0) {
    // 设置动画状态
    isJumpingToPosition.value = true
    
    window.scrollTo({
      top: savedScrollPosition.value,
      behavior: 'smooth'
    })
    
    // 动画结束后重置状态
    setTimeout(() => {
      isJumpingToPosition.value = false
      TkMessage({
        message: '已返回阅读位置 📖',
        type: 'success'
      })
    }, 800)
  }
}

// 计算滚动进度
const updateScrollProgress = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight
  
  // 显示按钮（滚动超过300px）
  showButtons.value = scrollY > 300
  
  // 计算滚动百分比（0-1）
  const totalScroll = documentHeight - windowHeight
  if (totalScroll <= 0) {
    bottomProgress.value = 0
  } else {
    bottomProgress.value = Math.min(Math.max(scrollY / totalScroll, 0), 1)
  }
  
  // 更新进度圆环偏移量（从100%到0%）
  bottomProgressOffset.value = progressCircumference * (1 - bottomProgress.value)
}

// 滚动事件处理（带节流）
let scrollTimer = null
const handleScroll = () => {
  if (scrollTimer) return
  
  scrollTimer = setTimeout(() => {
    updateScrollProgress()
    scrollTimer = null
  }, 100)
}

// 页面离开前保存阅读位置
const handleBeforeUnload = () => {
  saveReadingPosition()
}

// 监听路由变化
watch(() => route.path, () => {
  // 切换页面时加载新页面的阅读位置
  loadReadingPosition()
  updateScrollProgress()
})

onMounted(() => {
  // 加载阅读位置
  loadReadingPosition()
  
  // 初始化进度
  updateScrollProgress()
  
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll)
  
  // 页面离开前保存
  window.addEventListener('beforeunload', handleBeforeUnload)
})

onBeforeUnmount(() => {
  // 保存当前位置
  saveReadingPosition()
  
  // 移除监听
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('beforeunload', handleBeforeUnload)
})
</script>

<style scoped>
.reading-navigation {
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 998;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 导航按钮通用样式 */
.nav-btn {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

/* 回到底部按钮 - 橙红色渐变 */
.to-bottom-btn {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  box-shadow: 0 4px 20px rgba(250, 112, 154, 0.4);
  overflow: hidden;
}

.to-bottom-btn:hover {
  background: linear-gradient(135deg, #f9608b 0%, #fdd030 100%);
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(250, 112, 154, 0.6);
}

/* 涟漪特效 */
.to-bottom-btn.scrolling::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple 1s ease-out;
  pointer-events: none;
  z-index: 1;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}

/* 阅读位置按钮 - 蓝绿色渐变 */
.reading-position-btn {
  background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
  box-shadow: 0 4px 20px rgba(48, 207, 208, 0.4);
  overflow: hidden;
}

.reading-position-btn:hover {
  background: linear-gradient(135deg, #20bfbf 0%, #280757 100%);
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(48, 207, 208, 0.6);
}

/* 阅读位置按钮涟漪 */
.reading-position-btn.jumping::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(48, 207, 208, 0.6) 0%, transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ripple 0.8s ease-out;
  pointer-events: none;
  z-index: 1;
}

/* 进度圆环 */
.progress-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.3));
}

.progress-circle-bg {
  stroke-linecap: round;
}

.progress-circle-bar {
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease;
  filter: drop-shadow(0 0 1px rgba(255, 255, 255, 0.5));
}

/* 光环 */
.glow-ring {
  stroke-linecap: round;
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.3;
    stroke-width: 2;
  }
  50% {
    opacity: 0.8;
    stroke-width: 3;
  }
}

/* 图标样式 */
.icon {
  width: 50%;
  height: 50%;
  z-index: 2;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
  transition: transform 0.3s ease;
}

.nav-btn:hover .icon {
  animation: iconBounce 0.6s ease-in-out infinite;
}

@keyframes iconBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* 火箭发射动画 */
.scrolling .rocket-down-icon {
  animation: rocket-launch 1s ease-in-out forwards;
}

@keyframes rocket-launch {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(10px) scale(0.95);
    opacity: 0.8;
  }
  100% {
    transform: translateY(20px) scale(0.9);
    opacity: 0.6;
  }
}

/* 火箭尾焰效果 */
.to-bottom-btn.scrolling::after {
  content: '';
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 0;
  background: linear-gradient(to bottom, rgba(255, 200, 50, 0.8), rgba(255, 100, 50, 0));
  border-radius: 50%;
  animation: rocket-trail 1s ease-out forwards;
  z-index: 0;
}

@keyframes rocket-trail {
  0% {
    height: 0;
    opacity: 0;
  }
  50% {
    height: 25px;
    opacity: 0.9;
  }
  100% {
    height: 30px;
    opacity: 0;
  }
}

/* 书签飘动动画 */
.jumping .bookmark-icon {
  animation: bookmark-float 0.8s ease-in-out;
}

@keyframes bookmark-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) rotate(-5deg);
  }
  50% {
    transform: translateY(0) rotate(0deg);
  }
  75% {
    transform: translateY(-4px) rotate(5deg);
  }
}

/* 粒子特效 */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  pointer-events: none;
  opacity: 0;
}

.jumping .particle {
  animation: particle-burst 0.8s ease-out;
}

.particle-1 { top: 20%; left: 50%; animation-delay: 0s; }
.particle-2 { top: 50%; left: 80%; animation-delay: 0.1s; }
.particle-3 { top: 80%; left: 50%; animation-delay: 0.2s; }
.particle-4 { top: 50%; left: 20%; animation-delay: 0.15s; }

@keyframes particle-burst {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(1);
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(var(--tx, 0), var(--ty, -20px)) scale(0);
  }
}

.particle-1 { --tx: 0; --ty: -30px; }
.particle-2 { --tx: 25px; --ty: 0; }
.particle-3 { --tx: 0; --ty: 30px; }
.particle-4 { --tx: -25px; --ty: 0; }

/* 进入退出动画 */
.back-enter-active,
.back-leave-active {
  transition: opacity 0.5s ease;
}

.back-enter-from,
.back-leave-to {
  opacity: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .reading-navigation {
    bottom: 140px;
    right: 25px;
    gap: 12px;
  }
  
  .nav-btn {
    width: 38px;
    height: 38px;
  }
}

@media (max-width: 720px) {
  .reading-navigation {
    bottom: 125px;
    right: 16px;
  }
  
  .nav-btn {
    width: 36px;
    height: 36px;
  }
}
</style>
