<script>
  import { select, axisBottom, scaleBand, scaleLinear } from "d3";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { colorCategorical4 } from "$utils/brand";
  export let value;
  let pinXAxis; // declare pins
  let margin = 30; // declare initial values for margin and svg_height/width
  let svg_height = 300;
  let svg_width = 300;
  $: height = svg_height - margin * 2;
  $: width = svg_width - margin * 2;

  let data = [
    { 0: [700, 39, 340, 600] },
    { 1: [200, 400, 600, 800] },
    { 2: [300, 200, 900, 20] },
    { 3: [300, 200, 900, 20] },
    { 4: [300, 200, 900, 20] },
    { 5: [300, 200, 900, 20] },
    { 6: [300, 200, 900, 20] },
  ];
  let cats = ["Apple", "Banana", "Cherry", "Donut"];
  let colors = colorCategorical4;

  const progress = tweened(data.find((d) => d[value])[value], {
    duration: 400,
    easing: cubicOut,
  });

  const angleProgress = tweened(0, { duration: 400, easing: cubicOut });

  $: progress.set(data.find((d) => d[value])[value]);
  $: angleProgress.set(value > 2 ? 90 : 0);

  $: x = scaleBand().domain(cats).range([0, height]).padding([0.1]);
  $: y = scaleLinear().domain([0, 1000]).range([height, 0]);
  $: if (pinXAxis) {
    select(pinXAxis).call(axisBottom(x).ticks(width / 60));
  }
</script>

<p>
  Monthly sales of Fruit in <span>
    {value == 0 ? "Jan-2020" : value === 1 ? "Feb-2020" : "Mar-2020"}
  </span>
</p>

<svg width={svg_width} height={svg_height}>
  <g
    class="xAxis"
    class:titled={value > 2}
    bind:this={pinXAxis}
    transform="translate({x.bandwidth()},{height})"
  />
  {#each $progress as bar, i}
    <rect
      x={x.bandwidth() + x(cats[i])}
      y={height - y(bar)}
      height={y(bar)}
      width={x.bandwidth()}
      class="bar"
      fill={colors[i]}
      fill-opacity={value > 2 ? (i + 3 == value ? 1 : 0.2) : 1}
      stroke-width="2"
      stroke={value > 2
        ? i + 3 == value
          ? "yellow"
          : "transparent"
        : "transparent"}
    />
  {/each}
</svg>

<style>
</style>
