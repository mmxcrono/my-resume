<script setup lang="ts">
import JobItem from '@/components/JobItem.vue';
import { useJobsStore } from '@/stores/jobs';
const { jobs } = useJobsStore();
</script>

<template>
  <div class="my-experience">
    <h1 class="page-title eyebrow">My Experience</h1>

    <div class="jobs">
      <JobItem v-for="job in jobs" :key="`${job.company}.${job.role}`" :job="job"></JobItem>
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-experience {
  padding: 1em;
}
.jobs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 2rem;
}
</style>
