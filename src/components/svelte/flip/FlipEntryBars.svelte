<script>
  import { flip } from "svelte/animate";
  import { crossfade } from "svelte/transition";
  const [send, receive] = crossfade({});

  let commentary = {
    0: "'16 students were asked what their favourite fruit is, each square represents a student'",
    1: "Here is how they voted for either <span style='color:#8DB600'>apple</span>, <span style='color:#FFE135'>banana</span>, <span style='color:#D2042D'>cherry</span>, or <span style='color:#9F6D2E'>pear</span>.",
    2: "We can re-arrange the data to spot patterns, but would it be nicer in a chart?",
    3: "Smooth transition into the barchart",
  };

  let data = {
    blocks: [
      { id: 0, cat: "apple" },
      { id: 3, cat: "apple" },
      { id: 13, cat: "cherry" },
      { id: 4, cat: "apple" },
      { id: 5, cat: "banana" },
      { id: 6, cat: "pear" },
      { id: 12, cat: "cherry" },
      { id: 7, cat: "pear" },
      { id: 2, cat: "apple" },
      { id: 9, cat: "cherry" },
      { id: 10, cat: "cherry" },
      { id: 11, cat: "banana" },
      { id: 1, cat: "apple" },
      { id: 14, cat: "cherry" },
      { id: 8, cat: "pear" },
      { id: 15, cat: "cherry" },
    ],
    bars: [],
  };

  let colors = {
    cherry: ["#D2042D", 50],
    apple: ["#8DB600", 100],
    banana: ["#FFE135", 150],
    pear: ["#9F6D2E", 200],
  };

  let stage = 0;

  function sortBars() {
    stage = 2;
    data.blocks = data.blocks.sort((a, b) =>
      a.cat > b.cat ? 1 : b.cat > a.cat ? -1 : 0
    );
  }

  function move(from, to) {
    let item = from[0];
    colors[item.cat][2] += 1;
    to.push(item);

    return [from.filter((i) => i !== item), to];
  }

  async function moveDown() {
    stage = 3;
    const timer = (ms) => new Promise((res) => setTimeout(res, ms));
    for (let i = 0; i < 16; i++) {
      [data.blocks, data.bars] = move(data.blocks, data.bars);
      await timer(150);
    }
  }

  function resetData() {
    stage = 0;
    data = {
      blocks: [
        { id: 0, cat: "apple" },
        { id: 3, cat: "apple" },
        { id: 13, cat: "cherry" },
        { id: 4, cat: "apple" },
        { id: 5, cat: "banana" },
        { id: 6, cat: "pear" },
        { id: 12, cat: "cherry" },
        { id: 7, cat: "pear" },
        { id: 2, cat: "apple" },
        { id: 9, cat: "cherry" },
        { id: 10, cat: "cherry" },
        { id: 11, cat: "banana" },
        { id: 1, cat: "apple" },
        { id: 14, cat: "cherry" },
        { id: 8, cat: "pear" },
        { id: 15, cat: "cherry" },
      ],
      bars: [],
    };
  }
</script>

<div class="wrapper">
  <button on:click={() => (stage = 0)}>Stage 0 of reveal </button>
  <button on:click={() => (stage = 1)}>Stage 1 </button>
  <button on:click={sortBars}>Stage 2 </button>
  <button on:click={moveDown}>Stage 3 </button>
  <button on:click={resetData}>Reset</button>

  <p class="commentary">Story (stage {stage}): {@html commentary[stage]}</p>
  <div class="intial-grid top ">
    {#each data.blocks as bar (bar.id)}
      <div
        class="block"
        animate:flip
        in:receive={{ key: bar.id }}
        out:send={{ key: bar.id }}
        style="background-color:{stage === 0 ? 'gray' : colors[bar.cat][0]}"
      />
    {/each}
  </div>

  <br /><br />
  <div class="intial-grid lower ">
    {#each ["apple", "banana", "cherry", "pear"] as category, j}
      {#each data.bars.filter((d) => d.cat == category) as bar, i (bar.id)}
        <div
          style="transform:translate({50 + j * 50}px,{120 -
            i * 21}px);background-color:{colors[bar.cat][0]}"
          class="block lower"
          animate:flip
          in:receive={{ key: bar.id }}
          out:send={{ key: bar.id }}
        />
      {/each}
    {/each}
  </div>
</div>

<style lang="scss">
  .wrapper {
    margin-right: 15%;
  }
  .intial-grid {
    &.top {
      min-height: 20px;
    }
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10px, 20px));
    gap: 2px;
    .block {
      width: 20px;
      background-color: pink;
      margin: px;
      display: flex;
      height: 20px;
      transition: all 1s;

      &.lower {
        position: absolute;
      }
    }
  }
  .commentary {
    font-size: 0.7rem;
    height: 2.1rem;
    line-height: 1rem;
  }
</style>
