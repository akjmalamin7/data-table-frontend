import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg"],
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/images': {
        target: 'http://localhost:4003', // Backend Express server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images/, '/src/assets/uploads/images'), // Correct the path here
      },
    },
  }
});
