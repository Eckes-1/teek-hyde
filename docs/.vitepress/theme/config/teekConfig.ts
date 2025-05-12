import type { TeekConfig } from "vitepress-theme-teek/config";
import { Features } from "../../ConfigHyde/Features"; // 导入Features模块
import { FriendLink } from "../../ConfigHyde/FriendLink"; // 导入FriendLink模块
import { HitokotoDate } from "../../ConfigHyde/HitokotoDate"; // 导入HitokotoData模块
import { SocialDate } from "../../ConfigHyde/SocialDate"; // 导入SocialDate社交信息模块
import { Wallpaper } from "../../ConfigHyde/Wallaper"; // 导入Wallaper模块

// 文档配置
export const teekDocConfig: TeekConfig = {};

// 博客配置
export const teekBlogConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,

  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: "/avatar/avatar.webp",
    shape: "circle-rotate", // 头像风格：square 为方形头像，circle 为圆形头像，circle-rotate 可支持鼠标悬停旋转
    name: "Hyde",
    slogan: "人心中的成见是一座大山~",
    circleBgImg: "/avatar/circleBgImg.webp", // 头像圆形背景图
  },
  banner: {
    features: Features, //用于在首页展示一些功能介绍,也就是首页三个功能块
    enabled: true, // Banner 标题，默认读取 vitepress 的 title 属性
    name: "Hyde Blog 🎉", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "fullImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    imgInterval: 8000, // 轮播时间
    imgShuffle: true, // 当多张大图时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgSrc: Wallpaper, // Banner 大图
    descStyle: "types", //打字机效果；types 为文字打印风格，switch 为文字切换风格
    maskBg: "rgba(0, 0, 0, 0.4)", // Banner 大图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 default 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "3.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    // descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: HitokotoDate, // 打字机描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  },
  // 首页顶部按 F11 开启壁纸模式
  wallpaper: {
    enabled: true, // 是否启用壁纸模式
    hideBanner: false, // 开启壁纸模式后，全屏是否显示打字机文案，
    hideMask: true, // 开启壁纸模式后，是否隐藏 Banner 或 bodyBgImage 的遮罩层，则确保 banner.mask 和 bodyBgImage.mask 为 true 才生效
    hideWaves: false, // 开启壁纸模式后，是否隐藏 Banner 波浪组件，仅 banner.bgStyle = 'fullImg' 生效
  },

  friendLink: FriendLink, // 友链配置
  social: SocialDate, //社交信息配置
};
