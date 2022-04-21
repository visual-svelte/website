<script>
  import { elasticOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  let primary = true;
  let valueInner;
  let data = {
    primary: [
      [0, 23, 35],
      [0, 30, 50],
      [0, 75, 90],
      [0, 45, 90],
    ],
    main: [
      [0, 45, 78],
      [0, 10, 90],
      [0, 50, 70],
      [0, 90, 95],
    ],
  };

  const values = tweened(data.primary, {
    duration: 800,
    easing: elasticOut,
  });
  function updateData(cat) {
    if (cat == "main") {
      values.set(data.main);
      primary = false;
    } else {
      values.set(data.primary);
      primary = true;
    }
  }

  let xStretch = 3;
  function getWidth(i, group) {
    if (i == 2) {
      return (100 - group[i]) * xStretch;
    } else {
      return (group[i + 1] - group[i]) * xStretch;
    }
  }

  function getXOffset(i, group) {
    return group[i] * xStretch;
  }
  function getYOffset(group_index) {
    return 30 + group_index * 50;
  }

  let colors = ["lightblue", "#423e42", "#9c334e"];
</script>

<div class="container">
  <h3>
    Breakdown of how voters in different age groups voted at a Primary and Main
    Election
  </h3>
  <div class="buttons">
    <button class:selected={primary} on:click={() => updateData("primary")}>
      Primary election
    </button>
    <button class:selected={!primary} on:click={() => updateData("main")}>
      Main election
    </button>
  </div>
  <!-- <div class="labels">
    {#each ["18-30", "30-50", "50-65", "65+"] as label, j}
      <div
        class="cat-label"
        style="transform:translate(4vw,{getYOffset(j) * 0.7 + 20}px)"
      >
        {label}
      </div>
    {/each}
  </div> -->
  <div class="chart-wrapper">
    {#each $values as group, j}
      <div class="labels">
        <div
          class="cat-label"
          style="transform:translate(0vw,{getYOffset(j) + 7}px)"
        >
          {["18-30", "30-50", "50-65", "65+"][j]}
        </div>
      </div>
      {#each group as bar, i}
        <div
          class="bar"
          style="height:{30}px; width:{getWidth(
            i,
            group
          )}px; clear:both;background-color:{colors[
            i
          ]};transform:translate({getXOffset(i, group)}px,{getYOffset(j)}px);"
        />
      {/each}
    {/each}
  </div>
  <div class="key">
    Key : <span style="color:{colors[0]}"> Blue Party</span> |
    <span style="color:{colors[1]}"> Centrists </span>
    | <span style="color:{colors[2]}"> Red Party</span>
  </div>
</div>

<style lang="scss">
  .buttons {
    width: 255px;
    margin: 0 auto;
    button {
      max-width: 123px;
      height: 50px;
      background-color: white;
      padding: 10px;
      border: none;
      cursor: pointer;
      &.selected {
        border: black 3px solid;
      }
    }
  }
  .container {
    height: 450px;
    h3 {
      text-align: center;
      // max-height: 4rem;
    }
    .bar {
      position: absolute;
      display: flex;
      z-index: 1;
    }
    .key {
      font-size: 0.7rem;
      text-align: center;
    }

    .chart-wrapper {
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      width: 300px;
      height: 230px;
    }
    .labels {
      position: absolute;
      z-index: 30;
      .cat-label {
        transform: translateX(100px);
        font-size: 0.8rem;
        text-align: right;
        background-color: rgba(255, 255, 255, 1);
        line-height: 1rem;
      }
    }
  }
</style>
