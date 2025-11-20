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
            🚀 点击测试效果
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
  
  setTimeout(() => {
    isActive.value = false
  }, 1000)
  
  setTimeout(() => {
    showMessage.value = false
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
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

/* 方案1：双V形 - 紫色渐变 */
.demo-btn.style-1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.demo-btn.style-1:hover {
  background: linear-gradient(135deg, #5568d3 0%, #6a3f91 100%);
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
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.test-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
}

.test-btn:active {
  transform: translateY(0);
}

.demo-message {
  margin-top: 20px;
  padding: 15px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
