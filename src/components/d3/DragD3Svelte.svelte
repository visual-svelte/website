<script>
  import { select, drag } from "d3";
  import { onMount } from "svelte";
  let bindSvgHere, svg, circle;

  let data = [
    [50, 50],
    [100, 100],
    [150, 150],
  ];
  let colors = ["blue", "pink", "brown"];

  function started(event) {
    circle = select(this); // set circle to the element that has been dragged.
    circle.attr("cx", event.x).attr("cy", event.y); // move the x/y position
  }
  $: dragHandler = drag().on("drag", started); // setup a simple dragHandler

  onMount(() => {
    svg = select(bindSvgHere);
    dragHandler(svg.selectAll(".myPoint")); //onMount, get all the circles we've rendered and call dragHandler on them
  });
</script>

<svg bind:this={bindSvgHere} height="300" width="500">
  {#each data as point, i}
    <circle
      class="myPoint"
      cx={point[0]}
      cy={point[1]}
      r="15"
      fill={colors[i]}
    />
  {/each}
</svg>
