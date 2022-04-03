<script>
  import { goto } from "$app/navigation";
</script>

<button on:click={() => goto("/")} class="logo"> VS + </button> +

<style lang="scss">
  .logo {
    cursor: pointer;
    border: none;
    background-color: transparent;
    // font-family: Consolas;
    width: 150px;
    font-size: 2rem;
    color: var(--c-gray);
    // text-shadow: 1px -1px var(--c-green);
    font-weight: 800;
    transition: color 0.3s;
    &:hover {
      color: var(--c-white);
    }
  }
</style>
