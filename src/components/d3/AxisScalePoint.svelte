<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { innerWidth } from "$stores/screen"; // innerWidth of a Svelte Window saved in a store for covenience

  let bindSVGHere;
  let margin = 40;

  // define dynamically the outer svg width and height based on the screen width
  $: svg_width = $innerWidth * 0.8 > 600 ? 600 : $innerWidth * 0.8;
  $: svg_height =
    $innerWidth * 0.5 > 450
      ? 450
      : $innerWidth * 0.5 < 300
      ? 300
      : $innerWidth * 0.5;

  // height and width of the Axes (Svg width/heights minus the margin width on both sides)
  $: height = svg_height - margin * 2;
  $: width = svg_width - margin * 2;

  let categories = ["Apple", "Banana", "Cherry", "Donut"];

  // define generator functions for x and y axes
  $: x = d3.scalePoint().domain(categories).range([0, width]);

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
      .attr("transform", `translate(${margin}, ${height - margin})`)
      .call(d3.axisBottom(x).ticks(width / 60));

    svg
      .append("circle")
      .attr("cx", x("Banana") + margin)
      .attr("cy", height / 2)
      .attr("r", 8);
  }

  //Due to SSR, we call drawAxis within the onMount() hook
  onMount(() => {
    drawAxis();
  });
</script>

<div bind:this={bindSVGHere} />
