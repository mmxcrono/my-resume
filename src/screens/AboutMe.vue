<script setup lang="ts">
import { useLinksStore } from '@/stores/links';
const { socialLinks, preferredLinks, otherLinks, learningLinks } = useLinksStore();
</script>

<template>
  <div class="about-me">
    <p class="eyebrow">About Me</p>

    <h2>Social Media</h2>
    <section class="icon-links">
      <a
        v-for="item in socialLinks"
        :key="item.label"
        :href="item.href ?? '#'"
        :target="item.target"
        class="icon-links__link"
      >
        <component :is="item.component" v-if="item.component" class="icon-links__icon" />
        <span>{{ item.label }}</span>
      </a>
    </section>

    <h2>Preferred Tech Stack</h2>
    <section class="icon-links">
      <a
        v-for="item in preferredLinks"
        :key="item.label"
        :href="item.href ?? '#'"
        :target="item.target"
        class="icon-links__link"
      >
        <component :is="item.component" v-if="item.component" class="icon-links__icon" />
        <span>{{ item.label }}</span>
      </a>
    </section>

    <h2>Learning Next</h2>
    <section class="icon-links">
      <a
        v-for="item in learningLinks"
        :key="item.label"
        :href="item.href ?? '#'"
        :target="item.target"
        class="icon-links__link"
      >
        <component :is="item.component" v-if="item.component" class="icon-links__icon" />
        <span>{{ item.label }}</span>
      </a>
    </section>

    <h2>Downloads and other links</h2>
    <section class="icon-links">
      <a
        v-for="item in otherLinks"
        :key="item.label"
        :href="item.href ?? '#'"
        :target="item.target"
        class="icon-links__link"
      >
        <component :is="item.component" v-if="item.component" class="icon-links__icon" />
        <span>{{ item.label }}</span>
      </a>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/mixins';

.about-me {
  display: flex;
  flex-direction: column;
  gap: 2em;

  &__seeking {
    font-size: var(--fs-500);
    color: var(--clr-accent-400);
  }
}
.icon-links {
  display: flex;
  flex-wrap: wrap;

  &__link {
    color: var(--clr-neutral-900);
    background-color: var(--clr-primary-800);

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: 10pt;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }

  &__icon {
    width: 1.2rem;
    fill: var(--clr-neutral-900);
    margin-right: 0.5rem;
  }
}
</style>
