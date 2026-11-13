<script setup lang="ts">
const education = {
  school: 'University of Jeddah',
  degree: 'Bachelor of Science in Software Engineering',
  dates: 'Aug 2022 - Jan 2027',
  honors: 'Certificate of Excellence for the 2022 and 2023 academic semesters',
}
</script>

<template>
  <section id="education" class="pt-12">
    <SectionTitle title="Education" />
    <div class="flex gap-4">
      <span class="w-11 h-11 shrink-0 rounded-[10px] border border-line bg-tile text-primary flex items-center justify-center">
        <AppIcon name="graduation-cap" class="w-5 h-5" />
      </span>
      <div>
        <h3 class="text-lg font-semibold leading-snug">{{ education.school }}</h3>
        <p class="text-ink-muted mt-0.5">{{ education.degree }}</p>
        <p class="font-mono text-[13px] text-ink-muted mt-1">{{ education.dates }}</p>
        <p class="mt-2 text-sm">
          <span class="font-semibold">Honors:</span> {{ education.honors }}
        </p>
      </div>
    </div>
  </section>
</template>
