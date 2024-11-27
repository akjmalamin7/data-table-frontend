import react from '@vitejs/plugin-react';
import path from "path";
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg"],
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
