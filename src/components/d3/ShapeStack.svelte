<script>
  import {
    stack,
    stackOrderNone,
    stackOffsetNone,
    scaleLinear,
    scaleBand,
    axisBottom,
    axisLeft,
    select,
  } from "d3";
  import fruitData from "$data/fruit.js";
  import { colorCategorical4 } from "$utils/brand";

  let pinXAxis, pinYAxis;
  let height = 300;
  let width = 400;
  let margin = 40;
  let keys = ["apples", "bananas", "cherries", "dates"];

  // create a stack generator
  const stackGen = stack()
    .keys(keys)
    .order(stackOrderNone)
    .offset(stackOffsetNone);

  // then initialize the stacks from the data.
  $: series = stackGen(fruitData);

  // specify scales and x/y axes.
  $: yScale = scaleLinear()
    .domain([0, 7500])
    .range([height - 2 * margin, 0]);

  $: xScale = scaleBand()
    .domain(["TP1", "TP2", "TP3", "TP4"])
    .range([0, width - margin * 2])
    .padding([0.2]);

  $: xAxis = axisBottom(xScale).ticks(width / 60); //specify axes

  $: yAxis = axisLeft(yScale).ticks(width / 60); //specify axes

  // bind the axes to their group
  $: if (pinXAxis) {
    select(pinXAxis)
      .attr("transform", "translate(0," + (height - margin) + ")")
      .call(xAxis);
  }
  $: if (pinYAxis) {
    select(pinYAxis)
      .attr("transform", "translate(0," + margin + ")")
      .call(yAxis);
  }
</script>

<svg {width} {height}>
  <g class="everything" style="transform:translate({margin}px,0)">
    <g class="axis axis--x" bind:this={pinXAxis} />
    <g class="axis axis--y" bind:this={pinYAxis} />

    <g class="bars" style="transform:translate(0,{margin}px">
      {#each series as fruit_type, f}
        <g class="ft_{fruit_type.key}">
          {#each fruit_type as time_period, i}
            <rect
              x={xScale(`TP${i + 1}`)}
              y={yScale(time_period[1])}
              width={xScale.bandwidth()}
              height={yScale(time_period[0]) - yScale(time_period[1])}
              fill={colorCategorical4[f]}
            />
          {/each}
        </g>
      {/each}
    </g>
  </g>
</svg>
