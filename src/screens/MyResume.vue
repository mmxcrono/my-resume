<script setup lang="ts">
import JobItem from '@/components/JobItem.vue';
import { userJobsStore } from '@/stores/jobs';
const { jobs } = userJobsStore();
</script>

<template>
  <p class="eyebrow">Skills & Experience</p>
  <h1 class="page-title">My Resume</h1>
  <p class="intro">
    I am senior Full Stack engineer with over 9 years of experience in the industry. His preferred stack for frontend
    coding is either React or Vue in Typescript. For the backend Node.js + Express and using Docker containers for local
    devlopment.
  </p>

  <div class="job-experience">
    <JobItem v-for="job in jobs" :key="`${job.company}.${job.role}`" :job="job"></JobItem>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/mixins';
.eyebrow {
  color: var(--clr-secondary-400);
  font-size: var(--fs-300);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0;
}
.page-title {
  font-size: var(--fs-700);
  text-transform: uppercase;
  margin: 0;
}
.intro {
  font-size: var(--fs-500);
  margin-block: 1rem;
  max-width: 45ch;
}
.job-experience {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 1rem;
  overflow-x: auto;
  padding-block: 2rem;

  /* Firefox scrollbar */
  scrollbar-color: var(--clr-accent-400) var(--clr-primary-800);

  &::-webkit-scrollbar {
    height: 0.75rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--clr-primary-800);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-accent-400);
    border-radius: 100vw;
  }

  &::after {
    content: '';
    width: 10rem;
  }
}
</style>
