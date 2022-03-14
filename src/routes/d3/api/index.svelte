<script>
  import CMS from "$data/cms";
</script>

{#each CMS as post}
  <button disabled={post.published ? false : true}>{post.primary_key}</button>
{/each}
