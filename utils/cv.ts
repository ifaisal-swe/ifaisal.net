import type { CvBullet, CvContact, CvSkillGroup } from 'vue-latex-cv'

interface CvEntryData {
  title: string
  date?: string
  subtitle?: string
  bullets: CvBullet[]
}

export const cv = {
  name: 'Faisal AlMutairi',
  headline: 'Software Engineer | Full-Stack Developer',
  contacts: [
    { label: 'Saudi Arabia' },
    { label: '+966 57 027 2104', href: 'tel:+966570272104' },
    { label: 'faisal@ifaisal.net', href: 'mailto:faisal@ifaisal.net' },
    { label: 'linkedin.com/in/ifaisal-swe', href: 'https://www.linkedin.com/in/ifaisal-swe/' },
    { label: 'github.com/ifaisal-swe', href: 'https://github.com/ifaisal-swe' },
    { label: 'ifaisal.net', href: 'https://ifaisal.net' },
  ] satisfies CvContact[],
  summary:
    'Software Engineer focused on reliable full-stack web applications, backend APIs, database-driven systems, and AI-enabled product features. Strong with TypeScript, JavaScript, React, Next.js, Nuxt, Supabase, PostgreSQL, MySQL, REST APIs, debugging, and deployment workflows.',
  coreSkills: [
    { label: 'Full-Stack Development', text: 'Build frontend interfaces, backend services, API integrations, dashboards, forms, authentication flows, and database-backed features.' },
    { label: 'Backend & Databases', text: 'Design REST APIs, SQL schemas, access control, validation logic, background workflows, and data processing pipelines.' },
    { label: 'Frontend Engineering', text: 'Develop responsive UI components, state-driven pages, reusable layouts, and user-facing product features.' },
    { label: 'AI Product Engineering', text: 'Apply RAG, LLM agents, embeddings, tool calling, structured outputs, and workflow automation inside real software products.' },
    { label: 'Quality & Delivery', text: 'Use Git/GitHub, debugging, testing mindset, clean code practices, documentation, and deployment tools to ship maintainable features.' },
  ] satisfies CvBullet[],
  technicalSkills: [
    { label: 'Languages', value: 'TypeScript, JavaScript, SQL, HTML, CSS' },
    { label: 'Frontend', value: 'React.js, Next.js, Vue.js, Nuxt, Tailwind CSS, responsive web development' },
    { label: 'Backend', value: 'Node.js, REST APIs, authentication, authorization, Supabase, PostgreSQL, MySQL, Redis' },
    { label: 'AI / LLM', value: 'RAG, LLM agents, embeddings, vector search, prompt engineering, tool calling, structured outputs' },
    { label: 'Tools & Cloud', value: 'Git, GitHub, Docker, Linux, Postman, Cloudflare, S3-compatible storage, PM2' },
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
      title: 'Darbedu.com — AI-Powered Study Platform',
      date: 'Apr 2026 – Present',
      subtitle: 'Founder & Full-Stack Developer',
      bullets: [
        'Arabic-first AI learning coach: learners set any goal (exam, course, skill, language) or upload files, and Darb builds the topic plan, lessons, flashcards and quizzes, then tracks mastery and replans daily.',
        { label: 'AI agents', text: 'Coach chat runs on a Mastra agent with persistent learner memory and tool calling, while scheduling, mastery scoring and FSRS spaced repetition stay in deterministic code.' },
        { label: 'MCP integration', text: 'Built an MCP server with OAuth 2.0 (rotating refresh tokens, tool-call audit log) so learners\' own Claude, ChatGPT or Gemini writes study content into Darb at zero model cost to the platform.' },
        { label: 'Agentic workflow', text: 'Claude Code with custom agents (backend, DBA, QA, security, tester), output reviewed to match project conventions.' },
        { label: 'Technologies Used', text: 'TypeScript, Nuxt, Tailwind CSS, PostgreSQL/pgvector, Drizzle, Better Auth, Mastra, MCP, OAuth 2.0, R2, Docker, Flutter.' },
      ],
    },
    {
      title: 'Suhol.ai — AI-Powered Project Management SaaS',
      date: 'Oct 2025 – Present',
      subtitle: 'Full-Stack Developer',
      bullets: [
        'Suhol.ai is an AI-powered project management platform, deployed and serving 600+ users, that helps teams plan projects, collaborate in real time and automate workflows with AI assistance.',
        { label: 'Core features', text: 'Built payment integration with Streampay.sa, Suhol Meetings on LiveKit, and realtime chat on Supabase.' },
        { label: 'Technologies Used', text: 'Nuxt, Vue 3, TypeScript, Supabase (PostgreSQL, Realtime), LiveKit, Streampay, Mastra, LLM tool calling.' },
      ],
    },
    {
      title: 'MezlaBot & PlaneBot — Telegram and Discord Community Bots',
      date: '2020 – Present',
      subtitle: 'Founder & Full-Stack Developer',
      bullets: [
        { label: 'MezlaBot (Telegram)', text: 'Moderation bot serving 1M+ registered users across 1,700+ groups. Trained an offline Naive Bayes spam classifier and used Arabic text normalization with SimHash fingerprinting to catch reworded spam; network-wide bans removed 154K+ ad accounts.' },
        { label: 'PlaneBot (Discord)', text: 'Server management bot and Next.js/MySQL dashboard for 300K+ members across 1,200+ servers; Redis caching and ISR brought dashboard responses under one second.' },
        { label: 'Technologies Used', text: 'Node.js, Telegraf, Next.js, MySQL, Redis, Zod, Naive Bayes, SimHash, Cloudflare R2, PM2.' },
      ],
    },
  ] satisfies CvEntryData[],
  education: [
    {
      title: 'University of Jeddah',
      date: 'Aug 2022 – Jan 2027',
      bullets: [
        'Bachelor of Science in Software Engineering',
        'Honors: Certificate of Excellence for the 2022 and 2023 academic semesters.',
      ],
    },
  ] satisfies CvEntryData[],
  languages: 'Arabic (Native), English (Fluent)',
}
