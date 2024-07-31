import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/styles/reset.scss";
import App from "./App.vue";
import router from "./router";
import { piniaPluginSaveState } from "./pinia/plugins/saveState";
import i18n from "./i18n";

const pinia = createPinia();
pinia.use(piniaPluginSaveState);

createApp(App).use(router).use(pinia).use(i18n).use(ElementPlus).mount("#app");
