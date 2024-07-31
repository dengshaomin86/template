<template>
  <div>
    <h1>Home - {{ t("home") }}</h1>
    <I18nLocalVue />
    <RouterList />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import RouterList from "@/components/RouterList.vue";
import I18nLocalVue from "@/components/I18nLocal.vue";

const { t } = useI18n();
</script>

<style lang="scss" scoped></style>
