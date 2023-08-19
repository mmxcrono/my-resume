<script setup lang="ts">
import JobItem from '@/components/JobItem.vue';
import { useJobsStore } from '@/stores/jobs';
const { jobs } = useJobsStore();
</script>

<template>
  <h1 class="eyebrow">Skills & Experience</h1>

  <div class="jobs">
    <JobItem v-for="job in jobs" :key="`${job.company}.${job.role}`" :job="job"></JobItem>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/mixins';
.jobs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 2rem;
}
</style>
