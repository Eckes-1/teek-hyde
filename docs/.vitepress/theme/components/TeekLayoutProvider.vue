<script setup lang="ts" name="TeekLayoutProvider">
import type { TeekConfig } from "vitepress-theme-teek";
import Teek, { teekConfigContext, clockIcon } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { watch, nextTick, ref, provide } from "vue";
import { teekBlogCardConfig } from "../config/teekConfig";
// @ts-ignore
import ConfigSwitch from "./ConfigSwitch.vue";

import { useRuntime } from "../hooks/useRuntime";
// @ts-ignore
import MusicPlayer from './MusicPlayer.vue'
import OhMyLive2D from "./OhMyLive2D.vue"  //导入看板娘组件
// @ts-ignore
import TitleChange from "./TitleChange.vue" //导入网页标题变化
// @ts-ignore
import ScrollProgressBar from "./ScrollProgressBar.vue" //导入顶部滚动条组件
// @ts-ignore
import ContributeChart from "./ContributeChart.vue";  //导入贡献图组件
// @ts-ignore
import GlobalGreet from "./GlobalGreet.vue";  //导入全局问候组件
// @ts-ignore
import BackToTop from "./BackToTop.vue";  //导入返回顶部组件
// @ts-ignore
import ContextMenu from "./ContextMenu.vue";  //导入右键菜单组件
import { useRibbon } from "../hooks/useRibbon";  //导入彩带背景

const ns = "layout-provider";
const { frontmatter } = useData();

// 默认卡片风
const currentStyle = ref("");
const teekConfig = ref(teekBlogCardConfig);  // 博客类风格的配置
provide(teekConfigContext, teekConfig);

// 彩带背景
const { start: startRibbon, stop: stopRibbon } = useRibbon({ immediate: false, clickReRender: true }); // 点击页面重新渲染彩带
// 页脚运行时间
const { start: startRuntime, stop: stopRuntime } = useRuntime("2025-03-14 00:00:00", {
    prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>本站已在地球上苟活了`,
});

const watchRuntimeAndRibbon = async (layout: string, style: string) => {

    // 所有风格都显示运行时间
    await nextTick();
    startRuntime();

    startRibbon();
};

watch(frontmatter, async newVal => watchRuntimeAndRibbon(newVal.layout, currentStyle.value), { immediate: true });

const handleConfigSwitch = (config: TeekConfig, style: string) => {
    teekConfig.value = config;

    watchRuntimeAndRibbon(frontmatter.value.layout, style);
};
</script>

<template>
    <ClientOnly>
        <Teek.Layout>
            <template #layout-top>
                <!-- 全局问候组件 -->
                <GlobalGreet />
                <!--网页标题切换组件  -->
                <TitleChange />
                <!-- 看板娘组件 -->
                <OhMyLive2D />
                <!-- 顶部滚动条组件 -->
                <ScrollProgressBar />
                <!-- 返回顶部组件 -->
                <BackToTop />
                <!-- 右键菜单组件 -->
                <ContextMenu />
            </template>
            <template #nav-bar-content-after>
                <!-- 音乐播放器组件 -->
                <MusicPlayer />
            </template>
            <template #teek-theme-enhance-bottom>
                <div :class="[ns, 'flx-align-center']">
                    <ConfigSwitch @switch="handleConfigSwitch" />
                </div>
            </template>
            <template #nav-screen-content-after>
                <ConfigSwitch @switch="handleConfigSwitch" />
            </template>
            <!-- 不添加下面影响公告样式 -->
            <template v-for="(_, name) in $slots" :key="name" #[name]>
                <slot :name="name" />
            </template>
            <!-- 不添加上面面影响公告样式 -->
            <template #teek-archives-top-before>
                <!-- 贡献图组件 -->
                <ContributeChart />
            </template>
        </Teek.Layout>
    </ClientOnly>
</template>

<style lang="scss">
.tk-my.is-circle-bg {
    margin-bottom: 20px;

    .tk-my__avatar.circle-rotate {
        margin-top: 200px;
    }
}
</style>