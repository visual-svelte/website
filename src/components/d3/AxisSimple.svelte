<script>
  import { scaleLinear, axisBottom, axisLeft, select } from "d3";

  let pinXAxis, pinYAxis; // declare pins
  let margin = 30; // declare initial values for margin and svg_height/width
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
</svg>
