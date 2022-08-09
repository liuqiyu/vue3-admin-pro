<template>
  <!-- eslint-disable vue/require-component-is -->
  <component :is="type" v-bind="linkProps()">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
}>();

const type = "router-link";

function linkProps() {
  console.log(props.to);
  return {
    to: props.to,
  };
}
</script>
