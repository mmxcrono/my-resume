<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import Menu from '@/assets/menu.svg';
import MenuOpen from '@/assets/menu-open.svg';
import { ref } from 'vue';

import { StatusBar } from '@capacitor/status-bar';

interface Item {
  title: string;
  path: string;
}
const router = useRouter();
const route = useRoute();

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const isDark = ref<boolean>(prefersDark.matches);

const updateTheme = () => {
  document.body.classList.toggle('dark', isDark.value);
  StatusBar.setBackgroundColor({
    color: isDark.value ? '#282724' : '#dddad5',
  });
};

updateTheme();

const toggleDark = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const title = import.meta.env.VITE_APP_TITLE;

const items: Item[] = [
  {
    title: 'About',
    path: '/',
  },
  {
    title: 'Experience',
    path: '/skills-experience',
  },
  {
    title: 'Education',
    path: '/education-certs',
  },
];

const onItemClick = (item: Item) => {
  router.push(item.path);
  closeMenu();
};
const isMenuOpen = ref<boolean>(false);

const onMenuClick = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__item">{{ title }}</div>

    <div class="header__item">
      <button @click="toggleDark">
        <span v-if="isDark">🌑</span>
        <span v-else>🌞</span>
      </button>
      <component :is="MenuOpen" v-if="isMenuOpen" class="material-icon" @click="onMenuClick" />
      <component :is="Menu" v-else class="material-icon" @click="onMenuClick" />
    </div>
  </header>
  <section v-show="isMenuOpen" class="nav-overlay" @click="closeMenu">
    <nav class="navigation">
      <div
        v-for="item in items"
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

<style lang="scss" scoped>
@import '@/styles/mixins';

.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1em;
  background-color: var(--clr-surface-1);

  &__item {
    display: flex;
    gap: 1em;
  }
}

.material-icon {
  cursor: pointer;
}

.nav-overlay {
  background: var(--clr-overlay);
  position: absolute;
  inset: 0;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 3em;
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
