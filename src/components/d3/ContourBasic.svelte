<script>
  import { contours, geoPath } from "d3";
  import { n, m, thresholds, data } from "$data/contours";
  import { colorScaleLog } from "$utils/brand.jsx";
  let width = 300; //width of svg
  let height = 300; //height of svg
  let geoGen = geoPath(); // very simple geoPath generator to convert projections to paths.
  let contourGen = contours().size([n, m]).thresholds(thresholds); // create contourGen
  let contoursX = contourGen(data); //initialize contouts from data

  let cScale;
  $: if (contours) {
    let contourMax = contoursX.reduce((a, b) =>
      a.value > b.value ? a : b
    ).value;
    cScale = colorScaleLog("dragon", contourMax);
  }
</script>

<svg {width} {height}>
  {#each contoursX as contour, i}
    <path fill={cScale(contour.value)} d={geoGen(contour)} />
  {/each}
</svg>
