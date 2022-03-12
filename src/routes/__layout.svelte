<script>
  import Breadcrumb from "$components/Breadcrumb.svelte";
  import { page } from "$app/stores";
</script>

<div class="grid">
  <header><Breadcrumb path={$page.url.pathname} /></header>

  <aside class="sidebar-left">
    <!-- {#if $page.URL.pathname } -->
    <!-- <nav class="main-nav"> -->
    <!-- {#each D3Collection as d3lib}
                {d3lib}
              {/each} -->
    <!-- </nav> -->
  </aside>

  <article>
    <main id="content">
      <slot />
    </main>
  </article>

  <aside class="sidebar-right">Right Sidebar</aside>

  <footer>Footer</footer>
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-gap: 1em;
  }

  header,
  footer {
    grid-column: 1 / 4;
  }

  @media all and (max-width: 700px) {
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
    background: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    // border: black 2px solid;
    position: fixed;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    &.main-nav {
      height: 80vh;
      width: 160px;
      border: 1px solid rgba(0, 0, 0, 0.1);

      transition: all 0.3s;
      &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        // box-shadow: rgba(100, 100, 111, 0.2) 0px 10px 29px 7px;
      }
      // box-shadow: ;
    }
  }

  #content {
    max-width: 600px;
    margin: 0 auto;
    min-height: 100vh !important;
    min-width: 100%;
    margin-top: -1px;
    background-size: 20px 20px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  }
</style>
