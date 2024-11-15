<script>
	import { page } from "$app/stores";
	import Folder from "./Folder.svelte";

	// Reactive categories from the page store
	$: categories = $page.data.filesystem;
	// Reactive openFolders array to track which folders are open
	$: openFolders = [];

	// Toggle the folder open/close state
	function toggleFolder(event) {
		if (event.detail.folderOpen) {
			openFolders = [...openFolders, event.detail.name];
		} else {
			openFolders = openFolders.filter(item => item !== event.detail.name);
		}
		console.log(openFolders);
	}
</script>

{#each Object.keys(categories) as category}
	{#if categories[category].length > 0}
		<Folder name={category} path={category} files={categories[category]} on:toggle={toggleFolder} />
		{#if openFolders.includes(category)}
		{#each categories[category] as folder}
			<div class="ml-16">
				<Folder name={folder.name} path={folder.path} />
			</div>
		{/each}
		{/if}
	{:else}
	<Folder name={category.name} path={category.name}  />
	{/if}
{/each}