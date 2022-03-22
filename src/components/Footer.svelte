<script>
  import Logo from "$components/helpers/Logo.svelte";
  import ActionButton from "$components/helpers/ActionButton.svelte";
  import { goto } from "$app/navigation";
</script>

<div class="container">
  <div class="logo"><Logo /></div>
  <div class="writing">
    <p>thanks for visiting visualsvelte!</p>
    <p>
      before you go, let’s connect! <a
        rel="external"
        href="https://twitter.com/visualsvelte">@visualsvelte</a
      >
    </p>
    <p>
      still hungry for more? <a sveltekit:prefetch href="/about">read more</a> about
      visualsvelte,
    </p>
    <p>
      or browse our most <a sveltekit:prefetch href="/popular-posts"
        >popular posts</a
      >.
    </p>
  </div>
  <div class="support">
    <ActionButton text="Support" href="/support" />
  </div>
</div>

<style lang="scss">
  .container {
    padding: 0px 16px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    width: 100%;
    // height: 200px;
    background-color: var(--c-darkgray);

    .logo,
    .support,
    .writing {
      padding: 30px;
    }

    @media all and (max-width: 700px) {
      .logo,
      .writing,
      .support {
        grid-column: 1 / 4;
        padding: 15px;
      }
      .container {
        padding: 15px 0px;
      }
    }

    .writing {
      p {
        color: var(--c-gray);

        &:hover {
          color: var(--c-white);
        }
        a {
          cursor: pointer !important;
          color: var(--c-green);
        }
      }
    }
  }
  @media all and (max-width: 700px) {
    .container {
      padding: 10px 0px;
    }
  }
</style>
