// nav导航栏配置
export const Nav = [
  {
    text: "🏡首页",
    items: [
      { text: "首页", link: "/" },
      { text: "起始页", link: "https://hyde.seasir.top/" },
    ],
  },
  {
    text: "📖笔记专栏",
    items: [
      {
        text: "博客搭建",
        items: [{ text: "小张的个人博客", link: "/Column/" }],
      },
      {
        text: "vuepress-theme-vdoing",
        items: [{ text: "vdoing折腾", link: "/Vdoing-cata/" }],
      },
      {
        text: "Teek主题",
        link: "/TeeK",
      },
    ],
  },
  {
    text: "🧰工具资源", // 目录页链接，此处 link 是 vdoing 主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: "开发工具", link: "/tools/" },
      { text: "VSCode配置", link: "/vscode/" },
      { text: "Git教程", link: "/git/" },
      { text: "Docker笔记", link: "/docker/" },
      { text: "实用软件", link: "/software/" },
    ],
  },
  {
    text: "🏙️生活娱乐",
    items: [
      { text: "相册", link: "https://photo.seasir.top/" },
      { text: "音乐", link: "https://www.zhouyu2156.cn:5173/music" },
      { text: "电影", link: "/go-cata/" },
    ],
  },
  { text: "👂留言板块", link: "/message-area/" },
  {
    text: "👏文章索引",
    items: [
      {
        text: "本站",
        items: [
          { text: "分类", link: "/categories/" },
          { text: "标签", link: "/tags/" },
          { text: "归档", link: "/archives/" },
        ],
      },
    ],
  },
  {
    text: "🌐站点信息",
    items: [
      { text: "关于博主", link: "/about-me/" },
      { text: "关于本站", link: "/about-website/" },
      { text: "友链链接", link: "/friends/" },
      { text: "网站导航", link: "/nav/" },
      { text: "开源项目", link: "/opensource-project/" },
      {
        text: "网站统计",
        link: "https://umami.seasir.top/share/rvVBNZWa0sUCN6wG/teek.seasir.top",
      },
    ],
  },
];
