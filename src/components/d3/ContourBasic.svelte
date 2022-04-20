<script>
  import * as d3 from "d3";
  import { n, m, thresholds, data } from "$data/contours";
  import { colorScaleLog } from "$utils/brand.jsx";
  let width = 300; //width of svg
  let height = 300; //height of svg
  let geoGen = d3.geoPath(); // very simple geoPath generator to convert projections to paths.
  $: contourGen = d3.contours().size([n, m]).thresholds(thresholds); // create contourGen
  $: contours = contourGen(data); //initialize contouts from data

  let cScale;
  $: if (contours) {
    let contourMax = contours.reduce((a, b) =>
      a.value > b.value ? a : b
    ).value;
    cScale = colorScaleLog("dragon", contourMax);
  }
</script>

<svg {width} {height}>
  {#each contours as contour, i}
    <path fill={cScale(contour.value)} d={geoGen(contour)} />
  {/each}
</svg>
