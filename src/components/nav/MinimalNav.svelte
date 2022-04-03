<script>
  import Tree from "$components/helpers/Tree.svelte";
  import { fly } from "svelte/transition";
  import Icon from "$components/helpers/Icon.svelte";
  import { navOpen } from "$stores/menu";
  let myButton;
  const handleClick = () => {
    myButton.disabled = true;
    $navOpen = !$navOpen;
    setTimeout(() => (myButton.disabled = false), 300);
  };
</script>

<button bind:this={myButton} class="common moreButton" on:click={handleClick}
  >{$navOpen ? "Hide" : "More"}</button
>

{#if $navOpen}
  <div transition:fly={{ x: -300, duration: 300 }} class="menu common">
    <div class="tree">
      <Tree />
    </div>
    <div class="fixed">
      <div class="other-links">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="about">About</a>
        </div>
      </div>
      <div class="right">
        <div class="socials">
          Say hi: <a
            target="_blank"
            rel="external"
            href="https://twitter.com/visualsvelte"
          >
            <Icon
              name="twitter"
              fill="var(--c-white)"
              width="20px"
              height="20px"
            />
          </a>
        </div>
        <div class="donate">
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
    </div>
  </div>
{/if}

<style lang="scss">
  .common {
    background-color: white;
    border: transparent 1px solid;
    position: fixed;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .moreButton {
    padding: 1rem;
    z-index: 200;
    font-weight: 600;
    cursor: pointer;
    &:disabled {
      color: black;
    }
  }
  .menu {
    z-index: 2;
    display: grid;
    grid-template-rows: auto 180px;
    height: 100vh;
    width: 300px;
    border: none;
    top: 40px;
    .tree {
      //
      overflow-y: auto;
      overflow-x: hidden;
    }
    .fixed {
      background-color: var(--c-darkgray);
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
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--c-gray);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--c-darkgray);
  }
</style>
