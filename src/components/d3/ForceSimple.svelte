<script>
  import * as d3 from "d3";
  //   import data from "$data/force-nodes.csv";
  import { onMount } from "svelte";
  let height = 600;
  let width = 300;
  let svg, bindSvgHere, link, node;
  let links = [
    { source: "Apple", target: "Banana" },
    { source: "Apple", target: "Pear" },
    { source: "Banana", target: "Pear" },
  ];
  let nodes = {};

  links.forEach((link) => {
    link.source =
      nodes[link.source] || (nodes[link.source] = { name: link.source });
    link.target =
      nodes[link.target] || (nodes[link.target] = { name: link.target });
  });

  console.log("nodes", Object.values(nodes));

  function tick() {
    node
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .call(simulation.drag);

    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
  }
  $: simulation = d3
    .forceSimulation(Object.values(nodes))
    .force("charge", d3.forceManyBody())
    .force("link", d3.forceLink(links))
    .force("center", d3.forceCenter());

  onMount(() => {
    svg = d3.select(bindSvgHere);
    simulation(svg.selectAll("circle"));
  });
</script>

<!-- <button on:click={() => simulation.tick()}>Restart</button> -->
<svg bind:this={bindSvgHere} {width} {height}>
  {#each Object.values(nodes) as p, i}
    <circle r={20} style="transform:translate(50px,50px)" />
  {/each}
  <g class="cells" />
</svg>
