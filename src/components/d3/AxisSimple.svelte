<script>
  import * as d3 from "d3";

  let pinXAxis, pinYAxis; // declare pins
  let margin = 30; // declare initial values for margin and svg_height/width
  let svg_height = 300;
  let svg_width = 400;
  $: height = svg_height - margin * 2;
  $: width = svg_width - margin * 2;

  // define generator functions for x and y axes
  $: x = d3.scaleLinear().domain([0, 100]).range([0, width]);
  $: y = d3.scaleLinear().domain([100, 0]).range([0, height]);

  // call axis generators on the scale and pin the SVG pins.
  $: if (pinXAxis) {
    d3.select(pinXAxis).call(d3.axisBottom(x).ticks(width / 60));
  }
  $: if (pinYAxis) {
    d3.select(pinYAxis).call(d3.axisLeft(y).ticks(height / 60));
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
