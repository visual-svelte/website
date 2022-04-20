<script>
  import { scaleLinear } from "d3-scale";
  import { select } from "d3-selection";
  import { axisBottom, axisLeft } from "d3-axis";
  import { colorCategorical4 } from "$utils/brand";

  let pinXAxis, pinYAxis; // declare pins
  let margin = 50; // declare initial values for margin and svg_height/width
  let svg_height = 300;
  let svg_width = 400;
  $: height = svg_height - margin * 2;
  $: width = svg_width - margin * 2;

  // define generator functions for x and y axes
  $: x = scaleLinear().domain([0, 100]).range([0, width]);
  $: y = scaleLinear().domain([100, 0]).range([0, height]);

  // call axis generators on the scale and pin the SVG pins.
  $: if (pinXAxis) {
    select(pinXAxis).call(axisBottom(x).ticks(width / 60));
  }
  $: if (pinYAxis) {
    select(pinYAxis).call(axisLeft(y).ticks(height / 60));
  }
</script>

<svg width={svg_width} height={svg_height}>
  <g
    class="xAxis"
    bind:this={pinXAxis}
    transform="translate({margin},{margin + height})"
  />
  <g
    class="yAxis"
    bind:this={pinYAxis}
    transform="translate({margin},{margin})"
  />
  <text
    class="axis-label"
    fill={colorCategorical4[0]}
    y={svg_height - 10}
    x={width / 2}
    >X Axis Label
  </text>
  <text
    class="axis-label"
    fill={colorCategorical4[2]}
    y={15}
    x={-height}
    transform="rotate(270)"
    >Y Axis Label
  </text>
</svg>

<style lang="scss">
  .axis-label {
    font-size: 0.8rem;
  }
</style>
