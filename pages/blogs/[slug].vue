<script setup lang="ts">
const route = useRoute()
const post = blogPosts.find(item => item.slug === route.params.slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found', fatal: true })
}

const html = renderPost(post)

useHead({
  title: `${post.title} | Faisal AlMutairi`,
  meta: [{ name: 'description', content: post.excerpt }],
})
</script>

<template>
  <main v-if="post" class="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-16" :dir="post.rtl ? 'rtl' : 'ltr'">
    <BlogBackLink class="mb-8" />

    <header class="mb-10">
      <h1 class="text-3xl font-semibold leading-tight mb-3">{{ post.title }}</h1>
      <p class="text-ink-muted">{{ formatPostDate(post.date) }}</p>
      <p v-if="post.tags.length" class="text-ink-muted text-sm mt-1">{{ post.tags.join(', ') }}</p>
      <p v-if="post.excerpt" class="text-lg leading-relaxed mt-4">{{ post.excerpt }}</p>
    </header>

    <article class="post-body" v-html="html" />

    <div class="mt-12 pt-8 border-t border-line">
      <BlogBackLink />
    </div>
  </main>
</template>
