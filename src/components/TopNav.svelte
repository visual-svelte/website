<script>
  import SecondaryToolbar from "$components/SecondaryToolbar.svelte";
  import MobileMenu from "$components/MobileMenu.svelte";
  import { innerWidth, scrollY } from "$stores/screen";
  import ActionButton from "$components/helpers/ActionButton.svelte";
  import Logo from "$components/helpers/Logo.svelte";
  import { page } from "$app/stores";
  import { showHideMenu } from "$stores/menu";
  import { fly } from "svelte/transition";

  $: home = $page.url.pathname !== "/";
  let loadSecondary = false;

  $: $innerWidth,
    $innerWidth < 800 ? (loadSecondary = true) : (loadSecondary = false);

  export let sidebarData;
</script>

<div class="container">
  <div class="header-grid">
    <div class="header-left">
      <Logo />
    </div>
    <div class="header-centre" />
    <div class="header-right">
      <!-- <a href="https://ko-fi.com/C0C7BRLF8" target="_blank"
        ><img
          height="36"
          style="border:0px;height:36px;"
          src="https://cdn.ko-fi.com/cdn/kofi4.png?v=3"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        /></a
      > -->
      <a href="https://ko-fi.com/C0C7BRLF8" target="_blank"
        ><img
          height="36"
          style="border:0px;height:36px;"
          src="https://cdn.ko-fi.com/cdn/kofi2.png?v=3"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        /></a
      >
      <!-- <ActionButton text="Support" href="/support" /> -->
    </div>

    {#if loadSecondary}
      <div
        class="toolbar"
        class:expanded={$showHideMenu}
        class:fixed={$scrollY > 60}
      >
        <SecondaryToolbar />
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  a {
    background: none !important;
  }

  .container {
    // background: var(--c-darkgray);
    z-index: 16;
    height: 90px;
    width: 100%;
    .header-grid {
      display: grid;
      background-color: var(--c-darkgray);
      // height: 60px;
      grid-template-areas:
        "hl hc hr"
        "tb tb tb";
      height: 90px;
      grid-template-rows: 60px auto;

      @media (max-width: 800px) {
        grid-template-columns: minmax(120px, 200px) auto minmax(120px, 200px);
      }
      @media (min-width: 800px) {
        grid-template-columns: minmax(240px, 280px) auto minmax(200px, 300px);
        grid-template-areas: "hl hc hr";
        grid-template-rows: 60px;
        height: 60px;
      }
      @media (min-width: 1000px) {
        grid-template-columns: 250px auto 300px;
        height: 60px;
      }
      display: intital;
      .toolbar {
        height: 40px;
        align-self: start;
        position: relative;
        top: 0px;
        z-index: 10;
        grid-area: tb;
        background-color: var(--c-darkgray);
        width: 100%;

        &.fixed {
          position: fixed;
        }
        &.expanded {
          height: 80vh;
          border-bottom: 3px solid var(--c-green);
        }
        transition: all 0.3s;
      }
      .header-left {
        grid-area: "hl";
        align-content: center;
        padding-left: 10px;

        display: flex;
      }
      .header-centre {
        grid-area: "hc";
      }
      .header-right {
        a {
          margin-top: 12px;
        }
        grid-area: "hr";
        align-content: center;
        display: flex;
        justify-content: end;
        padding-right: 20px;
      }
    }
  }
</style>
