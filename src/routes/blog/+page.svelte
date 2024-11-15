<script>
  import BlogView from "../../layouts/BlogView.svelte";
  export let data;
  let posts = data.uploads;
</script>
<BlogView {posts}/>