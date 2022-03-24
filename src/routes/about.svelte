<script>
  import aboutData from "$data/about.js";
  import { tableOfContents } from "$stores/post.js";
  import { onDestroy, onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  let previousValue = 0;
  let scrollValue = 0;
  let errorState = false;
  import Scrolly from "$components/Scrolly.svelte";

  let titles = aboutData.map((comp) => {
    return { id: comp.id, title: comp.title, bool: false };
  });

  onMount(() => {
    $tableOfContents = titles;
  });

  onDestroy(() => {
    $tableOfContents = [];
  });

  function updateStore(newScrollValue) {
    console.log("updating store.." + newScrollValue);
    try {
      if (newScrollValue != undefined) {
        $tableOfContents[previousValue].bool = false;
        $tableOfContents[newScrollValue].bool = true;
        previousValue = newScrollValue;
      }
    } catch (error) {
      errorState = true;
      console.error(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }
  }

  $: scrollValue, updateStore(scrollValue);
</script>

<!--  -->
<Scrolly bind:value={scrollValue}>
  <div class="container">
    {#each aboutData as sect}
      <h2 id={sect.id.toString()}>{sect.title}</h2>
      <p>{sect.text}</p>
    {/each}
  </div>
</Scrolly>

<style lang="scss">
  .container {
    margin: 0 auto;
    max-width: 800px;
    // text-align: center;
  }

  button {
    background-color: transparent;
    border-radius: 100%;
    padding: 10px;
    height: 40px;
    width: 40px;
    transition: 0.5s all;
    &:hover {
      background-color: pink;
    }
  }
</style>
