<script>
  import MinimalNav from "$components/nav/MinimalNav.svelte";
  import Footer from "$components/Footer.svelte";
  import { innerWidth, scrollY } from "$stores/screen";
  import { navOpen } from "$stores/menu";
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400;1,600&family=Josefin+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap");
  </style>
</svelte:head>
<svelte:window bind:innerWidth={$innerWidth} bind:scrollY={$scrollY} />
{#if $navOpen}
  <div transition:fade class="dimmer" on:click={() => ($navOpen = false)} />
{/if}
<div class="wrapper" style="">
  <header><MinimalNav /></header>
  <main id="content">
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</div>

<style lang="scss">
  footer {
    //   bottom: 0;
    //   position: absolute;
    width: 100% !important;
    background-color: var(--dark);
  }
  .dimmer {
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: var(--off-white);
    // background-size: 20px 20px;
    // background-image: linear-gradient(
    //     to right,
    //     rgba(0, 0, 0, 0.03) 1px,
    //     transparent 1px
    //   ),
    //   linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
    main {
      // padding: 10px 10px 150px 10px;
      margin: 0;
      // min-height: 80vh;
    }
  }

  :global(h1, h2, h3, h4) {
    font-family: "IBM Plex Mono", monospace;
  }
  :global(h1) {
    line-height: 3rem;
    font-weight: 300;
    font-size: 2.4rem;
    padding: 1rem 0;
  }
  :global(h2) {
    margin-top: 4rem;
    padding-top: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      height: 1px;
      // margin-left: 3rem;
      width: 20px;
      border-bottom: 2px solid var(--dragon);
    }
  }

  :global(p, ul, div, a) {
    line-height: 2rem;
    font-family: "Josefin Sans", sans-serif;
  }
</style>
