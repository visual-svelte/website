<script>
  import Scrolly from "$components/helpers/Scrolly.svelte";
  import { scrollyData } from "$data/animatedTransitions.js";
  import AnimatedTransitionsChart2 from "$components/d3/recipes/AnimatedTransitions.Chart2.svelte";
  import CodeVisual from "$components/CodeVisual.svelte";
  import Icon from "$components/helpers/Icon.svelte";

  let scrollValue = 0;
  $: scrollValue, console.log("SV", scrollValue);
</script>

<div class="wrapper">
  <h2>Intro</h2>
  <p class="r">
    In this article, I try to re-create some of the animated transitions between
    different types of charts originally found in <a
      href="https://www.youtube.com/watch?v=vLk7mlAtEXI">this YouTube video</a
    >.
  </p>

  <p class="r">
    Some of the animations are better than others, from a user experience point
    of view, but I mainly wanted to test myself and find the limit to animating
    d3 and HTML elements with Svelte animations.
  </p>

  <h2>Demo:</h2>
  <div class="box bounce-5">
    <Icon name="chevrons-down" fill="gray" width="20px" height="20px" />
    <span>Scroll </span>
  </div>
  <div class="full-width chart-wrap">
    <div class="chart">
      <AnimatedTransitionsChart2 value={scrollValue} />
    </div>
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
  <h2>Svelte code</h2>
  <CodeVisual compid="recipes/AnimatedTransitions.Chart2" />
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
  .chart-wrap {
    margin-bottom: 100px;
  }

  .chart {
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    width: 90vw;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    min-width: 300px;
    background-color: white;
    top: 20px;
    height: 80vh;
  }

  .text-wrapper {
    min-width: 300px !important;
    width: 90%;
    position: relative;
    z-index: 2;
    padding-bottom: 100px;
    .text {
      background-color: rgba(255, 255, 255, 0.5);
      margin: 60vh 0 !important;
      padding: 20px;
      border: none;
    }
  }
  @media all and (min-width: 700px) {
    .chart {
      left: 90%;
      width: 600px;
    }
    .text-wrapper {
      margin: 0;
      width: 35vw;
      .text {
        border: 1px gray solid;
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
  .box {
    align-self: flex-end;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    // background-color: #f44336;
    // height: 200px;
    margin: 0 auto 0 auto;
    transform-origin: bottom;
    // width: 200px;
  }
  .bounce-5 {
    animation-name: bounce-5;
    animation-timing-function: ease;
  }
  @keyframes bounce-5 {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1, 1) translateY(0);
    }
    30% {
      transform: scale(1, 1) translateY(-10px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
</style>
