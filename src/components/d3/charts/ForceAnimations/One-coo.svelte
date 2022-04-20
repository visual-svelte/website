<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { init } from "svelte/internal";
  let width = 500;
  let height = 400;
  let simulation, context, canvas;
  let cols = 3;

  // alternative data structure:
  // {startX: 0,startY:0, groups:{all:0,gender:0,language:4, hometown:3}}

  let data = [
    { all: 100 },
    { male: 49, female: 49, other: 2 },
    { british: 32, spanish: 12, french: 45, german: 11 },
  ];
  let currentSelection = 1;
  let meta;

  let xScale;

  let dummyData = [
    {
      start: [0, 0],
      gender: [0, 0],
      country: [3, 0],
      biscuit: [0, 1],
    },
  ];

  /* Chain of events: 
1. currentSelection changes 
2. meta is calculated with cols and numCols
3. data is recalculated <-- this is what I don't like. 
---> group is a key in the xAccessor

---> all data is pre-processed. 



  // parametric xAccessor
// so that, when the group changes, the force x gets new instructions 
// const flat = flatten(groups.map(d => d.data));

// const xAccessor = d => x(d.col) + x.bandwidth();

for each data point: 
{
  start[0,0]
  gender:[0,0],
  country:[3,0], 
  biscuit:[0,1], 
}

setting the cs {()=> cs = "gender"}
then the xAccessor = x(d[cs][0])
then the yAccessor = y(d[cs][1])





// const yAccessor = d => y(d.row) + y.bandwidth() / 2;

// meta is a global reactive prop - containing the cols 
// x reactive update when cols changes 



x
          .domain(d3.range(0, cols + 1))
          .range([0, width]);

      y
          .domain(d3.range(0, d3.max(flat, d => d.row) + 1))
          .range([0, height]);

d[currentSelection].col + x.bandwith() 



*/

  console.log("meta", meta);
  function getSimulationData(cs) {
    meta = {
      numCols: Object.keys(data[currentSelection]).length,
      cols: Object.keys(data[currentSelection]),
    };
    xScale = d3.scaleBand().domain(meta["cols"]).range([0, width]);

    let local = data[cs];
    let cats = Object.keys(local);
    let cols = cats.length;

    let nodes = [];

    for (let i = 0; i < cols; i++) {
      let temp = [].concat(
        d3.range(local[cats[i]]).map(function () {
          return {
            x: width / 2 + Math.random(), // slightly left-skewed position
            y: height / 2 + Math.random(),
            row: Math.floor(i / cols),
            col: i % cols,
            radius: 5,
            colour: "pink",
            // y: 250 * Math.floor(i / desCols),
            // x: 250 * (i % desCols),
            group: cols[i],
          };
        })
      );
      nodes.push(temp);
    }
    nodes = nodes.flat();
    initSimulation(nodes);
  }

  function initSimulation(nodes) {
    console.log("mynodes", nodes);
    simulation = d3
      .forceSimulation(nodes)
      .alpha(0.02)
      .force("charge", d3.forceManyBody().strength(-40))
      .force("xPos", d3.forceX(width / 2).strength(1))
      .force("yPos", d3.forceY(height / 2).strength(1));

    simulation.on("tick", ticked);

    function ticked() {
      context.clearRect(0, 0, width, height);
      context.save();

      nodes.forEach(drawNode);

      context.restore();
    } // ticked()

    function drawNode(d) {
      context.beginPath();
      context.moveTo(d.x + d.radius, d.y);
      context.arc(d.x, d.y, d.radius, 0, 2 * Math.PI);
      context.fillStyle = d.colour;
      context.fill();
    } // drawNode()
  }

  function handleSplit() {
    simulation.stop();
    simulation
      .force("charge", d3.forceManyBody().strength(-5))
      .force(
        "xPos",
        d3.forceX((d) => xScale(d.group))
      )
      .force("yPos", d3.forceY(height / 2))
      .alpha(0.5);

    simulation.restart();
  }

  function handleUnite() {
    simulation.stop();
    simulation
      .force("charge", d3.forceManyBody().strength(-5))
      .force(
        "xPos",
        d3.forceX(function (d) {
          return d.cluster === 0 ? width * 0.5 : width * 0.4;
        })
      )
      .force("yPos", d3.forceY(height / 2))
      .force("collision", d3.forceCollide(5));

    simulation.alpha(0.5);

    simulation.restart();
  }

  $: getSimulationData(currentSelection);

  onMount(() => {
    canvas = d3
      .select("#container")
      .append("canvas")
      .attr("width", width)
      .attr("height", height);

    context = canvas.node().getContext("2d");

    getSimulationData(currentSelection);
  });
</script>

<p>
  Meta cols:{meta.cols}
  <!-- Meta cols:{meta.} -->
</p>

<button on:click={handleSplit}>Split by Gender</button>
<button
  on:click={() => {
    currentSelection = 2;
  }}
  >Show languages
</button>
<!-- <button on:click={handleUnite}>Unite</button> -->
<div id="container" />
