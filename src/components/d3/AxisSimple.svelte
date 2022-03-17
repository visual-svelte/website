<script>
  import { onMount } from "svelte";
  let canvas;
  import * as d3 from "d3";
  export let config;
  import { innerWidth } from "$stores/screen";
  $: svg_width = $innerWidth * 0.8 > 600 ? 600 : $innerWidth * 0.8;
  $: svg_height =
    $innerWidth * 0.5 > 400
      ? 400
      : $innerWidth * 0.5 < 200
      ? 200
      : $innerWidth * 0.5;

  $: height = svg_height - config.margin * 2;
  $: width = svg_width - config.margin * 2;

  // $: $innerWidth, redraw(false);
  $: x = d3
    .scaleLinear()
    .domain([0, 100]) // This is what is written on the Axis: from 0 to 100
    .range([0, width]); // This is where the axis is placed: from 100px to 800px

  $: y = d3
    .scaleLinear()
    .domain([100, 0]) // This is what is written on the Axis: from 0 to 100
    .range([100, height]); // This is where the axis is placed: from 100px to 800px

  function redraw(intial) {
    // if (!intial) {
    //   d3.selectAll("svg").remove();
    // }

    var svg = d3
      .select(canvas)
      .append("svg")
      .attr("width", svg_width)
      .attr("height", svg_height);
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
  }
  onMount(() => {
    redraw(true);
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
