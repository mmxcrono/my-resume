import { createRouter, createWebHashHistory } from 'vue-router';
import AboutMe from '@/screens/AboutMe.vue';
import MyExperience from '@/screens/MyExperience.vue';

const routes = [
  { path: '/', component: AboutMe },
  { path: '/my-experience', component: MyExperience },
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
