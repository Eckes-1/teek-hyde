import { groupIconVitePlugin } from "vitepress-plugin-group-icons";
import viteImagemin from "vite-plugin-imagemin";
import { RssPlugin, RSSOptions } from "vitepress-plugin-rss";

const baseUrl = "https://teek.seasir.top";
const RSS: RSSOptions = {
  title: "Hyde Blog",
  baseUrl,
  copyright: "Copyright 2021-2025 Hyde Blog",
};

export function Plugins() {
  return [
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
    RssPlugin(RSS), //开启RSS功能
  ];
}
