<script setup lang="ts">
import LinkedIn from '@/assets/linkedin.svg';
import GitHub from '@/assets/github.svg';
</script>

<template>
  <div class="about-me">
    <p class="eyebrow">About Me</p>
    <h1 class="page-title">Hoang Nguyen</h1>
    <h2 class="about-me__seeking">Seeking new opportunities as a Senior Full Stack, Frontend, or Backend Engineer.</h2>

    <p class="about-me__intro">
      I am a senior full stack engineer with over 9 years of experience. My favorite technologies include React, Vue,
      and Node.js. I enjoy working on both frontend and backend development, as well as hybrid mobile development.
    </p>

    <p class="about-me__current">
      Currently, I am actively learning to use ChatGPT to enhance my coding skills and improve efficiency. Additionally,
      I am working on a personal project involving React Native and Firebase, with the goal of releasing it on both the
      App Store and Play Store.
    </p>

    <section class="social-links">
      <a href="https://linkedin.com/in/hoangn" target="linkedin" class="social-links__link"
        ><component :is="LinkedIn" class="social-links__icon" /><span>LinkedIn</span></a
      >
      <a href="https://github.com/mmxcrono" target="github" class="social-links__link"
        ><component :is="GitHub" class="social-links__icon" /><span>GitHub</span></a
      >
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/mixins';

.about-me {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: clamp(15rem, 100%, 50rem);
  padding-right: 1rem;

  &__seeking {
    font-size: var(--fs-500);
    color: var(--clr-accent-400);
  }

  &__intro {
    font-size: var(--fs-500);
  }

  &__current {
    font-size: var(--fs-500);
  }
}
.social-links {
  display: flex;
  flex-wrap: wrap;

  &__link {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--clr-primary-800);
    padding: 0.5em 1em;
    border-radius: 10pt;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  &__icon {
    width: 2rem;
    fill: var(--clr-neutral-100);
    margin-right: 1rem;
  }
}
</style>
