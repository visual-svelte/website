<script>
  export let codeString;
  import { HighlightSvelte } from "svelte-highlight";
  import github from "svelte-highlight/src/styles/github";
  import Copy2Clipboard from "./Copy2Clipboard.svelte";
</script>

<svelte:head>
  {@html github}
</svelte:head>

<div>
  <Copy2Clipboard string={true} content={codeString} />
  <HighlightSvelte code={codeString} />
</div>

<style>
  div {
    margin: 20px 0px;
    background-color: white;
    overflow-y: hidden;
  }
</style>
