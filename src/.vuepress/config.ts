import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  // locales: {
  //   "/": {
  //     lang: "zh-CN",
  //     title: "博客演示",
  //     description: "A blog demo for vuepress-theme-hope",
  //   },
  //   "/en/": {
  //     lang: "en-US",
  //     title: "demo",
  //     description: "vuepress-theme-hope 的博客演示",
  //   },
  // },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
