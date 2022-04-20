<script>
  import cmsSvelte from "$data/cms-svelte";
  const content = cmsSvelte?.find((record) => record.primary_key == "Flip");
  import FormattedExample from "$components/helpers/FormattedExample.svelte";
</script>

<div class="wrapper">
  <h2>Firstly, what is FLIP and how can we use it?</h2>
  <p>
    FLIP is an animation technique which allows us to smoothly animate between
    the X and Y positions of DOM elements as there position changes (normally as
    a result of filtering or sorting operations).
  </p>
  <p>
    It's an anagram; and if we remember the anagram it helps us understand how
    it works:
  </p>
  <ul>
    <li>First: the initial state of an element,</li>
    <li>Last: the final state of an element (after some UI change),</li>
    <li>
      Invert: calculates the transformation required to get from initial to
      final state,
    </li>
    <li>Play: run the transformation animation(s).</li>
  </ul>
  <h2>Using FLIP for visual storytelling</h2>
  <p>
    There are many articles about the fundamentals of how FLIP works in Svelte.
    The purpose of this article, however, is to think about some innovative uses
    of FLIP to help with visual storytelling.
  </p>
  <p>
    I've made 3 example components that might inspire you to use FLIP for your
    next visual essay.
  </p>

  {#each content.components as ex}
    <FormattedExample comp={ex} route="svelte/flip/" />
  {/each}
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
