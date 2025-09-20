import {
  About,
  Exclamation,
  FriendshipLinks,
  Home,
  MessageBoard,
  Music,
  Other,
  PhotoAlbum,
  TreeHollow,
} from "./SvgList";

export const menuData = {
  header: {
    title: "Hyde Blog",
    svg: Exclamation,
  },
  body: [
    {
      text: "首页",
      svg: Home,
      click(frontmatter: any, navigateTo: Function) {
        navigateTo("/");
      },
    },
    {
      text: "关于我",
      svg: About,
      click(frontmatter: any, navigateTo: Function) {
        navigateTo("/About");
      },
    },
    {
      text: "其他",
      svg: Other,
      subMenu: [
        {
          text: "树洞",
          svg: TreeHollow,
          click(frontmatter: any, navigateTo: Function) {
            navigateTo("/message-area");
          },
        },
        {
          text: "留言板",
          svg: MessageBoard,
          click(frontmatter: any, navigateTo: Function) {
            navigateTo("/message-area");
          },
        },
      ],
    },
    {
      text: "友链",
      svg: FriendshipLinks,
      click(frontmatter: any, navigateTo: Function) {
        navigateTo("/friend-link");
      },
    },
    {
      text: "音乐",
      svg: Music,
      click(frontmatter: any, navigateTo: Function) {
            navigateTo("/music");

      },
    },
    {
      text: "相册",
      svg: PhotoAlbum,
      click(frontmatter: any, navigateTo: Function) {
            navigateTo("/photo");
      },
    },
  ],
  footer: {
    copy: true,
    refresh: true,
  },
};
