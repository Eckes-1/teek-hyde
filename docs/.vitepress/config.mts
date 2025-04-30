import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";
// import "vitepress-theme-teek/index.css";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons"; // 导入代码组图标插件
import timeline from "vitepress-markdown-timeline"; // 导入时间线插件
import { Nav } from "./ConfigHyde/Nav"; // 导入Nav模块
import type { HeadConfig } from "vitepress"; // 在文件顶部添加类型导入
import { HeadData } from "./ConfigHyde/Head"; // 导入 HeadData 导入和类型断言
import { SocialLinks } from "./ConfigHyde/SocialLinks"; //导入社交链接配置
import { FooterInfo } from "./ConfigHyde/FooterInfo"; //导入底部信息配置
import { CommentData } from "./ConfigHyde/Comment"; //导入底部信息配置
import { visualizer } from "rollup-plugin-visualizer"; // 导入可视化分析插件
import viteImagemin from "vite-plugin-imagemin"; // 导入图片压缩插件

const description = ["Hd Security 使用文档", "认证框架"].toString();

const teekConfig = defineTeekConfig({
  // teekHome: true, // 是否使用tk主题，teekHome 和 teekTheme 默认都是 true，可以注释
  // teekTheme: true, // 是否使用tk主题，teekHome 和 teekTheme 默认都是 true，可以注释
  // vpHome: true, // 是否使用vp主题，是否启用 VitePress 首页风格，支持 teekHome 和 vpHome 同时存在。
  themeSetting: {
    backTopDone: (TKMessage) => {
      TKMessage.success("返回顶部成功");
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
    imageViewer: { hideOnClickModal: true }, // 图片预览是否点击遮罩层关闭
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
  // 文章页的样式风格
  pageStyle: "segment-nav",
  // 赞赏在文章下方
  appreciation: {
    position: "doc-after",
    options: {
      // buttonHtml: `<button>测试按钮</button>`,
      icon: "weChatPay", // 赞赏图标，内置 weChatPay 和 alipay
      expandTitle: "打赏支持", // 展开标题，支持 HTML
      collapseTitle: "下次一定", // 折叠标题，支持 HTML
      content: `<img src='/appreciation/WeChatPay.jpg'><img src='/appreciation/Alipay.jpg'>`, // 赞赏内容，支持 HTML
      expand: false, // 是否默认展开，默认 false
    },
  },
  // 赞赏在 文章导航栏下侧
  // appreciation: {
  //   position: "aside-bottom",
  //   options: {
  //     title: `<span style="color: var(--tk-theme-color)">欢迎打赏支持</span>`, // 赞赏标题，支持 HTML
  //     content: `<img src='/appreciation/WeChatPay.jpg'><img src='/appreciation/Alipay.jpg'>`, // 赞赏内容，支持 HTML
  //   },
  // },
  articleShare: { enabled: true }, // 文章分享
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
      groupIconVitePlugin(),
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        mozjpeg: { quality: 70 },
        pngquant: { quality: [0.7, 0.8] },
        svgo: {
          plugins: [
            { name: "removeViewBox" },
            { name: "removeEmptyAttrs", active: false },
          ],
        },
      }),
    ],
    server: {
      // host: "127.0.0.1", // 指定服务器应该监听哪个 IP 地址
      // port: 5173, // 指定开发服务器端口
      strictPort: true, // 若端口已被占用则会直接退出
      open: true, // 运行后自动打开网页
    },
    build: {
      chunkSizeWarningLimit: 1500, // 限制警告的块大小
      assetsInlineLimit: 4096, // 小于 4KB 的字体转为 base64
      minify: "terser", // 使用 Terser 进行代码压缩
      rollupOptions: {
        plugins: [
          visualizer({
            filename: "../stats.html",
            open: false, // 打包后自动打开报告
            gzipSize: true, // 压缩大小
            brotliSize: true,
          }),
        ],
        output: {
          manualChunks: {
            theme: ["vitepress-theme-teek"],
          },
        },
      },
      terserOptions: {
        compress: {
          drop_console: true, // 移除所有 console.* 调用（生产环境建议开启）
          drop_debugger: true, // 移除 debugger 语句（生产环境必备）
          pure_funcs: ["console.info"], // 保留 console.info 调用（白名单机制）
          dead_code: true, // 移除不可达代码（消除死代码）
          arrows: true, // 将 function 转换为箭头函数（优化代码体积）
          unused: true, // 移除未使用的变量/函数（需确保不影响程序逻辑）
          join_vars: true, // 合并连续 var 声明（优化作用域）
          collapse_vars: true, // 内联单次使用的变量（体积优化）
        },
        format: {
          comments: false, // 移除所有注释（保留版权声明需使用正则表达式）
          beautify: false, // 禁用代码美化（进一步减小体积）
          preamble: "/* 项目版本 1.0.0 */", // 文件头部添加版权声明（需遵守 MIT 协议）
        },
        mangle: {
          toplevel: true, // 混淆顶级作用域变量名（保留 class/function 名称）
          properties: false, // 保留对象属性名（防止破坏 DOM 属性绑定）
        },
      },
    },
  },
});
