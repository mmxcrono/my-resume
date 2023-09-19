<script setup lang="ts">
import { ref } from 'vue';
import { StatusBar } from '@capacitor/status-bar';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

import Menu from '@/assets/menu.svg';
import MenuOpen from '@/assets/menu-open.svg';
import { useNavigationStore, navItems } from '@/stores/navigation';

const navStore = useNavigationStore();
const { toggleMenu } = navStore;
const { isMenuOpen } = storeToRefs(navStore);

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
</script>

<template>
  <header class="header">
    <div class="header__left">{{ title }}</div>

    <div class="header__right">
      <nav class="header__desktopMenu">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="header__link"
          :class="{
            'header__link--active': item.path === route.path,
          }"
          >{{ item.title }}</router-link
        >
      </nav>
      <button @click="toggleDark">
        <span v-if="isDark">🌙</span>
        <span v-else>🌞</span>
      </button>

      <div class="header__mobileMenu">
        <component :is="MenuOpen" v-if="isMenuOpen" class="material-icon" @click="toggleMenu" />
        <component :is="Menu" v-else class="material-icon" @click="toggleMenu" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins';

.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1em;
  background-color: var(--clr-surface-1);
  width: 100%;

  position: fixed;
  top: 0;
  z-index: 2;

  &__right {
    display: flex;
    gap: 1em;
  }

  &__link {
    font-weight: var(--fw-semi-bold);

    &--active {
      color: var(--clr-primary-600);
      border-bottom: 2px solid var(--clr-primary-600);
    }
  }

  &__desktopMenu {
    display: none;
    gap: 2em;

    @include breakpoint(md, min) {
      display: flex;
    }
  }

  &__mobileMenu {
    @include breakpoint(md, min) {
      display: none;
    }
  }
}

.material-icon {
  cursor: pointer;
}
</style>
