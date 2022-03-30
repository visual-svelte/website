<script>
  import { descending } from "d3";
  import * as d3 from "d3";
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
  $: root = d3
    .hierarchy(data)
    .sort(
      (a, b) => b.height - a.height || a.data.name.localeCompare(b.data.name)
    );

  $: treeGen = d3.tree().size([width - 2 * margin, 100]); // specificy our
  $: tree = treeGen(root);
</script>

<svg {width} {height}>
  <g class="everything" style="transform:translate(0px, 30px">
    <!-- Links -->
    {#each tree.links() as link}
      <line
        x1={link.source.x}
        x2={link.target.x}
        y1={link.source.y}
        y2={link.target.y}
        stroke="black"
      />
    {/each}

    <!-- Nodes & Labels -->
    {#each tree.descendants() as d}
      <circle cx={d.x} cy={d.y} r={10} fill="lightblue" />
      <text x={d.x - 5} y={d.y + 5} fill="black"> {d.data.name}</text>
    {/each}
  </g>
</svg>
