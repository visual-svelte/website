<script>
  import * as d3 from "d3";
  import { colorCategorical4 } from "$utils/brand";

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

  // specify the area generator
  const areaGen = d3
    .area()
    .x((d) => xScale(d.date))
    .y1((d) => yScale(d.value))
    .y0((d) => yScale(0)); // area goes down to y=0 (with yScaled)

  $: area = areaGen(data); // get SVG path
</script>

<svg width="400" height="300">
  <path d={area} fill={colorCategorical4[0]} stroke="black" />
</svg>
