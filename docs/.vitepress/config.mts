import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
// import "vitepress-theme-teek/index.css";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons"; // 导入代码组图标插件
import timeline from "vitepress-markdown-timeline"; // 导入时间线插件
import { La51Plugin } from "vitepress-plugin-51la"; // 导入51la统计插件

import { Features } from "./config/Features"; // 导入Features模块
import { FriendLink } from "./config/FriendLink"; // 导入FriendLink模块
import { HitokotoDate } from "./config/HitokotoDate"; // 导入HitokotoData模块
import { Nav } from "./config/Nav"; // 导入Nav模块
import { SocialDate } from "./config/SocialDate"; // 导入SocialDate社交信息模块
import { Wallpaper } from "./config/Wallaper"; // 导入Wallaper模块
import type { HeadConfig } from "vitepress"; // 在文件顶部添加类型导入
import { HeadData } from "./config/Head"; // 导入 HeadData 导入和类型断言
import { SocialLinks } from "./config/SocialLinks"; //导入社交链接配置
import { FooterInfo } from "./config/FooterInfo"; //导入底部信息配置
import { CommentData } from "./config/Comment"; //导入底部信息配置

const description = ["Hd Security 使用文档", "认证框架"].toString();

const teekConfig = defineTeekConfig({
  // teekHome: true, // 是否使用tk主题，teekHome 和 teekTheme 默认都是 true，可以注释
  // teekTheme: true, // 是否使用tk主题，teekHome 和 teekTheme 默认都是 true，可以注释
  // vpHome: true, // 是否使用vp主题，是否启用 VitePress 首页风格，支持 teekHome 和 vpHome 同时存在。
  themeSetting: {
    backTopDone: () => {
      alert("已到达顶部");
    },
  },
  bgColor: [
    "#e74c3c",
    "#409EFF",
    "#DAA96E",
    "#0C819F",
    "#27ae60",
    "#ff5c93",
    "#fd726d",
    "#f39c12",
    "#9b59b6",
  ], // 主题背景颜色
  page: {
    pageSize: 16, // 每页显示的文章数量
  },
  post: {
    coverImgMode: "full", // 封面大图
    imageViewer: { hideOnClickModal: true }, // 图片预览是否点击遮罩层关闭}
  },
  author: { name: "Hyde", link: "https://gitee.com/SeasirHyde/teek-hyde" }, // 作者信息
  article: {
    imageViewer: { hideOnClickModal: true }, // 图片预览是否点击遮罩层关闭}
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true, // 是否展示作者
    showCreateDate: true, // 是否展示创建日期
    showUpdateDate: true, // 是否展示更新日期，是否展示更新时间，仅在文章页显示
    showCategory: true, // 是否展示分类
    showTag: true, // 是否展示标签
    topTip: (frontmatter) => {
      const tip: Record<string, string> = {
        type: "warning",
        title: "注意",
        text: "文章发布较早，内容可能过时，阅读注意甄别。",
      };

      // frontmatter.long 为 true，则添加提示
      if (frontmatter.long) return tip;

      // frontmatter.date 大于半年，则添加提示
      const longTime = 6 * 30 * 24 * 60 * 60 * 1000;
      if (
        frontmatter.date &&
        Date.now() - new Date(frontmatter.date).getTime() > longTime
      )
        return tip;
    },
  },
  footerInfo: FooterInfo, // 底部信息配置,
  comment: {
    provider: "twikoo",
    options: CommentData, // 评论配置
  }, // 评论配置,
  notice: {
    enabled: true,
    position: "center",
  },
  vitePlugins: {
    sidebarOption: {
      initItems: false, //这条命令注释后，才会让文档和目录的样式保持一致
      collapsed: true, //打开侧边栏自动收缩功能
      ignoreList: ["nav"], //忽略的文件夹和文件
    },
    autoFrontmatter: true, // 自动生成 frontmatter
  },

  markdown: {
    config: (md) => {
      md.use(timeline); //时间线插件
      md.use(groupIconMdPlugin); // 代码组图标插件
    },
  },
  // 站点信息卡片配置
  docAnalysis: {
    enabled: true,
    createTime: "2021-10-19",
    wordCount: true,
    readingTime: true,
    statistics: {
      provider: "busuanzi",
      siteView: true,
      pageView: true,
      siteIteration: 2000,
      pageIteration: 2000,
    },
    overrideInfo: [
      {
        key: "lastActiveTime",
        label: "活跃时间",
        value: (_, currentValue) => (currentValue + "").replace("前", ""),
        show: true,
      },
    ],
    appendInfo: [{ key: "index", label: "序号", value: "Hyde" }],
  },
  // 谷歌分析
  siteAnalytics: {
    provider: "google",
    options: {
      id: "G-YDTSLB09YH",
    },
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  base: "/",
  title: "Hyde Blog",
  description: description,
  cleanUrls: true,
  lastUpdated: true, // 显示最后更新时间
  lang: "zh-CN",
  head: HeadData as HeadConfig[],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: Nav, // 导航栏配置
    socialLinks: SocialLinks, // 社交链接配置
    search: {
      provider: "local",
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern:
        "https://github.com/Kele-Bingtang/hd-security/edit/master/hd-security-docs/docs/:path",
    },
  },

  vite: {
    plugins: [
      groupIconVitePlugin(), //代码组图标
      // 51La统计插件
      La51Plugin({
        id: "3LmDV843SgGyC2Zp",
        ck: "3LmDV843SgGyC2Zp",
        apply: "all",
      }),
    ],
    server: {
      open: true, // 运行后自动打开网页
    },
    build: {
      chunkSizeWarningLimit: 1500, // 限制警告的块大小
    },
  },
});
