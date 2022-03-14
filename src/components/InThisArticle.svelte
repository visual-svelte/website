<script>
  import { tableOfContents } from "$stores/post.js";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  const current = tweened(0, {
    duration: 400,
    easing: cubicOut,
  });

  console.log("curr", current);

  $: $tableOfContents,
    current.set($tableOfContents.findIndex((element) => element.bool));
</script>

<div>
  <p class="heading">IN THIS ARTICLE</p>
  <svg xmlns="http://www.w3.org/2000/svg">
    <!-- Simple rectangle -->
    <rect
      style="transform: translateY({$current * 30}px)"
      width="8"
      height="20"
      fill="black"
    />
  </svg>
  {#each $tableOfContents as toc, i}
    <p class:active={$current === i}>{toc.title}</p>
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
    top: 100px;
    svg {
      transition: all 1s;
      position: absolute;
      margin-top: 2px;
    }
    p {
      height: 30px;
      margin: 0;
      margin-left: 25px;
      transition: 0.2s all ease-in-out;
      color: gray;
      &.active {
        //   transform: translateX(-5px);
        color: black;
      }
    }
  }
</style>
