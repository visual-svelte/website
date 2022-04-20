<script>
  import cmsSvelte from "$data/cms-svelte";

  const content = cmsSvelte?.find((record) => record.primary_key == "Motion");

  import FormattedExample from "$components/helpers/FormattedExample.svelte";
</script>

<div class="wrapper">
  <h2>What is Svelte Motion and how can we use it?</h2>
  <p>
    Adding life to visual essays is what it's all about, right? <br /><br
    />Well, luckily with Svelte you get given two really simple methods for
    animating things on your page. <br /> <br /> Introducing Svelte Motion or
    Spring and Tweened to be precise.
    <br /> <br /> They're both quite similar, but to define them:
  </p>
  <ul>
    <li>
      Spring: animates between states in a spring-like fashion. Controllable by
      stiffness and damping parameters.
    </li>
    <li>
      Tweened: animates between states over a given duration, with a specific
      easing function.
    </li>
  </ul>
  <p>
    A picture (or interactive visual) paints a thousand words, so let's see how
    they work visually.
  </p>

  {#each content.components as ex}
    <FormattedExample comp={ex} route="svelte/motion/" />
  {/each}
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
