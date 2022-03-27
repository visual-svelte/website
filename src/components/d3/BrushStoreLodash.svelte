<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import { brushData } from "$stores/brush";
  import _ from "lodash";
  let bindSVGHere;
  let width = 400;
  let height = 300;
  let circles;
  let bounds = null;
  let filters = {};
  $: filteredData = _.filter($brushData, (d) =>
    _.every(
      filters,
      (bounds, key) => !bounds || (bounds[0] < d[key] && d[key] < bounds[1])
    )
  );

  $: brush = d3
    .brush()
    .extent([
      [0, 0],
      [width, height],
    ])
    .on("brush end", brushEnd);

  $: x = d3.scaleLinear().domain([0, 400]).range([0, width]); // define generator functions for x and y axes

  $: filters, console.log("filters", filters);
  $: filteredData, console.log("filteredDataLength", filteredData.length);

  function brushEnd(event) {
    let selection = event.selection;
    if (selection) {
      const [x1, x2] = selection.map(x.invert);
      bounds = [x1, x2];
    }
    updateFilters({ [this.id]: bounds });
  }

  function updateFilters(filter) {
    filters = Object.assign(filters, filter);
    filteredData = _.filter($brushData, (d) =>
      _.every(
        filters,
        (bounds, key) => !bounds || (bounds[0] < d[key] && d[key] < bounds[1])
      )
    );
  }

  function brushed(event) {
    const selection = event.selection;
    if (selection === null) {
      circles.attr("class", "");
    } else {
      const [x0, x1] = selection.map(x.invert);
      circles.attr("class", (d) =>
        x0 <= d && d <= x1 ? "selected" : "not-selected"
      );
    }
  }

  function drawAxis() {
    var svg = d3
      .select(bindSVGHere)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    circles = svg
      .selectAll("circle")
      .data(filteredData)
      .enter()
      .append("svg:circle")
      .attr("fill-opacity", 0.4)

      .attr("cy", (d) => {
        return d[1];
      })
      .attr("cx", (d) => {
        return x(d[0]);
      })
      .attr("r", 5);

    svg.append("g").attr("class", "brush").call(brush);
  }

  onMount(() => {
    drawAxis();
  });
</script>

<p>👇 Click and drag over a set of points below to see brush effect.</p>

<div class="outer" bind:this={bindSVGHere} />

<style>
  .selected,
  .not-selected {
    transition: 0.5s all;
  }

  .outer :global(.selected) {
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
