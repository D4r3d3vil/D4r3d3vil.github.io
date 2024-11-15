<script>
    import paths from '../../../uploads/paths.json'
    import {createEventDispatcher} from "svelte";
    export let files, name, path, folderOpen = false;
    let link = path;
    let dispatch = createEventDispatcher()
    function toggleFolder(){
        folderOpen = !folderOpen;
        dispatch('toggle', {name, folderOpen})
    }
    if(paths[name] && paths[name] == path) link = name;
</script>
<div class="card bg-base-100 shadow-xl mb-2 rounded-xl w-[80%]">
    <div class="card-body p-6">
        <h2 class="card-title text-xl font-semibold flex justify-between items-center space-x-4">
            <button
                    class="flex items-center text-lg font-medium text-primary hover:text-primary-content transition-all duration-200 space-x-3"
            >
                {#if files}
                    <i class="fas fa-folder text-2xl"></i>
                    <a href="./categories/{link}">{name}</a>
                <i class={`fas ${folderOpen ? 'fa-chevron-down' : 'fa-chevron-right'} transition-transform text-gray-600`} on:click={toggleFolder}></i>
                    {:else}
                    <i class="far fa-folder text-2xl"></i>
                    <a href="./categories/{link}">{name}</a>
                {/if}
            </button>
        </h2>
    </div>
</div>