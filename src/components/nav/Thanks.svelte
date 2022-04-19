<script>
  import Kofi from "$components/helpers/Kofi.svelte";
  import { allLight } from "$stores/cms";
  import { keyToSentence } from "$utils/textUtils";
  import { flip } from "svelte/animate";
  function shuffle(list) {
    let currentIndex = list.length,
      randomIndex;

    while (currentIndex != 0) {
      // While there remain elements to shuffle.

      randomIndex = Math.floor(Math.random() * currentIndex); // Pick a remaining element.
      currentIndex--;

      // And swap it with the current element.
      [list[currentIndex], list[randomIndex]] = [
        list[randomIndex],
        list[currentIndex],
      ];
    }
    return list;
  }

  let asc = { id: false, cat: false };

  $: console.log("asc", asc);

  function sortAZ(key) {
    if (asc[key]) {
      articles = articles.sort((a, b) =>
        a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0
      );
      asc[key] = !asc[key];
    } else {
      articles = articles.sort((a, b) =>
        a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
      );
      asc[key] = !asc[key];
    }
  }

  let articles = shuffle($allLight);
</script>

<div class="wrapper">
  <h2>Thanks for viewing!</h2>
  <p>
    If you found any of my ramblings or code examples useful, please consider
    supporting this blog so I can make more tutorials:
  </p>

  <div class="kofi-cup">
    <Kofi />
  </div>

  <h2>Pick your next article</h2>

  <p class="sorting">
    Sort:<span on:click={() => sortAZ("id")}>A->Z</span>
    <!-- |
    <span on:click={() => sortAZ("cat")}> by Category</span> -->
  </p>
  <div class="list-container">
    {#each articles as a (a.id)}
      <a
        animate:flip={{ duration: 300 }}
        href={a.href}
        rel="internal"
        style="{a.cat == 'D3 API'
          ? 'border-top:3px solid var(--berry); background-color: rgba(251,54,54,0.2); '
          : a.cat == 'D3 Charts'
          ? 'border-top:3px solid var(--dragon); background-color: rgba(180,13,97,0.2);'
          : 'border-top:3px solid var(--lemon); background-color: rgba(247,196,25,0.2);'} "
        >{keyToSentence(a.id)}
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 100px auto 0;
    padding-bottom: 50px;
  }
  .kofi-cup {
    margin: 20px;
    display: inline-block;
  }
  .sorting {
    span {
      cursor: pointer;
      margin: 0px 10px;
      user-select: none;
    }
  }
  .list-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 auto;
    max-width: 1000px;

    a {
      padding: 10px 20px;

      transition: 0.3 all;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        background-color: rgba(243, 243, 243, 0.1);
      }
    }
  }
</style>
