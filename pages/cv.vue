<script setup lang="ts">
import { CvBullets, CvDocument, CvEntry, CvHeader, CvPrintButton, CvSection, CvSkills } from 'vue-latex-cv'
import 'vue-latex-cv/style.css'

definePageMeta({ fullScreen: true })

// The page title is also the PDF's metadata title, which some ATS read.
useHead({ title: 'Faisal AlMutairi CV' })

// Show the CV like a PDF viewer: one A4 sheet scaled to fill the screen width.
const A4_WIDTH_PX = 210 * 96 / 25.4
const MAX_ZOOM = 1.8
const zoom = ref(1)

function fitToWidth() {
  const gutter = window.innerWidth < 640 ? 16 : 48
  zoom.value = Math.min(MAX_ZOOM, (document.documentElement.clientWidth - gutter) / A4_WIDTH_PX)
}

onMounted(() => {
  fitToWidth()
  window.addEventListener('resize', fitToWidth)
})
onBeforeUnmount(() => window.removeEventListener('resize', fitToWidth))
</script>

<template>
  <main class="cv-page min-h-screen bg-[#e5e7eb] print:bg-white">
    <div class="cv-sheet" :style="{ '--cv-zoom': zoom }">
      <CvDocument>
        <CvHeader :name="cv.name" :headline="cv.headline" :contacts="cv.contacts" />

        <CvSection title="Professional Summary">
          <p class="m-0">{{ cv.summary }}</p>
        </CvSection>

        <CvSection title="Software Engineering Skills">
          <CvBullets :items="cv.coreSkills" />
        </CvSection>

        <CvSection title="Technical Skills">
          <CvSkills :items="cv.technicalSkills" />
        </CvSection>

        <CvSection title="Professional Experience">
          <CvEntry v-for="e in cv.experience" :key="e.title" :title="e.title" :date="e.date" :subtitle="e.subtitle">
            <CvBullets :items="e.bullets" />
          </CvEntry>
        </CvSection>

        <CvSection title="Projects">
          <CvEntry v-for="e in cv.projects" :key="e.title" :title="e.title" :date="e.date" :subtitle="e.subtitle">
            <CvBullets :items="e.bullets" />
          </CvEntry>
        </CvSection>

        <CvSection title="Education">
          <CvEntry v-for="e in cv.education" :key="e.title" :title="e.title" :date="e.date">
            <CvBullets :items="e.bullets" />
          </CvEntry>
          <CvSkills :items="[{ label: 'Languages', value: cv.languages }]" />
        </CvSection>
      </CvDocument>
    </div>

    <CvPrintButton
      file-name="Faisal AlMutairi CV"
      class="fixed bottom-5 right-5 z-10 inline-flex items-center gap-2 h-11 px-5 rounded-full bg-primary text-on-primary text-sm font-semibold shadow-lg transition-colors hover:bg-primary-dark cursor-pointer"
    >
      <AppIcon name="download" class="w-4 h-4" />
      Download PDF
    </CvPrintButton>
  </main>
</template>

<style scoped>
/*
 * The sheet is laid out exactly like the printed PDF (one A4 page) and then
 * zoomed on screen to fill the width, so it reads like a full-screen PDF.
 */
.cv-page :deep(.cv-document) {
  /* Black and white only. */
  --cv-accent: #000;
  --cv-text: #000;
  --cv-muted: #000;
  --cv-rule: #000;
  box-sizing: border-box;
  width: 210mm;
  max-width: none;
  min-height: 297mm;
  padding: 6mm 12mm;
  font-size: 9pt;
  line-height: 1.25;
}

@media screen {
  .cv-sheet {
    zoom: var(--cv-zoom, 1);
    width: fit-content;
    margin: 0 auto;
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.12), 0 8px 24px rgb(0 0 0 / 0.08);
  }
}

@media print {
  .cv-page :deep(.cv-document) {
    min-height: 0;
  }
}
</style>
