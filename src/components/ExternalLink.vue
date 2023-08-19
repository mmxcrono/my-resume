<script setup lang="ts">
defineProps<{ href: string; label: string }>();
</script>

<template>
  <a :href="href" class="external-link" target="_blank">{{ label }}</a>
</template>

<style scoped lang="scss">
.external-link {
  font-weight: bold;
  color: var(--clr-primary-600);
}
</style>
