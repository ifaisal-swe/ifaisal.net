import tailwindcss from '@tailwindcss/vite'

const description = 'Faisal AlMutairi, Full-Stack Developer.'
const analyticsId = 'G-V3VZYJF4C6'

export default defineNuxtConfig({
  compatibilityDate: '2026-11-05',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: 'Faisal AlMutairi',
      meta: [
        { name: 'description', content: description },
        { name: 'theme-color', content: '#FFFFFF' },
        { property: 'og:title', content: 'Faisal AlMutairi' },
        { property: 'og:description', content: description },
        { property: 'og:url', content: 'https://ifaisal.net' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://ifaisal.net' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&family=Inter:wght@400..700&family=JetBrains+Mono:wght@400&display=swap',
        },
      ],
      script: [
        { src: `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`, async: true },
        {
          innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${analyticsId}');`,
        },
      ],
    },
  },
})
