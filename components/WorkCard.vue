<script setup lang="ts">
defineProps<{
  icon?: string
  logo?: string
  logoInset?: boolean
  title: string
  subtitle?: string
  stats: string[]
  dates: string
  points: string[]
  technologies: string[]
  link?: { label: string, href: string }
  bare?: boolean
}>()
</script>

<template>
  <article
    class="flex gap-4"
    :class="bare ? '' : 'rounded-xl border border-line bg-surface p-4 sm:p-5 transition-colors hover:border-control'"
  >
    <span class="w-11 h-11 shrink-0 rounded-[10px] border border-line bg-tile text-primary flex items-center justify-center overflow-hidden">
      <img
        v-if="logo"
        :src="logo"
        :alt="`${title} logo`"
        width="44"
        height="44"
        class="w-full h-full"
        :class="logoInset ? 'object-contain p-1.5' : 'object-cover'"
      >
      <AppIcon v-else-if="icon" :name="icon" class="w-5 h-5" />
    </span>

    <div class="min-w-0 flex-1">
      <h3 class="flex flex-wrap items-baseline gap-x-2.5 text-lg font-semibold leading-snug">
        {{ title }}
        <a
          v-if="link"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="font-mono text-[13px] font-normal text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary"
        >{{ link.label }}</a>
      </h3>
      <p v-if="subtitle" class="text-ink-muted mt-0.5">{{ subtitle }}</p>
      <p class="font-mono text-[13px] text-ink-muted mt-1">{{ [dates, ...stats].join(' · ') }}</p>

      <ul
        class="list-disc ps-4 mt-3 leading-relaxed text-ink marker:text-primary"
        :class="bare ? 'lg:columns-2 lg:gap-x-12 [&>li]:break-inside-avoid [&>li]:mb-1.5' : 'space-y-1.5'"
      >
        <li
          v-for="(point, index) in points"
          :key="point"
          :class="{ 'font-semibold': index === 0 }"
        >
          {{ point }}
        </li>
      </ul>

      <ul class="flex flex-wrap gap-1.5 mt-4" aria-label="Technologies">
        <li
          v-for="technology in technologies"
          :key="technology"
          class="rounded-md border border-primary-border bg-tile px-2 py-0.5 text-[13px] font-medium text-primary-dark"
        >
          {{ technology }}
        </li>
      </ul>
    </div>
  </article>
</template>
