import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Isso corrige a tela branca no GitHub Pages.
  // O valor deve ser o nome do seu repositório entre barras.
  base: '/Portf-lio/', 
  server: {
    open: true, // Abre o navegador automaticamente ao rodar npm start
  }
})