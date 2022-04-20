<script>
  import {
    range,
    forceSimulation,
    zoomIdentity,
    forceCollide,
    select,
    drag,
    zoom,
    forceRadial,
  } from "d3";
  import { colorCategorical4 } from "$utils/brand";

  import { onMount } from "svelte";
  import { color } from "d3";
  let svg;
  let width = 500;
  let height = 450;
  let x = 150;
  let y = 150;
  let r1 = 140;
  let r2 = 70;

  const nodeRadius = 5;
  $: nodes = [].concat(
    range(88).map(function () {
      return { type: "a" };
    }),
    range(45).map(function () {
      return { type: "b" };
    })
  );

  let transform = zoomIdentity;

  let simulation;
  onMount(() => {
    simulation = forceSimulation(nodes)
      .force("charge", forceCollide().radius(5).iterations(2))
      .force(
        "r",
        forceRadial((d) => (d.type === "a" ? r1 : r2), x, y).strength(10)
      )
      .on("tick", simulationUpdate)
      .alphaTarget(0.1);

    select(svg)
      .call(
        drag()
          .container(svg)
          .subject(dragsubject)
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      )
      .call(
        zoom()
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
</script>

<svg bind:this={svg} {width} {height}>
  {#each nodes as point}
    <circle
      class="node"
      r={5}
      fill={point.type == "a" ? colorCategorical4[0] : colorCategorical4[1]}
      cx={point.x}
      cy={point.y}
    >
      <title>{point.id}</title></circle
    >
  {/each}
</svg>
