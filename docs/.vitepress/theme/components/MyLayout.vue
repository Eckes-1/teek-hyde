<template>
  <Layout>
    <template #layout-top>
      <MouseFollower />
      <MouseClick />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import MouseClick from "./MouseClick.vue";
import MouseFollower from "./MouseFollower.vue";
import Teek from "vitepress-theme-teek";

const Layout = Teek.Layout;
</script>
