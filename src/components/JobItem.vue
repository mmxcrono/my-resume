<script setup lang="ts">
import { Job } from '@/stores/jobs';
defineProps<{ job: Job }>();
</script>

<template>
  <div
    class="job"
    :class="{
      'job--current': job.isCurrentRole,
    }"
  >
    <p class="job__timeline">{{ job.timeline }}</p>
    <div class="job__info">
      <h3 class="job__role">{{ job.role }}</h3>
      <span class="job__company">{{ job.company }}</span>
    </div>
    <ul class="job__items">
      <li v-for="item in job.lineItems" :key="`${item}`">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/mixins';
.job {
  background-color: var(--clr-primary-800);
  width: 32rem;
  padding: 1rem;
  position: relative;
  border-radius: 0.5rem;

  &--current::after {
    content: 'Current role';
    position: absolute;
    color: var(--clr-accent-400);
    top: -2rem;
    left: 0;
  }

  @include breakpoint(md, max) {
    width: 90vw;
  }
}

.job__info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.job__items {
  margin-top: 1rem;
  list-style: circle;
  padding-left: 2rem;
}
</style>
