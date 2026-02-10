import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import colorBlockPlugin from "./vite-plugin-color-block.js";

export default defineConfig({
  plugins: [tailwindcss(), colorBlockPlugin()],
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
