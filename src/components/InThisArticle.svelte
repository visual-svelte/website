<script>
  import { tableOfContents } from "$stores/post.js";
</script>

<div>
  {#each $tableOfContents as toc}
    <li>{toc.bool}{toc.title}</li>
  {/each}
</div>

<style>
  div {
    position: fixed;
    top: 100px;
  }
</style>
