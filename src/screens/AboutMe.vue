<script setup lang="ts"></script>

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
    <p></p>
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
</style>
