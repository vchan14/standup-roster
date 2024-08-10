import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss';
import path from 'node:path'


// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['firebase/auth', 'firebase/app', "firebase/firestore"]
  },
  build: {
    target: "esnext",
    rollupOptions: {
      external: ['firebase/auth', 'firebase/app', "firebase/firestore"]
    }
  }
})
