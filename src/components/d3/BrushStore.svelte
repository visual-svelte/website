<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { brushData, filtered } from "$stores/brush";
  import _ from "lodash";
  let mySvg;
  let width = 400;
  let height = 300;
  let svg;
  let bounds = [0, 0];

  $: brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("start brush end", brushEnd);

  $: x = d3.scaleLinear().domain([0, 400]).range([0, width]); // define generator functions for x and y axes

  function brushEnd(event) {
    const selection = event.selection;
    if (selection === null) {
    } else {
      bounds = selection.map(x.invert);
    }
  }

  $: $filtered = $brushData.filter(
    (d) => bounds[0] <= d[0] && d[0] <= bounds[1]
  );

  function drawAxis() {
    svg = d3.select(mySvg);
    svg.append("g").attr("class", "brush").call(brush);
  }

  onMount(() => {
    drawAxis();
  });
</script>

<p>Original: {$brushData.length}</p>
<p>Filtered: {$filtered.length}</p>
<p>Bounds: {bounds[0].toPrecision(4)}, {bounds[1].toPrecision(4)}</p>
<svg bind:this={mySvg} width="400" height="500">
  <g class="circles">
    {#each $brushData as point, i}
      <circle
        class:selected={bounds[0] <= point[0] && point[0] <= bounds[1]}
        class="circle"
        cy={point[1]}
        cx={x(point[0])}
        r="5"
      />
    {/each}
  </g>
  <g class="bars">
    {#each $filtered as bar, i}
      <rect
        class="bar"
        width={width / $brushData.length}
        height={bar[1] / 2}
        style="transform:translate({bar[0]}px,{height + 100 - bar[1] / 2}px)"
      />
    {/each}
  </g>
</svg>

<style>
  .selected,
  .not-selected {
    transition: 0.5s all;
  }
  .circle,
  .bar {
    fill: var(--c-darkgray);
    fill-opacity: 0.7;
  }
  .bar {
    fill: var(--c-darkgray);
    fill-opacity: 0.3;
  }

  .circles :global(.selected) {
    z-index: 1;
    fill: red;
    /* stroke: black; */
  }

  .outer :global(.not-selected) {
    z-index: 1;
    fill: gray;
    opacity: 0.4;
  }
</style>
