<script>
  import {
    range,
    randomInt,
    forceSimulation,
    forceX,
    forceY,
    forceCollide,
  } from "d3";
  import { onMount } from "svelte";
  import { colorScaleLinear } from "$utils/brand";

  let simulation;
  let width = 300;
  let height = 300;

  const colourScale = colorScaleLinear("dragon", 100); // make a nice colorscale

  // generate a toy dataset for this example.
  $: nodes = [].concat(
    range(88).map(function () {
      return { r: randomInt(5, 10)() };
    })
  );

  //define our on tick update function
  function simulationUpdate() {
    simulation.tick();
    nodes = [...nodes]; //refresh the nodes array to render/trigger simulation
  }

  onMount(() => {
    simulation = forceSimulation(nodes)
      .force("x", forceX(150))
      .force("y", forceY(150))
      .force("collide", forceCollide(12))
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
