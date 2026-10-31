import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    /* El backend de enriquecimiento (FastAPI, `backend/`). El proxy evita
       CORS en desarrollo: el navegador sólo habla con Vite. */
    proxy: {
      '/api': {
        target: process.env.NEXO_API ?? 'http://127.0.0.1:8000',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
      },
    },
  },
})
