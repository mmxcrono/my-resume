<script setup lang="ts">
import SiteNav from '@/components/SiteNav.vue';
import { StatusBar } from '@capacitor/status-bar';

// Display content under transparent status bar (Android only)
// StatusBar.setOverlaysWebView({ overlay: false });
StatusBar.setBackgroundColor({
  color: '#1d2549',
});
</script>

<template>
  <div class="wrapper">
    <SiteNav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins';
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
main {
  flex: 1;
  overflow: auto;
  padding: 1em;

  /* @include themed-scrollbar; */
}
</style>
