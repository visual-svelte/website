<script>
  import Kofi from "$components/helpers/Kofi.svelte";
  export let data;
</script>

<div class="wrapper">
  <h2>Thanks for viewing!</h2>
  <p>
    If you found any of my ramblings or code examples useful, please consider
    supporting this blog so I can make more tutorials:
  </p>

  <div class="kofi-cup">
    <Kofi />
  </div>

  <h2>You might also like:</h2>
  <PostGallery posts={data} showMax={3} pathRoute="/d3/api/" />
</div>

<style>
  .wrapper {
    max-width: 600px;
    margin: 100px auto 0 auto;
  }
  .kofi-cup {
    margin: 30px;
    display: inline-block;
  }
</style>
