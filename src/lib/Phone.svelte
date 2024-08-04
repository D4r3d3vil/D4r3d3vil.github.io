<script>
	export let color;
</script>

<div
	class="mockup-phone border-{color}"
>
	<div class="camera" />
	<div class="display">
		<div class="artboard artboard-demo phone-1">
			<slot />
		</div>
	</div>
</div>
