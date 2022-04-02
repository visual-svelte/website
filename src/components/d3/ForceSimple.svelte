<script>
  import * as d3 from "d3";
  import graph from "$data/graphdata";
  import { onMount } from "svelte";
  let svg;
  let width = 500;
  let height = 600;
  let x = 150;
  let y = 150;
  let r1 = 140;
  let r2 = 70;

  $: nodes = [].concat(
    d3.range(88).map(function () {
      return { type: "a", r: d3.randomInt(5, 10)() };
    })
  );

  let transform = d3.zoomIdentity;

  let simulation;
  onMount(() => {
    simulation = d3
      .forceSimulation(nodes)
      .force("x", d3.forceX(0))
      .force("y", d3.forceY(0))
      .force("collide", d3.forceCollide(12))
      .on("tick", simulationUpdate)
      .alphaTarget(0.1);
  });
  function simulationUpdate() {
    simulation.tick();
    nodes = [...nodes];
  }

  function resize() {
    ({ width, height } = svg.getBoundingClientRect());
  }

  const colourScale = d3.scaleOrdinal(d3.schemeCategory10);
</script>

<svelte:window on:resize={resize} />

<!-- SVG was here -->
<svg bind:this={svg} {width} {height}>
  <g class="points" transform="translate(200,200)">
    {#each nodes as point, i}
      <circle
        class="node"
        r={point.r}
        fill={colourScale(i)}
        cx={point.x}
        cy={point.y}
        transform="translate({transform.x} {transform.y}) scale({transform.k} {transform.k})"
      >
        <title>{point.id}</title></circle
      >
    {/each}
  </g>
</svg>

<style>
  svg {
    float: left;
  }
  circle {
    stroke: #fff;
    stroke-width: 1.5;
  }
</style>
