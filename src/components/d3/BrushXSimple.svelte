<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { browser } from "$app/env";
  let bindSVGHere;
  let width = 400;
  let height = 300;
  let selectedCount = 0;
  let circles;
  let myBrush;
  $: brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("start brush end", brushed);
  $: x = d3.scaleLinear().domain([0, 400]).range([0, width]); // define generator functions for x and y axes
  $: rx = d3.randomUniform(...x.domain());
  $: ry = d3.randomNormal(height / 2, height / 12);

  function brushed(event) {
    const selection = event.selection;
    if (selection === null) {
      circles.attr("class", "");
    } else {
      const [x0, x1] = selection.map(x.invert);
      circles.attr("class", (d) =>
        x0 <= d && d <= x1 ? "selected" : "not-selected"
      );
    }
    selectedCount = bindSVGHere.querySelectorAll(".selected").length;
  }

  function resetCircles() {
    myBrush.call(brush.move, null);
  }

  function drawAxis() {
    var svg = d3
      .select(bindSVGHere)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    circles = svg
      .append("g")
      .attr("class", "points")
      .attr("fill-opacity", 0.9)
      .selectAll("circle")
      .data(Float64Array.from({ length: 40 }, rx))
      .join("circle")
      .attr("transform", (d) => `translate(${x(d)},${ry()})`)
      .attr("r", 3.5);

    console.log("clength", circles._groups[0].length);

    myBrush = svg.append("g").attr("class", "brush").call(brush);
  }

  onMount(() => {
    drawAxis();
  });
</script>

<p>👇 Click and drag over a set of points below to see brush effect.</p>

Currently selected: {selectedCount}/40
<button on:click={resetCircles}>reset</button>

<div class="outer" bind:this={bindSVGHere} />

<style>
  .outer :global(.selected) {
    z-index: 1;
    fill: red;
  }

  .outer :global(.not-selected) {
    z-index: 1;
    fill: gray;
    opacity: 0.4;
  }
</style>
