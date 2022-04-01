<script>
  import * as d3 from "d3";
  import { areaData } from "$stores/brush";
  import { onMount } from "svelte";
  let pinxAxis,
    focusHere,
    contextHere,
    pinx2Axis,
    bindSvg,
    svg,
    focus,
    context,
    pinyAxis,
    brushHere,
    zoomHere;
  let bounds = [0, 0];
  let margin = { top: 20, right: 20, bottom: 110, left: 40 };
  let margin2 = { top: 330, right: 20, bottom: 30, left: 40 };
  $: width = 500 - margin.left - margin.right;
  $: height = 400 - margin.top - margin.bottom;
  $: height2 = 400 - margin2.top - margin2.bottom;

  // X Axis - set domain, set scale, specificy axis geneerator, call axis
  let xDomain = d3.extent($areaData, function (d) {
    return d.date;
  });
  $: x = d3.scaleTime().domain(xDomain).range([0, width]);
  $: xAxis = d3.axisBottom(x);
  $: if (pinxAxis) {
    d3.select(pinxAxis).call(xAxis);
  }

  // DO THE SAME for the y axis
  let yDomain = [
    0,
    d3.max($areaData, function (d) {
      return d.price - 1;
    }),
  ];

  $: y = d3.scaleLinear().domain(yDomain).range([height, 0]);
  $: yAxis = d3.axisLeft(y);
  $: if (pinyAxis) {
    d3.select(pinyAxis).call(yAxis);
  }

  $: x2 = d3.scaleTime().domain(x.domain()).range([0, width]);
  $: xAxis2 = d3.axisBottom(x2);
  $: if (pinx2Axis) {
    d3.select(pinx2Axis).call(xAxis2);
  }

  $: y2 = d3.scaleLinear().domain(y.domain()).range([height2, 0]);

  $: brush = d3
    .brushX()
    .extent([
      [0, 0],
      [width, height2],
    ])
    .on("brush end", brushed);

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

  let zoomT;

  $: if (zoomHere && zoomT) {
    d3.select(zoomHere).call(zoom.transform, zoomT);
  } else {
    d3.select(zoomHere).call(zoom);
  }

  onMount(() => {
    svg = d3.select(bindSvg);
    svg
      .append("defs")
      .append("clipPath")
      .attr("id", "clip")
      .append("rect")
      .attr("width", width)
      .attr("height", height);

    focus = svg
      .append("g")
      .attr("class", "focus")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    context = svg
      .append("g")
      .attr("class", "context")
      .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

    focus.append("path").datum($areaData).attr("class", "area").attr("d", area);

    focus
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    focus.append("g").attr("class", "axis axis--y").call(yAxis);

    context
      .append("path")
      .datum($areaData)
      .attr("class", "area")
      .attr("d", area2);

    context
      .append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height2 + ")")
      .call(xAxis2);

    context
      .append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move, x.range());

    svg
      .append("rect")
      .attr("class", "zoom")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .call(zoom);
  });

  $: parseDate = d3.timeParse("%b %Y");

  function brushed(event) {
    if (event.sourceEvent && event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = event.selection || x2.range();
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
    var t = event.transform;
    x.domain(t.rescaleX(x2).domain());
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
  }

  function type(d) {
    d.date = parseDate(d.date);
    d.price = +d.price;
    return d;
  }
</script>

<svg bind:this={bindSvg} width={500} height={500} />

<style>
  .area {
    fill: steelblue;
    clip-path: url(#clip);
  }

  .zoom {
    cursor: move;
    fill: none;
    pointer-events: all;
  }
</style>
