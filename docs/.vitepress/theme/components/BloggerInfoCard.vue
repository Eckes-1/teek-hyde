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

      <!-- 社交链接 -->
      <div class="social-links">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url"
          :title="social.name"
          class="social-logo"
          target="_blank"
          rel="noopener noreferrer"
          v-html="social.logo"
        >
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


// 社交链接 - 使用软件本身的真实logo
const socialLinks = ref([
  {
    name: "GitHub",
    url: "https://github.com/Eckes-1",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#181717" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  },
  {
    name: "Gmail",
    url: "mailto:your-email@example.com",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#4285f4" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.366l8.073-5.873C21.69 2.28 24 3.434 24 5.457z"/><path fill="#34a853" d="M0 5.457c0-1.038.505-2.012 1.35-2.615l6.195 4.649z"/><path fill="#fbbc05" d="M7.545 7.491L1.351 2.842A3.124 3.124 0 0 1 3.927 3.493z"/><path fill="#ea4335" d="M0 19.366V7.818l7.545 5.364v7.821H1.636A1.636 1.636 0 0 1 0 19.366z"/><path fill="#c5221f" d="M0 7.818v11.548c0 .904.732 1.637 1.636 1.637h.727v-7.821z"/><path fill="#c5221f" d="M24 7.818v11.548c0 .904-.732 1.637-1.636 1.637h-.727v-7.821z"/><path fill="#4285f4" d="M16.455 7.491l6.194-4.649A3.124 3.124 0 0 1 24 5.457z"/></svg>',
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>',
  },
  {
    name: "Bilibili",
    url: "https://space.bilibili.com",
    logo: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#00A1D6" d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.169.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/></svg>',
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

/* 社交链接 - 添加背景色 */
.social-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.social-logo:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* logo图标自适应 */
.social-logo svg {
  width: 28px;
  height: 28px;
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

html.dark .social-logo {
  background: rgba(255, 255, 255, 0.08);
}

html.dark .social-logo:hover {
  background: rgba(255, 255, 255, 0.12);
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
  
  .social-logo {
    width: 44px;
    height: 44px;
  }
  
  .social-logo svg {
    width: 24px;
    height: 24px;
  }
}
</style>
