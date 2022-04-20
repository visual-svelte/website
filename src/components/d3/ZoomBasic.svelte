<script>
  import { zoom, select } from "d3";
  import { colorScaleLinear } from "$utils/brand";

  $: data = getData();
  let width = 400;
  let height = 300;
  let numPoints = 100;
  let bindHandleZoom, bindInitZoom;
  let showText = true;
  let colorScale;
  $: if (data) {
    colorScale = colorScaleLinear("dragon", data.length);
  }

  $: zoomX = zoom()
    .scaleExtent([1, 5])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", handleZoom);

  function handleZoom(e) {
    console.log("ev", e.transform);
    select(bindHandleZoom).attr("transform", e.transform);
  }

  $: if (bindInitZoom) {
    select(bindInitZoom).call(zoomX);
  }

  function getData() {
    let data = [];
    for (let i = 0; i < numPoints; i++) {
      data.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
      });
    }
    return data;
  }
</script>

<svg bind:this={bindInitZoom} {width} {height}>
  <g class="points" bind:this={bindHandleZoom}>
    <text x={width / 2} y={height / 2}>Zoom Here!</text>
    {#each data as d, i}
      <circle cx={d.x} cy={d.y} r="4" fill={colorScale(i)} />
    {/each}
  </g>
</svg>

<style>
  div {
    /* position: absolute; */
    left: 150px;
    margin-top: 150px;
    z-index: 1;
  }
  svg {
    z-index: 2;
    position: relative;
  }
</style>
