<script setup lang="ts">
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
import ExternalLink from '@/components/ExternalLink.vue';

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
    label: 'SASS',
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

const name = import.meta.env.VITE_FULL_NAME;
</script>

<template>
  <div class="about-me">
    <h1 class="page-title eyebrow">About {{ name }}</h1>

    <ul class="about-me__items">
      <li>✅ Full Stack Engineer for over 9 years</li>
      <li>
        ✅ Received B.S. in Computer Science in 2012 from
        <ExternalLink href="https://www.cpp.edu/" label="Cal Poly Pomona" />
      </li>
      <li>✅ US Citizen</li>
      <li>
        ✅ Currently working on code samples and frontend
        <ExternalLink href="https://www.frontendmentor.io/profile/mmxcrono" label="challenges" for portfolio /> to
        showcase
      </li>
    </ul>

    <h2 class="eyebrow">Preferred Tech Stack</h2>
    <section class="icon-links">
      <a
        v-for="item in preferredLinks"
        :key="item.label"
        :href="item.href ?? '#'"
        :target="item.target"
        class="icon-links__link"
      >
        <component :is="item.component" v-if="item.component" class="icon-links__icon" />
        <span>{{ item.label }}</span>
      </a>
    </section>

    <h2 class="eyebrow">Learning Next</h2>
    <section class="icon-links">
      <a
        v-for="item in learningLinks"
        :key="item.label"
        :href="item.href ?? '#'"
        :target="item.target"
        class="icon-links__link"
      >
        <component :is="item.component" v-if="item.component" class="icon-links__icon" />
        <span>{{ item.label }}</span>
      </a>
    </section>

    <h2 class="eyebrow">Social Media</h2>
    <section class="icon-links">
      <a
        v-for="item in socialLinks"
        :key="item.label"
        :href="item.href ?? '#'"
        :target="item.target"
        class="icon-links__link"
      >
        <component :is="item.component" v-if="item.component" class="icon-links__icon" />
        <span>{{ item.label }}</span>
      </a>
    </section>

    <h2 class="eyebrow">Downloads and other links</h2>
    <section class="icon-links">
      <a
        v-for="item in otherLinks"
        :key="item.label"
        :href="item.href ?? '#'"
        :target="item.target"
        class="icon-links__link"
      >
        <component :is="item.component" v-if="item.component" class="icon-links__icon" />
        <span>{{ item.label }}</span>
      </a>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/mixins';

.about-me {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-block: 4em;
  padding-inline: 1em;

  &__items {
    padding-left: 2em;
    text-indent: -2em;
  }
}

.icon-links {
  display: flex;
  flex-wrap: wrap;

  &__link {
    background-color: var(--clr-button);

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: 10pt;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }

  &__icon {
    width: 1.2rem;
    fill: var(--clr-text);
    margin-right: 0.5rem;
  }
}
</style>
