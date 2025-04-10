// 底部信息配置
export const FooterInfo = {
  topMessage: ["到达胜利之前无法回头！"],
  bottomMessage: ["人心中的成见是一座大山~"],
  copyright: {
    createYear: 2021,
    suffix: "Hyde Blog",
  },
  icpRecord: {
    name: "桂ICP备2021009994号",
    link: "http://beian.miit.gov.cn/",
  },
  // 网络安全备案信息配置
  securityRecord: {
    name: "甘公网安备62102702000211号",
    link: "https://beian.mps.gov.cn/",
  },
  customHtml: `<p>小破站已运行了 <span id="footer-runtime"></span></p>`, // 搭配 ./theme/helper/useFooterRuntime.ts 使用才有效果
};
