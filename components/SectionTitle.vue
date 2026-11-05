<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <h2 class="text-xl font-semibold text-primary pb-3 mb-5 border-b border-line">{{ title }}</h2>
</template>
