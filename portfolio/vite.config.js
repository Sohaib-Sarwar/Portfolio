import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Long-lived vendor chunks: content edits don't bust the React/MUI/Framer caches
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) return 'motion'
          if (id.includes('@mui') || id.includes('@emotion')) return 'mui'
          if (id.includes('react')) return 'react'
          return 'vendor'
        },
      },
    },
  },
})
