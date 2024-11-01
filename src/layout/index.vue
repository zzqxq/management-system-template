<template>
  <div class="layout">
    <div class="left">菜单</div>
    <div class="right">
      <div class="navBar">顶部</div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;

  .left {
    width: 200px;
    background-color: lightpink;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    .navBar {
      height: 60px;
      background-color: lightgreen;
    }
    .content {
      flex: 1;
      padding: 20px;
      background-color: lightseagreen;
    }
  }
}
</style>
