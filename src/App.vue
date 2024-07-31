<template>
  <div class="root">
    <ColorSelector v-model:value="background" />
    <div>
      <form>
        {{ locale }}
        <label>{{ t("language") }}</label>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="zhCN">zhCN</option>
        </select>
      </form>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useConfigStore } from "@/pinia/config";
import ColorSelector from "./components/ColorSelector.vue";

const configStore = useConfigStore();

// 回退到全局没有翻译
const { t, locale } = useI18n({});

const background = computed({
  get: () => configStore.gBackground,
  set: configStore.setBackground,
});

const init = () => {
  configStore.initTheme();
};

onMounted(init);
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: var(--background-color);
}
</style>

<style lang="scss">
h1 {
  font-weight: bold;
  font-size: 24px;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
