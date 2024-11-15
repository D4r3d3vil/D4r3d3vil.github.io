<script>
  import { onMount } from "svelte";

  export let subscibed = false;
  onMount(()=>{
    if(subscibed) document.getElementById('subscribeButton').setAttribute("disabled", "true")
  })
</script>
<div class="card w-full shadow-2xl bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Subscribe to get latest tech news!</h2>
      <form action="https://0xbytes.dev/emails" method="POST">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" name="Name" placeholder="Your name" class="input input-bordered text-white">
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" name="Email" placeholder="Your email" class="input input-bordered text-white">
        </div>
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary" id="subscribeButton">{#if subscibed}Subscribed{:else}Subscribe{/if}</button>
        </div>
      </form>
    </div>
  </div>