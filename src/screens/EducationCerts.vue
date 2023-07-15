<script setup lang="ts">
import { useEducationCertsStore } from '@/stores/educationCerts';

const { educationCerts } = useEducationCertsStore();
</script>

<template>
  <p class="eyebrow">Education & Certifications</p>
  <h1 class="page-title">Computer Scientist</h1>

  <div class="education">
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
@import '@/scss/mixins';
.education {
  margin-top: 2rem;
  padding-right: 1rem;
  width: clamp(15rem, 100%, 50rem);
}
.education__entry {
  margin-bottom: 1rem;
  background-color: var(--clr-primary-800);
  padding: 1rem;
  border-radius: 0.5rem;
}

.education__info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.education__items {
  margin-block: 1rem;
  list-style: circle;
  padding-left: 2rem;
}
</style>
@/stores/educationCerts
