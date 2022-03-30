<script>
  import { descending } from "d3";
  import * as d3 from "d3";
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

  $: root = d3
    .hierarchy(data)
    .sum((d) => (d.hasOwnProperty("stat") ? d.stat : 0))
    .sort((a, b) => b.value - a.value);

  $: partitionGen = d3.pack().size([250, 250]).padding(10);
  $: partition = partitionGen(root);
</script>

<svg width="260" height="260">
  <g transform="translate(5,5)">
    {#each partition.descendants() as d, i}
      <circle cx={d.x} cy={d.y} r={d.r} fill="green" fill-opacity={0.4} />
    {/each}
  </g>
</svg>
