<script>
  import { onMount } from "svelte";
  import AutoBio from "../layouts/AutoBio.svelte";
  import Carousel from "../layouts/Carousel.svelte";
  import { browser } from "$app/environment";
  import { socials } from "../info.js";
  export let data;

  onMount(() => {
    let urlParams = new URLSearchParams(window.location.href.split("?")[1]);
    if (urlParams.get("subscription")) {
      alert("subscribed successfully");
      window.location.href = "/";
    }
  });
</script>

<link rel="stylesheet" href="/styles/emojis.css" />
<div class="relative min-h-screen snap-center flex items-center justify-center">
  <div
    class="hidden w-18 absolute top-1/2 left-0 transform -translate-y-1/2 border-2 border-black md:block lg:block"
  >
    {#each socials as social}
      <a
        href={social.link}
        class="block w-16 p-4 transition duration-300 hover:bg-black hover:bg-opacity-10"
        target="_blank"
      >
        <i class="text-3xl fa-brands fa-beat {social.icon}"></i>
      </a>
    {/each}
  </div>
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">HEY, IT'S MULHAM ALAMRY</h1>
      <p class="py-6">
        I bring dynamic expertise in crafting innovative digital solutions.
        Explore my website to discover a showcase of cutting-edge projects,
        insightful blog posts, and a glimpse into my passion for coding
        excellence.
      </p>
      <a class="btn mt-3" href="/#blog">BLOG</a><br />
      <a class="btn mt-3" href="/#projects">PROJECTS</a>
    </div>
  </div>
</div>
<div class="divider"></div>
<AutoBio />
<div class="divider hidden md:flex lg:flex"></div>
<div
  class="hidden min-h-screen snap-center items-center justify-center md:flex lg:flex"
  id="blog"
>
  <h2 class="text-center mb-9">
    <span class="block text-4xl uppercase tracking-wide font-bold"
      >Blog Updates</span
    >
    <span class="block text-lg text-gray-500">Latest blog posts</span>
    {#if browser}
      <Carousel items={data.posts} />
    {/if}
    <button
      class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <a href="/blog">View all posts</a>
    </button>
  </h2>
</div>
<div class="divider"></div>
<div
  class="hidden min-h-screen snap-center items-center justify-center md:flex lg:flex"
  id="projects"
>
  <h2 class="text-center mb-9">
    <span class="block text-4xl uppercase tracking-wide font-bold"
      >Projects 🖥️</span
    >
    <span class="block text-lg text-gray-500">My top projects 🎩</span>
    {#if browser}
      <Carousel items={data.projects} />
    {/if}
    <button
      class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
    >
      <a href="/projects">View all projects</a>
    </button>
  </h2>
</div>
<footer
  class="footer footer-center bg-primary text-primary-content p-10 snap-center"
>
  <aside>
    <p class="font-bold">
      0xbytes Ltd.
      <br />
      Providing reliable tech since 2019
    </p>
    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
  </aside>
  <nav>
    <a href="mailto:inquiries@0xbytes.dev">Contact me: inquiries@0xbytes.dev</a>
  </nav>
</footer>
