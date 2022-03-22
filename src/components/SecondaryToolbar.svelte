<script>
  import Breadcrumb from "$components/Breadcrumb.svelte";
  import { page } from "$app/stores";
  import { showHideMenu } from "$stores/menu";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  $: home = $page.url.pathname == "/";

  function revealMenu() {
    $showHideMenu = !$showHideMenu;
  }
  function navigator(link) {
    $showHideMenu = false;
    goto(link);
  }

  let menuItems = [
    { title: "Home", href: "/" },
    { title: "Integrate D3 and SvelteKit", href: "/d3" },
    { title: "About visualsvelte", href: "/about" },
    { title: "Support", href: "/support" },
    { title: "Twitter", href: "https://twitter.com/visualsvelte" },
  ];
</script>

<div class="container">
  <div>
    {#if !home && !$showHideMenu}
      <div class="bread" transition:fly={{ x: -300 }}>
        <Breadcrumb path={$page.url.pathname} expanded={$showHideMenu} />
      </div>
    {/if}
  </div>

  <button class="menu-button" on:click={revealMenu}>
    {$showHideMenu ? "Close" : "Menu"}
  </button>

  {#if $showHideMenu}
    <div class="menu-items">
      {#each menuItems as item, i}
        <button
          in:fly={{ x: -20, delay: 200 * i }}
          class="select-button"
          on:click={() => navigator(item.href)}
        >
          {item.title}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .bread {
    margin-left: 2%;
  }
  .container {
    display: grid;
    grid-template-columns: auto 80px;
    border-top: 1px solid rgba(223, 223, 223, 0.3);
    // border-bottom: 1px solid var(--c-gray);
    .menu-button {
      align-self: start;
      font-size: 0.9rem;
      padding: 9px 0px;

      border: none;
      background: transparent;

      color: var(--c-white);

      font-family: "Consola" !important;
      cursor: pointer;
    }
    .menu-items {
      padding-top: 30px;
      margin: 0 auto;
      position: relative;
      .select-button {
        margin: 10px 20px;
        z-index: 20;
        color: var(--c-darkgray);
        cursor: pointer;
        width: 100%;
        display: inline-block;
        padding: 1em;
        grid-column: 1/2;
        text-align: center;
      }
    }
  }
</style>
