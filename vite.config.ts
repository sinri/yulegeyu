import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'chrome64',
  },
  base:'/oc/special/2022-llgq/dist/',
  plugins: [
    vue({
      // 支持 Markdown 文件加载
      include: [/\.vue$/],
    }),
    legacy({
      targets: ['defaults', 'ie >= 11', 'chrome >= 52','chrome 69'],  //需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks:true,
      polyfills:[
         'es.symbol',
         'es.array.filter',
         'es.promise',
         'es.promise.finally',
         'es/map',
         'es/set',
         'es.array.for-each',
         'es.object.define-properties',
         'es.object.define-property',
         'es.object.get-own-property-descriptor',
         'es.object.get-own-property-descriptors',
         'es.object.keys',
         'es.object.to-string',
         'web.dom-collections.for-each',
         'esnext.global-this',
         'esnext.string.match-all'
     ]
    })
  ],
});
