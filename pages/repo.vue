<script setup lang="ts">
useHead({ title: 'Faisal AlMutairi | Repositories' })

const githubUser = 'ifaisal-swe'

interface Repo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  pushed_at: string
  fork: boolean
  archived: boolean
}

type SortKey = 'updated' | 'stars' | 'name'

const { data, status } = useFetch<Repo[]>(
  `https://api.github.com/users/${githubUser}/repos`,
  { query: { per_page: 100, sort: 'pushed' }, server: false, lazy: true },
)

const search = ref('')
const sortBy = ref<SortKey>('updated')

const sorters: Record<SortKey, (a: Repo, b: Repo) => number> = {
  updated: (a, b) => b.pushed_at.localeCompare(a.pushed_at),
  stars: (a, b) => b.stargazers_count - a.stargazers_count || b.pushed_at.localeCompare(a.pushed_at),
  name: (a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }),
}

const repos = computed(() => {
  const query = search.value.trim().toLowerCase()
  const list = (data.value ?? []).filter(repo =>
    !query
    || repo.name.toLowerCase().includes(query)
    || repo.description?.toLowerCase().includes(query)
    || repo.language?.toLowerCase().includes(query),
  )
  return [...list].sort(sorters[sortBy.value])
})

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

const pill = 'rounded-md px-2 py-0.5 text-xs'
</script>

<template>
  <main class="px-4 sm:px-6 lg:px-10 pt-10 pb-16">
    <h1 class="text-2xl font-semibold mb-8">My GitHub Repositories</h1>

    <GithubActivity :user="githubUser" />

    <div class="flex flex-col sm:flex-row gap-3 mb-8">
      <label class="relative flex-1">
        <span class="sr-only">Search repositories</span>
        <input
          v-model="search"
          type="search"
          placeholder="Search repositories..."
          class="w-full h-10 rounded-[10px] border border-line bg-surface pl-3 pr-9 text-sm outline-none focus:border-primary"
        >
        <svg class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
      </label>
      <label class="relative sm:w-56 shrink-0">
        <span class="sr-only">Sort repositories</span>
        <select
          v-model="sortBy"
          class="w-full h-10 appearance-none rounded-[10px] border border-line bg-surface pl-3 pr-9 text-sm outline-none focus:border-primary cursor-pointer"
        >
          <option value="updated">Sort by Last Updated</option>
          <option value="stars">Sort by Stars</option>
          <option value="name">Sort by Name</option>
        </select>
        <svg class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </label>
    </div>

    <p v-if="status === 'pending' || status === 'idle'" class="text-ink-muted">Loading repositories...</p>
    <p v-else-if="status === 'error'" class="text-ink-muted">
      Couldn't load repositories right now.
      <a :href="`https://github.com/${githubUser}?tab=repositories`" target="_blank" rel="noopener noreferrer" class="underline underline-offset-4">View them on GitHub</a>.
    </p>
    <p v-else-if="!repos.length" class="text-ink-muted text-lg">
      {{ search ? 'No repositories match your search.' : 'No repositories found.' }}
    </p>
    <ul v-else class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="repo in repos" :key="repo.id">
        <a
          :href="repo.html_url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex h-full flex-col rounded-[10px] border border-line bg-surface p-5 transition-colors hover:border-primary"
        >
          <span class="flex items-start justify-between gap-3">
            <span class="font-semibold text-primary break-all leading-snug">{{ repo.name }}</span>
            <span class="flex shrink-0 items-center gap-3 text-sm text-ink-muted">
              <span class="inline-flex items-center gap-1" :title="`${repo.stargazers_count} stars`">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z" /></svg>
                {{ repo.stargazers_count }}
              </span>
              <span class="inline-flex items-center gap-1" :title="`${repo.forks_count} forks`">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" /><path d="M12 12v3" /></svg>
                {{ repo.forks_count }}
              </span>
            </span>
          </span>
          <span class="mt-3 text-sm leading-relaxed line-clamp-2" :class="repo.description ? '' : 'text-ink-muted'">
            {{ repo.description || 'No description available' }}
          </span>
          <span class="mt-auto pt-4 flex flex-wrap gap-2">
            <span v-if="repo.language" :class="[pill, 'bg-primary/10 text-primary']">{{ repo.language }}</span>
            <span :class="[pill, 'bg-ink/5 text-ink-muted']">Updated: {{ formatDate(repo.pushed_at) }}</span>
            <span v-if="repo.fork" :class="[pill, 'border border-line text-ink-muted']">Fork</span>
            <span v-if="repo.archived" :class="[pill, 'border border-line text-ink-muted']">Archived</span>
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>
