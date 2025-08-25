<template>
  <div
    class="wechat-card wjx-right-widget"
    :style="{ backgroundColor }"
    id="card-wechat"
  >
    <div class="inner">
      <div class="content">
        <!-- 左侧：二维码 -->
        <div
          class="qr-wrap"
          @click="openPreview(activeQr)"
          @touchstart.passive="onTouchStart"
          @touchend.passive="onTouchEnd"
        >
          <img
            class="qr-img"
            :src="activeQr"
            alt="微信二维码"
            loading="lazy"
            decoding="async"
            @load="onImgLoad"
          />
        </div>

        <!-- 右侧：微信图标 + 标题 + 搜索装饰 -->
        <div class="info">
          <div class="brand">
            <svg t="1756137899996" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6898" data-spm-anchor-id="a313x.search_index.0.i6.59253a81MQynla" width="256" height="256"><path d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z" fill="#ffffff" p-id="6899" data-spm-anchor-id="a313x.search_index.0.i5.59253a81MQynla" class="selected"></path></svg>
<span class="title">微信搜一搜</span>
          </div>

          <div class="search-deco" :title="searchText">
            <svg class="search-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L19 20.5 20.5 19l-5-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z"/>
            </svg>
            <span class="search-text">{{ searchText }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 订阅按钮（保留，可选） -->
    <a
      v-if="subscribeUrl"
      class="cta"
      :href="subscribeUrl"
      target="_blank"
      rel="noopener"
      aria-label="前往订阅"
    >订阅</a>

    <!-- 预览大图 -->
    <transition name="fade">
      <div
        v-if="isPreviewOpen"
        class="preview"
        role="dialog"
        aria-modal="true"
        @click.self="closePreview"
      >
        <img class="preview-img" :src="activeQr" alt="微信二维码预览" />
        <button class="close" type="button" @click="closePreview" aria-label="关闭预览">×</button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  qrGreenUrl?: string
  qrWhiteUrl?: string
  coverUrl?: string
  backgroundColor?: string
  subscribeUrl?: string
  searchText?: string
}

const props = withDefaults(defineProps<Props>(), {
  qrGreenUrl: 'https://resource-ai.helplook.net/docker_production/qkknm3s7/article/sOZHg5pK/67fe1ccc4ad95.jpg',
  qrWhiteUrl: '',
  backgroundColor: '#07c160',
  subscribeUrl: '',
  searchText: 'Hyde'
})

const backgroundColor = props.backgroundColor
const subscribeUrl = props.subscribeUrl

const isPreviewOpen = ref(false)
const imgLoaded = ref(false)

const altText = '微信二维码'

/**
 * 图源策略：
 * - 优先使用 qrGreenUrl
 * - 若未提供，则回退到 qrWhiteUrl
 * - 支持本地 /img/wechat/xxx.png 与远程 https 链接
 */
const activeQr = computed(() => {
  const green = props.qrGreenUrl && props.qrGreenUrl.trim().length ? props.qrGreenUrl : ''
  const white = props.qrWhiteUrl && props.qrWhiteUrl.trim().length ? props.qrWhiteUrl : ''
  return green || white
})

const searchText = computed(() => props.searchText || '')

const openPreview = (src: string) => {
  if (!src) return
  isPreviewOpen.value = true
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closePreview = () => {
  isPreviewOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const onImgLoad = () => {
  imgLoaded.value = true
}

// 移动端长按预览（~450ms）
const pressTimer = ref<number | null>(null)
const longPressed = ref(false)

const onTouchStart = () => {
  longPressed.value = false
  if (pressTimer.value) clearTimeout(pressTimer.value)
  pressTimer.value = window.setTimeout(() => {
    longPressed.value = true
    openPreview(activeQr.value)
  }, 450)
}

const onTouchEnd = () => {
  if (pressTimer.value) {
    clearTimeout(pressTimer.value)
    pressTimer.value = null
  }
}
</script>

<style scoped>
.wechat-card {
  position: relative;
  width: 280px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  touch-action: manipulation;
}

.wechat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.inner {
  padding: 8px;
}

.content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.qr-wrap {
  flex: 0 0 auto;
  width: clamp(88px, 24%, 128px);
  aspect-ratio: 1 / 1;
  background: #fff;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.06);
  display: grid;
  place-items: center;
  overflow: hidden;
  cursor: pointer;
}

.qr-img {
  width: 86%;
  height: 86%;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
}

.info {
  flex: 1 1 auto;
  min-width: 0;
  color: #fff;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.wx-icon, .brand .icon {
  width: 28px;
  height: 28px;
  color: #fff;
}

.title {
  font-size: clamp(16px, 2.4vw, 20px);
  font-weight: 700;
  letter-spacing: 0.2px;
}

.search-deco {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 12px;
  color: #374151;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  max-width: 420px;
}

.search-icon {
  width: 18px;
  height: 18px;
  color: #9ca3af;
  flex: 0 0 auto;
}

.search-text {
  font-size: 14px;
  color: #6b7280;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 订阅按钮（可选） */
.cta {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 4;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  padding: 0 10px;
  font-size: 12px;
  color: #fff;
  background: rgba(0,0,0,0.28);
  border-radius: 999px;
  text-decoration: none;
  backdrop-filter: blur(6px);
}
.cta:hover {
  background: rgba(0,0,0,0.38);
}

/* 预览层 */
.preview {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9990;
  padding: 20px;
}

.preview-img {
  max-width: 92vw;
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.6);
}

.close {
  position: fixed;
  top: 14px;
  right: 14px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
  color: #fff;
  font-size: 22px;
  line-height: 36px;
  cursor: pointer;
  z-index: 9991;
}
.close:hover {
  background: rgba(255,255,255,0.28);
}

/* 进入/离开过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式：移动端全宽适配 */
@media (max-width: 768px) {
  .wechat-card { width: 100%; }
}
</style>
