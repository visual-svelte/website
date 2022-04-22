<script>
  import Logo from "$components/helpers/Logo.svelte";
  import { navOpen } from "$stores/menu";
  import Kofi from "$components/helpers/Kofi.svelte";
  import { link } from "d3";
  import BrandShape from "./helpers/BrandShape.svelte";
  let links = {
    main: [
      { text: "Svelte + D3 API Articles", href: "/d3/api" },
      { text: "Svelte + D3 Charts ", href: "/d3/charts" },
      { text: "Svelte Visual Storytelling", href: "/svelte" },
      { text: "About visualsvelte", href: "/about" },
    ],
    other: [
      { text: "Privacy", href: "/" },
      { text: "Terms", href: "/" },
      { text: "RSS", href: "/" },
    ],
  };
</script>

<div class="container">
  <div class="main-links">
    {#each links.main as link}
      <a rel="internal" href={link.href}>{link.text}</a>
    {/each}
  </div>
  <div class="logo">
    <div class="circle">
      <BrandShape fill="dragon" shape="circle" />
    </div>
    <a rel="internal" href="/">
      <h2>visualsvelte</h2>
    </a>
  </div>
  <div class="other-links">
    {#each links.other as link, i}
      <a rel="internal" href={link.href}>{link.text} </a>
      <span>{i == 2 ? "" : `     |     `}</span>
    {/each}
  </div>
</div>

<style lang="scss">
  .container {
    color: white;
    text-align: center;
    max-width: 1200px;
    border-top: 1px solid var(--off-white);
    margin: 0 auto;
    padding: 40px auto;
    .main-links {
      display: flex;
      flex-direction: column;
      padding: 2rem 1rem;
    }
    .logo {
      position: relative;
      a {
        line-height: 1rem;
        h2 {
          margin-top: 1rem;
          font-weight: 300;
          &::before {
            border: none;
          }
        }
      }
      .circle {
        margin: 0 auto;
        height: 160px;
        width: 160px;
        position: relative;
      }
    }
    .other-links {
      a {
        font-size: 0.7rem;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: 300;
    line-height: 3rem;
    &:hover {
      text-decoration: underline;
    }
  }
</style>
