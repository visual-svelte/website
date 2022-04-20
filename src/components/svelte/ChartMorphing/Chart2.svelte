<script>
  import { interpolateAll } from "flubber";
  import { onMount } from "svelte";
  import { selectAll } from "d3";
  import { colorCategoricalDragon } from "$utils/brand";
  import { paths, pies, pointsList } from "$data/animatedTransitions";
  export let value;

  var interpolatorPaPi = interpolateAll(paths, pies, {
    maxSegmentLength: 4,
  });
  var interpolatorPiPa = interpolateAll(pies, paths, {
    maxSegmentLength: 4,
  });
  var interpolatorPiPo = interpolateAll(pies, pointsList, {
    maxSegmentLength: 4,
  });
  var interpolatorPoPi = interpolateAll(pointsList, pies, {
    maxSegmentLength: 4,
  });
  var interpolatorPoPa = interpolateAll(pointsList, paths, {
    maxSegmentLength: 4,
  });
  var interpolatorPaPo = interpolateAll(paths, pointsList, {
    maxSegmentLength: 4,
  });

  let currentInterpolator;
  let previousValue = 0;
  let firstAnimationComplete = false;

  function updateAnimationProgress() {
    if (value == 3 && previousValue == 2) {
      firstAnimationComplete = true;
      currentInterpolator = interpolatorPaPi;
    } else if (value == 2 && previousValue == 3) {
      currentInterpolator = interpolatorPiPa;
    } else if (value == 6 && previousValue == 5) {
      currentInterpolator = interpolatorPiPo;
    } else if (value == 5 && previousValue == 6) {
      currentInterpolator = interpolatorPoPi;
    } else if (value == 7 && previousValue == 6) {
      currentInterpolator = interpolatorPoPa;
    } else if (value == 6 && previousValue == 7) {
      currentInterpolator = interpolatorPaPo;
    }
    setTimeout(() => (previousValue = value), 200);
  }

  $: value, updateAnimationProgress();
  $: if (firstAnimationComplete) {
    allPaths
      .data(currentInterpolator)
      .transition()
      .delay(function (d, i) {
        return 100 * i;
      })
      .duration(1000)
      .attrTween("d", function (d) {
        return d;
      });
  }

  let allPaths;
  onMount(() => {
    allPaths = selectAll("path");
  });
</script>

<svg viewBox="-200 -200 680 400">
  {#each paths as path, i}
    <path
      fill={colorCategoricalDragon[i]}
      stroke-width="3"
      stroke-linecap="round"
      d={path}
    />
  {/each}
</svg>
