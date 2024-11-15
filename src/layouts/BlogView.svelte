<script>
    export let posts;
</script>
<div class="flex-grow-1 px-xl-1 ml-24" id="post-list">
    {#each posts as post}
        <article class="card bg-base-100 rounded overflow-hidden">
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
        <div class="divider"></div>
    {/each}
</div>