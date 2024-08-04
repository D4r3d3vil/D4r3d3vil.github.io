<script>
    export let title;
</script>
<div class="mockup-browser border border-base-300">
    <div class="mockup-browser-toolbar">
      <div class="input border border-base-300">{title}</div>
    </div>
    <slot />
</div>