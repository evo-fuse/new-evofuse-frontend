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
  server: {
    host: "0.0.0.0"
  },
  build: {
    chunkSizeWarningLimit: 500, // Set warning limit to 500KB
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split node_modules into separate chunks
          if (id.includes('node_modules')) {
            // React and React-DOM in one chunk
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor'
            }
            // Lottie in its own chunk (large library)
            if (id.includes('lottie')) {
              return 'lottie-vendor'
            }
            // React icons in its own chunk
            if (id.includes('react-icons')) {
              return 'icons-vendor'
            }
            // React Helmet in its own chunk
            if (id.includes('react-helmet')) {
              return 'helmet-vendor'
            }
            // Other vendor libraries
            return 'vendor'
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      },
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
