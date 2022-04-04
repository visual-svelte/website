<script>
  import aboutData from "$data/about.js";
</script>

<div class="container">
  {#each aboutData as sect}
    <h2 id={sect.id.toString()}>{sect.title}</h2>
    <p>{@html sect.text}</p>
  {/each}
</div>

<style lang="scss">
  .container {
    margin: 0 auto;
    max-width: 800px;
  }
</style>
