import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
    mimeTypes: {
      'application/javascript': ['js'],
    },
  },
  build: {
    rollupOptions: {
      external: [
        '@cloudinary/url-gen', // Agrega esta línea
      ],
    },
  },
 
  plugins: [react()],
})
