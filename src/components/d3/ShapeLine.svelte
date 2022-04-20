<script>
  import { scaleLinear, scaleTime } from "d3-scale";
  import { extent } from "d3-array";
  import { line } from "d3-shape";
  import { curveBundle } from "d3";
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

  // specify the line generator
  const lineGen = line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value));

  const curveGen = line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value))
    .curve(curveBundle.beta(1.2));

  $: myLine = lineGen(data); // get SVG path
  $: curve = curveGen(data); // get SVG path
</script>

<svg width="400" height="300">
  <path d={myLine} fill="none" stroke="black" />
  <path d={curve} fill="none" stroke={colorCategorical4[0]} />
</svg>
