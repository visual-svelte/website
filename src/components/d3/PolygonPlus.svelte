<script>
  import * as d3 from "d3";
  import { colorCategorical4 } from "$utils/brand";

  let width = 400;
  let height = 300;
  let margin = 20;
  let data = [
    [210, 90],
    [110, 400],
    [420, 400],
    [490, 250],
  ];

  let testPoints = [
    [200, 350],
    [50, 50],
  ];

  //   setup some simple x and y scales
  $: xScale = d3
    .scaleLinear()
    .domain([0, 500])
    .range([0, width - 2 * margin]);
  $: yScale = d3
    .scaleLinear()
    .domain([0, 500])
    .range([height - 2 * margin, 0]);

  $: hull = d3.polygonHull(data); //create a 'hull' from the point (basically a bounding box)
  $: scaledHull = hull.map((p) => {
    // then scale the output (you could alternatively scale the inputs to the hull generator above)
    return [xScale(p[0]), yScale(p[1])];
  });
  $: centroid = d3.polygonCentroid(hull); // compute the centroid from the hull
</script>

<p>Polygon area: {d3.polygonArea(data)}</p>
<p>Length of the perimeter: {Math.round(d3.polygonLength(data))}</p>

<svg {width} {height}>
  {#each data as point}
    <circle cx={xScale(point[0])} cy={yScale(point[1])} r={5} />
  {/each}
  <path
    fill={colorCategorical4[0]}
    fill-opacity="0.5"
    d={`M${scaledHull.join("L")}Z`}
  />

  <!-- plot and test points to see if they fall within hull area.  -->
  {#each testPoints as tp}
    <circle
      cx={xScale(tp[0])}
      cy={yScale(tp[1])}
      r={5}
      fill={d3.polygonContains(hull, tp) ? "green" : "red"}
    />
    <text x={xScale(tp[0]) + 8} y={yScale(tp[1])}
      >{d3.polygonContains(hull, tp) ? "IN" : "OUT"}
    </text>
  {/each}

  <!-- Plot the centroid -->
  <circle cx={xScale(centroid[0])} cy={yScale(centroid[1])} r={5} fill="blue" />
  <text x={xScale(centroid[0]) + 8} y={yScale(centroid[1])}>Centroid </text>
</svg>
