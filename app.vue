<script setup lang="ts">
const route = useRoute()
// Pages with `definePageMeta({ fullScreen: true })` render without the site header and footer.
const fullScreen = computed(() => route.meta.fullScreen === true)

useHead({
  htmlAttrs: { lang: currentLocale, dir: locales[currentLocale].dir },
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-canvas text-ink">
    <AppHeader v-if="!fullScreen" />
    <div class="flex-grow">
      <NuxtPage />
    </div>
    <footer v-if="!fullScreen" class="w-full px-4 sm:px-6 lg:px-10 print:hidden">
      <p class="border-t border-line py-6 font-mono text-[13px] text-ink-muted">
        © 2026 Faisal AlMutairi
      </p>
    </footer>
  </div>
</template>
