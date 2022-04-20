<script>
  import { scaleLinear, scaleLog } from "d3-scale";
  import { select } from "d3-selection";
  import { axisBottom, axisLeft } from "d3-axis";
  import { format } from "d3";
  let pinXAxis, pinYAxis; // declare pins
  let margin = 30; // declare initial values for margin and svg_height/width
  let svg_height = 300;
  let svg_width = 400;
  $: height = svg_height - margin * 2;
  $: width = svg_width - margin * 2;

  // define generator functions for x and y axes
  $: x = scaleLinear().domain([0, 100]).range([0, width]);
  $: y = scaleLog().domain([10000, 1]).range([0, height]).base(10);

  // call axis generators on the scale and pin the SVG pins.
  $: if (pinXAxis) {
    select(pinXAxis).call(axisBottom(x).ticks(width / 60));
  }
  $: if (pinYAxis) {
    select(pinYAxis).call(
      axisLeft(y).tickValues([1, 10, 100, 1000, 10000]).tickFormat(format(".2"))
    );
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
