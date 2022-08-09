<script setup lang="ts">
import { ref } from "vue";
// TODO path 使用报错
// import path from "path";
// import type { RouteRecordRaw } from "vue-router";
import NavMenuLink from "./NavMenuLink.vue";
// console.log(path);
const props = defineProps<{
  route: {
    children: any;
    path: any;
    meta: any;
  };
  basePath: string;
}>();

// console.log(props.basePath, 11111111111222);

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

function resolvePath(routePath: string): string {
  console.log(props.basePath, routePath, "a");
  // return path.resolve(props.basePath, routePath);
  return props.basePath + "/" + routePath;
}
</script>

<template>
  <template
    v-if="
      hasOneShowingChild(route.children, route) &&
      (!onlyOneChild.children || onlyOneChild.noShowingChildren)
    "
  >
    <NavMenuLink :to="resolvePath(onlyOneChild.path)">
      <el-menu-item :index="route.path">{{
        onlyOneChild.meta.title
      }}</el-menu-item>
    </NavMenuLink>
  </template>
  <el-sub-menu v-else :index="resolvePath(route.path)">
    <template #title>
      <span v-if="route.meta" :icon="route.meta && route.meta.icon">
        {{ route.meta.title }}
      </span>
    </template>
    <NavMenuItem
      v-for="child in route.children"
      :route="child"
      :key="child.path"
      :base-path="resolvePath(child.path)"
    ></NavMenuItem>
  </el-sub-menu>
</template>

<style lang="scss" scoped></style>
