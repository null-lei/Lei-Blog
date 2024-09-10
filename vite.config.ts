import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // 添加您的别名配置
    }
  },
  base: '/', // 确保 base 配置正确
  build: {
    outDir: 'docs' // 输出目录配置
  }
})