import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      utils: path.resolve(__dirname, "src/utils"),
      router: path.resolve(__dirname, "src/router"),
      types: path.resolve(__dirname, "src/types"),
      assets: path.resolve(__dirname, "src/assets"),
      store: path.resolve(__dirname, "src/store"),
      pages: path.resolve(__dirname, "src/pages"),
      composables: path.resolve(__dirname, "src/composables"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
});
