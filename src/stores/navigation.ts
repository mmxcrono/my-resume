import { defineStore } from 'pinia';

export interface NavItem {
  title: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    title: `About Me`,
    path: '/',
  },
  {
    title: 'Experience',
    path: '/my-experience',
  },
];

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    isMenuOpen: false,
  }),
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});
