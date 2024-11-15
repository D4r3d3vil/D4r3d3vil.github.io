<script>
    // Generate 10 fake posts
    export let data;
    let posts = data.uploads;
  </script>
  
  <div class="flex-grow-1 px-xl-1" id="post-list">
    {#each posts as post}
      <article class="card bg-base-100 shadow-md rounded-lg overflow-hidden">
          <div class="card-body flex flex-col p-4">
            <h1 class="card-title my-2 mt-md-0 text-xl font-bold text-sky-500"> <a href="/" class="post-preview flex flex-col no-underline hover:underline">{post.metadata.title} </a></h1>
            <div class="card-text content mt-0 mb-3 text-gray-700">
              <p>{post.metadata.description}</p>
            </div>
            <div class="post-meta flex-grow-1 flex items-end text-sm text-gray-500">
              <div class="me-auto flex items-center">
                <div class="icon me-1">
                  <i class="far fa-calendar-alt"></i>
                </div>
                <div>{post.metadata.date}</div>
                {#if post.metadata.categories}
                  <div class="icon me-1 ml-3">
                    <i class="far fa-folder-open"></i>
                  </div>
                  <span class="categories">
                    {#each post.categories as category}
                      <span>{category}</span>
                    {/each}
                  </span>
                {/if}
              </div>
              {#if post.pin}
                <div class="pin ms-1 flex items-center">
                  <div class="icon me-1">
                    <i class="fas fa-thumbtack"></i>
                  </div>
                  <span>Pinned</span>
                </div>
              {/if}
            </div>
          </div>
      </article>
    {/each}
  </div>
  <style>
    #post-list {
      display: flex;
      flex-direction: column;
      gap: 0rem;
    }
  
    .card {
      display: flex;
      flex-direction: column;
      border-bottom: solid 1px white;
      border-radius: 0;
    }
  
    .card-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  
    .post-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .post-meta .categories {
      display: flex;
      gap: 0.5rem;
    }
  
    .post-preview {
      text-decoration: none;
      color: inherit;
    }
  
    .post-preview:hover {
      text-decoration: underline;
    }
  
    .icon {
      display: flex;
      align-items: center;
    }
  
    .icon i {
      font-size: 1rem;
    }
  </style>