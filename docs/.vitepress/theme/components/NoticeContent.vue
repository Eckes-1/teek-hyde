<script setup lang="ts" name="NoticeContent">
const namespace = "notice";
</script>

<template>
  <div :class="namespace">
    <p>微信 👇</p>
    <img src="https://seasir.top/images/20cfd13d94cedaacabaf4acaf392eba.jpg" alt="QR Code" />
    <p class="">欢迎大家私信交流</p>
  </div>
</template>

<style lang="scss" scoped>
.notice {
  img {
    width: 100%;
    height: 120px;
    object-fit: contain;
  }
  p {
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
  }
}
</style>
