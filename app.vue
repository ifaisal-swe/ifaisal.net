<script setup lang="ts">
useHead({
  htmlAttrs: { lang: currentLocale, dir: locales[currentLocale].dir },
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-canvas text-ink">
    <AppHeader />
    <div class="flex-grow">
      <NuxtPage />
    </div>
    <footer class="w-full px-4 sm:px-6 lg:px-10">
      <p class="border-t border-line py-6 font-mono text-[13px] text-ink-muted">
        © 2026 Faisal AlMutairi
      </p>
    </footer>
  </div>
</template>
