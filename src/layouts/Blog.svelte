<script>
  import { browser } from "$app/environment";
  export let data;
  </script>
    <h1 class="h1">Blog Posts</h1>
  <nav class="category-filters">
    {#if browser}
    <button class="filter-btn" style={window.location.href.endsWith('/blog')?"background-color: #017ADC;":""} on:click={()=>window.location.href = '/blog'}>All</button>
    {#each data.categories as category}
    <button class="filter-btn" data-category="{category.name}" style={window.location.href.endsWith(category.name)?"background-color: #017ADC;":""} on:click={()=>window.location.href = '/category/' + category.path}>{category.name}</button>
    {/each}
    {/if}
  </nav>
  <main class="posts-container">
  {#each data.uploads as post}
  <div class="post" on:click={()=>window.location.href='/blog/'+post.path.replace('.md', '').replace('../uploads/pages/', '')}>
  {#if post.metadata.image}<img src={post.metadata.image}>{/if}
  <p class="post-content">{post.metadata.title}</p>
  </div>
  {/each}
  </main>
  <link rel="stylesheet" href="/styles/posts.css">