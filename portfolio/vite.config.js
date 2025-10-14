import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 👈 nécessaire pour définir les alias

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // ✅ chemin relatif (important pour Netlify)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
})
