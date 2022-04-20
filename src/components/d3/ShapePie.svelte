<script>
  import { arc, pie } from "d3-shape";
  import { colorCategoricalDragon } from "$utils/brand";

  let data = [2, 3, 5, 8, 13, 21];

  $: arcs = pie()(data); // generate the arc angles from data
  const arcGen = arc(); // generate the arcs
  $: pies = arcs.map((arc) => {
    // generate the svg paths from the arcs
    let input = {
      innerRadius: 10,
      outerRadius: 100,
      startAngle: arc.startAngle,
      endAngle: arc.endAngle,
    };
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
      fill={colorCategoricalDragon[i]}
    />
  {/each}
</svg>
