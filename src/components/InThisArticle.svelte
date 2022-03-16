<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { goto } from "$app/navigation";

  const current = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  export let tableOfContents;

  $: tableOfContents,
    current.set(tableOfContents.findIndex((element) => element.bool));
</script>

<div class="container">
  <h5 class="heading">IN THIS ARTICLE</h5>
  <svg height="200" class="shadow" xmlns="http://www.w3.org/2000/svg">
    <!-- Simple rectangle -->
    <rect
      style="transform: translateY({$current * 35 + 5}px)"
      width="8"
      height="20"
      fill="var(--c-darkgr"
    />
  </svg>
  {#each tableOfContents as toc, i}
    <li class:current={$current === i}>
      <button
        on:click={() => {
          goto("#" + toc.id);
        }}>{toc.title}</button
      >
      <!-- <a rel="internal" href={link.href}>{link.title}</a> -->
    </li>
  {/each}
</div>

<style lang="scss">
  .container {
    font-size: 0.9em;

    .heading {
      margin-left: 0px;
      margin-bottom: 5px;
    }
    height: 100px;

    padding-left: 0px;
    @media (min-width: 1200px) {
      position: sticky;
      top: 20px;
    }

    svg {
      transition: all 1s;
      position: absolute;
      margin-top: 2px;
    }
    li {
      list-style-type: none;

      min-width: 100px;
      // padding: px 50px 5px 20px;
      background-color: transparent;

      margin-left: 10px;
      button {
        padding: 7px 10px;
        cursor: pointer;
        font-size: 1rem;
        height: 100%;
        width: 100%;
        display: block;
        text-decoration: none;
        color: var(--c-darkgray);
        opacity: 0.7;
        text-align: left;
        background-color: transparent;
        border: none;
        font-family: "Consola";
      }

      &.current {
        button {
          font-weight: 600;
          opacity: 1;
        }
        cursor: default;
        &:hover {
          background-color: transparent;
        }
      }
      &:hover {
        background-color: rgba(119, 227, 35, 0.15);
      }
    }
  }
  .shadow {
    -webkit-filter: drop-shadow(2px -2px 0 var(--c-green));
    filter: drop-shadow(2px -2px 0 var(--c-green));
    /* Similar syntax to box-shadow */
  }
  h5 {
    font-size: 1.1rem;

    text-transform: uppercase;
  }
</style>
