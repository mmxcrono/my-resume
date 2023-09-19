<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue';
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <div class="wrapper">
    <main>
      <TopHeader />
      <NavMenu />
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins';
main {
  display: flex;
  flex-direction: column;
}
</style>
