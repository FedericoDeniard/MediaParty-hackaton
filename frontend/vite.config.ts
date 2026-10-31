import { defineConfig, searchForWorkspaceRoot } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    /* Las notas de prueba viven en `corpus/`, fuera del frontend. */
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd()), resolve(import.meta.dirname, '../corpus/notas')],
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
