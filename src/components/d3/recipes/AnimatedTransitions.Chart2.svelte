<script>
  import { interpolateAll } from "flubber";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  export let value;
  let data = [2, 13, 5, 10, 3, 14];

  function barsFromData(data) {
    let width = 50;
    let padding = 20;
    let startY = 200;
    let startX = 0;
    let paths = [];
    data.map((d, i) => {
      let localX = (startX + width + padding) * i;
      let height = d * 15;
      let combined = `M${localX},${startY},  ${localX + width},${startY},  ${
        localX + width
      },${startY - height}, ${localX},${startY - height}Z`;

      paths.push(combined);
    });
    console.log("oaths", paths);
    return paths;
  }

  const paths = barsFromData(data);

  const arcs = d3.pie()(data); // generate the arc angles from data
  const arcGen = d3.arc(); // generate the arcs
  const pies = arcs.map((arc) => {
    let input = {
      innerRadius: 10,
      outerRadius: 100,
      startAngle: arc.startAngle,
      endAngle: arc.endAngle,
    };
    console.log("svg?", arcGen(input));
    return arcGen(input);
  });
  var interpolatorTo = interpolateAll(paths, pies);
  var interpolatorFrom = interpolateAll(pies, paths);

  let isOpen = false;
  let currentAnimation = 0;
  $: if (value == 3 && allPaths && currentAnimation !== 1) {
    allPaths
      .data(interpolatorTo)
      .transition()
      .delay(function (d, i) {
        return 100 * i;
      })
      .duration(1000)
      .attrTween("d", function (d) {
        return d;
      });
    currentAnimation = 1;
  }

  $: if (value == 6 && allPaths && currentAnimation !== 0) {
    allPaths
      .data(interpolatorFrom)
      .transition()
      .delay(function (d, i) {
        return 100 * i;
      })
      .duration(1000)
      .attrTween("d", function (d) {
        return d;
      });
    currentAnimation = 0;
  }

  let allPaths;
  onMount(() => {
    allPaths = d3.selectAll("path");
  });
</script>

<svg viewBox="-200 -200 700 700">
  {#each paths as path, i}
    <path
      fill={d3.schemeCategory10[i]}
      stroke-width="3"
      stroke-linecap="round"
      d={path}
    />
  {/each}
</svg>
