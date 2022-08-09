<script setup lang="ts">
import { ref } from "vue";
// import type { RouteRecordRaw } from "vue-router";

defineProps<{
  route: {
    children: any;
    path: any;
    meta: any;
  };
}>();

const onlyOneChild: any = ref(null);

function hasOneShowingChild(children: any = [], parent: any): boolean {
  const showingChidren = children.filter((item: any) => {
    if (item.hidden) {
      return false;
    } else {
      onlyOneChild.value = item;
      return true;
    }
  });

  if (showingChidren.length === 1) {
    return true;
  }

  if (showingChidren.length === 0) {
    onlyOneChild.value = {
      ...parent,
      path: "",
      noShowingChildren: true,
    };
    return true;
  }

  return false;
}
</script>

<template>
  <template
    v-if="
      hasOneShowingChild(route.children, route) &&
      (!onlyOneChild.children || onlyOneChild.noShowingChildren)
    "
  >
    <el-menu-item :index="route.path">{{
      onlyOneChild.meta.title
    }}</el-menu-item>
  </template>
  <el-sub-menu v-else :index="route.path">
    <template #title>
      <span v-if="route.meta" :icon="route.meta && route.meta.icon">
        {{ route.meta.title }}
      </span>
    </template>
    <NavMenuItem
      v-for="(child, key) in route.children"
      :route="child"
      :key="key"
    ></NavMenuItem>
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>
