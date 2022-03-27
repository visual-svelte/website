<script>
  import * as d3 from "d3";
  import { timeDay } from "d3";
  import { data, colors, names } from "$data/phones.js";
  let svgHere;
  let width = 600;
  let height = 500;
  $: viewBx = [-width / 2, -height / 1.8, width * 1.1, height * 1.1];
  $: outerRadius = Math.min(width, height) * 0.5 - 60;
  $: innerRadius = outerRadius - 10;

  //generator functions
  $: chordGen = d3
    .chord()
    .padAngle(10 / innerRadius)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending);

  $: arcGen = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  $: ribbonGen = d3
    .ribbon()
    .radius(innerRadius - 1)
    .padAngle(1 / innerRadius);

  $: chords = chordGen(data); //

  // tick logic
  $: tickStep = d3.tickStep(0, d3.sum(data.flat()), 100);
  let formatValue = d3.format(".1~%");
  function ticks({ startAngle, endAngle, value }) {
    const k = (endAngle - startAngle) / value;
    return d3.range(0, value, tickStep * 2).map((value) => {
      return { value, angle: value * k + startAngle };
    });
  }
</script>

<svg viewBox={viewBx} {width} {height} bind:this={svgHere}>
  <g class="outer-arcs">
    {#each chords["groups"] as chord, i}
      <g class="group">
        <path fill={colors[i]} d={arcGen(chord)} />
        <g>
          {#each ticks(chord) as tick, t}
            <g
              class="tick"
              style="transform:rotate({(tick.angle * 180) / Math.PI -
                90}deg) translate({outerRadius}px,0);"
            >
              {#if t < 1}
                <text
                  fill={colors[i]}
                  x="30"
                  y="5"
                  class="phone-title"
                  font-weight="bold"
                  style="transform:{tick.angle > Math.PI
                    ? 'rotate(180deg) translate(-95px)'
                    : null}"
                >
                  {names[i]}
                </text>
              {/if}

              <line stroke={colors[i]} x2="6" />
              <text
                x="8"
                dy="0.35em"
                style="transform:{tick.angle > Math.PI
                  ? 'rotate(180deg) translate(-16px)'
                  : null}"
                text-anchor={tick.angle > Math.PI ? "end" : null}
                >{formatValue(tick.value)}
              </text>
            </g>
          {/each}
        </g>
      </g>
    {/each}
  </g>

  <g class="ribbons" style="fill-opacity:0.4;">
    {#each chords as chord, i}
      <path
        fill={colors[chord.source.index]}
        class="ribbon"
        d={ribbonGen(chord)}
      />
    {/each}
  </g>
</svg>

<style>
  .phone-title {
    font-size: 0.8rem;
  }
</style>
