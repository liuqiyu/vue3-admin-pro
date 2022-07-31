<script setup lang="ts">
import SidebarLogo from "./SidebarLogo.vue";
import SidebarMenu from "./SidebarMenu.vue";
</script>

<template>
  <div class="sidebar-container">
    <SidebarLogo />
    <SidebarMenu />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-container {
  width: 210px;
  height: 100%;
  background-color: #304156;
  flex: 0 0 auto;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
}
</style>
