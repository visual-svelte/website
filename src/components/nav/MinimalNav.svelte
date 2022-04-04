<script>
  import BottomNav from "./BottomNav.svelte";

  import Tree from "$components/helpers/Tree.svelte";
  import { fly } from "svelte/transition";
  import Icon from "$components/helpers/Icon.svelte";
  import { navOpen } from "$stores/menu";
  let myButton;
  const handleClick = () => {
    myButton.disabled = true;
    $navOpen = !$navOpen;
    setTimeout(() => (myButton.disabled = false), 300);
  };
</script>

<button bind:this={myButton} class="common moreButton" on:click={handleClick}
  >{$navOpen ? "Hide" : "More"}</button
>

{#if $navOpen}
  <div transition:fly={{ x: -300, duration: 300 }} class="menu common">
    <div class="tree">
      <Tree />
    </div>
    <BottomNav />
  </div>
{/if}

<style lang="scss">
  .common {
    background-color: white;
    border: transparent 1px solid;
    position: fixed;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .moreButton {
    padding: 1rem;
    z-index: 200;
    font-weight: 600;
    cursor: pointer;
    &:disabled {
      color: black;
    }
  }
  .menu {
    z-index: 2;
    display: grid;
    grid-template-rows: auto 180px;
    height: 100vh;
    width: 300px;
    border: none;
    top: 40px;
    .tree {
      //
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--c-gray);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--c-darkgray);
  }
</style>
