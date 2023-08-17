<script setup lang="ts">
import { useEducationCertsStore } from '@/stores/educationCerts';

const { educationCerts } = useEducationCertsStore();
</script>

<template>
  <div class="education">
    <p class="eyebrow">Education & Certifications</p>
    <div v-for="entry in educationCerts" :key="entry.name" class="education__entry">
      <p class="education__timeline">{{ entry.timeline }}</p>
      <div class="education__info">
        <h3 class="education__name">{{ entry.name }}</h3>
        <span class="education__location">{{ entry.location }}</span>
      </div>
      <p>{{ entry.degree }}</p>
      <ul class="education__items">
        <li v-for="item in entry.lineItems" :key="`${item}`">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/mixins';
.education {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 1rem;

  @include breakpoint(md, max) {
    padding-right: unset;
  }

  &__entry {
    margin-bottom: 1rem;
    background-color: var(--clr-primary-800);
    padding: 1rem;
    border-radius: 0.5rem;
  }

  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__items {
    margin-block: 1rem;
    list-style: circle;
    padding-left: 2rem;
  }
  &__location {
    text-align: right;
  }
}
</style>
