<script>
  import * as d3 from "d3";
  let data = [2, 3, 5, 8, 13, 21];

  $: arcs = d3.pie()(data); // generate the arc angles from data
  const arcGen = d3.arc(); // generate the arcs
  $: pies = arcs.map((arc) => {
    // generate the svg paths from the arcs
    let input = {
      innerRadius: 10,
      outerRadius: 100,
      startAngle: arc.startAngle,
      endAngle: arc.endAngle,
    };
    console.log("svg?", arcGen(input));
    return arcGen(input);
  });
  console.log("piesme", pies);
</script>

<!-- Plot the svg paths  -->
<svg width="400" height="300">
  {#each pies as pie, i}
    <path
      d={pie}
      style="transform:translate(150px, 150px)"
      fill={d3.schemeCategory10[i]}
    />
  {/each}
</svg>
