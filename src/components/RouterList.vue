<template>
  <div>
    <template v-for="item in list">
      <div>
        <router-link :to="item.name">{{ item.name }}</router-link>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const list = computed(() => router.options.routes.filter((v) => !/^(root|notfound)$/i.test(<string>v.name)));
</script>

<style lang="scss" scoped>
a {
  color: #666;

  &.router-link-active {
    color: #c490ff;
  }
}
</style>
