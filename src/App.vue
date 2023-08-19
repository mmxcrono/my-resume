<script setup lang="ts">
import SiteNav from '@/components/SiteNav.vue';
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <div class="wrapper">
    <main>
      <SiteNav />
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
