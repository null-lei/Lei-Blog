
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 添加您的别名配置
    }
  },
  base: '/Lei-Blog/', // 添加 base 配置
  build: {
    outDir: 'docs' // 添加输出目录配置
  }
})
