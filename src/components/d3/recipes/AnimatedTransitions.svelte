<script>
  import Scrolly from "$components/helpers/Scrolly.svelte";
  import scrollyData from "$data/animatedTransitions.js";
  let scrollValue = 0;
  $: scrollValue, console.log("SV", scrollValue);
</script>

<div class="wrapper">
  <p class="r">
    In this article, I try to re-create some of the animated transitions between
    different types of charts originally found in the following YouTube video
  </p>

  <p class="r">
    Some of the animations are better than others, from a user experience point
    of view, but I mainly wanted to test myself and find the limit to animating
    d3 and HTML elements with Svelte animations.
  </p>
  <div class="full-width">
    <div class="chart">{scrollValue}</div>
    <div class="text-wrapper">
      <Scrolly bind:value={scrollValue}>
        {#each scrollyData as d, i}
          <div class="text step" class:active={scrollValue === i}>
            {d}
          </div>
        {/each}
      </Scrolly>
    </div>
    <!--  -->
  </div>
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }

  .chart {
    position: sticky;
    width: 90%;
    background-color: pink;
    top: 20px;
    // z-index: 1;
    height: 80vh;
    // margin: 0 50px;
    // min-height: 300px;
    // width: 90%;
    // min-width: 400px;
  }

  .text-wrapper {
    min-width: 300px !important;
    width: 35vw;
    position: relative;
    margin: 0 auto;
    z-index: 20;
    .text {
      background-color: rgba(255, 255, 255, 0.5);
      margin: 60vh 0 !important;
      padding: 20px;
      border: 1px gray solid;
    }
  }
  @media all and (min-width: 700px) {
    .chart {
      left: 90%;
      width: 50vw;
    }
    .text-wrapper {
      margin: 0;
      .text {
        background-color: rgba(255, 255, 255, 1);
      }
    }
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
