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
      <div class="job__skills__item" v-for="item in job.skills" :key="`${item}`">{{ item }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/mixins';
.job {
  background-color: var(--clr-primary-800);
  width: clamp(32rem, 50vw, 40rem);
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
  margin-block: 2rem;
  list-style: circle;
  padding-left: 2rem;
}

.job__skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  &__item {
    padding: 0.5em 1em;
    margin: 0.5em 0.5em 0 0;
    border-radius: 20px;
    background-color: var(--clr-primary-700);
  }
}
</style>
