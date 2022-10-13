import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/oc/special/2022-llgq/dist/',
  plugins: [
    vue({
      // 支持 Markdown 文件加载
      include: [/\.vue$/],
    }),
  ],
});
