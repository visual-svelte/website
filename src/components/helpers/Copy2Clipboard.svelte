<script>
  // import { googleLight } from "svelte-highlight/src/styles";
  import { fly } from "svelte/transition";
  export let content;
  let copied = false;
  function copyCode(code) {
    navigator.clipboard.writeText(code);
    copied = true;
  }
</script>

<button on:click={() => copyCode(atob(content))}
  >{copied ? "✔️ Copied!" : "Copy to Clipboard"}
</button>
<div style="min-height:25px">
  {#if copied}
    <div class="donation" in:fly={{ x: -30 }}>
      Saved you time or money? <br />Consider
      <a rel="external" target="_" href="https://ko-fi.com/visualsvelte"
        >donating</a
      >! Thanks
    </div>
  {/if}
</div>

<style lang="scss">
  .donation {
    z-index: 2;

    padding-left: 20px;
    // margin-top: 10px;
  }
  button {
    z-index: 20;
    float: left;
    border: 1px solid var(--c-gray);
    align-self: center;
    width: 200px;
    box-shadow: 2px -2px 0 0 var(--c-green);
    border: none;
    background-color: var(--c-white);
    padding: 10px 20px;
    opacity: 0.9;
    margin-right: 20px;
    transition: all 0.5s;
    cursor: pointer;
    @media (max-width: 600px) {
    }

    &:hover {
      opacity: 1;
      box-shadow: 4px -4px 0 0 var(--c-green);
    }
  }
</style>
