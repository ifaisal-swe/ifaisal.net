import type { CvBullet, CvContact, CvSkillGroup } from 'vue-latex-cv'

interface CvEntryData {
  title: string
  date?: string
  subtitle?: string
  bullets: CvBullet[]
}

export const cv = {
  name: 'Faisal AlMutairi',
  headline: 'Software Engineer',
  contacts: [
    { label: 'Saudi Arabia' },
    { label: '+966 57 027 2104', href: 'tel:+966570272104' },
    { label: 'faisal@ifaisal.net', href: 'mailto:faisal@ifaisal.net' },
    { label: 'linkedin.com/in/ifaisal-swe', href: 'https://www.linkedin.com/in/ifaisal-swe/' },
    { label: 'github.com/ifaisal-swe', href: 'https://github.com/ifaisal-swe' },
    { label: 'ifaisal.net', href: 'https://ifaisal.net' },
  ] satisfies CvContact[],
  summary:
    'Software Engineer focused on creating and improving tech products, with experience in web development, backend APIs, database-driven systems, and AI-enabled features. Strong with TypeScript, JavaScript, React, Next.js, Nuxt, Supabase, PostgreSQL, MySQL, REST APIs, debugging, and deployment workflows.',
  technicalSkills: [
    { label: 'Languages', value: 'TypeScript, JavaScript, SQL, HTML, CSS' },
    { label: 'Frontend', value: 'React.js, Next.js, Vue.js, Nuxt, Tailwind CSS, responsive UI, reusable components' },
    { label: 'Backend & Databases', value: 'Node.js, REST APIs, authentication, access control, validation, Supabase, PostgreSQL, MySQL, Redis, SQL schema design, data pipelines' },
    { label: 'AI / LLM', value: 'RAG, LLM agents, embeddings, vector search, prompt engineering, tool calling, structured outputs, workflow automation' },
    { label: 'DevOps', value: 'Docker, Dokploy, GitHub Actions (CI/CD), Linux server management and monitoring' },
    { label: 'Tools & Cloud', value: 'Git, GitHub, Postman, Cloudflare, S3-compatible storage' },
  ] satisfies CvSkillGroup[],
  experience: [
    {
      title: 'King Fahad Armed Forces Hospital - Software Engineering COOP Trainee',
      date: 'Jun 2026 – Aug 2026',
      subtitle: 'Saudi Arabia',
      bullets: [
        'Contributed to an internal IT system that streamlines operating system deployment, computer setup, and installation management, helping IT teams reduce manual work and manage hospital workstations more efficiently.',
        'Worked with the team implementing the new Hospital Information System (HIS) from Lean.sa, replacing the legacy system.',
      ],
    },
  ] satisfies CvEntryData[],
  projects: [
    {
      title: 'Darbedu.com - AI-Powered Study Platform',
      subtitle: 'Founder & Software Engineer',
      bullets: [
        'Arabic-first AI learning coach: learners set any goal (exam, course, skill, language) or upload files, and Darb builds the topic plan, lessons, flashcards and quizzes, then tracks mastery and replans daily.',
        { label: 'AI agents', text: 'Coach chat runs on a Mastra agent with persistent learner memory and tool calling, while scheduling, mastery scoring and FSRS spaced repetition stay in deterministic code.' },
        { label: 'MCP integration', text: 'Built an MCP server with OAuth 2.0 (rotating refresh tokens, tool-call audit log) so learners\' own Claude, ChatGPT or Gemini writes study content into Darb at zero model cost to the platform.' },
        { label: 'Agentic workflow', text: 'Claude Code with custom agents (backend, DBA, QA, security, tester), output reviewed to match project conventions.' },
        { label: 'Technologies Used', text: 'TypeScript, Nuxt, Tailwind CSS, PostgreSQL/pgvector, Drizzle, Better Auth, Mastra, MCP, OAuth 2.0, R2, Docker, Flutter.' },
      ],
    },
    {
      title: 'Suhol.ai - AI-Powered Project Management SaaS',
      subtitle: 'Software Engineer',
      bullets: [
        'Suhol.ai is an AI-powered project management platform, deployed and serving 600+ users, that helps teams plan projects, collaborate in real time and automate workflows with AI assistance.',
        { label: 'Core features', text: 'Built payment integration with Streampay.sa, Suhol Meetings on LiveKit, and realtime chat on Supabase.' },
        { label: 'Technologies Used', text: 'Nuxt, Vue 3, TypeScript, Supabase (PostgreSQL, Realtime), LiveKit, Streampay, Mastra, LLM tool calling.' },
      ],
    },
    {
      title: 'MezlaBot & PlaneBot - Telegram and Discord Community Bots',
      subtitle: 'Founder & Software Engineer',
      bullets: [
        { label: 'MezlaBot (Telegram)', text: 'Moderation bot serving 1M+ registered users across 1,700+ groups. Trained an offline Naive Bayes spam classifier and used Arabic text normalization with SimHash fingerprinting to catch reworded spam; network-wide bans removed 154K+ ad accounts.' },
        { label: 'PlaneBot (Discord)', text: 'Server management bot and Next.js/MySQL dashboard for 300K+ members across 1,200+ servers.' },
        { label: 'Technologies Used', text: 'Node.js, Telegraf, Next.js, MySQL, Redis, Zod, Naive Bayes, SimHash, Cloudflare R2, PM2.' },
      ],
    },
  ] satisfies CvEntryData[],
  education: [
    {
      title: 'University of Jeddah - Bachelor of Science in Software Engineering',
      date: 'Aug 2022 – Jan 2027',
      bullets: [
        'Honors: Certificate of Excellence for the 2022 and 2023 academic semesters.',
      ],
    },
  ] satisfies CvEntryData[],
  languages: 'Arabic (Native), English (Fluent)',
}
