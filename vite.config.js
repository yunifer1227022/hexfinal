import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path"

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [vue()],
  base: "/",
  envDir: path.resolve(__dirname, "./env"),
  css : {
    modules: {
      localsConvention:'camelCase'
    }
  }
})
