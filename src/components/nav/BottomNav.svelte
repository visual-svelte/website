<script>
  import Icon from "$components/helpers/Icon.svelte";
  import { navOpen } from "$stores/menu";
  import Kofi from "$components/helpers/Kofi.svelte";
  let links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
</script>

<div class="fixed">
  <div class="other-links">
    {#each links as link}
      <div on:click={() => ($navOpen = false)}>
        <a rel="internal" href={link.href}>{link.text}</a>
      </div>
    {/each}
  </div>
  <div class="right">
    
    <div class="donate">
      <Kofi />
    </div>
  </div>
</div>

<style lang="scss">
  .common {
    background-color: white;
    border: transparent 1px solid;
    position: fixed;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .fixed {
    background-color: var(--dark);
    margin: 0;

    color: var(--c-white);
    a {
      color: white;
      border: none;
      background: none;
    }
    display: grid;
    grid-template-columns: 2fr 3fr;
    .other-links {
      display: inline-block;
      padding: 2rem 1rem;
      div {
        margin-bottom: 20px;
      }
    }
    .right {
      .socials {
        margin: 1rem 0;
        a {
          padding: 10px;
        }
        padding: 0.8rem 0 0 0.8rem;
      }
      .donate {
        grid-area: donate;
        padding: 0.8rem 0 0 0.8rem;
      }
    }
  }
</style>
