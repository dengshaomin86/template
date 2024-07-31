import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式，则需要将其设置为false。默认是true
  globalInjection: true, // 全局注入 $t 函数，默认 9.1版本后是true
  locale: "en",
  messages,
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  fallbackWarn: false,
});

export default i18n;
