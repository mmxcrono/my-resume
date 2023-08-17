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
    <div class="job__skills">
      <div v-for="item in job.skills" :key="`${item}`" class="job__skills__item">{{ item }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/mixins';
.job {
  background-color: var(--clr-primary-800);
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

  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__company {
    text-align: right;
  }

  &__items {
    margin-block: 2rem;
    list-style: circle;
    padding-left: 2rem;
  }

  &__skills {
    display: flex;
    flex-wrap: wrap;
    padding-left: 2rem;

    &__item {
      padding: 0.5em 1em;
      margin: 0.5em 0.5em 0 0;
      border-radius: 20pt;
      background-color: var(--clr-primary-700);
    }
  }
}
</style>
