<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
interface Item {
  title: string;
  path: string;
}
const router = useRouter();
const route = useRoute();

const items: Item[] = [
  {
    title: 'Resume',
    path: '/',
  },
];

const onItemClick = (item: Item) => {
  router.push(item.path);
};
</script>

<template>
  <nav class="navigation">
    <div v-for="item in items" :key="item.path" class="navigation__item" @click="onItemClick(item)">
      <div
        class="navigation__dot"
        :class="{
          'navigation__dot--active': route.path === item.path,
        }"
      ></div>
      <span
        class="navigation__label"
        :class="{
          'navigation__label--active': route.path === item.path,
        }"
        >{{ item.title }}</span
      >
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/scss/mixins';

$shadow: 0px 0px 16px var(--clr-secondary-400);
.navigation {
  border-left: 1px solid var(--clr-neutral-100);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: clamp(1rem, 10vw, 3rem);
  height: 100%;
  justify-content: center;

  @include breakpoint(md, max) {
    border-left: none;
    border-top: 1px solid var(--clr-neutral-100);
    margin-top: 2rem;
    margin-left: 0;
    flex-direction: row;
  }
}

.navigation__item {
  display: flex;
  place-items: center;
  cursor: pointer;
  position: relative;
}
.navigation__dot {
  --_size: 0.6rem;

  content: '';
  border-radius: 50%;
  background-color: var(--clr-neutral-100);
  width: var(--_size);
  transform: translateX(-50%);
  aspect-ratio: 1;
  margin-right: 20px;

  &--active {
    box-shadow: $shadow;
  }

  @include breakpoint(md, max) {
    --_size: 1rem;
    --_dot-width: calc(var(--_size) * 2);

    border-radius: 30pt;
    width: var(--_dot-width);
    height: 0.6rem;
    aspect-ratio: unset;
    transform: translateY(-50%);
    position: absolute;
    margin-right: 0;
    top: 0;
    left: calc(50% - var(--_dot-width) / 2);
  }
}

.navigation__label {
  font-size: var(--fs-500);

  &--active {
    text-shadow: $shadow;
  }
}
</style>
