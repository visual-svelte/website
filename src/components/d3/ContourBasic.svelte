<script>
  import * as d3 from "d3";
  import { n, m, thresholds, data } from "$data/contours";
  let width = 300; //width of svg
  let height = 300; //height of svg
  let geoGen = d3.geoPath(); // very simple geoPath generator to convert projections to paths.
  $: contourGen = d3.contours().size([n, m]).thresholds(thresholds); // create contourGen
  $: contours = contourGen(data); //initialize contouts from data
  $: color = d3.scaleSequentialLog(d3.extent(thresholds), d3.interpolateMagma); // create color scale function
</script>

<svg {width} {height}>
  {#each contours as contour}
    <path fill={color(contour.value)} d={geoGen(contour)} />
  {/each}
</svg>
