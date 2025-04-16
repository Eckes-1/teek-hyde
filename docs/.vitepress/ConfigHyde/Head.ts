const description = ["Hd Security 使用文档", "认证框架"].toString();

// 导出head.ts
export const HeadData = [
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }], //不蒜子统计
  ["meta", { name: "author", content: "Tianke" }],
  [
    "meta",
    {
      name: "viewport",
      content:
        "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    },
  ],
  [
    "meta",
    {
      name: "description",
      description,
    },
  ],
  ["meta", { name: "keywords", description }],
  ["link", { rel: "icon", href: "/favicon.ico", type: "image/png" }],
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_2989306_w303erbip9.css",
    },
  ], // 阿里在线矢量库
  //免费的音乐播放器
  [
    "script",
    {
      type: "text/javascript",
      src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js",
    },
  ], // 插入自定义脚本
  [
    "script",
    {
      type: "text/javascript",
      id: "myhk",
      src: "https://myhkw.cn/api/player/174131850675",
      key: "174131850675",
      m: "1",
      defer: "defer", // 添加defer属性，确保脚本在DOM加载完成后执行
    },
  ],
  // 51.la数据挂件
  [
    "script",
    {
      charset: "UTF-8",
      id: "LA_COLLECT",
      src: "//sdk.51.la/js-sdk-pro.min.js",
    },
  ],
  [
    "script",
    {},
    `LA.init({id:"3LmDV843SgGyC2Zp",ck:"3LmDV843SgGyC2Zp",autoTrack:true,hashMode:true,screenRecord:true})`,
  ],
  // 鼠标爆炸效果
  [
    "script",
    {
      type: "text/javascript",
      src: "https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/animejs/3.2.1/anime.min.js", //字节cdn
      id: "anime.min.js-js",
      defer: "defer",
    },
  ],
  [
    "script",
    {
      // src: "https://cpython666.github.io/js/clickjs/fireworks.js",
      src: "https://live2d-hyde.netlify.app/Clickfireworks.js",
      defer: "defer",
    },
  ],
];
