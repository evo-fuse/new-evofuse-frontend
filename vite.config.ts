import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@thumbnails': fileURLToPath(new URL('./src/assets/thumbnails', import.meta.url)),
      '@slides': fileURLToPath(new URL('./src/assets/slides', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress eval warnings from lottie-web
        if (warning.id?.includes('lottie') || warning.message?.includes('eval')) {
          return
        }
        warn(warning)
      }
    }
  }
})
