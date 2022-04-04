<script>
  import aboutData from "$data/about.js";
  import Meta from "$components/helpers/Meta.svelte";
  let metadata = {
    t: "About | VisualSvelte",
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: "/about",
    tags: "d3,svelte,visual,storytelling,data,journalism",
  };
</script>

<Meta {metadata} />

<div class="container">
  {#each aboutData as sect}
    <h1 id={sect.id.toString()}>{sect.title}</h1>
    <p>{@html sect.text}</p>
  {/each}
</div>

<style lang="scss">
  .container {
    margin: 0 auto;
    max-width: 800px;
  }
</style>
