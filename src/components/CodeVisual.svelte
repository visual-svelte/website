<script>
  export let compid;

  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { HighlightSvelte } from "svelte-highlight";
  import github from "svelte-highlight/src/styles/github";

  $: url = `https://api.github.com/repos/visual-svelte/website/contents/src/components/d3/${compid}.svelte`;

  async function fetchCode() {
    const response = await self.fetch(url);

    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  }

  let promise = Promise.resolve([]);
  onMount(async () => {
    promise = fetchCode();
  });

  function copyCode(code) {
    navigator.clipboard.writeText(code);

    /* Alert the copied text */
    alert("Copied to clipboard!");
  }
</script>

{#await promise}
  Loading ...
{:then code}
  <button on:click={copyCode(atob(code.content))}>Copy Code to Clipboard</button
  >
  <div transition:fly={{ x: -50, duration: 300 }}>
    <HighlightSvelte code={atob(code.content)} />
  </div>
  <button on:click={copyCode(atob(code.content))}>Copy Code to Clipboard</button
  >
{/await}

<svelte:head>
  {@html github}
</svelte:head>
