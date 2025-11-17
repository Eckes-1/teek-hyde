<template>
  <div class="tk-page-card blogger-info-card">
      <!-- 装饰性光效 -->
      <div class="glow-effect glow-1"></div>
      <div class="glow-effect glow-2"></div>
      <div class="card-content-wrapper">
      <!-- 头像区域 -->
      <div class="avatar-section">
        <div class="avatar-wrapper">
          <!-- 抖音直播风格旋转渐变边框 -->
          <div class="live-border-rotate"></div>
          <!-- 头像容器 -->
          <div class="avatar-container">
            <!-- 头像图片 -->
            <img 
              :src="blogger.avatar" 
              :alt="blogger.name"
              class="avatar-img"
            >
          </div>
          <!-- 直播中标识 -->
          <div class="live-badge">
            <span class="live-dot"></span>
            <span class="live-text">LIVE</span>
          </div>
        </div>
      </div>

      <!-- 名字 -->
      <div class="info-section">
        <h2 class="blogger-name">
          {{ blogger.name }}
          <span class="wave-emoji">👋</span>
        </h2>
      </div>

      <!-- 座右铭/个性签名 -->
      <div class="motto-section">
        <div class="motto-icon">✨</div>
        <p class="motto-text">{{ blogger.slogan }}</p>
      </div>

      <!-- 社交链接 - 手机APP图标风格 -->
      <div class="social-links">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url"
          :title="social.name"
          class="social-app-icon"
          :style="{ background: social.bg }"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="social.icon" :alt="social.name" />
        </a>
      </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useData } from "vitepress";

const { theme } = useData();

// 博主基础信息
const blogger = computed(() => ({
  avatar: theme.value.teekConfig?.blogger?.avatar || "/avatar/avatar.webp",
  name: theme.value.teekConfig?.blogger?.name || "Eckes",
  slogan: theme.value.teekConfig?.blogger?.slogan || "要像路飞一样，永远对自己喜欢的事保持热爱！",
}));


// 社交链接 - 手机APP图标风格（实心背景）
const socialLinks = ref([
  {
    name: "GitHub",
    url: "https://github.com/Eckes-1",
    icon: "https://cdn.simpleicons.org/github/white",
    bg: "#181717", // GitHub黑色
  },
  {
    name: "Gmail",
    url: "mailto:your-email@example.com",
    icon: "https://cdn.simpleicons.org/gmail/white",
    bg: "linear-gradient(135deg, #EA4335 0%, #FBBC04 25%, #34A853 50%, #4285F4 75%)", // Gmail彩虹渐变
  },
  {
    name: "Linux.do",
    url: "https://linux.do/u/eckes",
    icon: "https://cdn.simpleicons.org/linux/000000",
    bg: "#FCC624", // Linux黄色
  },
  {
    name: "Bilibili",
    url: "https://space.bilibili.com",
    icon: "https://cdn.simpleicons.org/bilibili/white",
    bg: "#00A1D6", // Bilibili粉蓝色
  },
]);
</script>

<style scoped>
.blogger-info-card {
  padding: 0 !important;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  width: 280px;
  height: 465px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.blogger-info-card:hover {
  animation-play-state: paused;
  transform: translateY(-5px) scale(1.02);
  box-shadow: 
    0 30px 80px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

/* 装饰性光效 */
.glow-effect {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.glow-1 {
  width: 200px;
  height: 200px;
  top: -50px;
  left: -50px;
  background: radial-gradient(circle, rgba(255, 0, 128, 0.3), transparent);
  animation: pulse 4s ease-in-out infinite;
}

.glow-2 {
  width: 150px;
  height: 150px;
  bottom: -30px;
  right: -30px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent);
  animation: pulse 4s ease-in-out infinite 2s;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

/* 背景图片层 */
.blogger-info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/avatar/circleBgImg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  filter: brightness(0.8) contrast(1.1);
}

/* 渐变遮罩层 - 增强对比度 */
.blogger-info-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(0, 0, 0, 0.6) 70%,
    rgba(0, 0, 0, 0.8) 100%);
  z-index: 1;
  pointer-events: none;
}

/* 内容包装器 */
.card-content-wrapper {
  position: relative;
  z-index: 2;
  padding: 20px;
  height: 100%;
  overflow: visible;
}

/* 头像区域 */
.avatar-section {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  padding: 12px;
}

.avatar-wrapper {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

/* 抖音直播风格 - 旋转渐变边框 */
.live-border-rotate {
  position: absolute;
  width: 128px;
  height: 128px;
  top: -4px;
  left: -4px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #ff0050 0deg,
    #ff6b6b 60deg,
    #ffd700 120deg,
    #00ff00 180deg,
    #00bfff 240deg,
    #ff00ff 300deg,
    #ff0050 360deg
  );
  animation: rotate 2s linear infinite;
  filter: brightness(1.2) contrast(1.2);
}

