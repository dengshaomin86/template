import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/styles/reset.scss";
import App from "./App.vue";
import router from "./router";
import { piniaPluginSaveState } from "./pinia/plugins/saveState";

const pinia = createPinia();
pinia.use(piniaPluginSaveState);

createApp(App).use(router).use(pinia).mount("#app");
