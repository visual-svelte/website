<script>
  import { hierarchy, tree } from "d3";
  import { colorCategorical4 } from "$utils/brand";

  let width = 400;
  let height = 300;
  let margin = 30;

  let data = {
    name: "A",
    children: [
      { name: "D" },
      { name: "C", children: [{ name: "F" }, { name: "E" }] },
      { name: "B" },
    ],
  };

  //   First, consutrct the hierarchical model to feed into the tree generator
  $: root = hierarchy(data).sort(
    (a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name)
  );

  $: treeGen = tree().size([width - 2 * margin, 100]); // specificy our
  $: treeX = treeGen(root);
</script>

<svg {width} {height}>
  <g class="everything" style="transform:translate(0px, 30px">
    <!-- Links -->
    {#each treeX.links() as link}
      <line
        x1={link.source.x}
        x2={link.target.x}
        y1={link.source.y}
        y2={link.target.y}
        stroke="black"
      />
    {/each}

    <!-- Nodes & Labels -->
    {#each treeX.descendants() as d}
      <circle cx={d.x} cy={d.y} r={10} fill={colorCategorical4[0]} />
      <text x={d.x - 5} y={d.y + 5} fill="var(--off-white)">
        {d.data.name}</text
      >
    {/each}
  </g>
</svg>
