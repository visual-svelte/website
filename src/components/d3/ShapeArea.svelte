<script>
  import { scaleLinear, scaleTime, extent, area } from "d3";
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
  $: yScale = scaleLinear().domain([90, 105]).range([300, 0]);
  $: xScale = scaleTime()
    .domain(
      extent(
        data.map((d) => {
          return d.date;
        })
      )
    )
    .range([0, 400]);

  // specify the area generator
  const areaGen = area()
    .x((d) => xScale(d.date))
    .y1((d) => yScale(d.value))
    .y0((d) => yScale(0)); // area goes down to y=0 (with yScaled)

  $: areaX = areaGen(data); // get SVG path
</script>

<svg width="400" height="300">
  <path d={areaX} fill={colorCategorical4[0]} stroke="black" />
</svg>
