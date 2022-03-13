<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { HighlightSvelte } from "svelte-highlight";
  import github from "svelte-highlight/src/styles/github";

  let code;
  export let url;
  let loaded = false;
  onMount(async () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.content);
        code = data.content;
        loaded = true;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

{#if loaded}
  <div transition:fly={{ x: -50, duration: 300 }}>
    <HighlightSvelte code={atob(code)} />
  </div>
{/if}
<svelte:head>
  {@html github}
</svelte:head>
