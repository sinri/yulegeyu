import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'chrome64',
  },
  plugins: [
    vue({
      // 支持 Markdown 文件加载
      include: [/\.vue$/],
    }),
  ],
});
