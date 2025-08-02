import type { NavData } from "./types.ts";
import { SiteAnalytics } from "./Data/SiteAnalytics"; // 网站分析
import { Status } from "./Data/Status"; // 网站监控
import { ImgTool } from "./Data/ImgTool"; //图像工具
import { PictureTools } from "./Data/PictureTools"; // 图床工具
import { NavWebsite } from "./Data/NavWebsite"; // 导航网站
import { Wallpaper } from "./Data/Wallpaper"; // 精美壁纸
import { Email } from "./Data/Email"; // 邮箱相关
import { Utilities } from "./Data/Utilities"; // 常用工具
import { AICode } from "./Data/AICode"; // AI编程
import { React } from "./Data/React"; // React 生态
import { Vue } from "./Data/Vue"; // Vue 生态
import { javaScript } from "./Data/JavaScript.ts"; // JavaScript 框架
import { CSS } from "./Data/CSS"; // CSS 框架

import { wechatIcon } from "./icon/WebNavicon.ts";

export const NAV_DATA: NavData[] = [
  {
    title: "网站分析",
    items: SiteAnalytics.items,
  },
  {
    title: "网站监控",
    items: Status.items,
  },
  {
    title: "图像工具",
    items: ImgTool.items,
  },
  {
    title: "图床工具",
    items: PictureTools.items,
  },
  {
    title: "导航网站",
    items: NavWebsite.items,
  },
  {
    title: "精美壁纸",
    items: Wallpaper.items,
  },
  {
    title: "邮件相关",
    items: Email.items,
  },
  {
    title: "常用工具",
    items: Utilities.items,
  },
  {
    title: "AI编程",
    items: AICode.items,
  },
  {
    title: "React 生态",
    items: React.items,
  },
  {
    title: "Vue 生态",
    items: Vue.items,
  },
  {
    title: "JS 框架",
    items:javaScript.items,
  },
  {
    title: "CSS 框架",
    items: CSS.items,
  },
  {
    title: "小程序",
    items: [
      {
        icon: "https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png",
        title: "微信小程序文档",
        desc: "微信小程序官方开发者文档",
        link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
      },
      {
        icon: "/icons/taro.svg",
        title: "Taro",
        desc: "多端统一开发解决方案",
        link: "https://taro.jd.com",
      },
      {
        icon: "https://web-assets.dcloud.net.cn/unidoc/zh/icon.png",
        title: "uni-app",
        desc: "一个使用 Vue.js 开发所有前端应用的框架",
        link: "https://uniapp.dcloud.net.cn",
      },
      {
        icon: "https://mpxjs.cn/favicon.ico",
        title: "Mpx",
        desc: "增强型跨端小程序框架",
        link: "https://mpxjs.cn",
      },
    ],
  },
  {
    title: "Node 相关",
    items: [
      {
        icon: "/icons/nodejs.svg",
        title: "Node.js",
        desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
        link: "https://nodejs.org/zh-cn",
      },
      {
        icon: "https://expressjs.com/images/favicon.png",
        title: "Express",
        desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        link: "https://expressjs.com",
      },
      {
        icon: "/icons/koa.svg",
        title: "Koa",
        desc: "基于 Node.js 平台的下一代 web 开发框架",
        link: "https://koajs.com",
      },
      {
        icon: "https://www.eggjs.org/favicon.png",
        title: "Egg",
        desc: "为企业级框架和应用而生",
        link: "https://www.eggjs.org/zh-CN",
      },
      {
        icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
        title: "Nest.js 中文文档",
        desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
        link: "https://docs.nestjs.cn",
      },
    ],
  },
  {
    title: "可视化",
    items: [
      {
        icon: "https://echarts.apache.org/zh/images/favicon.png",
        title: "ECharts",
        desc: "一个基于 JavaScript 的开源可视化图表库",
        link: "https://echarts.apache.org/zh/index.html",
      },
      {
        icon: "https://antv.vision/icons/icon-72x72.png",
        title: "AntV",
        desc: "蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
        link: "https://antv.vision/zh/",
      },
      {
        icon: "https://d3js.org/favicon.png",
        title: "D3.js",
        desc: "一个遵循 Web 标准用于可视化数据的 JavaScript 库",
        link: "https://d3js.org",
      },
      {
        icon: "https://www.chartjs.org/favicon.ico",
        title: "Chart.js",
        desc: "一个简单而灵活的 JavaScript 图表库",
        link: "https://www.chartjs.org",
      },
      {
        icon: "https://threejs.org/files/favicon.ico",
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: "Three.js",
        desc: "JavaScript 3d 库",
        link: "https://threejs.org",
      },
    ],
  },
  {
    title: "编译&构建&打包",
    items: [
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com",
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev",
      },
      {
        icon: "https://www.rollupjs.com/img/favicon.png",
        title: "Rollup",
        desc: "Rollup 是一个 JavaScript 模块打包器",
        link: "https://www.rollupjs.com",
      },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build",
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn",
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io",
      },
      {
        icon: "https://swc.rs/favicon/apple-touch-icon.png",
        title: "SWC",
        desc: "Rust-based platform for the Web",
        link: "https://swc.rs",
      },
      {
        icon: "https://tsdown.dev/tsdown.svg",
        title: "Tsdown",
        desc: "优雅的库打包工具",
        link: "https://tsdown.dev/",
      },
      {
        icon: "https://rolldown.rs/rolldown-round.svg",
        title: "Rolldown",
        desc: "基于 Rust 的 JavaScript 打包工具",
        link: "https://rolldown.rs/",
      },
    ],
  },
  {
    title: "站点生成器",
    items: [
      {
        icon: "https://astro.build/favicon.svg",
        title: "Astro",
        desc: "一个现代化的轻量级静态站点生成器",
        link: "https://astro.build",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "VitePress",
        desc: "由 Vite 和 Vue 驱动的静态网站生成器",
        link: "https://vitepress.dev",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "VuePress",
        desc: "Vue 驱动的静态网站生成器",
        link: "https://vuepress.vuejs.org/zh",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png",
        title: "dumi",
        desc: "基于 Umi 为组件研发而生的静态站点框架",
        link: "https://d.umijs.org",
      },
      {
        icon: "https://docusaurus.io/zh-CN/img/docusaurus.ico",
        title: "Docusaurus",
        desc: "基于 React 的静态网站生成器",
        link: "https://docusaurus.io/zh-CN",
      },
    ],
  },
  {
    title: "图标库",
    items: [
      {
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
        title: "iconfont",
        desc: "国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        link: "https://www.iconfont.cn",
      },
      {
        icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
        title: "IconPark 图标库",
        desc: "IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标",
        link: "https://iconpark.oceanengine.com/official",
      },
      {
        icon: "https://emoji.muan.co/appicon.png",
        title: "Emoji searcher",
        desc: "Emoji 表情大全",
        link: "",
      },
      {
        icon: "https://icon-sets.iconify.design/favicon.svg",
        title: "iconify",
        desc: "通用图标框架。单一语法即可兼容 FontAwesome、Material Design Icons、DashIcons、Feather Icons、EmojiOne、Noto Emoji 以及众多其他开源图标集（超过 150 个图标集和 20 万个图标）。此外，还支持 SVG 框架、React、Vue 和 Svelte 组件！",
        link: "https://icon-sets.iconify.design/",
      },
      {
        icon: "https://icones.js.org/favicon-dark.svg",
        title: "icones",
        desc: "一个图标资源管理器，提供即时模糊搜索、图标字体打包、SVG下载等功能。",
        link: "https://icones.js.org/",
      },
      {
        icon: "https://feathericons.com/favicon-32x32.png",
        title: "feathericons",
        desc: "Feather 是一系列简洁美观的开源图标。每个图标均采用 24x24 网格设计，注重简洁性、一致性和灵活性。",
        link: "https://feathericons.com/",
      },
      {
        icon: "https://undraw.co/apple-touch-icon.png",
        title: "unDraw",
        desc: "免费可商用向量插图图库",
        link: "https://undraw.co/",
      },
      {
        icon: "https://maxst.icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32%C3%9732.png",
        title: "icons8",
        desc: "免费的图标、剪贴画插图、照片和音乐",
        link: "https://igoutu.cn/",
      },
      {
        icon: "https://shields.io/img/favicon.ico",
        title: "Shields.io",
        desc: "网站微标生成",
        link: "https://shields.io/",
      },
    ],
  },
  {
    title: "前端学习资料",
    items: [
      {
        icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资",
        link: "https://developer.mozilla.org/zh-CN",
      },
      {
        icon: "https://static.runoob.com/images/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com",
      },
      {
        icon: "/icons/es6.svg",
        title: "ES6 入门教程",
        desc: "阮一峰的网络日志",
        link: "http://es6.ruanyifeng.com",
      },
    ],
  },
  {
    title: "社区",
    items: [
      {
        title: "Github",
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com",
      },
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn",
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com",
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com",
      },
      {
        title: "博客园",
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: "/icons/cnblogs.svg",
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com",
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://juejin.cn",
      },
    ],
  },
  {
    title: "摸鱼专用",
    items: [
      {
        icon: "https://momoyu.cc/icon-192.png",
        title: "摸摸鱼热榜",
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: "https://momoyu.cc",
      },
      {
        icon: "https://v.qq.com/favicon.ico",
        title: "腾讯视频",
        // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
        link: "https://v.qq.com",
      },
      {
        icon: "https://static.hdslb.com/mobile/img/512.png",
        title: "哔哩哔哩",
        // desc: '',
        link: "https://www.bilibili.com",
      },
      {
        icon: "https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png",
        title: "YouTube",
        // desc: '',
        link: "https://www.youtube.com",
      },
      {
        icon: "/icons/twitter.svg",
        title: "Twitter",
        // desc: '',
        link: "https://twitter.com",
      },
      {
        icon: "/icons/pixiv.png",
        title: "Pixiv",
        // desc: '',
        link: "https://www.pixiv.net",
      },
      {
        icon: "http://wan55.cn/favicon.ico",
        title: "好玩的代码大全",
        desc: "好玩的代码大全",
        link: "http://wan55.cn/wan19#1845",
      },
    ],
  },
  {
    title: "Axios",
    items: [
      {
        icon: "https://norm-axios-press.pages.dev/logo.png",
        title: "Norm Axios",
        desc: "约定式请求库上手简单、高效开发，极致体验",
        link: "https://norm-axios-press.pages.dev/",
      },
      {
        icon: "https://www.axios-http.cn/img/favicon.ico",
        title: "Axios 中文文档",
        desc: "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js",
        link: "https://www.axios-http.cn/",
      },
      {
        icon: "https://alova.js.org/zh-CN/img/favicon.ico",
        title: "Alova",
        desc: "下一代请求工具",
        link: "https://alova.js.org/zh-CN/",
      },
    ],
  },
  {
    title: "音乐网站",
    items: [
      {
        icon: "https://avatars.githubusercontent.com/u/45055748?s=48&v=4",
        title: "AlgerMusicPlayer",
        desc: "一个第三方音乐播放器，支持本地服务、桌面歌词、主题切换",
        link: "http://music.alger.fun/#/",
      },
      {
        icon: "https://blog.hzyo.cn/music/favicon.ico",
        title: "Music丨用音乐愉悦心情",
        desc: "一款开源的基于网易云音乐api的在线音乐播放器。具有音乐搜索、播放、歌词同步显示、个人音乐播放列表同步等功能。",
        link: "https://blog.hzyo.cn/music/",
      },
    ],
  },
  {
    title: "其他",
    items: [
      {
        icon: "https://yibao.233h.com/logo.png",
        title: "医保政策导航",
        desc: "一站式医保政策查询平台，让医保使用更简单",
        link: "https://yibao.233h.com/",
      },
      {
        icon: "https://avatars.githubusercontent.com/u/17945115?s=48&v=4",
        title: "Picseal",
        desc: "模仿小米照片风格，生成莱卡水印照片。同时支持佳能、尼康、苹果、华为、小米、DJI 等水印。可自动识别，也可自定义处理。",
        link: "https://picseal.vercel.app/",
      },
      {
        icon: "https://cdnn.mmtool.cn/favicon.svg",
        title: "手写体文稿生成器",
        desc: "在线手写模拟器，一键生成手写字体文稿。可将文本转换为手写体，并下载为图片或PDF 格式",
        link: "https://vtool.pro/handwriting/index.html",
      },
      {
        icon: "https://font.sucai999.com//statics/default/images/favicon.png",
        title: "字体搬运工",
        desc: "一个专门收集整理”免费商用字体的网站，无需登录，自由下载。",
        link: "https://font.sucai999.com/search/0_1_1.html",
      },
      {
        icon: "https://transfonter.org/favicon.ico",
        title: "transfonter",
        desc: "现代而简单的 CSS @font-face 生成器",
        link: "https://transfonter.org/",
      },
      {
        icon: "https://www.ysdaima.com/assets/img/favicon.png",
        title: "颜色代码表",
        desc: "为设计师和开发者提供专业的色彩工具，让设计更出色。",
        link: "https://www.ysdaima.com/",
      },
      {
        icon: "https://abdownloadmanager.com/assets/app_icon_with_background-DacKa0NY.svg",
        title: "AB 下载管理器",
        desc: "通过与浏览器的无缝集成从任何地方轻松下载文件，享受快速、免费的下载体验，可以平替idm，一个开源产品，还在初期，问题还有不少",
        link: "AB 下载管理器",
      },
      {
        icon: "https://fuun.fun/apple-touch-icon.png",
        title: "奇趣网站收藏夹",
        desc: "有各种有意思的小网页，小游戏，汲取灵感，感受不一样的网页世界。",
        link: "https://fuun.fun/",
      },
      {
        icon: "https://ray.so/favicon.ico",
        title: "ray.so",
        desc: "一款高颜值的 Icon 制作工具，操作简单",
        link: "https://ray.so/icon",
      },
      {
        icon: "https://lookscanned.io/favicon.ico",
        title: "Look Scanned",
        desc: "能够让 PDF 看起来就像是扫描件一样的纯前端网站。你再也不需要麻烦地打印之后扫描了，你所需要的就是鼠标点几下。",
        link: "https://ray.so/icon",
      },
      {
        icon: "https://avatars.githubusercontent.com/u/86941555?s=48&v=4",
        title: "MouseClick",
        desc: "一款功能强大的鼠标控制和管理软件，软件界面美观 ，操作直观，支持鼠标行为模拟、鼠标动作记录  和宏命令创建 ，让用户在工作和游戏中实现高效自动化 。",
        link: "https://github.com/SeaYJ/MouseClick",
      },
      {
        icon: "https://www.spacedrive.com/favicon.ico",
        title: "spacedrive",
        desc: "一个资源管理器，所有文件",
        link: "https://www.spacedrive.com/",
      },
      {
        icon: "https://relationship.ohevan.com/icon.png",
        title: "一个自以为是的情感指南",
        desc: "一个由 Evan 亲自撰写，收集，总结的情感指南，希望能帮助你解决一些情感问题。",
        link: "https://relationship.ohevan.com/",
      },
      {
        icon: "https://wificard.io/static/media/wifi.98ef7bb3bdae68a308b3.png",
        title: "WiFi 连接卡",
        desc: "打印一张带有 WiFi 详细信息的登录卡片，把它贴到冰箱上、放到你的钱包里...让客人扫一扫连接",
        link: "https://wificard.io/",
      },
      {
        icon: "https://www.jianlisheji.com/favicon.ico",
        title: "简历设计网",
        desc: "简单好用的在线简历制作工具",
        link: "https://www.jianlisheji.com/",
      },
      {
        icon: "https://zufang.ababtools.com/logo-big.svg",
        title: "城市租房生存指南",
        desc: "租房小白修炼手册，掌握租房硬核知识，找到理想住所！",
        link: "https://zufang.ababtools.com/",
      },
      {
        icon: "https://avatars.githubusercontent.com/u/25154432?s=48&v=4",
        title: "食用手册",
        desc: "选择食材，为你推荐菜谱和做菜教程，让生活更有烟火味。",
        link: "https://cook.yunyoujun.cn/",
      },
      {
        icon: "https://www.wfhg.cc/favicon.ico",
        title: "网费很贵",
        desc: "最好用的上网时间记录工具",
        link: "https://www.wfhg.cc/zh_CN/",
      },
      {
        icon: "https://wanglin2.github.io/mind-map-docs/logo.png",
        title: "SimpleMindMap",
        desc: "一个强大的Web思维导图",
        link: "https://wanglin2.github.io/mind-map-docs/",
      },
      {
        icon: "https://mycolor.space/favicon5.png",
        title: "colorspace",
        desc: "根据你选择的主色，一键生成配色方案",
        link: "https://mycolor.space/",
      },
      {
        icon: "https://v.png.pub/imgs/2024/06/08/495e6235c59ead29.png",
        title: "Zdir Pro",
        desc: "一款集文件索引、在线预览与分享于一体的多功能私有存储程序，支持WebDAV和离线下载。",
        link: "https://www.zdir.pro/zh/",
      },
    ],
  },
  {
    title: "Markdown编辑器",
    items: [
      {
        icon: "https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/favicon.png",
        title: "微信 Markdown 编辑器",
        desc: "一款高度简洁的微信 Markdown 编辑器",
        link: "https://md.doocs.org",
      },
      {
        icon: "https://cardify.godsbee.com/favicon.ico",
        title: "Markdown精美知识卡片",
        desc: "高效使用Markdown创建视觉精美的知识卡片，可切换30+种主题样式。",
        link: "https://cardify.godsbee.com/",
      },
      {
        icon: { svg: wechatIcon },
        title: "微信 Markdown 编辑器",
        desc: "沉浸创作，美由心生，为优雅阅读设计，为优质内容而生",
        link: "https://www.md2wechat.cn/",
      },
    ],
  },
  {
    title: "代理软件",
    items: [
      {
        icon: "https://flclash.cc/index-image-src.png",
        title: "FlClash",
        desc: "基于ClashMeta的多平台代理客户端，简单易用，开源且无广告",
        link: "https://flclash.cc/",
      },
      {
        icon: "https://www.clashverge.dev/assets/logo.png",
        title: "Clash Verge",
        desc: "基于 Tauri 的 Mihomo GUI",
        link: "https://www.clashverge.dev/",
      },
      {
        icon: "https://karing.app/img/favicon.ico",
        title: "karing(IOS,需美区ID)",
        desc: "兼容Clash的通用网络代理工具, 支持clash/v2ray/ss订阅",
        link: "https://karing.app/",
      },
      {
        icon: "https://web.telegram.org/a/icon-192x192.png",
        title: "小羽VPN_0.7.7-去广告版.apk",
        desc: "安卓免费VPN，速度不错,需外网下载",
        link: "https://t.me/OJBK2333/2615",
      },
      {
        icon: "https://mihomo.party/logo.png",
        title: "Mihomo-Party",
        desc: "一个更易用的代理客户端",
        link: "https://mihomo.party/",
      },
    ],
  },
  {
    title: "CDN加速",
    items: [
      {
        icon: "https://bitiful-contents.butterix.com/cHJvLTQ/images/U0bMDyAe4YIaUxSbYf1vJs4rg.png",
        title: "缤纷云 Bitiful",
        desc: "强大低成本的对象存储和CDN服务",
        link: "https://www.bitiful.com/",
      },
      {
        icon: "https://www.dogecloud.com/favicon.png",
        title: "多吉云",
        desc: "一站式视频云点播平台，轻量级的用户能够无需了解任何技术就轻而易举地展示和播放视频，而以视频为主要产品的用户能通过强大的 API 和 SDK 完成对视频的高级处理。",
        link: "https://www.dogecloud.com/",
      },
      {
        icon: "https://edgeone.ai/favicon.ico",
        title: "EdgeOne",
        desc: "解锁全球首个免费CDN支持中国访问，无限CDN流量，无限DDoS防护",
        link: "https://edgeone.ai/zh/redemption",
      },
    ],
  },
  {
    title: "数据库",
    items: [
      {
        icon: "https://www.dblab.top/logo.png",
        title: "DBLAB.AI",
        desc: "DBLAB是一款功能齐全的数据库管理工具,多平台支持，与AI协作，探索全新的数据库管理体验",
        link: "https://www.dblab.top/",
      },
      {
        icon: "https://jookdb.com/img/logo.png",
        title: "JookDB",
        desc: "一个跨平台的数据库工具，支持 Windows、Linux、MacOS。",
        link: "https://jookdb.com/",
      },
    ],
  },
  {
    title: "文档笔记",
    items: [
      {
        icon: "https://typoraio.cn/img/favicon-128.png",
        title: "Typora",
        desc: " 一款 Markdown 编辑器和阅读器",
        link: "https://www.x6g.com/i-wz-24216.html",
      },
      {
        icon: "https://app.vnote.fun/zh_cn/css/vnote_white.svg",
        title: "vnote",
        desc: " 一个舒适的笔记平台",
        link: "https://app.vnote.fun/zh_cn/",
      },
      {
        icon: "https://www.zettlr.com/themes/zettlr/assets/img/256x256.png",
        title: "Zettlr ",
        desc: " 一个开源的多功能写作工具，它被称为“全能的出版工作台”",
        link: "https://www.zettlr.com/",
      },
      {
        icon: "https://www.mindforger.com/favicon.ico",
        title: "MindForger",
        desc: "一个适合个人和专业用户的知识管理神器",
        link: "https://www.mindforger.com/",
      },
      {
        icon: "https://blinko.space/favicon.ico",
        title: "Blinko",
        desc: "下一代开源的 AI 驱动卡片笔记，旨在帮助您迅速捕捉和组织灵感，确保创意永不枯竭。",
        link: "https://blinko.space/",
      },
      {
        icon: "https://notegen.top/app-icon.png",
        title: "NoteGen",
        desc: "一款跨平台的 Markdown AI 笔记软件",
        link: "https://notegen.top/",
      },
      {
        icon: "https://www.open-notebook.ai/hero.svg",
        title: "Open Notebook",
        desc: "PDF/EPUB/视频/音频等20+格式一键转文字分析，变成你的笔记。",
        link: "https://www.open-notebook.ai/",
      },
      {
        icon: "https://deeplang-frontend.oss-cn-zhangjiakou.aliyuncs.com/shenyan-dayi/logos/logo-color.png",
        title: "语鲸",
        desc: "聚合信息收集、分发、消费全链路",
        link: "https://lingowhale.com/",
        badge: {
          text: "RSS软件",
          type: "danger",
        },
      },
      {
        icon: "https://docs.etherpad.org/favicon.ico",
        title: "Etherpad",
        desc: "下一代协作文档编辑",
        link: "https://docs.etherpad.org/",
        badge: {
          text: "文档编辑协作",
          type: "danger",
        },
      },
      {
        icon: "https://mrdoc.pro/mrdoc-home/assets/img/mrdoc_logo_300.png",
        title: "MrDoc 觅思文档",
        desc: "自托管、私有部署的在线文档管理系统和知识库",
        link: "https://mrdoc.pro/",
        badge: {
          text: "文档知识管理",
          type: "danger",
        },
      },
      {
        icon: "https://github.com/Auto-Plugin/milkup/raw/main/src/renderer/public/logo.svg",
        title: "MilkUp",
        desc: "一个桌面端 Markdown 编辑器, 目前支持 windows、MacOS、Linux(需自行打包)",
        link: "https://mrdoc.pro/",
        badge: {
          text: "Markdown 编辑器",
          type: "danger",
        },
      },
    ],
  },
  {
    title: "运维服务",
    items: [
      {
        icon: "https://chmlfrp.cn/favicon.ico",
        title: "ChmlFrp | 端口映射",
        desc: "完全重构，全面升级！免费.高速.稳定.不限流量的端口映射工具",
        link: "https://chmlfrp.cn/",
      },
      {
        icon: "https://avatars.githubusercontent.com/u/7346661?s=48&v=4",
        title: "frp",
        desc: "一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议，且支持 P2P 通信。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。",
        link: "https://github.com/fatedier/frp",
      },
      {
        icon: "https://om.uusec.com/logo.png",
        title: "OpenResty Manager",
        desc: "一个基于 OpenResty 构建的开源 Web 管理平台。提供了一个用户友好的界面，用于管理 Nginx 配置、反向代理、SSL 证书等功能，适合需要简化 Web 服务器操作的管理员和开发者。",
        link: "https://om.uusec.com/zh-cn/",
      },
      {
        icon: "https://ehang-io.github.io/nps/logo.svg",
        title: "NPS",
        desc: "一款轻量级、高性能、功能强大的内网穿透代理服务器",
        link: "https://ehang-io.github.io/nps/#/",
      },
      {
        icon: "https://www.gmssh.com/favicon.ico",
        title: "GMSSH",
        desc: "简单高效的服务器可视化运维管理工具",
        link: "https://www.gmssh.com/",
      },
    ],
  },
  {
    title: "SSL证书",
    items: [
      {
        icon: "https://allinssl.com/logo.svg",
        title: "All in SSL",
        desc: "一键自动化申请、续期、部署、监控所有 SSL/TLS 证书，支持跨云环境和多 CA (coding~)，告别繁琐配置和高昂费用。",
        link: "https://allinssl.com/",
        badge: {
          text: "强烈推荐",
          type: "danger",
        },
      },
      {
        icon: "https://certbot.eff.org/favicon.ico",
        title: "Certbot",
        desc: "Certbot是一款免费且开源的自动化安全证书管理工具，由电子前沿基金会（EFF）开发和维护，是在Linux、Apache和Nginx服务器上配置和管理SSL/TLS证书的一种机制。",
        link: "https://certbot.eff.org/instructions",
      },
      {
        icon: "https://demo.domain-admin.cn/favicon.ico",
        title: "Domain Admin",
        desc: "Domain Admin是一个基于Python + Vue3.js 技术栈实现的域名和SSL证书监测平台，支持申请证书，自动续签，到期提醒，支持独立部署 的一个轻量级监控方案，占用系统资源较少。",
        link: "https://domain-admin.cn/",
      },
      {
        icon: "https://certd.docmirror.cn/static/logo/logo.svg",
        title: "Certd",
        desc: "开源、免费、全自动的证书管理工具,让你的网站证书永不过期",
        link: "https://certd.docmirror.cn/",
      },
    ],
  },
];
