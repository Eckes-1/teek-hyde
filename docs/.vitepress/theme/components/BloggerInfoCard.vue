<template>
  <div class="tk-page-card blogger-info-card">
      <!-- 装饰性光效 -->
      <div class="glow-effect glow-1"></div>
      <div class="glow-effect glow-2"></div>
      <div class="card-content-wrapper">
      <!-- 头像区域 -->
      <div class="avatar-section">
        <div class="avatar-wrapper">
          <!-- 粉色发光边框效果 -->
          <div class="live-glow-border"></div>
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
            <span class="live-text">🎙 直播中</span>
          </div>
        </div>
      </div>

      <!-- 名字区域 - 重新构建 -->
      <div class="name-container">
        <div class="name-text">{{ blogger.name }}</div>
      </div>

      <!-- 座右铭/个性签名 -->
      <div class="motto-section">
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
    icon: "https://cdn.simpleicons.org/github/181717",
    bg: "#ffffff", // GitHub白色背景
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

/* 遮罩层已移除 */

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

/* 粉色发光边框效果 - 完全匹配图片样式 */
.live-glow-border {
  position: absolute;
  width: 126px;
  height: 126px;
  top: -3px;
  left: -3px;
  border-radius: 50%;
  border: 3px solid #ff69b4;
  box-shadow: 
    0 0 10px rgba(255, 105, 180, 0.5),
    0 0 20px rgba(255, 105, 180, 0.3),
    inset 0 0 10px rgba(255, 105, 180, 0.2);
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
.avatar-wrapper:hover .live-glow-border {
  border-color: #ff1493;
  box-shadow: 
    0 0 15px rgba(255, 20, 147, 0.6),
    0 0 25px rgba(255, 20, 147, 0.4),
    inset 0 0 10px rgba(255, 20, 147, 0.3);
}

.avatar-wrapper:hover .avatar-img {
  transform: scale(1.05);
}

/* 直播中徽章 - 粉色背景 */
.live-badge {
  position: absolute;
  bottom: -5px;
  right: -5px;
  background: #ff69b4;
  padding: 4px 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.2),
    0 0 0 2px #fff;
  font-size: 12px;
  font-weight: 600;
  z-index: 1000;
}

.live-text {
  color: white;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 3px;
}

/* 名字容器 - 全新布局 */
.name-container {
  width: 100%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name-text {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #fff, #ffd6d6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
  letter-spacing: 1px;
  transition: transform 0.3s ease;
}

.name-text:hover {
  transform: scale(1.05);
  filter: drop-shadow(0 4px 12px rgba(255, 0, 80, 0.3));
}


/* 座右铭 - 高对比度实心卡片 */
.motto-section {
  position: relative;
  padding: 18px 24px;
  border-radius: 16px;
  margin-bottom: 24px;
  width: 100%;
  background: linear-gradient(135deg, 
    #ffffff 0%,
    #f8f9fa 100%
  );
  border: 2px solid #e9ecef;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 6px 16px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.08);
}

.motto-section:hover {
  background: linear-gradient(135deg, 
    #ffffff 0%,
    #f0f2f5 100%
  );
  transform: translateY(-4px);
  box-shadow: 
    0 12px 28px rgba(0, 0, 0, 0.15),
    0 4px 10px rgba(0, 0, 0, 0.1);
  border-color: #dee2e6;
}


.motto-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: #2c3e50;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-align: center;
}

/* 社交链接 - 现代化设计 */
.social-links {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
}

/* 社交链接 - 手机APP图标风格（实心背景）*/
.social-app-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 18px; /* 更圆润的圆角，像iOS超椭圆 */
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
  width: 26px;
  height: 26px;
  display: block;
}

/* 暗色模式优化 */
html.dark .live-glow-border {
  border-color: #ff69b4;
  box-shadow: 
    0 0 12px rgba(255, 105, 180, 0.6),
    0 0 22px rgba(255, 105, 180, 0.4),
    inset 0 0 10px rgba(255, 105, 180, 0.25);
}


html.dark .motto-section {
  background: linear-gradient(135deg, 
    #1e1e24 0%,
    #252530 100%
  );
  border: 2px solid #3a3a45;
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.6),
    0 2px 8px rgba(0, 0, 0, 0.4);
}

html.dark .motto-section:hover {
  background: linear-gradient(135deg, 
    #242430 0%,
    #2a2a38 100%
  );
  border-color: #4a4a55;
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.7),
    0 4px 12px rgba(0, 0, 0, 0.5);
}

html.dark .motto-text {
  color: #e8eaed;
}

html.dark .social-app-icon {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}

html.dark .social-app-icon:hover {
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
}

html.dark .live-badge {
  background: #ff69b4;
  box-shadow: 
    0 2px 10px rgba(255, 105, 180, 0.4),
    0 0 0 2px rgba(255, 255, 255, 0.9);
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
  
  .live-glow-border {
    width: 106px;
    height: 106px;
    border: 2.5px solid #ff69b4;
  }
  
  .live-badge {
    bottom: -3px;
    right: -3px;
    padding: 3px 8px;
    border-radius: 10px;
  }
  
  .live-text {
    font-size: 10px;
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
    width: 42px;
    height: 42px;
    border-radius: 16px;
  }
  
  .social-app-icon img {
    width: 22px;
    height: 22px;
  }
}
</style>
