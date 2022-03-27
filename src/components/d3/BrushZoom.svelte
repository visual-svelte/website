<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { areaData } from "$stores/brush";
  import _ from "lodash";
  let mySvg;
  let svg;
  let focus;
  let context;
  let bounds = [0, 0];
  let margin = { top: 20, right: 20, bottom: 110, left: 40 };
  let margin2 = { top: 330, right: 20, bottom: 30, left: 40 };
  let pinxAxis;
  let pinx2Axis;
  let pinyAxis;
  let brushHere;
  let zoomHere;
  $: width = 500 - margin.left - margin.right;
  $: height = 400 - margin.top - margin.bottom;
  $: height2 = 400 - margin2.top - margin2.bottom;
  $: x = d3
    .scaleTime()
    .domain(
      d3.extent($areaData, function (d) {
        return d.date;
      })
    )
    .range([0, width]);
  $: x2 = d3.scaleTime().domain(x.domain()).range([0, width]);
  $: y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max($areaData, function (d) {
        return d.price - 1;
      }),
    ])
    .range([height, 0]);
  $: y2 = d3.scaleLinear().domain(y.domain()).range([height2, 0]);

  $: xAxis = d3.axisBottom(x);
  $: if (pinxAxis) {
    d3.select(pinxAxis)
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  }
  $: xAxis2 = d3.axisBottom(x2);
  $: if (pinx2Axis) {
    d3.select(pinx2Axis)
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);
  }

  $: yAxis = d3.axisLeft(y);
  $: if (pinyAxis) {
    d3.select(pinyAxis).call(yAxis);
  }

  $: brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("brush end", brushed);

  $: if (brushHere) {
    d3.select(brushHere).call(brush).call(brush.move, x.range());
  }

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

  $: a1 = area($areaData);
  $: a2 = area2($areaData);
  $: console.log("a1: ", a1, "a2: ", a2);

  $: zoom = d3
    .zoom()
    .scaleExtent([1, Infinity])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("zoom", zoomed);

  $: if (zoomHere) {
    d3.select(zoomHere).call(zoom);
  }

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

  function zoomed(event) {
    if (event.sourceEvent && event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
    let t = event.transform;
    x.domain(t.rescaleX(x2).domain());
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
  }

  function drawAxis() {
    svg = d3.select(mySvg);
    svg
      .append("defs")
      .append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);
  }
  onMount(() => {
    drawAxis();
  });
</script>

<svg bind:this={mySvg} width="500" height="400">
  <g
    bind:this={focus}
    class="focus"
    style="transform:translate({margin.left}px,{margin.top}px)"
  >
    <path d={area($areaData)} class="area" />
    <g class="axis axis--x" bind:this={pinxAxis} />
    <g class="axis axis--y" bind:this={pinyAxis} />
  </g>
  <g
    bind:this={context}
    class="context"
    style="transform:translate({margin2.left}px,{margin2.top}px);"
  >
    <g class="brush" bind:this={brushHere} />
    <g class="axis axis--x" bind:this={pinx2Axis} />
    <path d={area2($areaData)} class="area" />
  </g>
  <rect
    bind:this={zoomHere}
    class="zoom"
    {width}
    {height}
    style="transform:translate({margin.left}px,{margin.top}px)"
  />
</svg>

<style>
  .selected,
  .not-selected {
    transition: 0.5s all;
  }

  .context {
    transform: translate(20, 420);
  }
  .circle,
  .bar {
    fill: var(--c-darkgray);
    fill-opacity: 0.7;
  }

  .area {
    fill: steelblue;
    clip-path: url(#clip);
    z-index: 1;
  }

  .zoom {
    cursor: move;
    fill: none !important;
    pointer-events: all;
  }
  .brush {
    z-index: 10 !important;
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
