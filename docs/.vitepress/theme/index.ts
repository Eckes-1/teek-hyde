import Teek, {
  artalkSymbol,
  giscusSymbol,
  walineSymbol,
} from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";

import NoticeContent from "./components/NoticeContent.vue";
// import notice from "./components/notice.vue";
import BannerImgArrow from "./components/BannerImgArrow.vue";
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import { defineComponent, h, nextTick, provide, watch } from "vue";
import { useData, useRoute } from "vitepress";
// import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/vp-plus/code-block-mobile.scss"; // 移动端代码块样式加 padding
import "vitepress-theme-teek/vp-plus/sidebar.scss"; // 侧边栏字体样式
import "vitepress-theme-teek/vp-plus/nav.scss"; // 导航栏样式
import "vitepress-theme-teek/vp-plus/nav-blur.scss"; // 导航栏毛玻璃样式
import "vitepress-theme-teek/vp-plus/aside.scss"; // 文章目录样式
import "vitepress-theme-teek/vp-plus/doc-h1-gradient.scss"; // 文档以及标题样式
import "vitepress-theme-teek/vp-plus/mark.scss"; // 文章 mark 标签样式
import "vitepress-theme-teek/vp-plus/container.scss"; // Markdown 容器样式
// import "vitepress-theme-teek/vp-plus/container-left.scss"; // Markdown 容器左框样式
// import "vitepress-theme-teek/vp-plus/container-flow.scss"; // Markdown 容器流体样式
// import "vitepress-theme-teek/vp-plus/blockquote.scss"; // 引用样式
import "vitepress-theme-teek/vp-plus/index-rainbow.scss"; // Vitepress 首页彩虹渐变样式
import "vitepress-theme-teek/tk-plus/banner-desc-gradient.scss"; // Banner 描述渐变样式
import "vitepress-theme-teek/tk-plus/banner-full-img-scale.scss"; // Banner 全屏图片放大样式

import "./styles/index.scss"; //群主自定义的全局样式

import { useFooterRuntime } from "./helper/useFooterRuntime"; // 首页底部添加运行时间

import "./style/index.scss"; // 引入.vitepress\theme\style\index.scss全局样式
import "virtual:group-icons.css"; //代码组图标样式

import MNavLinks from "./components/MNavLinks.vue"; // 引入导航组件
import { NProgress } from "nprogress-v2/dist/index.js"; // 进度条组件
import "nprogress-v2/dist/index.css"; // 进度条样式
// import Layout from "./components/MyLayout.vue";
import DefaultTheme from "vitepress/theme";
import confetti from "./components/Confetti.vue"; //导入五彩纸屑组件
import NotFound from "./components/NotFound.vue"; // 导入404组件
import "vitepress-markdown-timeline/dist/theme/index.css"; // 引入时间线样式

// 评论组件
// import { init } from "@waline/client";
// import "@waline/client/style";
// import Giscus from "@giscus/vue";
// import "artalk/Artalk.css";
// import Artalk from "artalk";

