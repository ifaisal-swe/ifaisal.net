<script setup lang="ts">
const services = [
  {
    icon: 'code',
    title: 'Web Apps',
    text: 'Full-stack web applications, dashboards and SaaS platforms, from idea to deployment.',
  },
  {
    icon: 'cpu',
    title: 'AI Services',
    text: 'AI agents, chatbots, RAG and automation built into your product or workflow.',
  },
  {
    icon: 'wrench',
    title: 'Software Development',
    text: 'Backend APIs, bots, integrations, and any custom software your business needs.',
  },
]
</script>

<template>
  <section id="services" class="pt-12">
    <SectionTitle title="Need a service?" />
    <ul class="grid gap-4 sm:grid-cols-3">
      <li
        v-for="service in services"
        :key="service.title"
        class="flex gap-4 rounded-[10px] border border-line p-4"
      >
        <span class="w-11 h-11 shrink-0 rounded-[10px] border border-line bg-tile text-primary flex items-center justify-center">
          <AppIcon :name="service.icon" class="w-5 h-5" />
        </span>
        <div>
          <h3 class="font-semibold leading-snug">{{ service.title }}</h3>
          <p class="text-ink-muted text-sm mt-1">{{ service.text }}</p>
        </div>
      </li>
    </ul>
    <div class="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
      <a
        href="mailto:faisal@ifaisal.net?subject=Service%20request"
        class="inline-flex items-center gap-2 h-10 px-4 rounded-[10px] bg-primary text-on-primary text-sm font-semibold transition-colors hover:bg-primary-dark"
      >
        <AppIcon name="mail" class="w-4 h-4" />
        Contact me
      </a>
      <p class="text-ink-muted">
        Email me at
        <a href="mailto:faisal@ifaisal.net" class="text-primary font-semibold hover:text-primary-dark">faisal@ifaisal.net</a>
      </p>
    </div>
  </section>
</template>
