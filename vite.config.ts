import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, "./src/locales/**")],
    }),
  ],
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
