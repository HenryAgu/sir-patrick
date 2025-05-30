import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import * as path from "path"; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [ TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), tailwindcss(), react(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },},
});
