<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { areaData } from "$stores/brush";
  import _ from "lodash";
  let mySvg;
  let width = 400;
  let height = 300;
  let svg;
  let focus;
  let context;
  let bounds = [0, 0];
  let margin = { top: 20, right: 20, bottom: 110, left: 40 };
  let margin2 = { top: 430, right: 20, bottom: 30, left: 40 };

  $: width = +svg.attr("width") - margin.left - margin.right;
  $: height = +svg.attr("height") - margin.top - margin.bottom;
  $: height2 = +svg.attr("height") - margin2.top - margin2.bottom;
  $: x = d3.scaleTime().range([0, width]);
  $: x2 = d3.scaleTime().range([0, width]);
  $: y = d3.scaleLinear().range([height, 0]);
  $: y2 = d3.scaleLinear().range([height2, 0]);

  $: xAxis = d3.axisBottom(x);
  $: xAxis2 = d3.axisBottom(x2);
  $: yAxis = d3.axisLeft(y);
  $: brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("brush end", brushed);

  $: area = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x(d.date);
    })
    .y0(height)
    .y1(function (d) {
      return y(d.price);
    });

  $: area2 = d3
    .area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return x2(d.date);
    })
    .y0(height2)
    .y1(function (d) {
      return y2(d.price);
    });

  function brushed(event) {
    if (event.sourceEvent && event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    let s = event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    svg
      .select(".zoom")
      .call(
        zoom.transform,
        d3.zoomIdentity.scale(width / (s[1] - s[0])).translate(-s[0], 0)
      );
  }

  function drawAxis() {
    svg = d3.select(mySvg);
    svg.append("g").attr("class", "brush").call(brush);
    focus = svg
      .append("g")
      .attr("class", "focus")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    context = svg
      .append("g")
      .attr("class", "context")
      .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");
  }

  onMount(() => {
    drawAxis();
  });
</script>

<!-- <p>Original: {$brushData.length}</p> -->
<!-- <p>Filtered: {$filtered.length}</p> -->
<!-- <p>Bounds: {bounds[0].toPrecision(4)}, {bounds[1].toPrecision(4)}</p> -->

<svg bind:this={mySvg} width="500" height="960" />

<style>
  .selected,
  .not-selected {
    transition: 0.5s all;
  }
  .circle,
  .bar {
    fill: var(--c-darkgray);
    fill-opacity: 0.7;
  }
  .bar {
    fill: var(--c-darkgray);
    fill-opacity: 0.3;
  }

  .circles :global(.selected) {
    z-index: 1;
    fill: red;
    /* stroke: black; */
  }

  .outer :global(.not-selected) {
    z-index: 1;
    fill: gray;
    opacity: 0.4;
  }
</style>
