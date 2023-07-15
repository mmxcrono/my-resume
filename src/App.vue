<script setup lang="ts">
import SiteNav from '@/components/SiteNav.vue';
</script>

<template>
  <div class="main-grid">
    <main>
      <router-view />
    </main>
    <aside>
      <SiteNav />
    </aside>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/mixins';

.main-grid {
  display: grid;
  gap: 3vw;
  grid-template-columns: 15rem 1fr;
  grid-auto-flow: dense;
  align-items: center;
  min-height: 100vh;
  min-height: 100dvh;

  @include breakpoint(md, max) {
    align-items: inherit;

    grid-template-columns: inherit;
    grid-template-rows: 1fr auto;
  }
}

aside {
  grid-column: 1;
  align-self: stretch;

  @include breakpoint(md, max) {
    grid-column: inherit;
  }
}

main {
  grid-column: 2;
  width: calc(100vw - 15rem - 3vw);

  @include breakpoint(md, max) {
    grid-column: inherit;
    padding: 1rem;
    width: 100%;
    overflow-x: hidden;
  }
}
</style>
