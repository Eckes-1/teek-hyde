<template>
  <div id="main">
    <div class="title">
      <h1>我的友链</h1>
    </div>
    <div class="content">
      <div class="link" v-for="(item, index) of linksData" :key="index">
        <div class="title-wrapper">
          <h3>{{ item.title }}</h3>
        </div>
        <p>{{ item.desc }}</p>
        <div class="link-list">
          <el-row class="container-row" :gutter="24">
            <el-col v-for="temp of item.list" :key="temp.link" class="link-wrapper" :xs="24" :sm="12" :md="6">
              <LinkSite :data="temp" />
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="message">
      <div class="title-wrapper">
        <h3>留链吗</h3>
      </div>
      <p>留恋的小伙伴，想要和我做友链 💞</p>
      <div class="card">
        <p>留言请参照置顶评论里的格式，siteshot 字段非必需</p>
        <Twikoo />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress'
// @ts-ignore
import LinkSite from './LinkSite.vue'
// import Twikoo from '../WTwikoo/index.vue'
import { LinkList } from '../../type/WLink'

const { frontmatter: fm } = useData()

const linksData = fm.value.links as LinkList[]
</script>

<style>
.message .twikoo {
  margin-top: 0;
}
</style>
<style lang='scss' scoped>
.content {
  margin-top: var(--weiz-spacing-8xl);
  margin-bottom: var(--weiz-spacing-12xl);
}
.title-wrapper {    
  margin: var(--weiz-spacing-8xl) 0;
  height: 1px;
  background: var(--vp-c-text-5);
  position: relative;
  > h3 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%) translateY(-50%);
    background: var(--vp-c-bg-soft);
    padding: 0 var(--weiz-spacing-8xl);
    font-size: var(--weiz-font-size-xl);
    font-weight: var(--weiz-font-weight-bold);
    line-height: var(--weiz-text-xl-line-height);
    text-align: center;
  }
  &+p {
    margin-bottom: var(--weiz-spacing-6xl);
    font-weight: var(--weiz-font-weight-medium);
    text-align: center;
  }
}
.link-list .el-col {
    margin-bottom: var(--weiz-spacing-6xl);
}
.card {
  padding: var(--weiz-spacing-6xl);
  border-radius: var(--weiz-card-border-radius);
  background-color: var(--vp-c-bg);
  box-shadow: var(--weiz-shadow);
  > p {
    margin-bottom: var(--weiz-spacing-6xl);
  }
}
</style>