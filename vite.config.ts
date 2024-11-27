import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg"],
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
