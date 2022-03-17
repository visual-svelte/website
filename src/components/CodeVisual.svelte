<script>
  export let compid;

  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { HighlightSvelte } from "svelte-highlight";
  import github from "svelte-highlight/src/styles/github";
  import ActionButton from "./helpers/ActionButton.svelte";
  import Copy2Clipboard from "./helpers/Copy2Clipboard.svelte";

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
</script>

{#await promise}
  Loading ...
{:then code}
  <Copy2Clipboard content={code.content} />
  <div transition:fly={{ x: -50, duration: 300 }}>
    <HighlightSvelte code={atob(code.content)} />
  </div>
  <Copy2Clipboard content={code.content} />
{/await}

<svelte:head>
  {@html github}
</svelte:head>
