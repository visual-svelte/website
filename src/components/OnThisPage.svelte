<script>
  export let points;
  console.log("points", points);
</script>

{#each points as point}
  <li>
    {point.title}
  </li>
{/each}

<!-- 
{#each points as point}
  <ul>
    <li>{point.primary_key}</li>
  </ul>
{/each} -->
