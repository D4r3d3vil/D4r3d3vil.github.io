---
layout: IT
title: "SvelteKit: The future of web development"
description: "I've been working with svelte for the past couple of years..."
image: /images/svelte.jpeg
date: 11/13/24
---
<script>
    import Window from '$lib/Window.svelte'
    import Mermaid from '$lib/Mermaid.svelte'
</script>

<Mermaid>
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
</Mermaid>

## Background

SvelteKit is a meta-framework that renders server-side web applications written in svelte, the most loved UI library in the world<sup>1</sup>. It gained its popularity by allowing developers to ship apps faster by being lightweight with easy state management, reactivity, and server side components. It also features a compiler, providing static HTML which is crucial for performance, non-server hosting, and SEO.

## Integrations

SvelteKit uses Vite to build apps and supports various integrations such as:

- S/CSS: Tailwind, Bootstrap, Bulma, Sass
- database - Drizzle ORM, PgTyped, Mikro-ORM
- markdown - Mdsvex
- UI-Builder - Storybook

## Reactivity

Svelte reactivity is a core concept in the Svelte framework that enables automatic updates to the DOM when your component state changes. Unlike other frameworks that rely on virtual DOM which is slow and bloaty, Svelte achieves reactivity through a compile-time process where it converts your declarative code into efficient imperative code.

Put $: in front of a variable to make it reactive

```javascript
$: doubled = count * 2;
```

### Managing state between components

When your app has many moving parts that need to communicate states a better way to do it is by  using svelte stores:

```javascript
import {writable} from 'svelte/store'
export let count = writable(0)
```

## Routing

At the heart of SvelteKit is a  _filesystem-based router_. The routes of your app — i.e. the URL paths that users can access — are defined by the directories in your codebase:

- `src/routes`  is the root route
- `static` is where static files such as images are served
- `src/routes/+page.svelte` is the main page of the app
- `src/routes/path/[slug]` passes a parameter 'slug' to the page

### Server files

All files run on both the client and the server except files that start with `+server`. This is useful for creating API endpoints and hiding secrets like database keys.

#### API endpoints

SvelteKit provides simple syntax for API endpoints in the file you can export functions such as GET, POST, PUT, PATCH, DELETE, etc.
example:

```javascript
export async function POST({params}){
}
```

## HTML templating

Svelte provides beatiful syntax to write logic in html which includes if statements, await blocks, for loops and more!

### Examples

You may [skip](#refrences) this part if you wouldn't like to dive into raw code

#### if statement

Content that is conditionally rendered can be wrapped in an if block.

```svelte
{#if user.admin}
<p>Welcome Administrator</p>
{:else if user.teacher}
<p>Welcome Teacher</p>
{:else}
<p>Welcome Student</p>
{/if}
```

#### await block

Await blocks allow you to branch on the three possible states of a Promise — pending, fulfilled or rejected.

```svelte
{#await fetch_user}
    <Loading />
{:then user}
    <Home {user} />
{:catch status}
    <Error {status} />
{/await}
```

#### each block

Iterating over lists of values can be done with an each block.

```svelte
{#each students as student}
    <Grades {student} />
{/each}
```

## Site options

When it comes to building and deploying a SvelteKit site, you have several options for different types of sites: Single Page Application (SPA), Static Site Generation (SSG), Server-Side Rendering (SSR), and more. Here's a brief overview of each:

### SPA

Use Case: For dynamic web applications where the client handles routing and state management.
Configuration: SvelteKit can be configured to generate an SPA by disabling SSR and prerendering.
Deployment: Can be deployed to any static hosting provider like Vercel, Netlify, etc.

### SSG

Use Case: For content-driven websites where content is generated at build time.
Configuration: SvelteKit can prerender all routes as static files.
Deployment: Suitable for static hosts like GitHub Pages, Cloudflare Pages, etc.

### SSR

Use Case: For applications requiring dynamic content rendering on the server.
Configuration: SSR is enabled by default in SvelteKit, but you can customize it as needed.
Deployment: Requires a server environment like Vercel, AWS Lambda, DigitalOcean App Platform, etc.

## Refrences

[Stackoverflow Survey](https://survey.stackoverflow.co/2021#section-most-loved-dreaded-and-wanted-web-frameworks)

[svelte docs](https://svelte.dev/docs/svelte-components)

[building a 5-minute termbin in svelte]()