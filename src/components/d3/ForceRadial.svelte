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

  const nodeRadius = 5;
  $: nodes = [].concat(
    d3.range(88).map(function () {
      return { type: "a" };
    }),
    d3.range(45).map(function () {
      return { type: "b" };
    })
  );

  let transform = d3.zoomIdentity;

  let simulation;
  onMount(() => {
    simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceCollide().radius(5).iterations(2))
      .force(
        "r",
        d3.forceRadial((d) => (d.type === "a" ? r1 : r2), x, y).strength(10)
      )
      .on("tick", simulationUpdate)
      .alphaTarget(0.1);

    d3.select(svg)
      .call(
        d3
          .drag()
          .container(svg)
          .subject(dragsubject)
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      )
      .call(
        d3
          .zoom()
          .scaleExtent([1 / 10, 8])
          .on("zoom", zoomed)
      );
  });
  function simulationUpdate() {
    simulation.tick();
    nodes = [...nodes];
  }
  function zoomed(currentEvent) {
    transform = currentEvent.transform;
    simulationUpdate();
  }
  function dragsubject(currentEvent) {
    const node = simulation.find(
      transform.invertX(currentEvent.x),
      transform.invertY(currentEvent.y),
      nodeRadius
    );
    if (node) {
      node.x = transform.applyX(node.x);
      node.y = transform.applyY(node.y);
    }
    return node;
  }
  function dragstarted(currentEvent) {
    if (!currentEvent.active) simulation.alphaTarget(0.3).restart();
    currentEvent.subject.fx = transform.invertX(currentEvent.subject.x);
    currentEvent.subject.fy = transform.invertY(currentEvent.subject.y);
  }
  function dragged(currentEvent) {
    currentEvent.subject.fx = transform.invertX(currentEvent.x);
    currentEvent.subject.fy = transform.invertY(currentEvent.y);
  }
  function dragended(currentEvent) {
    if (!currentEvent.active) simulation.alphaTarget(0);
    currentEvent.subject.fx = null;
    currentEvent.subject.fy = null;
  }
  function resize() {
    ({ width, height } = svg.getBoundingClientRect());
  }
</script>

<svelte:window on:resize={resize} />

<!-- SVG was here -->
<svg bind:this={svg} {width} {height}>
  <circle
    r={r1}
    cx={x}
    cy={y}
    stroke="brown"
    stroke-opacity="0.5"
    fill="none"
  />
  <circle
    r={r2}
    cx={x}
    cy={y}
    stroke="steelblue"
    stroke-opacity="0.5"
    fill="none"
  />
  {#each nodes as point}
    <circle
      class="node"
      r={5}
      fill={point.type == "a" ? "brown" : "steelblue"}
      cx={point.x}
      cy={point.y}
      transform="translate({transform.x} {transform.y}) scale({transform.k} {transform.k})"
    >
      <title>{point.id}</title></circle
    >
  {/each}
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
