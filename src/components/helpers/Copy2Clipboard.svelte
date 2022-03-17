<script>
  import { googleLight } from "svelte-highlight/src/styles";

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

<style lang="scss">
  button {
    border: 1px solid var(--c-gray);
    align-self: center;
    width: 200px;
    box-shadow: 2px -2px 0 0 var(--c-green);
    border: none;
    background-color: var(--c-white);
    padding: 10px 20px;
    opacity: 0.9;
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
