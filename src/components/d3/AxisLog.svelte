<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { innerWidth } from "$stores/screen"; // innerWidth of a Svelte Window saved in a store for covenience

  let bindSVGHere;
  let margin = 50;

  // define dynamically the outer svg width and height based on the screen width
  $: svg_width = $innerWidth * 0.8 > 500 ? 500 : $innerWidth * 0.8;
  $: svg_height =
    $innerWidth * 0.3 > 500
      ? 500
      : $innerWidth * 0.3 < 400
      ? 400
      : $innerWidth * 0.3;

  // height and width of the Axes (Svg width/heights minus the margin width on both sides)
  $: height = svg_height;
  $: width = svg_width - margin * 2;

  // define generator functions for x and y axes
  $: x = d3.scaleLinear().domain([0, 100]).range([0, width]);
  $: y = d3.scaleLog().domain([10000, 1]).range([100, height]).base(10);

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
      .append("g")
      .attr("transform", `translate(${margin},${-margin})`)
      .call(
        d3
          .axisLeft(y)
          .tickValues([1, 10, 100, 1000, 10000])
          .tickFormat(d3.format(".2"))
      );
  }

  //Due to SSR, we call drawAxis within the onMount() hook
  onMount(() => {
    drawAxis();
  });
</script>

<div bind:this={bindSVGHere} />
