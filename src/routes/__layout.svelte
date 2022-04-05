<script>
  import MinimalNav from "$components/nav/MinimalNav.svelte";
  import Footer from "$components/Footer.svelte";
  import { innerWidth, scrollY } from "$stores/screen";
  import { navOpen } from "$stores/menu";
  import { fade } from "svelte/transition";
</script>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600&display=swap");
  </style>
</svelte:head>
<svelte:window bind:innerWidth={$innerWidth} bind:scrollY={$scrollY} />
{#if $navOpen}
  <div transition:fade class="dimmer" on:click={() => ($navOpen = false)} />
{/if}
<div class="wrapper">
  <header><MinimalNav /></header>
  <main id="content">
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</div>

<style lang="scss">
  .dimmer {
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    width: 100%;
    background-size: 20px 20px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
    main {
      padding: 10px 10px 100px 10px;
    }
  }

  :global(*) {
    font-family: "Inconsolata", monospace;
  }
  :global(p) {
    line-height: 1.4rem;
  }
  :global(h1) {
    padding: 1rem 0;
  }
  :global(a) {
    color: var(--c-darkgray);
    transition: background 0.3s;
    background: linear-gradient(
      180deg,
      transparent 85%,
      rgba(119, 227, 35, 0.1) 15%
    );
    &:focus {
      color: var(--c-darkgray);

      background: linear-gradient(
        180deg,
        transparent 80%,
        rgba(119, 227, 35, 0.35) 20%
      );
    }

    &:hover {
      background: rgba(119, 227, 35, 0.35);
    }
  }
</style>
