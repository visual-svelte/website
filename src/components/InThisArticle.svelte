<script>
  import { tableOfContents } from "$stores/post.js";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  const current = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  $: $tableOfContents,
    current.set($tableOfContents.findIndex((element) => element.bool));
</script>

<div>
  <p class="heading">IN THIS ARTICLE</p>
  <svg class="shadow" xmlns="http://www.w3.org/2000/svg">
    <!-- Simple rectangle -->
    <rect
      style="transform: translateY({$current * 30}px)"
      width="8"
      height="20"
      fill="var(--c-darkgr"
    />
  </svg>
  {#each $tableOfContents as toc, i}
    <p class:active={$current === i}>
      <a href="#{toc.id}">{toc.title}</a>
    </p>
  {/each}
</div>

<style lang="scss">
  div {
    .heading {
      margin-left: 0px;
      margin-bottom: 5px;
    }
    margin-top: 20px;
    padding-left: 0px;
    position: fixed;
    top: 80px;
    svg {
      transition: all 1s;
      position: absolute;
      margin-top: 2px;
    }
    p {
      position: relative;
      height: 30px;
      margin: 0;
      margin-left: 25px;
      transition: 0.2s all ease-in-out;
      a {
        min-width: 100px;
        color: var(--c-darkgray);
        text-decoration: none;
      }
      &.active {
        //   transform: translateX(-5px);
        color: var(--c-black);
      }
    }
  }
  .shadow {
    -webkit-filter: drop-shadow(2px -2px 0 var(--c-green));
    filter: drop-shadow(2px -2px 0 var(--c-green));
    /* Similar syntax to box-shadow */
  }
</style>
