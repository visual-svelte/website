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

  // define generator functions for x axis
  $: x = d3
    .scaleBand()
    .domain(["Apple", "Banana", "Cherry", "Donut"])
    .range([0, width])
    .padding([0.5]);

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
      .append("rect")
      .attr("x", margin + x("Cherry"))
      .attr("y", height - margin - 150)
      .attr("height", 150)
      .attr("width", x.bandwidth())
      .style("fill", "#69b3a2")
      .style("opacity", 0.5);
    svg
      .append("rect")
      .attr("x", margin + x("Banana"))
      .attr("y", height - margin - 50)
      .attr("height", 50)
      .attr("width", x.bandwidth())
      .style("fill", "#453234")
      .style("opacity", 0.5);
  }

  //Due to SSR, we call drawAxis within the onMount() hook
  onMount(() => {
    drawAxis();
  });
</script>

<div bind:this={bindSVGHere} />
