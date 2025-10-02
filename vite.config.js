import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If using GitHub Pages at /WebPortfolio/, base must match your repo name.
export default defineConfig({
  plugins: [react()],
  base: '/WebPortfolio/',   // <-- important for GitHub Pages
})
