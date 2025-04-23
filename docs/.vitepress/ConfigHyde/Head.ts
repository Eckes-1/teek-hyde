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
  // 阿里在线矢量库
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_2989306_w303erbip9.css",
      defer: "defer",
    },
  ],
  [
    // 阿里图标库symbol 引用
    "script",
    {
      src: "https://at.alicdn.com/t/c/font_4899452_xj7acblxpxj.js",
      defer: "defer",
    },
  ],
  //免费的音乐播放器
  // [
  //   "script",
  //   {
  //     type: "text/javascript",
  //     src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js",
  //     defer: "defer", // 添加defer属性，确保脚本在DOM加载完成后执行
  //   },
  // ], // 插入自定义脚本
  // [
  //   "script",
  //   {
  //     type: "text/javascript",
  //     id: "myhk",
  //     src: "https://myhkw.cn/api/player/174131850675",
  //     key: "174131850675",
  //     m: "",
  //     defer: "defer", // 添加defer属性，确保脚本在DOM加载完成后执行
  //   },
  // ],
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
];
