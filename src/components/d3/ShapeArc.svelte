<script>
  import { arc } from "d3-shape";
  import { colorCategorical4 } from "$utils/brand";

  const arcGen = arc(); // specify an arc generator

  //generate an arc from data
  $: arcPath = arcGen({
    innerRadius: 0,
    outerRadius: 100,
    startAngle: 0,
    endAngle: Math.PI / 4, // radians
  });
</script>

<svg width="400" height="300" style="padding:30px">
  <path
    d={arcPath}
    fill={colorCategorical4[0]}
    style="transform:translate(120px,120px)"
  />
</svg>
