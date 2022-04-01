<script>
  import * as d3 from "d3";
  $: data = getData().sort((a, b) => a.x - b.x);

  let svg_width = 500;
  let svg_height = 400;
  let margin = 30;
  let width = svg_width - margin * 2;
  let height = svg_height - margin * 2;
  let numPoints = 20;
  let bindHandleZoom, bindInitZoom, bindAxis;
  let bindLine;
  let xDomain = [0, 1000];
  $: x = d3.scaleLinear().range([0, width]).domain(xDomain);

  let y = d3.scaleLinear().domain([1000, 0]).range([0, height]);

  $: lineGen = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y))
    .curve(d3.curveBundle.beta(1.2));

  $: line = lineGen(data);

  // $: console.log("linex", lineGen.curve);

  $: if (bindAxis) {
    d3.select(bindAxis).call(d3.axisBottom(x));
  }

  $: zoom = d3.zoom().scaleExtent([1, 3]).on("zoom", handleZoom);

  function handleZoom(e) {
    let t = e.transform;
    x.domain(t.rescaleX(x).domain());
    // xDomain = console.log("linex", lineGen.x);
  }

  $: if (bindInitZoom) {
    d3.select(bindInitZoom).call(zoom);
  }

  function getData() {
    let data = [];
    for (let i = 0; i < numPoints; i++) {
      data.push({
        id: i,
        x: Math.random() * 1000,
        y: Math.random() * 1000,
      });
    }
    return data;
  }
</script>

<button on:click={() => (xDomain = [0, 1000])}>Reset </button>
<svg width={svg_width} height={svg_height}>
  <g
    transform="translate({margin},{margin})"
    class="focus"
    bind:this={bindHandleZoom}
  >
    <path
      bind:this={bindLine}
      class="path"
      d={line}
      fill="none"
      stroke="black"
    />
  </g>
  <g bind:this={bindAxis} transform="translate({margin},{height})" />
  <rect fill="none" {height} {width} class="zoom" bind:this={bindInitZoom} />
  <defs>
    <clipPath id="clip">
      <rect {width} height={200} />
    </clipPath>
  </defs>
</svg>

<style lang="scss">
  .path {
    clip-path: url(#clip);
  }
  #id {
    stroke: black;
  }
  .zoom {
    // cursor: move;
    pointer-events: all;
  }
</style>
