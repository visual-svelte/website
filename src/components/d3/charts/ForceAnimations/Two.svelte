<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  let width = 500;
  let height = 250;
  let simulation, context, canvas;

  function getSimulationData() {
    var nodes = [];

    d3.range(200).forEach(function (el, i) {
      var obj = {};
      obj.cluster = 0;
      obj.radius = 5;
      obj.colour = "#9CCFE5";
      obj.x = width / 2 + (Math.random() - 10); // slightly left-skewed position
      obj.y = height / 2 + Math.random();

      nodes.push(obj);
    }); // get men nodes

    d3.range(50).forEach(function (el, i) {
      var obj = {};
      obj.cluster = 1;
      obj.radius = 5;
      obj.colour = "#9FE789";
      obj.x = width / 2 + (Math.random() + 10); // slightly right-skewed position
      obj.y = height / 2 + Math.random();

      nodes.push(obj);
    }); // get women nodes

    initSimulation(nodes); // kick off simulation
  }

  function initSimulation(nodes) {
    simulation = d3
      .forceSimulation(nodes)
      .alpha(0.02)
      .force("charge", d3.forceManyBody().strength(-30))
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
        d3.forceX((d) => {
          return d.cluster === 0 ? width * 0.3 : width * 0.7;
        })
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

  onMount(() => {
    canvas = d3
      .select("#container")
      .append("canvas")
      .attr("width", width)
      .attr("height", height);

    context = canvas.node().getContext("2d");

    getSimulationData();
  });
</script>

<button on:click={handleSplit}>Split</button>
<button on:click={handleUnite}>Unite</button>
<div id="container" />
