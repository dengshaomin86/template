<template>
  <input type="color" v-bind="$attrs" @input="input" />
</template>

<script setup lang="ts">
// type HTMLElementEvent<T extends HTMLElement> = Event & { target: T };
// HTMLElementEvent<HTMLInputElement>

const emits = defineEmits(["update:value"]);
const input = (e: Event) => {
  emits("update:value", (<HTMLInputElement>e.target).value);
};
</script>

<style lang="scss" scoped>
input[type="color"] {
  appearance: none;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  background: transparent;
  cursor: pointer;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 3px;
  border: none;
}

input[type="color"]::-webkit-color-swatch {
  border: 1px solid #666;
}
</style>
