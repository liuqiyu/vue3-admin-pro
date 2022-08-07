<script setup lang="ts">
const props = defineProps<{
  route: object;
}>();

// const { path } = props.route;
console.log(props.route.path);
</script>

<template>
  <div class="nav-menu-item">
    {{ route }}
    <el-menu-item :index="route.path">{{ route.path }}</el-menu-item>
  </div>
</template>

<style lang="scss" scoped></style>
