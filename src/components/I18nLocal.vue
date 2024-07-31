<template>
  <div>
    <h1>I18nLocal</h1>
    {{ locale }}
    <p>{{ t("hello") }}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n({
  inheritLocale: true,
  useScope: "local", // global|local
});
</script>

<i18n>
  {
    "en": {
      "hello": "Hello world!"
    },
    "zhCN": {
      "hello": "你好 世界!"
    }
  }
</i18n>

<style lang="scss" scoped></style>
