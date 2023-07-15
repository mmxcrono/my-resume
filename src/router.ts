import { createRouter, createWebHashHistory } from 'vue-router';
import AboutMe from '@/screens/AboutMe.vue';
import SkillsExperience from '@/screens/SkillsExperience.vue';
import EducationCerts from '@/screens/EducationCerts.vue';

const routes = [
  { path: '/', component: AboutMe },
  { path: '/skills-experience', component: SkillsExperience },
  { path: '/education-certs', component: EducationCerts },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
