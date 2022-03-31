<script>
  import * as d3 from "d3";
  import walesData from "$data/wales.json";
  let width = 400;
  let height = 300;
  $: pathGen = d3.geoPath();
  $: path = pathGen(walesData);
</script>

<svg viewBox="93,149,10,12" {width} {height}>
  <path d={path} transform="translate(100,100)" stroke="black" />
</svg>
