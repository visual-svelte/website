<script>
  import * as d3 from "d3";
  import { colorCategorical4 } from "$utils/brand";
  let pinXAxis; // declare pins
  let margin = 30; // declare initial values for margin and svg_height/width
  let svg_height = 300;
  let svg_width = 400;
  $: height = svg_height - margin * 2;
  $: width = svg_width - margin * 2;

  // define generator functions for x axis
  $: x = d3
    .scaleBand()
    .domain(["Apple", "Banana", "Cherry", "Donut"])
    .range([0, width])
    .padding([0.5]);

  // call axis generators on the scale and pin the SVG pins.
  $: if (pinXAxis) {
    d3.select(pinXAxis).call(d3.axisBottom(x).ticks(width / 60));
  }
</script>

<svg width={svg_width} height={svg_height}>
  <g
    class="xAxis"
    bind:this={pinXAxis}
    transform="translate({margin},{margin + height})"
  />
  <rect
    x={margin + x("Cherry")}
    y={height + margin - 50}
    height={50}
    width={x.bandwidth()}
    fill={colorCategorical4[0]}
    opacity="0.5"
  />
  <rect
    x={margin + x("Banana")}
    y={height + margin - 150}
    height={150}
    width={x.bandwidth()}
    fill={colorCategorical4[1]}
    opacity="0.5"
  />
</svg>
