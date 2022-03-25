<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { innerWidth } from "$stores/screen"; // innerWidth of a Svelte Window saved in a store for covenience

  let bindSVGHere;
  let margin = 65;

  // define dynamically the outer svg width and height based on the screen width
  $: svg_width = $innerWidth * 0.8 > 500 ? 500 : $innerWidth * 0.8;
  $: svg_height =
    $innerWidth * 0.6 > 450
      ? 40
      : $innerWidth * 0.6 < 350
      ? 350
      : $innerWidth * 0.6;

  // height and width of the Axes (Svg width/heights minus the margin width on both sides)
  $: height = svg_height;
  $: width = svg_width - margin * 2;

  // define generator functions for x and y axes
  $: x = d3.scaleLinear().domain([0, 100]).range([0, width]);
  $: y = d3.scaleLinear().domain([100, 0]).range([100, height]);

  // drawAxis() binds what we generate to the <div bind:this={bindSVGHere} /> DOM element.
  function drawAxis() {
    var svg = d3
      .select(bindSVGHere)
      .append("svg")
      .attr("width", svg_width)
      .attr("height", svg_height);

    // X-axis - create and append to the SVG
    svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(${margin}, ${height - margin})`)
      .call(d3.axisBottom(x).ticks(width / 60));

    svg
      .append("g")
      .attr("transform", `translate(${margin},${-margin})`)
      .call(d3.axisLeft(y).ticks(height / 60));

    svg
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", width - margin / 2)
      .attr("y", height - margin / 2)
      .text("X axis title");
    // Y axis label:
    svg
      .append("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-90)")
      .attr("y", margin / 2)
      .attr("x", -margin / 2)
      .text("Y axis top");
  }

  //Due to SSR, we call drawAxis within the onMount() hook
  onMount(() => {
    drawAxis();
  });
</script>

<div class="holder" bind:this={bindSVGHere} />

<style lang="scss">
  .holder :global(.x-axis-label) {
    fill: red !important;
  }
</style>
