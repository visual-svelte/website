<script>
  import { scaleLinear, polygonHull } from "d3";
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

  $: xScale = scaleLinear()
    .domain([0, 500])
    .range([0, width - 2 * margin]);
  $: yScale = scaleLinear()
    .domain([0, 500])
    .range([height - 2 * margin, 0]);

  $: hull = polygonHull(data); //create a 'hull' from the point (basically a bounding box)
  $: scaledHull = hull.map((p) => {
    // then scale the output (you could alternatively scale the inputs to the hull generator above)
    return [xScale(p[0]), yScale(p[1])];
  });
</script>

<svg {width} {height}>
  {#each data as point}
    <circle cx={xScale(point[0])} cy={yScale(point[1])} r={5} />
  {/each}
  <path
    fill={colorCategorical4[0]}
    fill-opacity="0.5"
    d={`M${scaledHull.join("L")}Z`}
  />
</svg>
