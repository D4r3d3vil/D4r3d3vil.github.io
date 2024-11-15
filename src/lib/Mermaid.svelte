<script>
	import mermaid from 'mermaid';
	import {onMount} from 'svelte';
	export let theme = 'nuetral';
	onMount(()=>{
		mermaid.initialize({
			startOnLoad: true,
			theme
		});
        mermaid.contentLoaded();
	});
</script>
<div class="mermaid">
	<slot></slot>
</div>