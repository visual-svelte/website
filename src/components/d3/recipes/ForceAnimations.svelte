<script>
  import ForceAnimationsTwo from "$components/d3/recipes/ForceAnimations.Two.svelte";
  import ForceAnimationsOne from "$components/d3/recipes/ForceAnimations.One coo.svelte";
</script>

<div class="wrapper">
  <h2>Motivation</h2>
  <p>
    This piece is inspired by two pieces: 1) the <a
      href="https://stateofapis.com/">State of the APIs</a
    >
    by Amelia Wattenberger (specifically the first bit on the demographics of the
    survey participants), and 2) this
    <a href="https://pudding.cool/2017/03/hamilton/index.html">Hamilton piece</a
    > on Pudding.cool by Shirley Wu.
  </p>
  <p>
    Both pieces feature (what I assume to be) <a
      rel="internal"
      href="/d3/api/d3-force">D3 force simulations</a
    > and animated them to give life to the pieces. This is a technique I wanted
    to learn, so this article is my attempt!
  </p>
  <p>
    I also wanted to explore how I can combine the Svelte animation toolkit with
    D3 force simulations. So let's get started!
  </p>

  <h2>The limits of just d3-force</h2>
  <p>
    Before getting stuck into more fancy stuff, I wanted to explore what was
    possible just with <a rel="internal" href="/d3/api/d3-force">d3-force</a>.
  </p>
  <h2>First</h2>
  <div class="full-width">
    <!-- <ForceAnimationsOne /> -->
  </div>

  <h2>Second</h2>
  <div class="full-width">
    <ForceAnimationsTwo />
  </div>
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
  .full-width {
    width: 90vw;
    position: relative;
    left: 65%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
</style>
