<script>
  import Breadcrumb from "$components/Breadcrumb.svelte";
  import InThisArticle from "$components/InThisArticle.svelte";
  import { tableOfContents } from "$stores/post.js";
  import Icon from "$components/helpers/Icon.svelte";
</script>

<div class="grid">
  <header>
    <div class="header-grid">
      <div class="header-left">
        <div class="fade" />
        <a href="/" class="logo"> visualsvelte </a>
      </div>
      <div class="header-centre-left">
        <!-- <div class="positioner">
          {#if $page.url.pathname != "/"}
            <Breadcrumb path={$page.url.pathname} />
          {/if}
        </div> -->
      </div>
      <div class="header-centre-right">
        <button on:click={console.log("helloclicked")}>
          <Icon
            name="search"
            width="20px"
            height="20px"
            stroke="var(--c-gray)"
            strokeWidth="3"
          />
        </button>
      </div>
      <div class="header-right"><button>Support</button></div>
    </div>
  </header>

  <aside class="sidebar-left">
    <!-- <C1 /> -->

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
  header {
    width: 100%;
    background: var(--c-darkgray);
    height: 60px;

    .header-grid {
      // position: fixed;
      top: 0px;
      border-bottom: gray 1px solid;
      max-width: 1200px;
      display: grid;
      height: 60px;
      width: 100%;
      color: white !important;

      grid-template-columns: 200px auto auto 200px;

      .header-right {
        padding-left: 10px;
        button {
          box-shadow: 2px -2px 0 0 var(--c-green);
          border: none;
          background-color: var(--c-white);
          padding: 10px 20px;
          margin-left: 20%;
          opacity: 0.9;
          transition: all 0.5s;
          cursor: pointer;
          &:hover {
            opacity: 1;
            box-shadow: 4px -4px 0 0 var(--c-green);
          }
        }
      }

      .header-left,
      .header-centre-left,
      .header-centre-right,
      .header-right {
        display: flex;
        align-self: center;
      }

      .header-left,
      .header-centre-right {
        justify-self: end;
        margin-right: 5px; // text-align: end;
        color: white;
        a {
          width: 150px;
          text-align: start;
          margin-right: 20px;
          // color: white;
          color: var(--c-gray);
          text-shadow: 2px -2px var(--c-black);
          transition: color 0.3s;
          text-decoration: none;
          &:hover {
            color: var(--c-white);
          }
        }
      }

      .header-centre-left,
      .header-right {
        margin-left: 5px;
        justify-self: start;
      }
      .header-centre-right {
        button {
          margin-right: 10px;
          background-color: transparent;
          border: none;
        }
      }
    }
  }

  .grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 200px auto 200px;

    background-size: 20px 20px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);

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

  article {
    padding: 10px 20px;
  }
  #content {
    min-width: 100%;
  }
</style>
