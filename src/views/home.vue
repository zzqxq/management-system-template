<template>
  <div>
    666

    <br>
    {{ userStore.user }}
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores";

const userStore = useUserStore();
</script>

<style lang="scss" scoped>

</style>