<script>
  export let points;
</script>

<div>
  <p>In this post:</p>
  {#each points as point}
    <li>
      <a href="#{point.id}">
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
