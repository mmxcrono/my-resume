<script setup lang="ts">
import { ref } from 'vue';
import { StatusBar } from '@capacitor/status-bar';

import Menu from '@/assets/menu.svg';
import MenuOpen from '@/assets/menu-open.svg';
import { useNavigationStore } from '@/stores/navigation';
import { storeToRefs } from 'pinia';

const navStore = useNavigationStore();
const { toggleMenu } = navStore;
const { isMenuOpen } = storeToRefs(navStore);

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
    <div class="header__item">{{ title }}</div>

    <div class="header__item">
      <button @click="toggleDark">
        <span v-if="isDark">🌙</span>
        <span v-else>🌞</span>
      </button>
      <component :is="MenuOpen" v-if="isMenuOpen" class="material-icon" @click="toggleMenu" />
      <component :is="Menu" v-else class="material-icon" @click="toggleMenu" />
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

  &__item {
    display: flex;
    gap: 1em;
  }
}

.material-icon {
  cursor: pointer;
}
</style>
