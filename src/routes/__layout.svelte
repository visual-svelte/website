<script>
  import Breadcrumb from "$components/Breadcrumb.svelte";
  import InThisArticle from "$components/InThisArticle.svelte";
  import { page } from "$app/stores";
  import { tableOfContents } from "$stores/post.js";
</script>

<div class="grid">
  <header>
    <div class="header-grid">
      <div class="header-left"><a href="/">Visual Svelte</a></div>
      <div class="header-centre-left">
        <!-- <div class="positioner">
          {#if $page.url.pathname != "/"}
            <Breadcrumb path={$page.url.pathname} />
          {/if}
        </div> -->
      </div>
      <div class="header-centre-right">Search box</div>
      <div class="header-right" />
    </div>
  </header>

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

  <aside class="sidebar-right">
    {#if $tableOfContents.length}
      <InThisArticle />
    {/if}

    <!-- {#if $page.URL.pathname } -->
    <!-- <nav class="main-nav"> -->
    <!-- {#each D3Collection as d3lib}
                {d3lib}
              {/each} -->
    <!-- </nav> -->
  </aside>

  <footer />
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Marck+Script&family=Sawarabi+Gothic&display=swap");

  * {
    font-family: "Sawarabi Gothic", sans-serif;
  }

  .header-grid {
    background: white;
    // position: fixed;
    top: 0px;
    padding: 5px;
    border-bottom: gray 1px solid;
    max-width: 1200px;
    display: grid;
    height: 50px;
    width: 100%;
    grid-template-columns: 200px auto auto 200px;
    grid-gap: 1em;
    .header-left {
      padding-right: 10px;
      border-right: 1px solid gray;

      font-family: "Marck Script", cursive;
      font-size: 1.5em;
    }

    .header-right {
      padding-left: 10px;
      border-left: 1px solid gray;
    }

    .header-left,
    .header-centre-left,
    .header-centre-right,
    .header-right {
      display: flex;
      align-self: end;
    }

    .header-left,
    .header-centre-right {
      justify-self: end;
      text-align: end;
    }
    .header-centre-left,
    .header-right {
      justify-self: start;
    }
  }
  .grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-gap: 1em;
    margin-top: -1px;
    background-size: 20px 20px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);

    .sidebar-left {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.2) 70%,
        rgba(0, 0, 0, 0.02)
      );
    }
    .sidebar-right {
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.2) 70%,
        rgba(0, 0, 0, 0.02)
      );
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
    // background: #eaeaea;
    display: flex;
    justify-content: center;
  }

  nav {
    // border: black 2px solid;
    // position: fixed;
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
    // max-width: 600px !important;
    // margin: 0 auto;
    // min-height: 100vh !important;
    min-width: 100%;
  }
</style>
