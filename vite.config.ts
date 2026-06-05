import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Si el módulo viene de node_modules, lo separamos
          if (id.includes('node_modules')) {
            // Aislamos el desastre de @react95/clippy en su propio archivo
            if (id.includes('@react95/clippy')) {
              return 'vendor-clippy';
            }
            // Agrupamos React y la gestión de estado
            if (id.includes('react') || id.includes('zustand')) {
              return 'vendor-core';
            }
            // El resto de dependencias
            return 'vendor-others';
          }
        }
      }
    }
  }
})