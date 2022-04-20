<script>
  import { scalePoint } from "d3-scale";
  import { select } from "d3-selection";
  import { axisBottom } from "d3-axis";

  let pinXAxis; // declare pins
  let margin = 30; // declare initial values for margin and svg_height/width
  let svg_height = 300;
  let svg_width = 400;
  $: height = svg_height - margin * 2;
  $: width = svg_width - margin * 2;

  let categories = ["Apple", "Banana", "Cherry", "Donut"];

  // define generator functions for x and y axes
  $: x = scalePoint().domain(categories).range([0, width]);

  // call axis generator on the scale and pin the SVG pin.
  $: if (pinXAxis) {
    select(pinXAxis).call(axisBottom(x).ticks(width / 60));
  }
</script>

<svg width={svg_width} height={svg_height}>
  <g
    class="xAxis"
    bind:this={pinXAxis}
    transform="translate({margin}, {height - margin})"
  />
  <circle cx={x("Banana") + margin} cy={height / 2} r={8} />
</svg>
