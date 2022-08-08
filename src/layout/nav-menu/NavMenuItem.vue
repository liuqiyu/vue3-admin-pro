<script setup lang="ts">
import { ref }  from 'vue'
const props = defineProps<{
  route: {
    path: string,
    children: any,
    meta: any
  };
}>();

let onlyOneChild = ref(null);

function hasOneShowingChild (children: any = [], parent: any): boolean {
  console.log(children, 666)
  const showingChidren = children.filter(item => {
    if (item.hidden) {
      return false
    } else {
      onlyOneChild.value = item
      return true
    }
  })
  // console.log(showingChidren, 888)
  console.log(onlyOneChild.value, 111)
  // console.log(onlyOneChild.value.name, 111)

  if (showingChidren.length === 1) {
    return true
  }

  if (showingChidren.length === 0) {
    onlyOneChild.value = {
      ...parent,
      path: '',
      noShowingChildren: true
    }
    return true
  }
  // console.log(onlyOneChild.value, 777)

  return false
}
</script>

<template>
  <template v-if="hasOneShowingChild(route.children, route) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
      <el-menu-item :index="route.path">{{onlyOneChild.meta.title}}</el-menu-item>
  </template>
  <!-- <div v-else>123</div> -->
  <el-sub-menu v-else :index="route.path">
      <template #title>
        <span v-if="route.meta"
              :icon="route.meta && route.meta.icon">
              {{route.meta.title}}
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
