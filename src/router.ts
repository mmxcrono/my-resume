import { createRouter, createWebHashHistory } from 'vue-router';
import MyResume from '@/screens/MyResume.vue';

const routes = [{ path: '/', component: MyResume }];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
