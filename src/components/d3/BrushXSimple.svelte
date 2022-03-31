<script>
  import * as d3 from "d3";
  let pinBrush, circles, myBrush;
  let width = 400;
  let height = 300;
  $: brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("start brush end", brushed);

  $: if (pinBrush) {
    myBrush = d3.select(pinBrush).call(brush);
  }

  $: x = d3.scaleLinear().domain([0, 400]).range([0, width]); // define generator functions for x and y axes
  $: rx = d3.randomUniform(...x.domain()); // for data generator only
  $: ry = d3.randomNormal(height / 2, height / 12); // for data generator only
  $: data = Float64Array.from({ length: 40 }, rx); // for data generator only
  $: console.log("data", data);
  let bounds = [0, 0];
  let selectionMade = false;

  function brushed(event) {
    const selection = event.selection;
    if (selection === null) {
      circles.attr("class", "");
    } else {
      bounds = selection.map(x.invert);
      selectionMade = true;
    }
  }

  function resetCircles() {
    bounds = [0, 0];
    selectionMade = false;
    myBrush.call(brush.move, null);
  }
</script>

<div>
  <p>👇 Click and drag over a set of points below to see brush effect.</p>
  <p>Bounds: ({Math.round(bounds[0])},{Math.round(bounds[1])})</p>
  <p>Brush active: {selectionMade}</p>
  <button on:click={resetCircles}>reset</button>
</div>
<svg {width} {height}>
  <g class="points">
    {#each data as point}
      <circle
        class={bounds[0] <= point && point <= bounds[1]
          ? "selected"
          : selectionMade
          ? "not-selected"
          : ""}
        cx={x(point)}
        cy={ry()}
        r={3}
      />
    {/each}
  </g>
  <g class="brush" bind:this={pinBrush} />
</svg>

<style>
  circle {
    transition: 0.3s fill;
  }
  .selected {
    fill: red;
  }
  .not-selected {
    fill: gray;
  }

  .brush {
    stroke: 1px solid gray;
  }
</style>
