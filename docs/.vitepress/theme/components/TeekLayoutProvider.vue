<script setup lang="ts" name="TeekLayoutProvider">
// import Teek, { TkAvatar, teekConfigContext, useNamespace, clockIcon } from "vitepress-theme-teek";
// import { provide, ref, watch, nextTick } from "vue";
// import { teekDocConfig, teekBlogConfig } from "../config/teekConfig";
import Teek, { teekConfigContext, clockIcon } from "vitepress-theme-teek";
import { useData } from "vitepress";
import { watch, nextTick, useTemplateRef, ref, provide } from "vue";
import { teekDocConfig } from "../config/teekConfig";
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
import { useRibbon } from "../hooks/useRibbon";  //导入彩带背景

const ns = "layout-provider";
const { frontmatter } = useData();

const teekConfig = ref(teekDocConfig);
provide(teekConfigContext, teekConfig);

// 页脚运行时间
const { start, stop } = useRuntime("2025-03-14 00:00:00", {
    prefix: `<span style="width: 16px; display: inline-block; vertical-align: -3px; margin-right: 3px;">${clockIcon}</span>本站已在地球上苟活了`,
});

const watchRuntime = async (condition: boolean) => {
  await nextTick();
  if (condition) start();
  else stop();
};

// 为configSwitchRef添加类型定义来明确teekConfig属性
interface ConfigSwitchExpose {
    teekConfig?: unknown
    themeStyle?: string
}
// 为configSwitchRef添加类型定义来明确teekConfig属性
const configSwitchRef = useTemplateRef<ConfigSwitchExpose>("configSwitchRef");

watch(frontmatter, async newVal => watchRuntime(newVal.layout === "home"), { immediate: true });

watch(
  () => configSwitchRef.value?.themeStyle,
  async newVal => watchRuntime(newVal === "blog"),
  { immediate: true }
);

watch(
  () => configSwitchRef.value?.teekConfig,
  async newVal => {
    if (newVal) teekConfig.value = newVal;
  }
)

watch(
    frontmatter,
    async newVal => {
        await nextTick();
        if (newVal.layout === "home") start();
        else stop();
    },
    { immediate: true }
);

// 彩带背景
const { start: startRibbon, stop: stopRibbon } = useRibbon({ clickReRender: true });
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
    <!-- 返回顶部组件 -->
    <BackToTop />
    <Teek.Layout>
        <template #nav-bar-content-after>
            <!-- 音乐播放器组件 -->
            <MusicPlayer />
        </template>
        <template #teek-theme-enhance-bottom>
            <div :class="[ns, 'flx-align-center']">
                <ConfigSwitch ref="configSwitchRef" />
            </div>
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