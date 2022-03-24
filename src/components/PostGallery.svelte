<script>
  import SimplePostCard from "$components/SimplePostCard.svelte";
  export let posts;
</script>

<div class="post-gallery">
  {#each posts as post}
    <SimplePostCard data={post} />
  {/each}
</div>

<style lang="scss">
  .post-gallery {
    justify-items: center;
    width: 100%;
    // height: 100%;
    position: relative;
    margin: 0 auto;
  }
</style>
