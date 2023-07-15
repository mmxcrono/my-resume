<script setup lang="ts">
import JobItem from '@/components/JobItem.vue';
import { useJobsStore } from '@/stores/jobs';
const { jobs } = useJobsStore();
</script>

<template>
  <p class="eyebrow">Skills & Experience</p>
  <h1 class="page-title">Full Stack Development</h1>

  <div class="job-experience">
    <JobItem v-for="job in jobs" :key="`${job.company}.${job.role}`" :job="job"></JobItem>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/mixins';
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
