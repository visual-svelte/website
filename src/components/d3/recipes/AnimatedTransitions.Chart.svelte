<script>
  import { interpolate } from "polymorph-js";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import * as d3 from "d3";
  export let value;
  let data = [2, 3, 5, 8, 13, 21];

  $: arcs = d3.pie()(data); // generate the arc angles from data
  const arcGen = d3.arc(); // generate the arcs
  $: pies = arcs.map((arc) => {
    // generate the svg paths from the arcs
    let input = {
      innerRadius: 10,
      outerRadius: 100,
      startAngle: arc.startAngle,
      endAngle: arc.endAngle,
    };
    console.log("svg?", arcGen(input));
    return arcGen(input);
  });

  //   0: "M0,400,50,400,50,NaN,0,NaNZ"
  // 1: "M70,400,120,400,120,NaN,70,NaNZ"
  // 2: "M140,400,190,400,190,NaN,140,NaNZ"
  // 3: "M210,400,260,400,260,NaN,210,NaNZ"
  // 4: "M280,400,330,400,330,NaN,280,NaNZ"
  // 5: "M350,400,400,400,400,NaN,350,NaNZ"
  // length: 6

  function barsFromData(data) {
    //   M0,0 150,0 150,50 0,50
    let width = 50;
    let padding = 20;
    let startY = 400;
    let startX = 0;
    let paths = [];
    data.map((d, i) => {
      let localX = (startX + width + padding) * i;
      let height = d * 15;
      let combined = `M${localX},${startY},  ${localX + width},${startY},  ${
        localX + width
      },${startY - height}, ${localX},${startY - height}Z`;

      paths.push(combined);
    });
    console.log("oaths", paths);
    return paths;
  }

  $: paths = barsFromData(data);

  let pathVal = [
    "",
    " M-56.806474673115595,-82.29838658936563A100,100,0,0,1,-23.931566428755772,-97.0941817426052L-2.3931566428755775,-9.70941817426052A10,10,0,0,0,-5.680647467311559,-8.229838658936563Z",
    " M-93.50162426854148,-35.460488704253564A100,100,0,0,1,-56.806474673115595,-82.29838658936563L-5.680647467311559,-8.229838658936563A10,10,0,0,0,-9.350162426854148,-3.546048870425356Z",
    " M-82.29838658936563,56.80647467311558A100,100,0,0,1,-93.50162426854148,-35.460488704253564L-9.350162426854148,-3.546048870425356A10,10,0,0,0,-8.229838658936563,5.680647467311558Z",
    " M56.80647467311558,82.29838658936565A100,100,0,0,1,-82.29838658936563,56.80647467311558L-8.229838658936563,5.680647467311558A10,10,0,0,0,5.680647467311558,8.229838658936565Z",
  ];

  let morph;
  let morphMouth;
  let path0, path1, path2, path3, path4, path5;
  let pathD;

  $: if (value == 2) {
    setPath(1);
  } else if (value == 5) {
    setPath(2);
  } else if (value == 7) {
    setPath(3);
  }

  //   $: value, animated();

  const notween = (f, t) => () => t;
  const tween = (f, t) => {
    console.log("f", f);
    console.log("t", t);

    interpolate([f, t]);
  };

  //   array tweens

  const line = tweened(0, {
    duration: 600,
    easing: cubicOut,
    interpolate: notween,
  });

  let i = true;

  function setPath(path) {
    line.set(pathVal[path], { interpolate: tween });
  }

  $: {
    if ($line !== 0) {
      console.log("$line");
      path.setAttribute("d", $line);
    }
  }

  function initialSet(index) {
    `path${index}`.attributes.d.nodeValue;
    pathD = path0.attributes.d.nodeValue;
    pathVal[0] = pathD;
    line.set(pathD);
  }
  onMount(() => {
    pathD = path0.attributes.d.nodeValue;
    pathVal[0] = pathD;
    line.set(pathD);
  });
</script>

<!-- <p>Path: {$line}</p> -->

<p>Scroll: {value}</p>

<svg viewbox="-200 -200 1000 1000" fill="#FBB43E">
  <path
    bind:this={path0}
    d="M0,400, 50,400,50,370,0,370"
    fill-opacity="0"
    stroke="#707070"
  />
</svg>

<style>
  button {
    width: 100%;
    background: #0073aa;
    border: none;
    color: #ffffff;
    margin-top: 20px;
    padding: 20px 0;
    font-weight: bold;
    cursor: pointer;
  }
</style>
