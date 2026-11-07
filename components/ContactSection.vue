<template>
  <section id="contact" class="py-12">
    <SectionTitle title="Contact" />
    <ul class="flex flex-wrap gap-x-5 gap-y-2 text-ink">
      <li>
        <a href="https://x.com/_21fl" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="X">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ifaisal-swe/" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="LinkedIn">
          <AppIcon name="linkedin" class="w-4 h-4" />
        </a>
      </li>
      <li>
        <a href="https://github.com/ifaisal-swe" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="GitHub">
          <AppIcon name="github" class="w-4 h-4" />
        </a>
      </li>
    </ul>
    <a href="mailto:faisal@ifaisal.net" class="contact-link mt-3 text-ink">
      <AppIcon name="mail" class="w-4 h-4" />
      faisal@ifaisal.net
    </a>
  </section>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.contact-link {
  @apply inline-flex items-center gap-2 py-1 transition-colors hover:text-primary;
}
</style>
