import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: './build',
    emptyOutDir: true,
  },
  plugins: [react()],
})
