<script setup lang="ts">
useHead({ title: 'Blog | Faisal AlMutairi' })

const selectedTag = ref<string | null>(null)
const posts = computed(() => {
  const tag = selectedTag.value
  return tag ? blogPosts.filter(post => post.tags.includes(tag)) : blogPosts
})

const tagClass = (isActive: boolean) => [
  'px-3 py-1.5 rounded-md border text-sm cursor-pointer',
  isActive ? 'bg-ink text-canvas border-ink' : 'border-line bg-surface hover:border-control',
]
</script>

<template>
  <main class="px-4 sm:px-6 lg:px-10 pt-10 pb-16">
    <h1 class="text-2xl font-semibold mb-2">Blog</h1>
    <p class="text-ink-muted mb-8">
      Thoughts, tutorials, and insights on software development
    </p>

    <div v-if="blogTags.length" class="flex flex-wrap gap-2 mb-10">
      <button :aria-pressed="selectedTag === null" :class="tagClass(selectedTag === null)" @click="selectedTag = null">
        All posts
      </button>
      <button
        v-for="tag in blogTags"
        :key="tag"
        :aria-pressed="selectedTag === tag"
        :class="tagClass(selectedTag === tag)"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <p v-if="!posts.length" class="text-ink-muted text-lg">No blog posts found.</p>
    <ul v-else class="space-y-10">
      <li v-for="post in posts" :key="post.slug" :dir="post.rtl ? 'rtl' : 'ltr'">
        <h2 class="text-lg font-semibold leading-snug">
          <NuxtLink :to="`/blogs/${post.slug}`" class="underline-offset-4 hover:underline">
            {{ post.title }}
          </NuxtLink>
        </h2>
        <p class="text-ink-muted mt-1">{{ formatPostDate(post.date) }}</p>
        <p class="mt-2 leading-relaxed line-clamp-3">{{ post.excerpt || `${post.content.slice(0, 150)}...` }}</p>
        <p v-if="post.tags.length" class="text-ink-muted text-sm mt-2">{{ post.tags.slice(0, 3).join(', ') }}</p>
      </li>
    </ul>
  </main>
</template>
