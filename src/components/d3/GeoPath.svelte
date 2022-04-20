<script>
  import { geoPath } from "d3-geo";
  import { colorCategorical4 } from "$utils/brand";

  import walesData from "$data/wales.json";
  let width = 400;
  let height = 300;
  $: pathGen = geoPath();
  $: path = pathGen(walesData);
</script>

<svg viewBox="93,149,10,12" {width} {height}>
  <path
    d={path}
    transform="translate(100,100)"
    fill={colorCategorical4[0]}
    stroke="darkgray"
    stroke-width="0.05"
  />
</svg>
