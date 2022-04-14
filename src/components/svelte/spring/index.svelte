<script>
  import cmsSvelte from "$data/cms-svelte";

  const content = cmsSvelte?.find((record) => record.primary_key == "Spring");
  console.log("content", content);

  let metadata = {
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.intro_text,
    u: "/svelte/flip",
    tags: content?.keywords.join(),
  };
  import FormattedExample from "$components/helpers/FormattedExample.svelte";
</script>

<div class="wrapper">
  <h2>Motivation</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum in
    perspiciatis magnam voluptas autem, quidem velit dolorem. Ullam libero
    facere reprehenderit, quidem recusandae alias iste quae qui, aspernatur
    deleniti nostrum.
  </p>
  {#each content.components as ex}
    <FormattedExample comp={ex} route="svelte/spring/" />
  {/each}

  <!-- tweened+easing vs spring + warning  -->
  <!-- types of easing (for both bars or scatter ) -->
  <!-- tweened bar chart  (plus tween staggered )-->
  <!--  tweened 100%   -->

  <!-- be careful with spring damping - values do not settle at true values.  -->
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
