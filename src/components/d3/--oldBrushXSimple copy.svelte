<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { innerWidth } from "$stores/screen"; // innerWidth of a Svelte Window saved in a store for covenience
  import { attr } from "svelte/internal";

  let bindSVGHere;
  let margin = 20;
  let circles;
  let selected = [];

  Float64Array.from({ length: 400 }, rx);

  $: svg_width = 400;
  $: svg_height = 260;

  $: height = svg_height - margin * 2; // height and width of the Axes (Svg width/heights minus the margin width on both sides)
  $: width = svg_width - margin * 2;

  $: x = d3.scaleLinear().domain([0, 10]).range([0, width]); // define generator functions for x and y axes
  $: rx = d3.randomUniform(...x.domain());
  $: ry = d3.randomNormal(height / 2, height / 12);

  $: brush = d3
    .brushX()
    .extent([
      [margin, margin],
      [width, height - margin],
    ])
    // .on("start"  , resetSelection)
    .on("start brush end", brushed);

  function resetSelection() {
    console.log("before reset: ", selected);
    selected = [];
    console.log("AFTER reset: ", selected);
  }

  function brushed(event) {
    const selection = event.selection;
    selected.push(selection);
    // console.log("circles", circles.selection);
    // circles.filter()
    // res = arr1.filter(item => !arr2.includes(item));

    // selectedCircles = selection;
    // // console.log(selection);
    // if (selection === null) {
    //   circles.attr("stroke", null);
    // } else {
    //   const [x0, x1] = selection;
    //   selected.push(selection);
    //   circles.attr("stroke", (d) => (x0 <= d && d <= x1 ? "red" : null));
    // }
  }

  // drawAxis() binds what we generate to the <div bind:this={bindSVGHere} /> DOM element.
  function drawAxis() {
    var svg = d3
      .select(bindSVGHere)
      .append("svg")
      .attr("width", svg_width)
      .attr("height", svg_height)
      .attr("transform", `translate(${margin},${margin})`);

    // X-axis - create and append to the SVG
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", `translate(${margin}, ${height - margin})`)
      .call(d3.axisBottom(x).ticks(width / 60));

    svg
      .selectAll("circle")
      .data([
        [32, 90],
        [57, 90],
        [112, 90],
        [293, 90],
      ])
      .enter()
      .append("svg:circle")
      .attr("cy", (d) => {
        d[1];
      })
      .attr("cx", (d) => {
        d[0];
      })
      .attr("r", 10);

    circles = svg
      .append("g")
      .attr("class", "points")
      .attr("fill-opacity", 0.2)
      .selectAll("circle")
      .data(Float64Array.from({ length: 400 }, rx))
      .join("circle")
      .attr("transform", (d) => `translate(${x(d)},${ry()})`)
      .attr("r", 3.5);

    svg.append("g").attr("class", "brush").call(brush);
  }

  //Due to SSR, we call drawAxis within the onMount() hook
  onMount(() => {
    drawAxis();
  });
</script>

<h1>Currently: {@html selected.length}</h1>

<div class="outer" bind:this={bindSVGHere} />

<style lang="scss">
  .outer {
    background-color: rgba(207, 207, 207, 0.397);
  }
  .outer :global(svg) {
    background-color: rgba(196, 196, 196, 0.397);
    border: 1px solid black;
    padding-left: 20px;
  }
  .outer :global(.brush) {
    z-index: 1;
    fill: rgba(26, 223, 43, 0.05);
    stroke: black;
  }
  .outer :global(.points) {
    z-index: 200;
    fill: rgba(72, 4, 199, 1);
  }

  .outer :global(.axis) {
    // fill: red;
    // stroke: black;
  }
</style>
