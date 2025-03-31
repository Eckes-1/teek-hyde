---
date: 2025-03-25 10:21:52
title: index
layout: doc
layoutClass: m-nav-layout
sidebar: false
themeSize: large
themeStyle: el-yellow
prev: false
next: false
categories:
  - nav
permalink: /pages/5dc884
article: false # 不显示在首页的文章列表和归档页
---

<style src="/.vitepress/theme/style/nav.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/untils/data'
</script>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
<confetti />
