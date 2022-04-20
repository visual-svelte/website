<script>
  import { hierarchy, treemap, schemeCategory10 } from "d3";
  import { get_root_for_style } from "svelte/internal";
  let width = 400;
  let height = 300;

  let data = {
    name: "New York City",
    children: [
      { name: "Bronx", population: 1471160 },
      { name: "Brooklyn", population: 2648771 },
      { name: "Manhattan", population: 1664727 },
      { name: "Queens", population: 2358582 },
      { name: "Staten Island", population: 479458 },
    ],
  };
  $: root = hierarchy(data).sum((d) =>
    d.hasOwnProperty("population") ? d.value : 0
  );
  // .sort((a, b) => b.height - a.height || b.value - a.value);

  $: treeMapGen = treemap().size([250, 250]);
  $: treeMap = treeMapGen(root);
  $: console.log("tm", treeMap.descendants());
</script>

<svg {width} {height}>
  {#each treeMap.descendants() as d, i}
    <rect
      x={d.x0}
      y={d.y0}
      height={d.y1 - d.y0}
      width={d.x1 - d.x0}
      fill-opacity="0.7"
      fill={schemeCategory10[i]}
    />
  {/each}
</svg>
