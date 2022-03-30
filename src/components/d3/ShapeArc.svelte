<script>
  import * as d3 from "d3";
  const arcGen = d3.arc(); // specify an arc generator

  //generate an arc from data
  $: arcPath = arcGen({
    innerRadius: 0,
    outerRadius: 100,
    startAngle: 0,
    endAngle: Math.PI / 4, // radians
  });
</script>

<svg width="400" height="300" style="padding:30px">
  <path d={arcPath} fill="brown" style="transform:translate(120px,120px)" />
</svg>
