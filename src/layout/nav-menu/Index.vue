<script setup lang="ts">
import NavMenuItem from "./NavMenuItem.vue";
import { constantModules } from "@/router";
console.log(constantModules);
</script>

<template>
  <div class="sidebar-menu">
    <el-scrollbar>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <NavMenuItem
          v-for="(route, key) in constantModules"
          :route="route"
          :base-path="route.path"
          :key="key"
        ></NavMenuItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-menu {
  flex: 1 1 auto;
  height: 0;

  .el-scrollbar {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
  p {
    height: 100px;
    color: #fff;
  }

  .el-menu {
    border: none;
  }
}
</style>
