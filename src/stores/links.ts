import { defineStore } from 'pinia';

import LinkedIn from '@/assets/linkedin.svg';
import GitHub from '@/assets/github.svg';
import FilePdf from '@/assets/file-pdf-solid.svg';
import React from '@/assets/react.svg';
import Vuejs from '@/assets/vuejs.svg';
import Nodejs from '@/assets/nodejs.svg';
import Docker from '@/assets/docker.svg';
import Kubernetes from '@/assets/kubernetes.svg';
import Brain from '@/assets/brain.svg';
import RubyRails from '@/assets/language-ruby-on-rails.svg';

interface Link {
  label: string;
  href?: string;
  target?: string;
  component?: string;
}

const socialLinks: Link[] = [
  {
    href: 'https://linkedin.com/in/hoangn',
    target: 'linkedin',
    component: LinkedIn,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/mmxcrono',
    target: 'github',
    component: GitHub,
    label: 'GitHub',
  },
];

const preferredLinks: Link[] = [
  {
    href: 'https://react.dev/',
    target: 'react',
    component: React,
    label: 'React',
  },
  {
    href: 'https://reactnative.dev/',
    target: 'react-native',
    component: React,
    label: 'React Native',
  },
  {
    href: 'https://vuejs.org/',
    target: 'vue',
    component: Vuejs,
    label: 'Vue',
  },
  {
    href: 'https://vitejs.dev/',
    target: 'vite',
    label: 'Vite',
  },
  {
    href: 'https://vitest.dev/',
    target: 'vitest',
    label: 'Vitest',
  },
  {
    label: 'Typescript',
  },
  {
    label: 'SASS/SCSS',
  },
  {
    href: 'https://storybook.js.org/',
    target: 'storybook',
    label: 'Storybook',
  },
  {
    href: 'https://nodejs.org/en',
    target: 'nodejs',
    label: 'Nodejs',
    component: Nodejs,
  },
  {
    href: 'https://expressjs.com/',
    target: 'express',
    label: 'Express',
  },
  {
    href: 'https://www.docker.com/',
    target: 'docker',
    label: 'Docker',
    component: Docker,
  },
];

const otherLinks: Link[] = [
  {
    href: 'https://www.dropbox.com/scl/fi/50frmyhnfw7icah2jyy0m/Hoang_Nguyen_Resume_2023.pdf?rlkey=vsrrynzh2twv4q3lzdw417pme&dl=0',
    target: '_blank',
    component: FilePdf,
    label: 'Resume',
  },
];

const learningLinks: Link[] = [
  {
    href: 'https://kubernetes.io/',
    target: 'kubernetes',
    component: Kubernetes,
    label: 'Kubernetes',
  },
  {
    href: 'https://chat.openai.com/',
    target: 'chatgpt',
    component: Brain,
    label: 'ChatGPT',
  },
  {
    href: 'https://rubyonrails.org/',
    target: 'ruby-on-rails',
    component: RubyRails,
    label: 'Ruby on Rails',
  },
  {
    href: 'https://capacitorjs.com/',
    target: 'capacitor',
    label: 'Ionic Capacitor',
  },
];

export const useLinksStore = defineStore('aboutLinks', {
  state: () => ({
    socialLinks,
    otherLinks,
    preferredLinks,
    learningLinks,
  }),
  actions: {},
});
