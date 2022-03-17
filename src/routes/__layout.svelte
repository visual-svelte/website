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
  // export let articleData;
  import Footer from "$components/Footer.svelte";
  import InThisArticle from "$components/InThisArticle.svelte";
  import SideNavbar from "$components/SideNavbar.svelte";
  import TopNav from "$components/TopNav.svelte";
  import { tableOfContents } from "$stores/post.js";
  console.log("toc");
  let innerWidth;
  let scrollY;
</script>

<svelte:window bind:innerWidth bind:scrollY />

<div class="grid">
  <header>
    <TopNav {innerWidth} {scrollY} {sidebarData} />
  </header>

  {#if innerWidth > 800}
    <aside class="sidebar-left">
      {#if $tableOfContents.length}
        {#key innerWidth}
          <SideNavbar {sidebarData}>
            <InThisArticle tableOfContents={$tableOfContents} />
          </SideNavbar>
        {/key}
      {/if}
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
    {#key innerWidth}
      {#if $tableOfContents.length && innerWidth >= 1200}
        <InThisArticle tableOfContents={$tableOfContents} />
      {/if}{/key}
  </aside>
  <footer>
    <Footer />
  </footer>
</div>

<style lang="scss">
  @font-face {
    font-family: "Consola";
    font-style: normal;
    font-weight: 400;
    src: local(""),
      /* Modern Browsers */ url("/fonts/CONSOLA.ttf") format("truetype");
  }
  * {
    font-family: "Consola";
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

    // @media (max-width: 600px) {
    //   grid-template-columns: 1px 300px 1px;
    // }

    .sidebar-left {
      background: linear-gradient(
        to top right,
        rgba(255, 255, 255, 0.2) 80%,
        rgba(0, 0, 0, 0.05)
      );
    }
    .sidebar-right {
      background: linear-gradient(
        to top left,
        rgba(255, 255, 255, 0.2) 80%,
        rgba(0, 0, 0, 0.05)
      );
    }
    header {
      width: 100%;
      height: 90px;
    }
  }

  header,
  footer {
    grid-column: 1 / 4;
  }

  header {
    // .positioner {
    //   width: 600px;
    //   margin: 0 auto;
    // }
  }
  @media all and (max-width: 600px) {
    aside,
    article {
      grid-column: 1 / 4;
    }
  }

  /* Demo Specific Styles */
  body {
    margin: 0 auto;
    max-width: 56em;
    padding: 1em 0;
  }

  header,
  aside,
  article,
  footer {
    // background: #eaeaea;
    display: flex;
    justify-content: center;
  }

  article {
    padding: 10px 20px;
  }
  #content {
    min-width: 100%;
    position: relative;
  }
  .secondary-header {
    position: relative;
    min-width: 100%;
    background-color: rgba(119, 227, 35, 0.1);
    height: 30px;
  }
</style>
