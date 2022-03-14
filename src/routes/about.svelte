<script>
  import aboutData from "$data/about.js";
  let text =
    "AALorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem cupiditate quisquam, quas et, accusantium ipsa fuga consequuntur sunt, quidem iste eius impedit atque iusto saepe molestiae culpa nihil minima nostrum!";
  import { fly, fade } from "svelte/transition";

  let counter = 0;
  function revealNext() {
    console.log("hello");
    counter += 1;
  }

  let list = [0, 1, 2, 3, 4];
</script>

<!--  -->

<div class="container">
  {#each aboutData as reveal}
    {#if reveal.id <= counter}
      <div transition:fly={{ y: -100, duration: 300 }}>
        <p>{reveal.text}</p>

        {#if reveal.id == counter && reveal.id + 1 != reveal.text.length}
          <button in:fade={{ delay: 400, duration: 1000 }} on:click={revealNext}
            >+
          </button>
        {/if}
      </div>
    {/if}
  {/each}
</div>

<style lang="scss">
  .container {
    margin: 0 auto;
    max-width: 800px;
    text-align: center;
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
