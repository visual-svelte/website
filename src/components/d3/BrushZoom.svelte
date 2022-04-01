<script>
  import * as d3 from "d3";

  //   specify some data
  const data = [
    { date: new Date(2007, 3, 24), value: 91 },
    { date: new Date(2007, 3, 25), value: 98 },
    { date: new Date(2007, 3, 26), value: 93 },
    { date: new Date(2007, 3, 27), value: 91 },
    { date: new Date(2007, 3, 30), value: 99 },
    { date: new Date(2007, 4, 1), value: 95 },
  ];

  let pinXAxis;
  let margin = 40;
  let height = 400;
  let width = 600;

  // make some scales
  $: yScale = d3
    .scaleLinear()
    .domain([90, 105])
    .range([height - margin * 2, 0]);
  $: xScale = d3
    .scaleTime()
    .domain(
      d3.extent(
        data.map((d) => {
          return d.date;
        })
      )
    )
    .range([0, width - margin * 2]);
  $: if (pinXAxis) {
    d3.select(pinXAxis).call(d3.axisBottom(xScale));
  }
  // specify the line generator
  const lineGen = d3
    .line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value));

  $: line = lineGen(data); // get SVG path
</script>

<svg {width} {height}>
  <!-- zoom -->
  <path
    d={line}
    fill="none"
    stroke="black"
    transform="translate({margin},{0})"
  />
  <g
    bind:this={pinXAxis}
    transform="translate({margin},{height - margin * 2})"
  />

  <!-- brush -->
  <path
    d={line}
    fill="none"
    stroke="black"
    transform="translate({margin},{0})"
  />
</svg>