export default {
  extends: Teek,
  async enhanceApp({ app, router }) {
    // 注册组件
    app.component("MNavLinks", MNavLinks);
    app.component("confetti", confetti);

    // 非SSR环境下配置路由进度条
    if (!import.meta.env.SSR) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => NProgress.start();
      router.onAfterRouteChanged = () => {
        NProgress.done();
        setTimeout(NProgress.remove, 200); // 双重保障清除进度条
      };
    }
    // 非SSR环境下加载Live2D模型
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import("oh-my-live2d");
      loadOml2d({
        models: [
          {
            path: "https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-2/normal/model.json",
            position: [0, 60],
            scale: 0.06, //控制模型缩放比例
            stageStyle: {
              height: 350,
            },
          },
          {
            name: "shizuku",
            path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/shizuku/shizuku.model.json",
          },
          {
            name: "senko",
            path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/Senko_Normals/senko.model3.json",
          },
          {
            name: "pio",
            path: "https://registry.npmmirror.com/oml2d-models/latest/files/models/Pio/model.json",
          },
        ],
        dockedPosition: "left", // 停靠位置，left/right/
        initialStatus: "active", // 用于控制组件在浏览器中以当前地址首次访问时的初始状态是否处于睡眠状态或活动状态,
        primaryColor: "#5da8ff", // 主色调
        sayHello: false, // 是否在初始化阶段打印项目信息
        transitionTime: 5000, // 组件入场和离开的过渡动画时长,单位 ms
        // 菜单项
        menus: {
          items: [
            {
              id: "Rest",
              icon: "icon-rest",
              title: "休息",
              onClick(oml2d): void {
                // actions ...
              },
            },
            {
              id: "SwitchModel",
              icon: "icon-switch",
              title: "切换模型",
              onClick(oml2d): void {
                // actions ...
              },
            },
            {
              id: "SwitchModel",
              icon: "icon-skin",
              title: "切换皮肤",
              onClick(oml2d): void {
                // actions ...
              },
            },
            {
              id: "About",
              icon: "icon-about",
              title: "关于",
              onClick(): void {
                window.open("https://github.com/hacxy");
              },
            },
            {
              id: "github",
              icon: "icon-github",
              title: "我的github",
              onClick() {
                window.open("https://github.com/hacxy");
              },
            },
          ],
          disable: false,
          itemStyle: {
            //配置菜单每个子项按钮的样式
            fontSize: "14px", //菜单图标大小
            color: "#5da8ff", //菜单小图标颜色
            // background: "rgba(255, 255, 255, 0.9)", //菜单背景颜色
            transition: "all 0.3s ease", // 过渡动画
            borderRadius: "50%", //菜单背景圆角
            padding: "5px", //菜单背景内边距
            margin: "10px", //菜单背景外边距
            boxShadow: "0 0 10px #646cff", //菜单背景阴影
            border: "1px solid #5da8ff", //菜单背景边框
          },
        },
        tips: {
          // 复制网站文字内容时的提示
          copyTips: {
            message: ["复制成功！记得标明出处哦~"], // 提示框内容
            duration: 3000, //提示框持续时间, 单位 ms
            priority: 10, //优先级，值越大，优先级越高
          },
          // 闲置状态下的提示
          idleTips: {
            duration: 5000, //提示框持续时间, 单位 ms
            interval: 10000, //闲置状态循环播放消息的间隔时间, 单位 ms
            message: [
              "你好呀，我是看板娘~",
              "欢迎来到我的小世界~",
              "快来和我一起探索吧~",
            ], // 提示框内容
            priority: 10, //优先级，值越大，优先级越高
            wordTheDay: (wordTheDayData) => {
              // 一言
              return `${wordTheDayData.hitokoto}    by.${wordTheDayData.from}`;
            },
          },
          messageLine: 2, // 提示消息最大显示行数
          // 模型入场后的欢迎提示
          welcomeTips: {
            // 进入网站时的欢迎提示
            duration: 6000,
            priority: 10,
            message: {
              daybreak: "早上好！一日之计在于晨，美好的一天就要开始了。",
              morning: "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！",
              noon: "中午了，工作了一个上午，现在是午餐时间！",
              afternoon: "午后很容易犯困呢，来杯咖啡吧~",
              dusk: "傍晚了！工作一天幸苦啦~",
              night: "晚上好，今天过得怎么样呢？",
              lateNight: "已经这么晚了呀，早点休息吧，晚安~",
              weeHours: "这么晚还不睡吗？当心熬夜秃头哦！",
            },
          },
        },
        statusBar: {
          disable: false, // 禁用状态栏
          errorColor: "#ff0000", // 加载状态下的颜色
          loadFailMessage: "模型加载失败", // 加载失败的提示
          loadSuccessMessage: "模型加载成功", // 加载成功的提示
          loadingIcon: "icon-loading", // 加载中的图标
          loadingMessage: "模型加载中", // 加载中的提示
        },
      });
    }
  },
  Layout: defineComponent({
    name: "LayoutProvider",
    setup() {
      const { start, stop } = useFooterRuntime();
      const props: Record<string, any> = {};
      const { frontmatter, isDark, page } = useData();

      // 添加自定义 class 逻辑
      if (frontmatter.value?.layoutClass) {
        props.class = frontmatter.value.layoutClass;
      }
      const route = useRoute();

      // 注入评论区实例
      // provide(walineSymbol, (options, el) =>
      //   init({ serverURL: options.serverURL!, dark: options.dark, el })
      // );
      // provide(giscusSymbol, () => Giscus);
      // provide(artalkSymbol, (options, el) =>
      //   Artalk.init({
      //     el,
      //     darkMode: isDark.value,
      //     pageKey: route.path,
      //     pageTitle: page.value.title,
      //     server: options.server,
      //     site: options.site,
      //   })
      // );

      watch(
        frontmatter,
        () => {
          nextTick(() => {
            if (frontmatter.value.layout === "home") start();
            else stop();
          });
        },
        { immediate: true }
      );
      return () =>
        h(TeekLayoutProvider, props, {
          // "layout-top": () => h(notice), // 使用layout-top插槽
          confetti: () => h(confetti), // 使用confetti插槽
          "teek-notice-content": () => h(NoticeContent),
          "teek-home-banner-feature-after": () => h(BannerImgArrow),
          // 自定义文档底部
          // "doc-after": () => h(siteFooter),
          // 自定义404页面内容
          "not-found": () => h(NotFound),
          // "teek-home-before": () => h("div", null, "teek-home-before"),
          // "teek-home-after": () => h("div", null, "teek-home-after"),
          // "teek-home-banner-before": () => h("div", null, "teek-home-banner-before"),
          // "teek-home-banner-after": () => h("div", null, "teek-home-banner-after"),
          // "teek-home-banner-content-before": () => h("div", null, "teek-home-banner-content-before"),
          // "teek-home-banner-content-after": () => h("div", null, "teek-home-banner-content-after"),
          // "teek-home-banner-feature-after": () => h("div", null, "teek-home-banner-feature-after"),
          // "teek-home-post-before": () => h("div", null, "teek-home-post-before"),
          // "teek-home-post-after": () => h("div", null, "teek-home-post-after"),
          // "teek-home-info-before": () => h("div", null, "teek-home-info-before"),
          // "teek-home-info-after": () => h("div", null, "teek-home-info-after"),
          // "teek-home-my-before": () => h("div", null, "teek-home-my-before"),
          // "teek-home-my-after": () => h("div", null, "teek-home-my-after"),
          // "teek-home-top-article-before": () => h("div", null, "teek-home-top-article-before"),
          // "teek-home-top-article-after": () => h("div", null, "teek-home-top-article-after"),
          // "teek-home-category-before": () => h("div", null, "teek-home-category-before"),
          // "teek-home-category-after": () => h("div", null, "teek-home-category-after"),
          // "teek-home-tag-before": () => h("div", null, "teek-home-tag-before"),
          // "teek-home-tag-after": () => h("div", null, "teek-home-tag-after"),
          // "teek-home-friend-link-before": () => h("div", null, "teek-home-friend-link-before"),
          // "teek-home-friend-link-after": () => h("div", null, "teek-home-friend-link-after"),
          // "teek-home-doc-analysis-before": () => h("div", null, "teek-home-doc-analysis-before"),
          // "teek-home-doc-analysis-after": () => h("div", null, "teek-home-doc-analysis-after"),
          // "teek-footer-before": () => h("div", null, "teek-footer-before"),
          // "teek-footer-after": () => h("div", null, "teek-footer-after"),

          // "teek-article-analyze-before": () => h("div", null, "teek-article-analyze-before"),
          // "teek-article-analyze-after": () => h("div", null, "teek-article-analyze-after"),
          // "teek-comment-before": () => h("div", null, "teek-comment-before"),
          // "teek-comment-after": () => h("div", null, "teek-comment-after"),
          // "teek-page-top-before": () => h("div", null, "teek-page-top-before"),
          // "teek-page-top-after": () => h("div", null, "teek-page-top-after"),

          // "teek-archives-top-before": () => h("div", null, "teek-archives-top-before"),
          // "teek-archives-top-after": () => h("div", null, "teek-archives-top-after"),
          // "teek-catalogue-top-before": () => h("div", null, "teek-catalogue-top-before"),
          // "teek-catalogue-top-after": () => h("div", null, "teek-catalogue-top-after"),

          // "teek-right-bottom-before": () => h("div", null, "teek-right-bottom-before"),
          // "teek-right-bottom-after": () => h("div", null, "teek-right-bottom-after"),
        });
    },
  }),
};
