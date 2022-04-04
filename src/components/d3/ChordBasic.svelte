<script>
  import * as d3 from "d3";
  let svgHere;
  let width = 500;
  let height = 400;
  $: viewBx = [-width / 3, -height / 2, width, height];
  let colors = ["#fff775", "#423e42", "#9c334e", "blue"];
  let titles = ["Apples", "Oranges", "Pears", "Bananas"];
  $: outerRadius = Math.min(width, height) * 0.5 - 60;
  $: innerRadius = outerRadius - 10;

  //generator functions
  $: chordGen = d3
    .chord()
    .padAngle(15 / innerRadius) // outer gap between chords
    .sortSubgroups(d3.descending) //ensure both groups are sorted the same
    .sortChords(d3.descending); //ensure both groups are sorted the same

  $: arcGen = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

  $: ribbonGen = d3
    .ribbon()
    .radius(innerRadius - 1)
    .padAngle(1 / innerRadius);

  $: chords = chordGen(data); //
  let data = [
    [0, 32, 45, 22],
    [0, 10, 100, 0],
    [100, 80, 90, 2],
    [50, 30, 77, 2],
  ];
</script>

<svg viewBox={viewBx} {width} {height} bind:this={svgHere}>
  <g class="outer-arcs">
    {#each chords["groups"] as chord, i}
      <g class="outer">
        <path fill={colors[i]} d={arcGen(chord)} />
      </g>
    {/each}
  </g>

  <g class="ribbons" style="fill-opacity:0.4;">
    {#each chords as chord, i}
      <path
        style="mix-blend-mode: multiply;"
        fill={colors[chord.source.index]}
        class="ribbon"
        d={ribbonGen(chord)}
      />
    {/each}
  </g>
</svg>
