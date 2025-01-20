import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Max Kb Docs",
      description: "Max Kb Docs",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "MaxKb 文档",
      description: "Max Kb文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
