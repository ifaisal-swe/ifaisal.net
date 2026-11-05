<script setup lang="ts">
const experience = {
  icon: 'briefcase',
  title: 'Freelance - Software Developer',
  stats: ['190K+ users'],
  bare: true,
  dates: '2024 - Present',
  points: [
    'Owned product and backend development for a large-scale, real-time platform, growing the user base from 10,000 to 190,000+.',
    'Scaled peak concurrency from 200 to 1,900+ simultaneous users on the same hardware, with no performance degradation, by redesigning database usage and eliminating unnecessary database and network calls.',
    'Reduced latency and network traffic by removing client-server bottlenecks in core services.',
    'Built the system to handle peaks of 3,000+ queued users.',
    'Built automated security protections that detect code injection, XSS, and SQL injection attempts and block them before they execute.',
    'Integrated internal and external systems through a secure API layer, preventing direct external connections to internal systems.',
    'Built a monitoring and alerting system using Netdata, with servers grouped by type, to detect security issues early and allow a response before they affect the servers.',
    'Designed and built a full backup and restore system that runs 24/7, using multiple backup types based on data priority.',
    'Built and maintained an interactive AI voice support system using ElevenLabs and ChatGPT, allowing users to speak with an AI assistant and receive responses in near real time.',
    'Built Claude Code plugins that capture the project\'s development methodology, established since 2023, so that new work follows the same standards, and that record each bug fix to prevent the same mistake from recurring.',
    'Designed the architecture for scalability, maintainability, and performance.',
  ],
  technologies: ['Node.js', 'Express.js', 'Lua', 'Python', 'MySQL', 'Redis', 'MongoDB', 'Ubuntu', 'Windows Server', 'Netdata', 'ElevenLabs', 'ChatGPT', 'Mastra AI', 'Claude Code', 'OpenCode', 'T3 Code'],
}
</script>

<template>
  <section id="experience" class="pt-12">
    <SectionTitle title="Experience" />
    <WorkCard v-bind="experience" />
  </section>
</template>
