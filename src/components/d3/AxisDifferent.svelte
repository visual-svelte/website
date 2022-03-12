<script>
  import { onMount } from "svelte";
  let canvas;
  import * as d3 from "d3";
  export let config;
  $: height = config.svg_height - config.margin * 2;
  $: width = config.svg_width - config.margin * 2;

  $: x = d3
    .scaleLinear()
    .domain([0, 1000]) // This is what is written on the Axis: from 0 to 100
    .range([0, width]); // This is where the axis is placed: from 100px to 800px

  $: y = d3
    .scaleLinear()
    .domain([500, 0]) // This is what is written on the Axis: from 0 to 100
    .range([100, height]); // This is where the axis is placed: from 100px to 800px

  onMount(() => {
    var svg = d3
      .select(canvas)
      .append("svg")
      .attr("width", config.svg_width)
      .attr("height", config.svg_height);
    svg
      .append("g")
      .attr(
        "transform",
        `translate(${config.margin}, ${height - config.margin})`
      ) // This controls the vertical position of the Axis
      .call(d3.axisBottom(x).ticks(width / 60));

    svg
      .append("g")
      .attr("transform", `translate(${config.margin},${-config.margin})`)
      .call(d3.axisLeft(y).ticks(height / 60));
  });
</script>

<div bind:this={canvas} />

<style lang="scss">
  div {
    // margin-left: 10px;
    // background-color: pink;
    position: relative;
    svg {
      padding: 0;
      margin: 0;
    }
    .label {
      position: absolute;
      margin: 0;
      padding: 0px;

      &.ly {
        transform: rotate(270deg);
        left: -20px;
        top: 45%;
      }

      &.lx {
        bottom: 0px;
        left: 45%;
      }
    }
  }
</style>
