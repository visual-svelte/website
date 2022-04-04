<script>
  import Logo from "$components/helpers/Logo.svelte";
  import { navOpen } from "$stores/menu";
</script>

<div class="container">
  <div class="logo"><Logo /></div>
  <div class="writing">
    <p>thanks for visiting visualsvelte!</p>
    <p>
      you can read all posts <span on:click={() => ($navOpen = true)}>here</span
      >
    </p>
    <p>
      before you go, let’s connect! <a
        rel="external"
        href="https://twitter.com/visualsvelte">@visualsvelte</a
      >
    </p>
    <p>
      <a sveltekit:prefetch href="/about">read more</a> about visualsvelte!
    </p>
  </div>
  <div class="support">
    <a href="https://ko-fi.com/C0C7BRLF8" target="_blank"
      ><img
        height="36"
        style="border:0px;height:36px;"
        src="https://cdn.ko-fi.com/cdn/kofi2.png?v=3"
        border="0"
        alt="Buy Me a Coffee at ko-fi.com"
      /></a
    >
  </div>
</div>

<style lang="scss">
  .container {
    justify-items: space-around;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-color: var(--c-darkgray);
    padding: 0px 16px;
    text-align: center;
    min-height: 200px;
    color: white;
    .logo,
    .support,
    .writing {
      padding: 30px;
      a {
        cursor: pointer !important;
        color: var(--c-green);
      }
      p {
        span {
          color: var(--c-green);
          text-decoration: underline;
        }
      }
    }
    .support {
      a {
        background: none !important;
      }
    }
    @media all and (max-width: 700px) {
      .logo,
      .writing,
      .support {
        grid-column: 1 / 4;
        padding: 20px;
      }
      .container {
        padding: 15px 0px;
      }
    }
  }
  //   width: 100%;

  //   @media all and (max-width: 700px) {
  //     .logo,
  //     .writing,
  //     .support {
  //       grid-column: 1 / 4;
  //       padding: 15px;
  //     }
  //     .container {
  //       padding: 15px 0px;
  //     }
  //   }

  //   .writing {
  //     p {
  //       color: var(--c-gray);

  //       &:hover {
  //         color: var(--c-white);
  //       }
  //       a {
  //         cursor: pointer !important;
  //         color: var(--c-green);
  //       }
  //     }
  //   }
  // }
  // @media all and (max-width: 700px) {
  //   .container {
  //     padding: 10px 0px;
  //   }
  // }
</style>
