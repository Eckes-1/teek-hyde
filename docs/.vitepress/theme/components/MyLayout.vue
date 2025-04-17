<template>
  <Teek.Layout>
    <template #nav-bar-content-after>
      <MusicPlayer />
    </template>
  </Teek.Layout>
</template>

<script lang="ts" setup>
import Teek from "vitepress-theme-teek";
import MusicPlayer from './MusicPlayer.vue'

const Layout = Teek.Layout;
</script>
