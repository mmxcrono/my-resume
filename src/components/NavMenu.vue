<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

import { NavItem, useNavigationStore, navItems } from '@/stores/navigation';

const navStore = useNavigationStore();
const { toggleMenu } = navStore;
const { isMenuOpen } = storeToRefs(navStore);

const router = useRouter();
const route = useRoute();

const onItemClick = (item: NavItem) => {
  router.push(item.path);
};

const overlayClick = () => {
  toggleMenu();
};
</script>

<template>
  <section v-show="isMenuOpen" class="nav-overlay" @click="overlayClick">
    <nav class="navigation">
      <div
        v-for="item in navItems"
        :key="item.path"
        class="navigation__item"
        :class="{
          'navigation__item--active': route.path === item.path,
        }"
        @click="onItemClick(item)"
      >
        {{ item.title }}
      </div>
    </nav>
  </section>
</template>

<style scoped lang="scss">
.nav-overlay {
  background: var(--clr-overlay);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  padding-top: 3em;
  width: 100%;
  height: 100%;
}

.navigation {
  display: flex;
  flex-direction: column;
  padding: 1em;

  &__item {
    cursor: pointer;
    font-size: var(--fs-500);
    text-transform: uppercase;
    margin-bottom: 1em;
    text-align: right;

    &--active {
      text-decoration: underline;
    }
  }
}
</style>
