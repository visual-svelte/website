<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  let bindSvgHere;
  let svg;
  let circle;
  let data = [
    [50, 50],
    [100, 100],
    [150, 150],
  ];

  function started(event) {
    circle = d3.select(this); // set circle to the element that has been dragged.
    circle.attr("cx", event.x).attr("cy", event.y); // move the x/y position
  }
  $: dragHandler = d3.drag().on("drag", started); // setup a simple dragHandler

  onMount(() => {
    svg = d3.select(bindSvgHere);
    circle = svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", (d) => d[0])
      .attr("cy", (d) => d[1])
      .attr("r", 15);
    dragHandler(circle); // call the dragHandler on circle to enable dragging
  });
</script>

<svg bind:this={bindSvgHere} height="300" width="500" />
