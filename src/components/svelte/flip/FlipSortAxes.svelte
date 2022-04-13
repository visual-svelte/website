<script>
  import * as d3 from "d3";
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  let pinXAxis, pinYAxis;
  let margin = 40;
  let svg_height = 300;
  let svg_width = 400;
  let newDataAdded = false;
  let additional = { cat: "Strawberry", value: 130, color: "pink" }; // new data point added on "Add Data" clicked.
  $: height = svg_height - margin * 2;
  $: width = svg_width - margin * 2;

  // initiaze the data array (must be with let to allow re-assignment)
  let data = [
    { cat: "Apple", value: 50, color: "#8DB600" },
    { cat: "Banana", value: 100, color: "#FFE135" },
    { cat: "Cherry", value: 150, color: "#D2042D" },
    { cat: "Pear", value: 40, color: "#9F6D2E" },
  ];

  $: categories = data.map(function (value) {
    return value.cat;
  });

  // define generator functions for x axis
  $: x = d3.scaleBand().domain(categories).range([0, width]).padding([0.5]);
  $: y = d3.scaleLinear().domain([0, 200]).range([height, 0]);

  // important to include 'data' in the reactive property to ensure it runs everytime the data changes.
  $: if (data) {
    d3.select(pinXAxis).call(d3.axisBottom(x).ticks(width / 60));
    d3.select(pinYAxis).call(d3.axisLeft(y).ticks(height / 60));
  }

  let ascAZ = true; // ascending bool specific for the AZ sorting
  function sortAZ() {
    // simple sorting function that checks what the current sorting is and then reverses it.
    if (ascAZ) {
      data = data.sort((a, b) => (a.cat < b.cat ? 1 : b.cat < a.cat ? -1 : 0));
      ascAZ = !ascAZ;
    } else {
      data = data.sort((a, b) => (a.cat > b.cat ? 1 : b.cat > a.cat ? -1 : 0));
      ascAZ = !ascAZ;
    }
  }
  let asc = true; // ascending bool specific for the Value sorting
  function sortByValue() {
    if (asc) {
      data = data.sort((a, b) =>
        a.value < b.value ? 1 : b.value < a.value ? -1 : 0
      );
      asc = !asc;
    } else {
      data = data.sort((a, b) =>
        a.value > b.value ? 1 : b.value > a.value ? -1 : 0
      );
      asc = !asc;
    }
  }

  function addData() {
    newDataAdded = true; // used to disable the add data button
    data.push(additional);
    data = data; // hear we are triggered the reactive statements (cos a push won't do it. )
  }

  function reset() {
    newDataAdded = false;
    data = data.filter((i) => i !== additional);
  }
</script>

<button on:click={sortAZ}>Sort {!ascAZ ? "A->Z" : "Z->A"} </button>
<button on:click={sortByValue}>
  Sort by Count {!asc ? "(Asc)" : "(Desc)"}
</button>
<button disabled={newDataAdded} on:click={addData}> Add data </button>
<button on:click={reset}> Reset </button>

<svg width={svg_width} height={svg_height}>
  <g
    class="xAxis"
    bind:this={pinXAxis}
    transform="translate({margin},{margin + height})"
  />
  <g
    class="yAxis"
    bind:this={pinYAxis}
    transform="translate({margin},{margin})"
  />
  <text class="axis-label" y={12} x={-height * 0.9} transform="rotate(270)"
    >Fruit sold items)
  </text>

  <!-- each block must be keyed, for example with (bar) in brackets -->
  {#each data as bar, i (bar)}
    <rect
      animate:flip={{ duration: 300 }}
      in:fly={{ y: 200, duration: 300, delay: 200 }}
      out:fly={{ y: 200, duration: 300 }}
      x={margin + x(bar.cat)}
      y={height + margin - bar.value}
      height={bar.value}
      width={x.bandwidth()}
      fill={bar.color}
      opacity="0.5"
    />
  {/each}
</svg>

<style lang="scss">
  .axis-label {
    font-size: 0.7rem;
  }
</style>
