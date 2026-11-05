<script setup lang="ts">
const skillCategories = [
  {
    icon: 'code',
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'Lua', 'SQL', 'HTML', 'CSS'],
  },
  {
    icon: 'globe',
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express.js', 'Telegraf', 'Zod', 'LiveKit'],
  },
  {
    icon: 'database',
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Supabase'],
  },
  {
    icon: 'cpu',
    title: 'AI',
    skills: ['LLM Workflows', 'Agentic Systems', 'RAG', 'Mastra AI', 'ChatGPT', 'ElevenLabs', 'Natural (NLP)', 'Naive Bayes', 'Claude Code', 'OpenCode', 'T3 Code'],
  },
  {
    icon: 'wrench',
    title: 'Tools & Technologies',
    skills: ['REST APIs', 'Git', 'Linux', 'Ubuntu', 'Windows Server', 'Docker', 'Dokploy', 'PM2', 'Netdata', 'Cloudflare Workers', 'Cloudflare R2', 'Telegram Bot API', 'X API'],
  },
]
</script>

<template>
  <section id="skills" class="pt-12">
    <SectionTitle title="Technical skills" />
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="flex gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-control sm:last:col-span-2"
      >
        <span class="w-11 h-11 shrink-0 rounded-[10px] border border-line bg-tile text-primary flex items-center justify-center">
          <AppIcon :name="category.icon" class="w-5 h-5" />
        </span>
        <div class="min-w-0">
          <h3 class="font-semibold">{{ category.title }}</h3>
          <ul class="flex flex-wrap gap-1.5 mt-2">
            <li
              v-for="skill in category.skills"
              :key="skill"
              class="rounded-md border border-primary-border bg-tile px-2 py-0.5 text-[13px] font-medium text-primary-dark"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
