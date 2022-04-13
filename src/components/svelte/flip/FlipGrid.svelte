<script>
  import { treemapSlice } from "d3";
  import { onMount } from "svelte";
  import { flip } from "svelte/animate";

  let images;

  let fetchImage = (async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    let x = await response.json();
    images = x.slice(0, 17);
    // console.log(images);
  })();

  onMount(() => {
    fetchImage;
  });

  let asc = true;
  function addRandom() {
    let fetchImage = (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/2/photos"
      );
      let x = await response.json();
      images = x.slice(0, 17);
      // console.log(images);
    })();
  }
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const changeToList = () => {};
  const changeToGrid = () => {};
  function doAscending() {
    if (asc) {
      images.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      asc = !asc;
    } else {
      images.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0));
      asc = !asc;
    }
  }
  function doShuffle() {
    images = shuffle(images);
  }
  function doRotate() {
    let x = images.shift();
    images.push(x);
  }
  let max = 10;
</script>

<button on:click={() => (images = images.reverse())}> Ascending </button>
<button on:click={doShuffle}> Shuffle </button>

{#if images}
  <div class="grid">
    {#each images as post (post.id)}
      <div animate:flip={{ duration: 500 }} class="card">
        <img src={post.thumbnailUrl} alt="Dog" />
      </div>
    {/each}
  </div>
{/if}

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50px, 60px));
    img {
      height: 50px;
      width: 50px;
      margin: 10px;
    }
  }
</style>
