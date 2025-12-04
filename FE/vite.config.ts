import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // THÊM ĐOẠN NÀY VÀO:
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Cho phép Docker truy cập
    strictPort: true,
    port: 3000,
  }
})
