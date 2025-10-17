import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/TBSNew1/', // ✅ Correct format for GitHub Pages
})
