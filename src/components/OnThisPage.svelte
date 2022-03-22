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
<!-- 
{#each points as point}
  <ul>
    <li>{point.primary_key}</li>
  </ul>
{/each} -->
