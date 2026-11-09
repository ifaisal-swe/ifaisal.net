<script setup lang="ts">
const props = defineProps<{ user: string }>()

interface Day { date: string, count: number, level: 0 | 1 | 2 | 3 | 4 }
interface ContributionsResponse { contributions: Day[] }

// All years, so the longest streak covers the whole account history.
const { data, status } = useFetch<ContributionsResponse>(
  () => `https://github-contributions-api.jogruber.de/v4/${props.user}`,
  { server: false, lazy: true },
)

const toKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

const formatDay = (date: string, withYear = true) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', ...(withYear ? { year: 'numeric' } : {}) })

const now = new Date()
const today = toKey(now)

// Every day up to today, oldest first (the API returns years newest-first and includes future days).
const allDays = computed(() =>
  [...(data.value?.contributions ?? [])]
    .filter(day => day.date <= today)
    .sort((a, b) => a.date.localeCompare(b.date)),
)

// The rolling last year shown in the graph.
const lastYearDays = computed(() => {
  const start = toKey(new Date(now.getFullYear() - 1, now.getMonth(), now.getDate() + 1))
  return allDays.value.filter(day => day.date >= start)
})
const lastYearTotal = computed(() => lastYearDays.value.reduce((sum, day) => sum + day.count, 0))

// Longest run of consecutive days with at least one contribution.
const longestStreak = computed(() => {
  let best = { length: 0, start: '', end: '' }
  let length = 0
  let start = ''
  for (const day of allDays.value) {
    if (day.count > 0) {
      if (length === 0) start = day.date
      length++
      if (length > best.length) best = { length, start, end: day.date }
    }
    else {
      length = 0
    }
  }
  return best
})

const streakRange = computed(() => {
  const { start, end } = longestStreak.value
  if (!start) return ''
  const sameYear = start.slice(0, 4) === end.slice(0, 4)
  return `${formatDay(start, !sameYear)} – ${formatDay(end)}`
})

// Group days into week columns (Sunday first), padding the first week so weekdays line up.
const weeks = computed(() => {
  const days = lastYearDays.value
  if (!days.length) return []
  const firstWeekday = new Date(`${days[0].date}T00:00:00`).getDay()
  const cells: (Day | null)[] = [...Array(firstWeekday).fill(null), ...days]
  const result: (Day | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) result.push(cells.slice(i, i + 7))
  return result
})

// Month label above the first week that starts in a new month.
const monthLabels = computed(() => {
  let lastMonth = -1
  return weeks.value.map((week) => {
    const first = week.find(Boolean)
    if (!first) return ''
    const month = new Date(`${first.date}T00:00:00`).getMonth()
    if (month === lastMonth) return ''
    lastMonth = month
    return new Date(`${first.date}T00:00:00`).toLocaleDateString('en-US', { month: 'short' })
  })
})

// Calendar-based totals: today, this week (since Sunday), this month, this year.
const stats = computed(() => {
  const days = allDays.value
  const weekStart = toKey(new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay()))
  const monthStart = toKey(new Date(now.getFullYear(), now.getMonth(), 1))
  const yearStart = toKey(new Date(now.getFullYear(), 0, 1))
  const sumFrom = (start: string) =>
    days.reduce((sum, day) => (day.date >= start && day.date <= today ? sum + day.count : sum), 0)
  return [
    { label: 'Today', value: sumFrom(today) },
    { label: 'This week', value: sumFrom(weekStart) },
    { label: 'This month', value: sumFrom(monthStart) },
    { label: 'This year', value: sumFrom(yearStart) },
  ]
})

const levelClass = ['bg-ink/5', 'bg-primary/25', 'bg-primary/50', 'bg-primary/75', 'bg-primary']

const describe = (day: Day) =>
  `${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDay(day.date)}`
</script>

<template>
  <section class="rounded-[10px] border border-line bg-surface p-5 mb-10" aria-labelledby="activity-title">
    <div class="flex flex-wrap items-baseline justify-between gap-2 mb-4">
      <h2 id="activity-title" class="font-semibold text-primary">GitHub Activity</h2>
      <p v-if="lastYearDays.length" class="text-sm text-ink-muted">
        {{ lastYearTotal.toLocaleString('en-US') }} contributions in the last year
      </p>
    </div>

    <p v-if="status === 'pending' || status === 'idle'" class="text-sm text-ink-muted">Loading activity...</p>
    <p v-else-if="status === 'error' || !weeks.length" class="text-sm text-ink-muted">
      Couldn't load activity right now.
      <a :href="`https://github.com/${user}`" target="_blank" rel="noopener noreferrer" class="underline underline-offset-4">See it on GitHub</a>.
    </p>
    <template v-else>
      <dl class="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
        <div v-for="stat in stats" :key="stat.label" class="rounded-[10px] bg-primary-soft border border-primary-border px-4 py-3">
          <dt class="text-xs text-ink-muted">{{ stat.label }}</dt>
          <dd class="mt-1 text-2xl font-semibold text-primary tabular-nums">{{ stat.value.toLocaleString('en-US') }}</dd>
        </div>
        <div class="col-span-2 lg:col-span-1 rounded-[10px] bg-primary text-on-primary px-4 py-3">
          <dt class="text-xs opacity-80">Longest streak</dt>
          <dd class="mt-1 text-2xl font-semibold tabular-nums">
            {{ longestStreak.length }} {{ longestStreak.length === 1 ? 'day' : 'days' }}
          </dd>
          <dd v-if="streakRange" class="text-xs opacity-80 mt-0.5">{{ streakRange }}</dd>
        </div>
      </dl>
      <div class="overflow-x-auto pb-1" dir="ltr">
        <div class="flex flex-col gap-1 min-w-[640px]">
          <div class="flex gap-[3px] text-[10px] text-ink-muted h-3">
            <span v-for="(label, i) in monthLabels" :key="i" class="flex-1 min-w-0 overflow-visible whitespace-nowrap">{{ label }}</span>
          </div>
          <div class="flex gap-[3px]">
            <div v-for="(week, w) in weeks" :key="w" class="flex flex-1 min-w-0 flex-col gap-[3px]">
              <span
                v-for="(day, d) in week"
                :key="d"
                class="aspect-square w-full rounded-[2px]"
                :class="day ? levelClass[day.level] : 'invisible'"
                :title="day ? describe(day) : undefined"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 flex items-center justify-end gap-1 text-[11px] text-ink-muted">
        Less
        <span v-for="cls in levelClass" :key="cls" class="w-[11px] h-[11px] rounded-[2px]" :class="cls" />
        More
      </div>
    </template>
  </section>
</template>
