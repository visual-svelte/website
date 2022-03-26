<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  let bindSVGHere;
  let width = 400;
  let height = 300;
  let circles;
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

    // circles = svg
    //   .selectAll("circle")
    //   .data([
    //     [32, 90],
    //     [57, 90],
    //     [112, 90],
    //     [293, 90],
    //   ])
    //   .enter()
    //   .append("svg:circle")
    //   .attr("fill-opacity", 0.9)

    //   .attr("cy", (d) => {
    //     return d[1];
    //   })
    //   .attr("cx", (d) => {
    //     return x(d[0]);
    //   })
    //   .attr("r", 5);
    console.log("clength", circles._groups[0].length);

    svg.append("g").attr("class", "brush").call(brush);
  }

  onMount(() => {
    drawAxis();
  });
</script>

<p>👇 Click and drag over a set of points below to see brush effect.</p>

<!-- Currently selected: {document.querySelectorAll("g .selected").length} -->

<div class="outer" bind:this={bindSVGHere} />

<style>
  .selected,
  .not-selected {
    transition: 0.5s all;
  }

  .outer :global(.selected) {
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
