<script>
  import Carousel from "svelte-carousel";
  import Card from "./Card.svelte";
  
  export let items;
</script>
<div class="carousel carousel-center p-0 m-0 space-x-4 bg-base-100 rounded-box w-[99vw]">
  <Carousel autoplay={true} particlesToShow={items.length} duration={1000 * items.length} autoplayDuration={1000} arrows={false} dots={false} timingFunction={'linear'} particlesToScroll={5}>
  {#each items as item}
  <div class="carousel-item">
    <Card name={item.name} imageSrc={item.image} username={item.author?item.author:null} post={item.path}/>
  </div>
  {/each}
  </Carousel>
</div>