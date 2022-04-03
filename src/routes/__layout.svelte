<script context="module">
  export async function load({ fetch }) {
    const url = "/api/routes.json";
    const res = await fetch(url);
    if (res.ok) {
      const { sidebarData } = await res.json();
      return {
        props: { sidebarData },
      };
    }
    return {
      status: res.status,
      error: new Error(`Could not load data`),
    };
  }
</script>

<script>
  export let sidebarData;
  console.log("sidebardata", sidebarData);
  import MinimalNav from "$components/nav/MinimalNav.svelte";
  import Footer from "$components/Footer.svelte";
  import InThisArticle from "$components/InThisArticle.svelte";
  import SideNavbar from "$components/SideNavbar.svelte";
  import TopNav from "$components/TopNav.svelte";
  import { tableOfContents } from "$stores/post.js";
  import { innerWidth, scrollY } from "$stores/screen";
  import { navOpen } from "$stores/menu";
  import { fade } from "svelte/transition";
</script>

<svelte:window bind:innerWidth={$innerWidth} bind:scrollY={$scrollY} />
{#if $navOpen}
  <div transition:fade class="dimmer" on:click={() => ($navOpen = false)} />
{/if}
<div class="wrapper">
  <header><MinimalNav /></header>
  <main id="content">
    <slot />
  </main>
</div>

<!-- <div class="grid">
   <header> 
 <TopNav {sidebarData} /> 
   </header> 

  {#if $innerWidth > 800}
    <aside class="sidebar-left">
      {#key $innerWidth}
        <SideNavbar {sidebarData}>
          <InThisArticle tableOfContents={$tableOfContents} />
        </SideNavbar>
      {/key}
    </aside>
  {:else}
    <div />
  {/if}

  <article>
    <main id="content">
      <slot />
    </main>
  </article>

  <aside class="sidebar-right">
    {#key $innerWidth}
      {#if $tableOfContents.length && $innerWidth >= 1200}
        <InThisArticle tableOfContents={$tableOfContents} />
      {/if}{/key}
  </aside>
  <footer>
    <Footer />
  </footer>
</div> -->
<style lang="scss">
  .dimmer {
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    background-size: 20px 20px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
    main {
    }
  }

  @font-face {
    font-family: "Consola";
    font-style: normal;
    font-weight: 400;
    src: local(""),
      /* Modern Browsers */ url("/fonts/CONSOLA.ttf") format("truetype");
  }
  * {
    font-family: "Consola";
    background-color: "#EEEFE1";
  }

  :global(a) {
    color: var(--c-darkgray);
    transition: background 0.3s;
    background: linear-gradient(
      180deg,
      transparent 85%,
      rgba(119, 227, 35, 0.15) 15%
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

  .grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    background-size: 20px 20px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);

    @media (min-width: 800px) {
      grid-template-columns: minmax(240px, 280px) minmax(600px, 700px) 1px;
    }
    @media (min-width: 1000px) {
      grid-template-columns: 250px 700px 300px;
    }

    @media (max-width: 600px) {
      grid-template-columns: 1px auto 1px;
    }

    .sidebar-left {
      background: linear-gradient(
        to top right,
        rgba(255, 255, 255, 0.2) 80%,
        rgba(0, 0, 0, 0.05)
      );
    }
    .sidebar-right {
      // background: linear-gradient(
      //   to top left,
      //   rgba(255, 255, 255, 0.2) 80%,
      //   rgba(0, 0, 0, 0.05)
      // );
    }
    header {
      width: 100%;
      height: 60px;
    }
  }
</style>
