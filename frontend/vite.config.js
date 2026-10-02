import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // y-monaco ke broken path ko sahi jagah point karne ke liye
      "monaco-editor/esm/vs/editor/editor.api.js": "monaco-editor",
    },
  },
});
