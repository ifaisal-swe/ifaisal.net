<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <header class="w-full px-4 sm:px-6 lg:px-10 pt-10 flex items-center justify-between gap-4">
    <div>
      <component :is="route.path === '/' ? 'h1' : 'p'" class="text-3xl font-semibold tracking-tight text-primary">
        <NuxtLink to="/">Faisal AlMutairi</NuxtLink>
      </component>
      <p class="text-ink-muted mt-1">Full-Stack Developer</p>
    </div>
    <NuxtLink
      to="/blogs"
      class="inline-flex items-center h-10 px-4 rounded-[10px] bg-primary text-on-primary text-sm font-semibold transition-colors hover:bg-primary-dark"
    >
      Blogs
    </NuxtLink>
  </header>
</template>
