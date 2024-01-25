import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import * as compiler from '@vue/compiler-sfc'
import vue from '@vitejs/plugin-vue'
import { getLibDir } from './scripts/utils.mjs'
import { createVuePlugin } from 'vite-plugin-vue2'
import { isVue2, version } from 'vue-demi'
// ant-desing按需引入
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

import terser from '@rollup/plugin-terser'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    isVue2 ? createVuePlugin() : vue({
      compiler: compiler
    }),
    Components({
      resolvers: [ // ant design 自动按需引入
        AntDesignVueResolver({
          importStyle: false // css in js
        }),
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: isVue2 ? resolve('./node_modules/vue2') : resolve('./node_modules/vue3'),
      'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@vue/composition-api': resolve('./node_modules/@vue/composition-api')
    }
  }, 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/base.scss";`
      }
    }
  },
  optimizeDeps: {
    exclude: isVue2 
      ? ['vue-demi', 'element-plus', 'md-editor-v3', '@element-plus/icons-vue', 'vue-router3'] 
      : ['vue-demi', 'element-ui', 'vue-meditor', 'vue-router2']
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'packages', 'index.ts'),  // entry 是必需的，因为库不能使用HTML作为入口。
      name: 'elimenComponents', // 暴露的全局变量
      fileName: 'elimen-components' // 输出的包文件名，默认是 package.json 的 name 选项
    },
    rollupOptions: {
      plugins: [
        // 简化打包文件代码
        terser()
      ],
      external: ['vue', 'vue-demi', 'element-ui', 'element-plus'],
      output: {
        name: 'elimen-components',
        exports: 'named',
        externalLiveBindings: false,
        dir: getLibDir(version),
        globals: {
          vue: 'Vue',
          "vue-demi": "VueDemi",
        },
      }
    }
  },
  server: {
    host: true, // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
    port: 9002, // 指定开发服务器端口
    open: true // 开发服务器启动时，自动在浏览器中打开应用程序。当该值为字符串时，它将被用作 URL 的路径名。
  }
})
