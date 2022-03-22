<script>
  import { googleLight } from "svelte-highlight/src/styles";

  export let href;
  export let text;
  import { goto } from "$app/navigation";
</script>

<button on:click={() => goto(href)}>{text}</button>

<style lang="scss">
  button {
    align-self: center;

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
