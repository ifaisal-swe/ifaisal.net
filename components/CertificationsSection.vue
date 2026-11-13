<script setup lang="ts">
interface Certification {
  title: string
  issuer: string
  date: string
  link?: { label: string; href: string }
}

const certifications: Certification[] = [
  {
    title: 'Red Hat Application Development I: Programming in Java EE (AD183 - RHA) - Ver. 7.0',
    issuer: 'Red Hat',
    date: 'Issued May 2026',
    link: {
      label: 'Show credential',
      href: 'https://www.credly.com/badges/996bc9c4-50ae-488f-b122-b7788e8b84ae/linked_in_profile',
    },
  },
]
</script>

<template>
  <section id="certifications" class="pt-12">
    <SectionTitle title="Professional Certifications" />
    <ul class="flex flex-col gap-6">
      <li v-for="cert in certifications" :key="cert.title" class="flex gap-4">
        <span class="w-11 h-11 shrink-0 rounded-[10px] border border-line bg-tile text-primary flex items-center justify-center">
          <AppIcon name="award" class="w-5 h-5" />
        </span>
        <div>
          <h3 class="text-lg font-semibold leading-snug">{{ cert.title }}</h3>
          <p class="text-ink-muted mt-0.5">{{ cert.issuer }}</p>
          <p class="font-mono text-[13px] text-ink-muted mt-1">{{ cert.date }}</p>
          <a
            v-if="cert.link"
            :href="cert.link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 mt-2 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            {{ cert.link.label }}
            <AppIcon name="external" class="w-3.5 h-3.5" />
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>
