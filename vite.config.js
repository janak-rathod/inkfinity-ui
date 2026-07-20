import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Proxy /api to the Spring Boot backend during dev so you can also
    // just call fetch('/api/...') without hardcoding a host - optional,
    // src/api/client.js uses an explicit base URL from .env instead.
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true
      }
    }
  }
})
