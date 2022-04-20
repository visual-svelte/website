<script>
  import { hierarchy, pack } from "d3";
  import { colorCategorical4 } from "$utils/brand";

  let data = {
    children: [
      { children: [{ stat: 1 }, { stat: 1 }, { stat: 1 }] },
      { children: [{ stat: 1 }, { stat: 1 }, { stat: 2 }, { stat: 3 }] },
      {
        children: [
          { stat: 1 },
          { stat: 1 },
          { stat: 1 },
          { stat: 1 },
          { stat: 2 },
          { stat: 2 },
          { stat: 2 },
          { stat: 4 },
          { stat: 4 },
          { stat: 8 },
        ],
      },
    ],
  };

  $: root = hierarchy(data)
    .sum((d) => (d.hasOwnProperty("stat") ? d.stat : 0))
    .sort((a, b) => b.value - a.value);

  $: partitionGen = pack().size([250, 250]).padding(10);
  $: partition = partitionGen(root);
</script>

<svg width="260" height="260">
  <g transform="translate(5,5)">
    {#each partition.descendants() as d, i}
      <circle
        cx={d.x}
        cy={d.y}
        r={d.r}
        fill={colorCategorical4[0]}
        fill-opacity={0.4}
      />
    {/each}
  </g>
</svg>
