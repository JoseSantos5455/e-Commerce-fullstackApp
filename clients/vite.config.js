import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  build: {
    rollupOptions: {
      external: ['@cloudinary/url-gen/qualifiers/quality'],
    },
  },
  plugins: [react()],
})
