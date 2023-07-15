<script setup lang="ts"></script>

<template>
  <div class="about-me">
    <p class="eyebrow">About Me</p>
    <h1 class="page-title">Hoang Nguyen</h1>
    <p class="intro">
      I am senior Full Stack engineer with over 9 years of experience. My favorite technologies are React, Vue, and
      Node.js. I enjoy both frontend and backend development, and have experince with mobile - mostly hybrid, but some
      native on iOS and Android. I have leadership experience in college and in professional Agile teams.
    </p>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/mixins';
.about-me {
  padding-right: 1rem;
}
.intro {
  font-size: var(--fs-500);
  margin-block: 1rem;
  max-width: 45ch;
}
</style>
