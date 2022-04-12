<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import groups from "$data/forceAnimations.cjs";
  let localGroups = groups;
  let innerWidth, innerHeight;
  let tickCount = 0;
  let simulation;

  let data = [
    { all: 100 },
    { male: 49, female: 49, other: 2 },
    { british: 32, spanish: 12, french: 45, german: 11 },
  ];

  // import { spring } from "svelte/motion";

  // let coords = spring(
  //   { x: 50, y: 50 },
  //   {
  //     stiffness: 0.1,
  //     damping: 0.25,
  //   }
  // );

  $: width = innerWidth ? innerWidth * 0.8 : 600;
  $: height = innerHeight ? innerHeight * 0.8 : 500;
  $: cols = width ? Math.floor(width / 150) : 3;

  function flatten(arr) {
    return [].concat.apply([], arr);
  }

  $: flat = flatten(localGroups.map((d) => d.data));

  $: console.log(flat);

  const colors = [
    "#66c2a5",
    "#fc8d62",
    "#8da0cb",
    "#e78ac3",
    "#a6d854",
    "#ffd92f",
  ];

  let x = d3.scaleBand();
  let y = d3.scaleBand();

  let xAccessor = (d) => x(d) + x.bandwidth();
  let yAccessor = (d) => y(d) + y.bandwidth() / 2;

  const colourScale = d3.scaleOrdinal(d3.schemeCategory10); // make a nice colorscale

  let firstDraw = true;

  // $: if (firstDraw && simulation) {
  //   simulation.stop();
  //   for (let i = 0; i < 50; i++) simulation.tick();
  //   simulation.restart();
  //   firstDraw = false;
  // }

  function draw() {
    tickCount = 0;
    if (simulation) simulation.stop();

    localGroups.forEach((d, i) => {
      d["row"] = Math.floor(i / cols);
      d["col"] = i % cols;
      d["data"].forEach((d0) => {
        d0["row"] = d["row"];
        d0["col"] = d["col"];
      });
    });

    x.domain([0, cols + 1]);
    x.range([0, width]);

    y.domain([0, 2]);
    y.range([0, height]);

    simulation = d3
      .forceSimulation(flat)
      .force("x", d3.forceX(firstDraw ? width / 2 : xAccessor))
      .force("y", d3.forceY(firstDraw ? height / 2 : yAccessor))
      .force(
        "collide",
        d3.forceCollide((d) => d.value + 1)
      )
      //   .alphaTarget(0.1)
      .on("tick", simulationUpdate);
    // nodes = d3.select(svg).selectAll("g").data(flat).join("g");
    // circles = nodes.append("circle").attr("r", (d) => d.value);
  }

  //define our on tick update function
  function simulationUpdate() {
    simulation.tick();
    // flat = [...flat]; //refresh the nodes array to render/trigger simulation

    tickCount++;

    if (tickCount === 1) {
      simulation
        .force("x", d3.forceX(xAccessor))
        .force("y", d3.forceY(yAccessor));
    }

    nodes = d3.selectAll("circle");
    // console.log("gettingD", nodes._groups);
    nodes.attr("transform", (d) => `translate(${d.x},${d.y})`);

    // ("cx", (d) => d.x);
    // nodes.attr("cy", (d) => d.y);
  }

  let nodes;
  let svg;
  let circles;

  function splitData() {
    simulation.stop();
    simulation.forceX(d3.forceX(xAccessor));
    console.log(simulation);
    simulationUpdate();
  }

  onMount(() => {
    simulation = d3
      .forceSimulation(flat)
      .force("x", d3.forceX(firstDraw ? width / 2 : xAccessor))
      .force("y", d3.forceY(firstDraw ? height / 2 : yAccessor))
      .force(
        "collide",
        d3.forceCollide((d) => d.value + 1)
      )
      .alphaTarget(0.5)
      .on("tick", simulationUpdate);

    draw();
    simulation.stop();
    for (let i = 0; i < 50; i++) simulation.tick();
    simulation.restart();
    firstDraw = false;
  });

  let translateX = 0;
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<div>
  <button on:click={splitData}>Force X </button>
  <button on:click={() => (translateX -= 20)}>Move left</button>
  <div />
  <svg bind:this={svg} {width} {height}>
    <g class="points" transform="translate({translateX},0)">
      {#each flat as d, i}
        <circle
          class="node"
          r={d.value}
          cx={firstDraw ? width / 2 : d.x}
          cy={firstDraw ? width / 2 : d.y}
          fill={colors[i]}
        />
      {/each}
    </g>
  </svg>
</div>

<style>
  .points {
    /* transition: 1s all; */
  }
</style>
