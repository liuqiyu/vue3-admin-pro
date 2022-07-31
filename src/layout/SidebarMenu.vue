<script setup lang="ts"></script>

<template>
  <div class="sidebar-menu">
    <el-scrollbar>
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
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
}
</style>
