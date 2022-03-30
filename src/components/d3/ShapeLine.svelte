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

  // make some scales
  $: yScale = d3.scaleLinear().domain([90, 105]).range([300, 0]);
  $: xScale = d3
    .scaleTime()
    .domain(
      d3.extent(
        data.map((d) => {
          return d.date;
        })
      )
    )
    .range([0, 400]);

  // specify the line generator
  const lineGen = d3
    .line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value));

  const curveGen = d3
    .line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value))
    .curve(d3.curveBundle.beta(1.2));

  $: line = lineGen(data); // get SVG path
  $: curve = curveGen(data); // get SVG path
</script>

<svg width="400" height="300">
  <path d={line} fill="none" stroke="black" />
  <path d={curve} fill="none" stroke="blue" />
</svg>
