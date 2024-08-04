<script>
  import { onMount } from "svelte";
  export let name, imageSrc, username, description, post;
  console.log(`/blog/${post.replace('.md', '')}`)
</script>

<figure
  class="relative overflow-hidden m-4 shadow-lg rounded-lg w-[250px] text-center text-base transition-all duration-300 ease-in-out bg-base-100"
  on:click={() => window.location.href = `/blog/${post.replace('.md', '')}`}>
  <div class="relative z-10">
    <img class="w-full" src={imageSrc} alt="project image" />
    {#if description}
      <p class="absolute top-1/2 w-full text-white italic transform -translate-y-1/2 opacity-0 transition-opacity duration-300 ease-in-out">
        {description}
      </p>
    {/if}
  </div>
  <figcaption class="p-6">
    <h3 class="mb-1 font-light text-primary">{name}</h3>
      {#if username}<a class="no-underline rounded-lg github" href={`https://github.com/${username}/${name}`}>Github 🎩&rarr;</a>{/if}
  </figcaption>
</figure>

<style>
  figure:hover .relative p {
    opacity: 1;
  }
  figure:hover img {
    opacity: 0.2;
    filter: grayscale(100%);
  }
  .github{
    background: rgb(228, 107, 255);
    color:black;
  }
</style>
