<script>
  export let points;
  import handleAnchorClick from "$utils/handleAnchorClick";
</script>

<div>
  <p>In this post:</p>
  {#each points as point}
    <li>
      <a href="#{point.id}" on:click={handleAnchorClick}>
        {point.title}
      </a>
    </li>
  {/each}
</div>

<style>
  li {
    margin-top: 0.5rem;
  }
</style>
