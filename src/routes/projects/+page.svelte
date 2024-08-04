<script>
  import Carousel from "svelte-carousel";
  export let data;
  import Repo from "../../layouts/Card.svelte";
  import { browser } from "$app/environment";
  let normal = false;
</script>

<div class="flex justify-center">
  <button
    class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
    on:click={() => (normal = !normal)}
    >{#if normal}Carousel{:else}Normal{/if} View</button
  >
</div>
{#if normal}
  <div class="flex flex-wrap justify-center m-4">
    {#each data.projects as project}
      <div class="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
        <Repo
          name={project.metadata.project.name}
          imageSrc={project.metadata.image}
          username={project.metadata.project.author}
          post={project.path}
          description={project.metadata.description}
        />
      </div>
    {/each}
  </div>
{:else if browser}
  <div
    class="carousel carousel-center p-4 space-x-4 bg-base-100 rounded-box w-[100%]"
  >
    <Carousel
      autoplay={true}
      particlesToShow={1000}
      autoplayDuration={1000}
      arrows={false}
      dots={false}
    >
      {#each data.projects as project}
        <div class="carousel-item">
          <Repo
            name={project.metadata.project.name}
            imageSrc={project.metadata.image}
            username={project.metadata.project.author}
            post={project.path}
            description={project.metadata.description}
          />
        </div>
      {/each}
    </Carousel>
  </div>
  <div
    class="carousel carousel-center p-4 space-x-4 bg-base-100 rounded-box w-[100%]"
  >
    <Carousel
      autoplay={true}
      particlesToShow={1000}
      autoplayDuration={1000}
      arrows={false}
      dots={false}
      autoplayDirection={"prev"}
    >
      {#each data.projects as project}
        <div class="carousel-item">
          <Repo
            name={project.metadata.project.name}
            imageSrc={project.metadata.image}
            username={project.metadata.project.author}
            post={project.path}
            description={project.metadata.description}
          />
        </div>
      {/each}
    </Carousel>
  </div>
{/if}

<style>
  .carousel-item {
    transition: transform 0.3s ease-in-out;
  }
  .carousel-item:hover {
    transform: scale(1.05);
  }
</style>
