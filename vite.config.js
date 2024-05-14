import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitePluginRequire from 'vite-plugin-require'
// import babel from 'vite-plugin-babel'
// import { registerRouter } from './backend/router.js'
import commonjs from 'vite-plugin-commonjs'
import vueJsx from '@vitejs/plugin-vue-jsx'
import customMiddlewarePlugin from './middle-plugin/customMiddlewarePlugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [customMiddlewarePlugin(), vueJsx(), vue(), commonjs()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variable.scss";
                         @import "@/assets/scss/mixin.scss";`
      }
    }
  },
  server: {}
})
