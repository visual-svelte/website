<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  let simulation;

  let width = 300;
  let height = 300;

  const colourScale = d3.scaleOrdinal(d3.schemeCategory10); // make a nice colorscale

  // generate a toy dataset for this example.
  $: nodes = [].concat(
    d3.range(88).map(function () {
      return { r: d3.randomInt(5, 10)() };
    })
  );

  //define our on tick update function
  function simulationUpdate() {
    simulation.tick();
    nodes = [...nodes]; //refresh the nodes array to render/trigger simulation
  }

  onMount(() => {
    simulation = d3
      .forceSimulation(nodes)
      .force("x", d3.forceX(150))
      .force("y", d3.forceY(150))
      .force("collide", d3.forceCollide(12))
      .on("tick", simulationUpdate)
      .alphaTarget(0.1);
  });
</script>

<svg {width} {height}>
  <g class="points">
    {#each nodes as point, i}
      <circle
        class="node"
        r={point.r}
        fill={colourScale(i)}
        cx={point.x}
        cy={point.y}
      />
    {/each}
  </g>
</svg>

<style>
  .points {
    margin: 0 auto;
  }
</style>
