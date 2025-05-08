<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { TkAvatar, teekConfigContext, useNamespace, clockIcon } from "vitepress-theme-teek";
import { provide, ref, watch, nextTick } from "vue";
import { teekDocConfig, teekBlogConfig } from "../config/teekConfig";
import { useData } from "vitepress";
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

const ns = useNamespace("layout-provider");
const { frontmatter } = useData();
// 默认博客风
const current = ref("B");

const teekConfig = ref(current.value === "D" ? teekDocConfig : teekBlogConfig);
provide(teekConfigContext, teekConfig);

const handleSwitch = () => {
    current.value = current.value === "D" ? "B" : "D";

    if (current.value === "D") teekConfig.value = teekDocConfig;
    else teekConfig.value = teekBlogConfig;
};

// 页脚运行时间
const { start, stop } = useRuntime("2025-03-14 00:00:00", {
    prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>本站已在地球上苟活了`,
});

watch(
    frontmatter,
    async newVal => {
        await nextTick();
        if (newVal.layout === "home") start();
        else stop();
    },
    { immediate: true }
);
</script>

<template>
    <!--网页标题切换组件  -->
    <TitleChange />
    <!-- 看板娘组件 -->
    <OhMyLive2D />
    <!-- 顶部滚动条组件 -->
    <ScrollProgressBar />
    <!-- 全局问候组件 -->
    <GlobalGreet />
    <Teek.Layout>
        <template #nav-bar-content-after>
            <div :class="ns.b('appearance')">
                <TkAvatar :size="24" :class="ns.be('appearance', 'switch')" :bg-color="ns.cssVar('theme-color')"
                    @click="handleSwitch" title="切换文档风(D)/博客风(B)">
                    <span class="name">{{ current }}</span>
                </TkAvatar>
            </div>
            <!-- 音乐播放器组件 -->
            <MusicPlayer />
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
</template>

<style lang="scss" scoped>
$namespace: tk-layout-provider;

.#{$namespace}-appearance {
    display: flex;

    &::before {
        margin-left: 16px;
        width: 1px;
        height: 24px;
        background-color: var(--vp-c-divider);
        content: "";
    }

    &__switch {
        margin-left: 16px;
        cursor: pointer;

        .name {
            user-select: none;
        }
    }
}

// 修复 twikoo 样式影响头像
.tk-avatar {
    width: 24px;
    height: 24px;
}
</style>

<style lang="scss">
// 修复 twikoo 样式影响头像
.tk-my__avatar .tk-avatar {
    width: 100%;
    height: 100%;
}
</style>