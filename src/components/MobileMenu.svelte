<script>
  export let sidebarData;
  import { page } from "$app/stores";
  import { showHideMenu } from "$stores/menu.js";
  import Tree from "$components/helpers/Tree.svelte";
  import { fly } from "svelte/transition";

  function revealMenu() {
    $showHideMenu = !$showHideMenu;
  }
</script>

<div class="mobile-menu" transition:fly={{ y: -500 }}>
  <button on:click={revealMenu}>Close</button>
  <div>
    <Tree data={sidebarData} dark={true} />
  </div>
</div>

<style lang="scss">
  .mobile-menu {
    top: 30px;
    padding: 10px 50px !important;
    position: fixed;
    height: 100vh;
    width: 100%;
    color: var(--c-white);
    background-color: var(--c-darkgray);
    z-index: 15;
    button {
      position: absolute;
      right: 30px;
      margin-right: 10px;
      margin-top: 10px;
      color: var(--c-white);

      top: 0px;
      border: none;
      background-color: transparent;
      font-family: Consolas;
    }
  }
</style>