.live-border-rotate::before {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  top: 4px;
  left: 4px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.8);
}

/* 头像容器 */
.avatar-container {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 0;
  left: 0;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  border-radius: 50%;
}

/* Hover效果 */
.avatar-wrapper:hover .live-border-rotate {
  animation-duration: 1s;
  filter: brightness(1.4) contrast(1.3);
  box-shadow: 
    0 0 30px rgba(255, 0, 80, 0.6),
    0 0 60px rgba(255, 0, 80, 0.3);
}

.avatar-wrapper:hover .avatar-img {
  transform: scale(1.05);
}

/* 直播中徽章 */
.live-badge {
  position: absolute;
  bottom: 5px;
  right: 5px;
  background: linear-gradient(135deg, #ff0050, #ff3070);
  padding: 2px 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  box-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.4),
    0 0 0 2px #fff;
  font-size: 8px;
  font-weight: 700;
  z-index: 1000;
  animation: badge-glow 2s ease-in-out infinite;
}

@keyframes badge-glow {
  0%, 100% {
    box-shadow: 
      0 2px 6px rgba(0, 0, 0, 0.4),
      0 0 0 2px #fff;
  }
  50% {
    box-shadow: 
      0 2px 10px rgba(255, 0, 80, 0.6),
      0 0 0 2px #fff,
      0 0 20px rgba(255, 0, 80, 0.3);
  }
}

.live-dot {
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.live-text {
  color: white;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  font-size: 8px;
  text-transform: uppercase;
}

/* 信息区域 */
.info-section {
  text-align: center;
  margin-bottom: 20px;
}

.blogger-name {
  font-size: 28px;
  font-weight: 800;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #fff, #ffd6d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.blogger-name:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 4px 12px rgba(255, 0, 80, 0.3));
}

.wave-emoji {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-10deg);
  }
}


/* 座右铭 - Glassmorphism风格 */
.motto-section {
  position: relative;
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.motto-section:hover {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.08)
  );
  transform: translateY(-2px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.motto-icon {
  position: absolute;
  top: -10px;
  left: 16px;
  font-size: 18px;
  background: linear-gradient(135deg, #ff0050, #ff6090);
  padding: 2px 8px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(255, 0, 80, 0.3);
  animation: sparkle 2s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
}

.motto-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #fff;
  font-style: italic;
  text-align: left;
  padding-left: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.3px;
}

/* 社交链接 - 现代化设计 */
.social-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* 社交链接 - 手机APP图标风格（实心背景）*/
.social-app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 12px; /* 圆角矩形，像iOS图标 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.social-app-icon:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  filter: brightness(1.1);
}

/* logo图标自适应 */
.social-app-icon img {
  width: 30px;
  height: 30px;
  display: block;
}

/* 暗色模式优化 */
html.dark .live-border-rotate {
  filter: brightness(1.2);
  box-shadow: 0 0 15px rgba(255, 0, 80, 0.3);
}

html.dark .blogger-info-card::after {
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.8) 100%);
}

html.dark .motto-section {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

html.dark .motto-section:hover {
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

html.dark .social-app-icon {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

html.dark .social-app-icon:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
}

html.dark .live-badge {
  background: linear-gradient(135deg, #ff0080, #ff2080);
  box-shadow: 0 2px 10px rgba(255, 0, 128, 0.3);
}

html.dark .social-links {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

html.dark .blogger-info-card {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .blogger-info-card {
    width: 100% !important;
    height: auto !important;
    min-height: 380px;
    padding: 16px !important;
  }
  
  .avatar-wrapper {
    width: 100px;
    height: 100px;
  }
  
  .live-border-rotate::before {
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    top: 1.5px;
    left: 1.5px;
  }
  
  .live-badge {
    bottom: 3px;
    right: 3px;
    padding: 2px 5px;
    font-size: 7px;
    gap: 2px;
  }
  
  .live-dot {
    width: 4px;
    height: 4px;
  }
  
  .live-text {
    font-size: 7px;
    letter-spacing: 0.5px;
  }

  .avatar-section {
    margin-bottom: 20px;
    padding-top: 4px;
  }

  .blogger-name {
    font-size: 22px;
  }
  
  .info-section {
    margin-bottom: 16px;
  }

  .motto-section {
    padding: 16px 18px;
    margin-bottom: 20px;
  }

  .motto-text {
    font-size: 13px;
    line-height: 1.7;
  }
  
  .social-links {
    gap: 10px;
    padding-top: 16px;
  }
  
  .social-app-icon {
    width: 48px;
    height: 48px;
    border-radius: 11px;
  }
  
  .social-app-icon img {
    width: 26px;
    height: 26px;
  }
}
</style>
