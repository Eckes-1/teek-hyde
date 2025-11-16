<template>
  <div class="tk-page-card blogger-info-card">
      <!-- 头像区域 -->
      <div class="avatar-section">
        <div class="avatar-wrapper">
          <!-- 抖音直播风格动态头像框 -->
          <!-- 外层彩色渐变旋转圈 -->
          <div class="live-ring-outer"></div>
          <!-- 中层波纹扩散效果 -->
          <div class="pulse-wave pulse-wave-1"></div>
          <div class="pulse-wave pulse-wave-2"></div>
          <div class="pulse-wave pulse-wave-3"></div>
          <!-- 内层呼吸光晕 -->
          <div class="breath-glow"></div>
          <!-- 炫彩流光效果 -->
          <div class="rainbow-flow"></div>
          <!-- 头像图片 -->
          <img 
            :src="blogger.avatar" 
            :alt="blogger.name"
            class="avatar-img"
          >
          <!-- 直播中标识 -->
          <div class="live-badge">
            <div class="live-icon">
              <span class="live-dot"></span>
              <span class="live-bar live-bar-1"></span>
              <span class="live-bar live-bar-2"></span>
              <span class="live-bar live-bar-3"></span>
            </div>
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
          class="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span v-html="social.icon"></span>
        </a>
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


// 社交链接
const socialLinks = ref([
  {
    name: "GitHub",
    url: "https://github.com/Eckes-1",
    icon: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>',
  },
  {
    name: "Email",
    url: "mailto:your-email@example.com",
    icon: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>',
  },
  {
    name: "Bilibili",
    url: "https://space.bilibili.com",
    icon: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.169.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"/></svg>',
  },
]);
</script>

<style scoped>
.blogger-info-card {
  padding: 20px !important;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  width: 280px;
  height: 465px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
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
}

/* 渐变遮罩层 - 提升文字可读性 */
.blogger-info-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%);
  z-index: 1;
  pointer-events: none;
}

/* 确保内容在背景之上 */
.blogger-info-card > * {
  position: relative;
  z-index: 2;
}

/* 头像区域 */
.avatar-section {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  padding-top: 8px;
}

.avatar-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
}

/* 抖音直播风格-外层彩色渐变旋转圈 */
.live-ring-outer {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #ff0080,
    #ff8000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0080ff,
    #8000ff,
    #ff0080
  );
  animation: spin 3s linear infinite;
  opacity: 0.9;
}

.live-ring-outer::before {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: var(--vp-c-bg);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 波纹扩散效果 */
.pulse-wave {
  position: absolute;
  inset: -6px;
  border: 2px solid;
  border-radius: 50%;
  animation: pulseWave 2s linear infinite;
  opacity: 0;
  pointer-events: none;
}

.pulse-wave-1 {
  border-color: #ff0080;
  animation-delay: 0s;
}

.pulse-wave-2 {
  border-color: #00ffff;
  animation-delay: 0.7s;
}

.pulse-wave-3 {
  border-color: #ffff00;
  animation-delay: 1.4s;
}

@keyframes pulseWave {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

/* 呼吸光晕效果 */
.breath-glow {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 0, 128, 0.3) 0%,
    rgba(0, 255, 255, 0.2) 50%,
    transparent 70%
  );
  animation: breathGlow 2s ease-in-out infinite;
}

@keyframes breathGlow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

/* 炫彩流光效果 */
.rainbow-flow {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 0 10px var(--vp-c-brand-light);
}

.rainbow-flow::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  animation: flowLight 2s linear infinite;
}

@keyframes flowLight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.avatar-img {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--vp-c-bg);
  transition: transform 0.3s ease;
  cursor: pointer;
}

/* Hover效果 */
.avatar-wrapper:hover .avatar-img {
  transform: scale(1.05);
}

.avatar-wrapper:hover .live-ring-outer {
  animation-duration: 2s;
  opacity: 1;
  box-shadow: 0 0 30px rgba(255, 0, 128, 0.6);
}

.avatar-wrapper:hover .pulse-wave {
  animation-duration: 1.5s;
}

.avatar-wrapper:hover .breath-glow {
  animation-duration: 1.5s;
  opacity: 1;
}

/* 直播中徽章 */
.live-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(135deg, #ff0080, #ff4080);
  padding: 4px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* 直播动画图标 */
.live-icon {
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 12px;
}

.live-dot {
  width: 3px;
  height: 3px;
  background: white;
  border-radius: 50%;
  animation: blink 1s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.live-bar {
  width: 2px;
  background: white;
  border-radius: 1px;
  animation: liveWave 1s linear infinite;
}

.live-bar-1 {
  height: 6px;
  animation-delay: 0s;
}

.live-bar-2 {
  height: 10px;
  animation-delay: 0.3s;
}

.live-bar-3 {
  height: 4px;
  animation-delay: 0.6s;
}

@keyframes liveWave {
  0% { height: 4px; }
  25% { height: 10px; }
  50% { height: 6px; }
  75% { height: 8px; }
  100% { height: 4px; }
}

.live-text {
  color: white;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

/* 信息区域 */
.info-section {
  text-align: center;
  margin-bottom: 20px;
}

.blogger-name {
  font-size: 26px;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #fff;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  letter-spacing: 0.5px;
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


/* 座右铭 */
.motto-section {
  position: relative;
  padding: 18px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  border-left: 4px solid var(--vp-c-brand-1);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.motto-section:hover {
  border-left-color: var(--vp-c-brand-2);
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.motto-icon {
  position: absolute;
  top: -8px;
  left: 12px;
  font-size: 16px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  padding: 0 4px;
  border-radius: 4px;
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

/* 社交链接 */
.social-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.25);
}

.social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 4px 12px var(--vp-c-brand-lighter);
}

/* 暗色模式优化 - 头像特效 */
html.dark .avatar-wrapper {
  filter: drop-shadow(0 0 25px var(--vp-c-brand-lighter));
}

html.dark .avatar-glow {
  background: radial-gradient(circle, var(--vp-c-brand-light) 0%, transparent 70%);
  opacity: 0.7;
}

html.dark .avatar-bg-ring {
  opacity: 0.9;
}

html.dark .particle {
  box-shadow: 0 0 15px var(--vp-c-brand-1);
}

html.dark .avatar-wrapper:hover .avatar-img {
  box-shadow: 0 0 40px var(--vp-c-brand-light);
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

html.dark .social-link {
  background: rgba(0, 0, 0, 0.3);
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
  
  .live-ring-outer {
    inset: -6px;
  }
  
  .pulse-wave {
    inset: -4px;
  }
  
  .breath-glow {
    inset: -8px;
  }
  
  .live-badge {
    padding: 3px 8px;
    font-size: 10px;
  }
  
  .live-icon {
    height: 10px;
  }
  
  .live-bar {
    width: 1.5px;
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
    gap: 14px;
    padding-top: 18px;
  }
  
  .social-link {
    width: 40px;
    height: 40px;
  }
}
</style>
