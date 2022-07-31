<script setup lang="ts">
import { RouterView } from "vue-router";
import SidebarContainer from "./SidebarContainer.vue";
import HeaderContainer from "./HeaderContainer.vue";
</script>

<template>
  <div class="layout-container">
    <SidebarContainer />
    <div class="main-container">
      <HeaderContainer />
      <div class="main-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  flex-shrink: 0;
  .main-container {
    width: 100%;
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main-content {
      flex: 1 1 auto;
      overflow-y: auto;
    }
  }
}
</style>
