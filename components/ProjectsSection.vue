<script setup lang="ts">
const projects = [
  {
    logo: '/logos/suhol.png',
    logoInset: true,
    title: 'Suhol',
    subtitle: 'Software and AI Engineer, AI-powered project management',
    stats: ['600+ users'],
    dates: '2025 - Present',
    points: [
      'Build core features of an AI-powered project management platform serving 600+ users',
      'Integrated payments with Streampay.sa and meetings with LiveKit',
      'Built realtime chat on Supabase, the platform\'s development backend',
    ],
    technologies: ['Docker', 'Nuxt.js', 'Vue.js', 'Supabase', 'LiveKit', 'Streampay', 'Git', 'Mastra'],
    link: { label: 'suhol.ai', href: 'https://suhol.ai' },
  },
  {
    logo: '/logos/planebot.png',
    title: 'PlaneBot',
    subtitle: 'Full Stack Developer, Discord server management bot',
    stats: ['300K+ members', '1,200+ servers'],
    dates: '2025 - Present',
    points: [
      'Built and deployed the full-stack dashboard with Next.js and MySQL, using Zod for runtime validation',
      'Added a Redis caching layer and Next.js ISR, reducing database load and reaching sub-second dashboard responses',
      'Developed real-time server statistics, aggregated analytics, and modular settings panels with shadcn/ui and Tailwind CSS',
    ],
    technologies: ['Next.js', 'Node.js', 'MySQL', 'Redis', 'Zod'],
    link: { label: 'planebot.xyz', href: 'https://planebot.xyz' },
  },
  {
    logo: '/logos/mezlabot.jpg',
    title: 'MezlaBot',
    subtitle: 'Telegram moderation bot',
    stats: ['1M+ users', '154K+ banned'],
    dates: '2020 - Present',
    points: [
      'Built a Telegram moderation bot with Node.js and Telegraf, serving over 1 million registered users across 1,700+ groups.',
      'Trained an offline Naive Bayes classifier on the bot\'s own labeled messages to detect spam and ads without an external AI API.',
      'Engineered Arabic text normalization and SimHash fingerprinting to catch disguised and reworded spam, even with changed numbers, emojis, or spacing.',
      'Implemented network-wide bans that remove confirmed ad accounts from every group, with over 154,000 accounts banned.',
      'Built moderation and group management tools, including warnings, member reports, scheduled messages, auto-replies, and member ranks.',
      'Designed hybrid storage using MySQL with a JSON cache layer and Cloudflare R2 for files, deployed with PM2.',
    ],
    technologies: ['Node.js', 'Telegraf', 'MySQL', 'Natural (NLP)', 'Naive Bayes', 'SimHash', 'Cloudflare R2', 'PM2'],
    link: { label: 't.me/MezlaBot', href: 'https://t.me/MezlaBot' },
  },
  {
    logo: '/logos/countdown.jpg',
    title: 'Academic Semester Countdown Bot',
    subtitle: 'Automated X bot',
    stats: ['2.1k+ followers'],
    dates: '2023 - Present',
    points: [
      'Posts daily academic semester progress',
      'Each update shows a progress bar, completion percentage, days remaining, and weekly milestones',
    ],
    technologies: ['Node.js', 'X API', 'Automation'],
    link: { label: 'x.com/timer_uj', href: 'https://x.com/timer_uj' },
  },
]
</script>

<template>
  <section id="projects" class="pt-12">
    <SectionTitle title="Projects" />
    <div class="grid gap-4 lg:grid-cols-2">
      <WorkCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>
  </section>
</template>
