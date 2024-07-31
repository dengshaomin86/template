import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8001,
  },
  resolve: {
    alias: {
      "@": "/src",
      // vue: 'vue/dist/vue.esm-bundler.js', // 运行时编译
    },
  },
});
