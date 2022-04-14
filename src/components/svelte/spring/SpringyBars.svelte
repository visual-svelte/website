<script>
  import { elasticOut } from "svelte/easing";
  import { tweened } from "svelte/motion";

  let data = { initial: [0, 0, 0, 0], final: [300, 254, 120, 67] };

  const values = tweened(data.initial, {
    duration: 1000,
    easing: elasticOut,
  });

  async function updateStore() {
    values.set(data.final, {
      duration: 1000,
      easing: elasticOut,
    });
  }

  function resetData() {
    values.set(data.initial, { duration: 300, easing: elasticOut });
  }
</script>

<div class="container">
  <button on:click={updateStore}> Give me bars </button>
  <button on:click={resetData}> Reset </button>

  <div class="axis" />
  {#each $values as bar, i}
    <div
      class="bar"
      style="height:{30}px; width:{bar}px; clear:both;background-color:pink;transform:translate(30px,{53 *
        i +
        40}px);"
    />
  {/each}
</div>

<style lang="scss">
  .container {
    height: 300px;
    .axis {
      margin: 28px;
      position: absolute;
      border-left: 1px solid black;
      border-bottom: 1px solid black;
      height: 200px;
      width: 300px;
    }
    .bar {
      position: absolute;
      display: flex;
    }
  }
</style>
