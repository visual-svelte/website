<script>
  import Scrolly from "$components/helpers/Scrolly.svelte";
  import { scrollyData } from "$data/animatedTransitions.js";
  import Chart2 from "$components/svelte/ChartMorphing/Chart2.svelte";
  import CodeVisual from "$components/CodeVisual.svelte";
  import Icon from "$components/helpers/Icon.svelte";
  import YouTube from "$components/helpers/YouTube.svelte";
  import ScrollyWrapper from "$components/helpers/ScrollyWrapper.svelte";
</script>

<div class="wrapper">
  <h2>The goal</h2>
  <p class="r">
    In this article, I try to re-create some of the animated transitions between
    different types of charts originally found in the following YouTube video.
  </p>
  <YouTube video_id="vLk7mlAtEXI" />

  <p>This presented the following challenges to be overcome:</p>
  <ul>
    <li>
      How to tween smoothly between different SVG elements (i.e. from Rect to
      Circle)?
    </li>
    <li>How to coordinate this across multiple bars/ circles?</li>
  </ul>
  <p class="r">
    Obviously the tools I will be using will be Svelte and D3 (and I also used a
    third-party library called Flubber for SVG path manipulation. <br /><br />I
    chose Flubber after a number of unsuccessful attempts (for this specific use
    case) with: polymorph-js, d3 string interpolator and a custom Svelte
    interpolator/tween; more on these failed attempts towards the end of this
    article.
  </p>

  <h2>Demo:</h2>
  <p class="r">
    Before we get to the code and implementation tips, let's check out the demo:
  </p>
  <div class="box bounce-5">
    <Icon name="chevrons-down" fill="gray" width="20px" height="20px" />
    <span>Scroll </span>
  </div>
  <ScrollyWrapper data={scrollyData} fixedComp={Chart2} fixPosition="center" />

  <h2>Data</h2>
  <p>
    As is often the case with D3/ Animation code, how we format our data ready
    for visualization is all-important. You can find the source data (and path
    creation logic) I created for this piece <a
      href="https://github.com/visual-svelte/website/blob/main/src/data/animatedTransitions.js"
      >here</a
    >.
  </p>
  <p>
    In the piece, it was actually the SVG morphing library, <a
      href="https://github.com/veltman/flubber">Flubber</a
    >, that dictated the shape of the input data. <br /><br />I wanted to use
    the interpolateAll() function which takes as input two lists of paths (for
    example, a list of paths for bars and a list of paths for pies), and creates
    interpolators for each transformation. This meant writing functions for the
    creation of SVG paths that look like Rects and Circles (the Pies are already
    SVG Paths from D3)
  </p>
  <h2>Tried and failed/ gotchas</h2>
  <ul>
    <li>
      I initially used polymorph-js, and created a custom interpolator,
      similarly to how it is described in <a
        href="https://gist.github.com/Cleecanth/342eaa59c7738fc687043eb224814c02"
        >this code</a
      >. Whilst this worked well for one SVG element, I found it difficult to
      efficiently apply it across multiple SVG elements (e.g. 100 bars in a bar
      chart)
    </li>
    <li>
      I also tried the <a
        href="https://observablehq.com/@d3/d3-interpolatestring"
        >d3.interpolateString</a
      > method, but this fails when you go beyond anything but the simplest of SVG
      paths.
    </li>
    <li>
      Finally, I tried something similar to <a
        href="https://svelte.dev/repl/a6268cfc4685416998c6e64516546acd?version=3"
        >this example</a
      >. It basically converts paths to points, tweens the raw values with
      Svelte tweening, then converts the points back to paths. This works well
      for simple icons, but when you have Arcs and other SVG path descriptors,
      things get messy, fast.
    </li>
  </ul>
  <h2>Svelte code</h2>
  <div class="code-box">
    <CodeVisual route="d3/" compid="svelte/ChartMorphing/Chart2" />
  </div>
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }

  .code-box {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  ul {
    li {
      margin: 10px;
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
    margin: 0 auto;
    transform-origin: bottom;
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
