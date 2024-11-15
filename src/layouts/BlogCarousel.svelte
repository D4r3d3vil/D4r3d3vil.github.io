<script>
  import { browser } from "$app/environment";
  import Carousel from "svelte-carousel";
  import Card from "./Card.svelte";
  export let posts;
</script>

{#if browser}
  <div
    class="carousel carousel-center p-0 m-0 space-x-4 bg-base-100 rounded-box w-[99vw] bg-transparent"
  >
    <Carousel
      autoplay={true}
      particlesToShow={posts.length}
      duration={1000 * posts.length}
      autoplayDuration={1000}
      arrows={false}
      dots={false}
      timingFunction={"linear"}
      particlesToScroll={5}
    >
      {#each posts as post}
        <div class="carousel-item">
          <Card
            name={post.title}
            imageSrc={post.image}
            post={post.path.replace("../uploads/pages/", "")}
          />
        </div>
      {/each}
    </Carousel>
  </div>
{/if}
