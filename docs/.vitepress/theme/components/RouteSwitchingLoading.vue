<!-- 路由切换动画组件 -->
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vitepress';

const route = useRoute();
const transitionKey = ref(route.path);
const loading = ref(false);

// 动画时长可配置，便于调试
const ANIMATION_DURATION = 350;

// 路由切换时处理 loading
function handleRouteChange(newPath: string, oldPath: string) {
  if (newPath === oldPath) return;
  loading.value = true;
  setTimeout(() => {
    transitionKey.value = newPath;
    loading.value = false;
  }, ANIMATION_DURATION);
}

// 监听路由变化
onMounted(() => {
  watch(() => route.path, handleRouteChange, { immediate: false });
});
</script>

<template>
  <Transition name="fade-route" mode="out-in">
    <div :key="transitionKey">
      <slot />
    </div>
  </Transition>
  <transition name="fade-mask">
    <div v-if="loading" class="route-mask">
      <slot name="loader">
        <div class="loader"></div>
        <span class="loading-text">loading...</span>
      </slot>
    </div>
  </transition>
</template>

<style scoped>
.fade-route-enter-active,
.fade-route-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-route-enter-from,
.fade-route-leave-to {
  opacity: 0;
}

.fade-route-enter-to,
.fade-route-leave-from {
  opacity: 1;
}

.fade-mask-enter-active,
.fade-mask-leave-active {
  transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-mask-enter-from,
.fade-mask-leave-to {
  opacity: 0;
}

.fade-mask-enter-to,
.fade-mask-leave-from {
  opacity: 1;
}

.route-mask {
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: all;
}

/* 简单 loading 动画 */
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--vp-c-brand-1);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: var(--vp-c-brand-1);
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 2px;
}
</style>
