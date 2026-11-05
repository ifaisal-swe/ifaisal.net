import MarkdownIt from 'markdown-it'

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
  rtl: boolean
}

const RTL_CHARACTERS = /[֐-ࣿﭐ-﷿ﹰ-﻿]/

// Posts live in content/blog. Adding a Markdown file there publishes it.
const files = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
  if (!match) return { data: {} as Record<string, unknown>, content: raw.trim() }

  const data: Record<string, unknown> = {}
  for (const line of match[1]!.split('\n')) {
    const colon = line.indexOf(':')
    if (colon < 1) continue
    const key = line.slice(0, colon).trim()
    const value = line.slice(colon + 1).trim()
    // Quoted strings and tag arrays in the frontmatter are valid JSON
    try {
      data[key] = JSON.parse(value)
    }
    catch {
      data[key] = value
    }
  }
  return { data, content: match[2]!.trim() }
}

function parsePost(path: string, raw: string): BlogPost {
  const { data, content } = parseFrontmatter(raw)
  const title = String(data.title ?? 'Untitled')
  return {
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    title,
    date: String(data.date ?? ''),
    excerpt: String(data.excerpt ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
    rtl: data.rtl === true || RTL_CHARACTERS.test(title) || RTL_CHARACTERS.test(content.slice(0, 500)),
  }
}

export const blogPosts: BlogPost[] = Object.entries(files)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date))

export const blogTags: string[] = [...new Set(blogPosts.flatMap(post => post.tags))].sort()

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const markdown = new MarkdownIt()
const renderLink = markdown.renderer.rules.link_open
  ?? ((tokens, index, options, _env, self) => self.renderToken(tokens, index, options))

markdown.renderer.rules.link_open = (tokens, index, options, env, self) => {
  tokens[index]!.attrSet('target', '_blank')
  tokens[index]!.attrSet('rel', 'noopener noreferrer')
  return renderLink(tokens, index, options, env, self)
}

export function renderPost(post: BlogPost): string {
  // The page already shows the title, so drop a matching first heading
  const body = post.content.startsWith(`# ${post.title}`)
    ? post.content.slice(post.title.length + 2).trimStart()
    : post.content
  return markdown.render(body)
}
