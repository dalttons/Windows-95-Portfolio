import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Aislamos ÚNICAMENTE la carga masiva en Base64.
          // Dejamos que el algoritmo nativo de Vite optimice y separe React y el resto de librerías.
          if (id.includes('@react95/clippy')) {
            return 'vendor-clippy';
          }
        }
      }
    }
  }
})