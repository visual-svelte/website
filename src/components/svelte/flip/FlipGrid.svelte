<script>
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";
  import * as d3 from "d3";
  let images = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];
  let color = d3.scaleSequential(d3.interpolatePuBuGn).domain([0, 10]);

  function doShuffle() {
    let currentIndex = images.length,
      randomIndex;

    while (currentIndex != 0) {
      // While there remain elements to shuffle.

      randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element.
      currentIndex--;

      // And swap it with the current element.
      [images[currentIndex], images[randomIndex]] = [
        images[randomIndex],
        images[currentIndex],
      ];
    }
  }

  let asc = true;
  function sortAZ() {
    if (asc) {
      images = images.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0));
      asc = !asc;
    } else {
      images = images.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      asc = !asc;
    }
  }
</script>

<button on:click={sortAZ}> Sort {asc ? "9->0" : "0->9"} </button>
<button on:click={doShuffle}> Shuffle </button>

{#if images}
  <div class="grid">
    <!-- each block must be keyed, for example with (post.id) in brackets -->
    {#each images as post, i (post.id)}
      <div animate:flip={{ duration: 500 }}>
        <div class="card " style="background-color: {color(post.id)}">
          {post.id}
        </div>
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 60px));

    .card {
      border: 1px solid black;
      height: 50px;
      width: 50px;
      margin: 10px;
      padding-left: 5px;
      padding-top: 5px;
    }
  }
</style>
