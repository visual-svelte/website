<script>
  import Breadcrumb from "$components/Breadcrumb.svelte";
  import { page } from "$app/stores";
  import Tree from "$components/helpers/Tree.svelte";
  console.log("page", $page);
  export let innerWidth;
  export let scrollY;
  import { fly } from "svelte/transition";

  export let sidebarData;
  let showHideMenu = false;
  function revealMenu() {
    showHideMenu = !showHideMenu;
  }
</script>

<div class="container">
  <div class="header-grid">
    <div class="header-left">
      <button class="logo"> visualsvelte </button>
    </div>
    <div class="header-centre" />
    <div class="header-right"><button>Support</button></div>
    {#if innerWidth < 800}
      <div class="toolbar" class:fixed={scrollY > 60}>
        <div>
          <Breadcrumb path={$page.url.pathname} />
        </div>

        <button on:click={revealMenu}>Menu</button>
      </div>{/if}
  </div>
</div>
{#if showHideMenu}
  <div class="mobile-menu" transition:fly={{ x: 100 }}>
    <button on:click={revealMenu}>Close</button>
    <div>
      <Tree data={sidebarData} dark={true} />
    </div>
  </div>
{/if}

<style lang="scss">
  .container {
    // background: var(--c-darkgray);
    height: 100%;
    width: 100%;
    .header-grid {
      display: grid;
      background-color: var(--c-darkgray);

      grid-template-areas:
        "hl hc hr"
        "tb tb tb";
      grid-template-rows: 60px 40px;

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
        padding: 5px 10px;

        min-height: 30px;
        align-self: start;
        position: relative;
        top: 0px;
        float: left;
        z-index: 10;

        grid-area: tb;
        height: 20px;
        background-color: var(--c-darkgray);
        width: 100%;
        display: grid;
        grid-template-columns: auto 50px;
        &.fixed {
          position: fixed;
        }
        button {
          justify-self: end !important;
          font-size: 0.9rem;

          border: none;
          background: transparent;
          margin-right: 20px;
          color: var(--c-white);

          font-family: "Consola" !important;
          cursor: pointer;
        }
      }
      .header-left {
        grid-area: "hl";
        align-content: center;
        padding-left: 10px;

        display: flex;
        .logo {
          border: none;
          background-color: transparent;
          font-family: Consolas;
          width: 150px;
          //   text-align: start;
          //   // margin-left: 40px;
          //   @media (min-width: 600px) {
          //     margin-right: 20px;
          //   }

          font-size: 1.5rem;
          //   // color: white;
          color: var(--c-gray);
          text-shadow: 1px -1px var(--c-black);
          //   transition: color 0.3s;
          //   text-decoration: none;
          //   @media (max-width: 500px) {
          //     font-size: 1em;
          //   }

          //   &:hover {
          //     color: var(--c-white);
          //   }
        }
      }
      .header-centre {
        grid-area: "hc";
      }
      .header-right {
        grid-area: "hr";
        align-content: center;
        display: flex;
        justify-content: end;
        padding-right: 20px;
        //     align-self: center;

        button {
          align-self: center;

          box-shadow: 2px -2px 0 0 var(--c-green);
          border: none;
          background-color: var(--c-white);
          padding: 10px 20px;
          opacity: 0.9;
          transition: all 0.5s;
          cursor: pointer;
          @media (max-width: 600px) {
          }

          &:hover {
            opacity: 1;
            box-shadow: 4px -4px 0 0 var(--c-green);
          }
        }
      }
    }

    //   // position: fixed;
    //   top: 0px;
    //   border-bottom: gray 1px solid;
    //   max-width: 1200px;
    //   width: 100%;
    //   min-width: 300px;
    //   height: 80px;
    //   display: grid;
    //   grid-template-areas:
    //     "hl hc hr"
    //     "tb tb";
    //   grid-template-rows: 60px 20px;
    //   color: white !important;
    //   @media (max-width: 600px) {
    //     grid-template-columns: 150px auto 150px;
    //   }

    //   grid-template-columns: 200px auto 200px;
    //   grid-template-columns: 200px auto 200px;
    //   .header-centre {
    //     grid-area: hc;
    //   }
    //   .header-left {
    //     grid-area: hl;
    //   }
    //   .toolbar {
    //     grid-area: tb;
    //   }
    //   .header-right {
    //     grid-area: hr;
    //     padding-left: 10px;
    //     button {
    //       box-shadow: 2px -2px 0 0 var(--c-green);
    //       border: none;
    //       background-color: var(--c-white);
    //       padding: 10px 20px;
    //       margin-left: 20%;
    //       opacity: 0.9;
    //       transition: all 0.5s;
    //       cursor: pointer;
    //       @media (max-width: 600px) {
    //       }

    //       &:hover {
    //         opacity: 1;
    //         box-shadow: 4px -4px 0 0 var(--c-green);
    //       }
    //     }
    //   }

    //   .header-left,
    //   .header-centre,
    //   .header-right {
    //     grid-row: 1;
    //     display: flex;
    //     align-self: center;
    //   }

    //   .header-left,
    //   .header-centre {
    //     margin-right: 5px; // text-align: end;
    //     color: white;
    //     margin-left: 20px;

    //     a {
    //       width: 150px;
    //       text-align: start;
    //       // margin-left: 40px;
    //       @media (min-width: 600px) {
    //         margin-right: 20px;
    //       }

    //       font-size: 2em;
    //       // color: white;
    //       color: var(--c-gray);
    //       text-shadow: 1px -1px var(--c-black);
    //       transition: color 0.3s;
    //       text-decoration: none;
    //       @media (max-width: 500px) {
    //         font-size: 1em;
    //       }

    //       &:hover {
    //         color: var(--c-white);
    //       }
    //     }
    //   }

    //   .header-centre,
    //   .header-right {
    //     margin-left: 5px;
    //     justify-self: start;
    //   }
    //   .header-centre {
    //     button {
    //       margin-right: 10px;
    //       background-color: transparent;
    //       border: none;
    //     }
    //   }
    // }
  }

  .mobile-menu {
    padding: 10px 50px !important;
    position: fixed;
    height: 100vh;
    width: 100%;
    color: var(--c-white);
    background-color: var(--c-darkgray);
    z-index: 15;
    button {
      position: absolute;
      right: 30px;
      margin-right: 10px;
      margin-top: 10px;
      color: var(--c-white);

      top: 0px;
      border: none;
      background-color: transparent;
      font-family: Consolas;
    }
  }
</style>
