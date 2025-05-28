// 组件导入
import Teek from "vitepress-theme-teek";
import { defineComponent, h } from "vue";
import { useData } from "vitepress";
import NoticeContent from "./components/NoticeContent.vue";
// import notice from "./components/notice.vue";
import BannerImgArrow from "./components/BannerImgArrow.vue";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import MNavLinks from "./components/MNavLinks.vue"; // 引入导航组件
import confetti from "./components/Confetti.vue"; //导入五彩纸屑组件
import NotFound from "./components/NotFound.vue"; // 导入404组件
import NavIcon from "./components/NavIcon.vue"; //导入导航栏图标

// 样式导入
import "vitepress-theme-teek/index.css";
// import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/vp-plus/code-block-mobile.scss"; // 移动端代码块样式加 padding
import "vitepress-theme-teek/vp-plus/sidebar.scss"; // 侧边栏字体样式
import "vitepress-theme-teek/vp-plus/nav.scss"; // 导航栏样式
import "vitepress-theme-teek/vp-plus/nav-blur.scss"; // 导航栏毛玻璃样式
import "vitepress-theme-teek/vp-plus/aside.scss"; // 文章目录样式
import "vitepress-theme-teek/vp-plus/doc-h1-gradient.scss"; // 文档以及标题样式
import "vitepress-theme-teek/vp-plus/mark.scss"; // 文章 mark 标签样式
// import "vitepress-theme-teek/vp-plus/container.scss"; // Markdown 容器样式
// import "vitepress-theme-teek/vp-plus/container-left.scss"; // Markdown 容器左框样式
// import "vitepress-theme-teek/vp-plus/container-flow.scss"; // Markdown 容器流体样式
// import "vitepress-theme-teek/vp-plus/blockquote.scss"; // 引用样式
import "vitepress-theme-teek/vp-plus/index-rainbow.scss"; // Vitepress 首页彩虹渐变样式
import "vitepress-theme-teek/tk-plus/banner-desc-gradient.scss"; // Banner 描述渐变样式
import "vitepress-theme-teek/tk-plus/banner-full-img-scale.scss"; // Banner 全屏图片放大样式
import "./styles/index.scss"; //群主自定义的全局样式
import "./style/index.scss"; // 引入.vitepress\theme\style\index.scss全局样式
import "virtual:group-icons.css"; //代码组图标样式
import "vitepress-markdown-timeline/dist/theme/index.css"; // 引入时间线样式

import { NProgress } from "nprogress-v2/dist/index.js"; // 进度条组件
import "nprogress-v2/dist/index.css"; // 进度条样式

export default {
  extends: Teek,
  async enhanceApp({ app, router }) {
    // 注册组件
    app.component("MNavLinks", MNavLinks); // 注册导航组件
    app.component("confetti", confetti); // 注册五彩纸屑组件
    app.component("NavIcon", NavIcon); //导航栏图标

    // 非SSR环境下配置路由进度条
    // @ts-ignore-error
    if (!import.meta.env.SSR) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => NProgress.start();
      router.onAfterRouteChange = () => {
        setTimeout(() => {
          NProgress.done();
        }, 100);
      };
    }
  },
  Layout: defineComponent({
    name: "LayoutProvider",
    setup() {
      const props: Record<string, any> = {};
      const { frontmatter } = useData();

      // 添加自定义 class 逻辑
      if (frontmatter.value?.layoutClass) {
        props.class = frontmatter.value.layoutClass;
      }

      return () =>
        h(TeekLayoutProvider, props, {
          // "layout-top": () => h(notice), // 使用layout-top插槽
          confetti: () => h(confetti), // 使用confetti插槽
          "teek-notice-content": () => h(NoticeContent),
          "teek-home-banner-feature-after": () => h(BannerImgArrow),
          "not-found": () => h(NotFound),
        });
    },
  }),
};
