<script>
  export let date, author, title;
  import { SideTOC } from "../utils/plugins";
  import { onMount } from "svelte";
  onMount(function codeCopyListener() {
    document.querySelectorAll('pre[class^="language-"]').forEach((block) => {
      block.addEventListener("click", () => {
        navigator.clipboard.writeText(block.innerText);
      });
    });
  });
</script>

<link rel="stylesheet" href="/styles/monokai.css" />
<div class="flex w-full h-screen" on:load={SideTOC()}>
  <div
    class="fixed flex-1 h-[100%] bg-base-300 w-full overflow-y-scroll overflow-visible content"
  >
    <div class="flex flex-col">
      <h1 class="title" style="color: base-100;">{title}</h1>
      <slot></slot>
      <style>
        a {
          @apply text-sky-500;
        }
        h1 {
          @apply text-3xl;
          margin-bottom: 1rem;
        }
        h2 {
          @apply text-2xl;
          margin-bottom: 1rem;
          margin-top: 1rem;
        }
        h3 {
          @apply text-xl;
          margin-bottom: 0.75rem;
          margin-top: 0.75rem;
        }
        h4 {
          @apply text-lg;
        }
        .toc-item{
          @apply text-base;  
        }
        /* Reset heading tags to a consistent baseline */
        .content {
          font-size: 1rem;
          padding-left: 5px;
        }
        p {
          padding-left: 20px;
          word-wrap: break-word;
          overflow: visible;
        }
        @media (min-width: 768px) {
          .content {
            left: min(25%, 250px);
          }
        }
      </style>
    </div>
  </div>
</div>

<style>
  * {
    scroll-behavior: smooth;
  }
</style>