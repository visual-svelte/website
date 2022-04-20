<script>
  import { scaleLinear, brushX, select } from "d3";
  import { brushData, filtered } from "$stores/brush";

  let pinBrush;
  let width = 400;
  let height = 300;
  let bounds = [0, 0];
  $: x = scaleLinear().domain([0, 400]).range([0, width]); // define generator functions for x and y axes

  $: brush = brushX()
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("start brush end", brushEnd);

  function brushEnd(event) {
    const selection = event.selection;
    if (selection === null) {
    } else {
      bounds = selection.map(x.invert);
    }
  }

  // update the store filtered dataset when bounds change.
  $: $filtered = $brushData.filter(
    (d) => bounds[0] <= d[0] && d[0] <= bounds[1]
  );

  // pin brush to DOM
  $: if (pinBrush) {
    select(pinBrush).attr("class", "brush").call(brush);
  }
</script>

<p>Original: {$brushData.length}</p>
<p>Filtered: {$filtered.length}</p>
<p>Bounds: {bounds[0].toPrecision(4)}, {bounds[1].toPrecision(4)}</p>
<svg width="400" height="500">
  <g class="circles">
    {#each $brushData as point}
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
    {#each $filtered as bar}
      <rect
        class="bar"
        width={width / $brushData.length}
        height={bar[1] / 2}
        style="transform:translate({bar[0]}px,{height + 100 - bar[1] / 2}px)"
      />
    {/each}
  </g>
  <g class="brush" bind:this={pinBrush} />
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
