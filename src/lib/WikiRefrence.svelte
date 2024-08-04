<script>
  import { onMount } from 'svelte';
  // Import DaisyUI for additional styles
  export let word;
  export let wikiLink;
  
  let definition = '', showDefinition;
  
  async function fetchDefinition() {
    try {
      const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${word}`);
      const data = await response.json();
      if (data.extract) {
        definition = data.extract;
      } else {
        definition = 'No definition found.';
      }
    } catch (error) {
      console.error("Error fetching Wikipedia definition:", error);
      definition = 'No definition found.';
    }
  }
  
  onMount(() => {
    fetchDefinition()
  });
</script>

<div class="inline-block w-fit" on:mouseleave={()=>showDefinition=false}>
  <div class="relative">
    <span on:mouseenter={()=>showDefinition=true} class="cursor-pointer text-sky-500">{word}</span>
    {#if showDefinition}
      <div class="absolute top-full left-0 z-50 border border-base-300 p-2 rounded-lg bg-base-100 w-80">
        <span>{#if definition}{definition}{:else}Loading...{/if} <a href={wikiLink?wikiLink:`https://wikipedia.org/wiki/${word}`} target="_blank" rel="noopener">Wiki</a></span>
      </div>
    {/if}
  </div>
</div>