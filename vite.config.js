import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Aquí se indica la dirección del backend durante el desarrollo.
    // Vite reenvía /api/productos a http://localhost:8080/api/productos.
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  build: {
    // Incluye ambas páginas en el build, con entradas de React independientes.
    rollupOptions: {
      input: {
        sitio: fileURLToPath(new URL('./index.html', import.meta.url)),
        admin: fileURLToPath(new URL('./admin.html', import.meta.url)),
      },
    },
  },
});
