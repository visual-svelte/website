<script>
  import d3CMS from "$data/cms";
</script>

{#each d3CMS as post}
  <button disabled={post.published ? false : true}>{post.primary_key}</button>
{/each}
