---
title: 网站导航
date: 2025-03-25 18:21:52
layout: doc
layoutClass: m-nav-layout
sidebar: true
themeSize: wide
themeStyle: el-yellow
prev: false
next: false
categories:
  - nav
permalink: /pages/5dc884
article: false
outline:
  - 2
  - 3
  - 4
---

<style src="/.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>

::: info 教程
如果你也想搭建此导航 [点我查看教程](/pages/e01e54)
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
<confetti />
