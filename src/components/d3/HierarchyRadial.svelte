<script>
  import { hierarchy, lineRadial, cluster } from "d3";
  import { colorCategorical4 } from "$utils/brand";

  let width = 400;
  let height = 300;
  let margin = 30;

  let data = {
    name: "A",
    children: [
      { name: "B" },
      { name: "C", children: [{ name: "E" }, { name: "F" }] },
      { name: "D" },
      { name: "G" },
      { name: "H", children: [{ name: "I" }, { name: "J" }] },
      { name: "K" },
      { name: "L" },
      { name: "M", children: [{ name: "M" }, { name: "N" }] },
      { name: "O" },
    ],
  };

  //   First, consutrct the hierarchical model to feed into the tree generator
  $: root = hierarchy(data).sort(
    (a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name)
  );

  let radius = 100;
  $: treeGen = cluster().size([width - 2 * margin, radius]); // the second size param here represents radius
  $: tree = treeGen(root);
  $: lineGen = lineRadial()
    .angle((d) => (d.x * Math.PI) / 180)
    .radius((d) => d.y);
</script>

<svg {width} {height}>
  <g class="everything" transform="translate(290,125)">
    <!-- Links -->
    {#each tree.links() as link}
      <path d={lineGen([link.target, link.source])} stroke="black" />
    {/each}

    <!-- Nodes & Labels -->
    {#each tree.descendants() as d}
      <circle
        cx={0}
        cy={d.y}
        r={10}
        fill={colorCategorical4[0]}
        transform="rotate({d.x + 180},0,0)"
      />
    {/each}
  </g>
</svg>
