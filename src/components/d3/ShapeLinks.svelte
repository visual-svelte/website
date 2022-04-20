<script>
  import { linkHorizontal } from "d3";
  import { colorCategorical4 } from "$utils/brand";

  let linkGen = linkHorizontal();

  let data = { source: [30, 30], target: [70, 70] }; //example 1
  // example 2
  let data2 = [
    { source: [40, 40], target: [150, 30] },
    { source: [40, 40], target: [150, 55] },
    { source: [40, 40], target: [150, 80] },
  ];

  $: links = linkGen(data);
</script>

<!-- Example 1 - single link-->
<svg width="400" height="100">
  <path d={links} fill="none" stroke="black" stroke-width="2" />
  {#each Object.values(data) as p}
    <circle cx={p[0]} cy={p[1]} r="10" fill={colorCategorical4[2]} />
  {/each}
</svg>

<!-- Example 2 - multiple links -->
<svg width="400" height="100">
  {#each data2 as dict}
    {#each Object.values(dict) as p}
      <path d={linkGen(dict)} fill="none" stroke="black" stroke-width="2" />
      <circle
        cx={p[0]}
        cy={p[1]}
        r="10"
        fill={colorCategorical4[1]}
        stroke="transparent"
      />
    {/each}
  {/each}
</svg>
