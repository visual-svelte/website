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
    display: grid;
    position: relative;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(180px, 2fr));
  }
</style>
