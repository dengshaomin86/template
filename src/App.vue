<template>
  <div class="root">
    <ColorSelector v-model:value="background" />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useConfigStore } from "@/pinia/config";
import ColorSelector from "./components/ColorSelector.vue";

const configStore = useConfigStore();

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
