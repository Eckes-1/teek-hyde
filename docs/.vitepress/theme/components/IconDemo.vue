<template>
  <div class="icon-demo-container">
    <h3 class="demo-title">{{ title }}</h3>
    <p class="demo-desc">{{ description }}</p>
    
    <div class="demo-section">
      <div class="button-showcase">
        <button 
          class="demo-btn"
          :class="[btnClass, { 'active': isActive }]"
          @click="handleClick"
        >
          <svg class="icon" :viewBox="viewBox" width="24" height="24">
            <path fill="#FFF" :d="pathData" />
          </svg>
        </button>
      </div>
      
      <div class="demo-info">
        <div class="info-item">
          <span class="label">推荐指数：</span>
          <span class="stars">{{ rating }}</span>
        </div>
        <div class="info-item">
          <span class="label">适用场景：</span>
          <span class="value">{{ scenario }}</span>
        </div>
        <div class="info-item action">
          <button class="test-btn" @click="testScroll">
            ✨ 点击体验滚动特效
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="showMessage" class="demo-message">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  pathData: {
    type: String,
    required: true
  },
  viewBox: {
    type: String,
    default: '0 0 24 24'
  },
  btnClass: {
    type: String,
    default: 'style-1'
  },
  rating: {
    type: String,
    default: '⭐⭐⭐⭐⭐'
  },
  scenario: {
    type: String,
    default: '通用场景'
  },
  message: {
    type: String,
    default: '按钮点击效果！'
  }
})

const isActive = ref(false)
const showMessage = ref(false)

const handleClick = () => {
  isActive.value = true
  setTimeout(() => {
    isActive.value = false
  }, 1000)
}

const testScroll = () => {
  isActive.value = true
  showMessage.value = true
  
  // 模拟真实的滚动到底部效果
  const scrollDistance = 500 // 向下滚动500px
  const currentScroll = window.scrollY
  
  window.scrollTo({
    top: currentScroll + scrollDistance,
    behavior: 'smooth'
  })
  
  setTimeout(() => {
    isActive.value = false
  }, 1000)
  
  setTimeout(() => {
    showMessage.value = false
    // 滚回原位
    window.scrollTo({
      top: currentScroll,
      behavior: 'smooth'
    })
  }, 3000)
}
</script>

<style scoped>
.icon-demo-container {
  margin: 30px 0;
  padding: 30px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.dark .icon-demo-container {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
}

.demo-title {
  margin: 0 0 10px 0;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.demo-desc {
  margin: 0 0 25px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.dark .demo-desc {
  color: #aaa;
}

.demo-section {
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
}

.button-showcase {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  min-height: 120px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 20px;
}

.dark .button-showcase {
  background: rgba(0, 0, 0, 0.2);
}

.demo-btn {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.demo-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.demo-btn.active {
  animation: btnPulse 1s ease-out;
}

@keyframes btnPulse {
  0%, 100% { 
    transform: scale(1) rotate(0deg); 
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  25% {
    transform: scale(1.15) rotate(-5deg);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
  }
  50% { 
    transform: scale(1.2) rotate(0deg); 
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.4);
  }
  75% {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
  }
}

/* 涟漪特效 */
.demo-btn.active::before {
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

/* 方案1：双V形 - 红粉渐变 */
.demo-btn.style-1 {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 8px 32px rgba(245, 87, 108, 0.4);
}

.demo-btn.style-1:hover {
  background: linear-gradient(135deg, #e082ea 0%, #e4465b 100%);
  box-shadow: 0 12px 40px rgba(245, 87, 108, 0.5);
}

/* 方案2：折叠箭头 - 蓝色渐变 */
.demo-btn.style-2 {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.demo-btn.style-2:hover {
  background: linear-gradient(135deg, #3a9be5 0%, #00d9e5 100%);
}

/* 方案3：垂直对齐 - 绿色渐变 */
.demo-btn.style-3 {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.demo-btn.style-3:hover {
  background: linear-gradient(135deg, #32d662 0%, #27e6be 100%);
}

/* 方案4：扩展更多 - 橙色渐变 */
.demo-btn.style-4 {
  background: linear-gradient(135deg, #fa8b60 0%, #feb47b 100%);
}

.demo-btn.style-4:hover {
  background: linear-gradient(135deg, #e97a50 0%, #eda365 100%);
}

/* 方案5：火箭 - 橙红色渐变 */
.demo-btn.style-5 {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.demo-btn.style-5:hover {
  background: linear-gradient(135deg, #f9608b 0%, #fdd030 100%);
}

.icon {
  width: 50%;
  height: 50%;
  z-index: 2;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
  transition: transform 0.3s ease;
}

.demo-btn:hover .icon {
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

/* 方案1特效：箭头下坠 */
.demo-btn.style-1.active .icon {
  animation: arrowDrop 1s ease-in-out;
}

@keyframes arrowDrop {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(15px);
    opacity: 0.6;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 方案2特效：折叠效果 */
.demo-btn.style-2.active .icon {
  animation: foldDown 1s ease-in-out;
}

@keyframes foldDown {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
  }
}

/* 方案3特效：垂直对齐弹跳 */
.demo-btn.style-3.active .icon {
  animation: alignBounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes alignBounce {
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-12px);
  }
  50% {
    transform: translateY(8px);
  }
  75% {
    transform: translateY(-4px);
  }
}

/* 方案4特效：展开旋转 */
.demo-btn.style-4.active .icon {
  animation: expandRotate 1s ease-in-out;
}

@keyframes expandRotate {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.3) rotate(180deg);
  }
}

/* 方案5特效：火箭发射 */
.demo-btn.style-5.active .icon {
  animation: rocketLaunch 1s ease-in-out;
}

@keyframes rocketLaunch {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(20px) scale(0.9);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* 火箭尾焰效果 */
.demo-btn.style-5.active::after {
  content: '';
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 0;
  background: linear-gradient(to bottom, 
    rgba(255, 200, 50, 0.8), 
    rgba(255, 100, 50, 0));
  border-radius: 50%;
  animation: rocketTrail 1s ease-out;
  pointer-events: none;
}

@keyframes rocketTrail {
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

.demo-info {
  flex: 1;
  min-width: 250px;
}

.info-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-item.action {
  margin-top: 20px;
}

.label {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.dark .label {
  color: #ddd;
}

.stars {
  font-size: 16px;
  letter-spacing: 2px;
}

.value {
  color: #666;
  font-size: 14px;
}

.dark .value {
  color: #aaa;
}

.test-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
  position: relative;
  overflow: hidden;
}

.test-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.test-btn:hover::before {
  width: 300px;
  height: 300px;
}

.test-btn:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 30px rgba(245, 87, 108, 0.6);
}

.test-btn:active {
  transform: translateY(0) scale(0.98);
}

.demo-message {
  margin-top: 20px;
  padding: 15px 20px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  animation: slideDown 0.3s ease-out, glow 1.5s ease-in-out infinite;
  box-shadow: 0 8px 32px rgba(245, 87, 108, 0.4);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes glow {
  0%, 100% {
    box-shadow: 0 8px 32px rgba(245, 87, 108, 0.4);
  }
  50% {
    box-shadow: 0 8px 48px rgba(245, 87, 108, 0.8);
  }
}

/* 移动端优化 */
@media (max-width: 768px) {
  .icon-demo-container {
    padding: 20px;
  }
  
  .demo-section {
    flex-direction: column;
  }
  
  .button-showcase {
    width: 100%;
  }
  
  .demo-info {
    width: 100%;
  }
}
</style>
