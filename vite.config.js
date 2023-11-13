import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "https://styrale.github.io",
  plugins: [react()],
})
