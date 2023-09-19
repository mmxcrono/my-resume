import { createRouter, createWebHashHistory } from 'vue-router';
import { Component } from 'vue';

import AboutMe from '@/screens/AboutMe.vue';
import MyExperience from '@/screens/MyExperience.vue';
interface Route {
  path: string;
  component: Component;
  meta: {
    title: string;
  };
}
const routes: Route[] = [
  {
    path: '/',
    component: AboutMe,
    meta: {
      title: 'About Me',
    },
  },
  {
    path: '/my-experience',
    component: MyExperience,
    meta: {
      title: 'Experience',
    },
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else {
      window.scrollTo(0, 0);
    }
  },
});

router.beforeEach((to) => {
  document.title = (to.meta?.title as string) ?? 'My Resume';
});
