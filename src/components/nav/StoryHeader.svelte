<script>
  export let data;
</script>

<div class="header">
  <h1>{data.post_title}</h1>
  <p>{data.intro_text}</p>
  {#each data.keywords as tag}
    <p class="tags">{tag}</p>
  {/each}
</div>

<style lang="scss">
  .header {
    width: 100%;
    height: 300px;
    background-color: pink;
    .tags {
      display: flex;
    }
  }
</style>
