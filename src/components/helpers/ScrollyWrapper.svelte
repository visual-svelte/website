<script>
  export let data;
  export let snap = false;
  export let fixedComp;
  export let fixPosition;
  import Scrolly from "./Scrolly.svelte";
  let innerHeight, scrollY, outerHeight, clientHeight, offsetHeight;

  let value = 0;
  $: props = { value: value };
  function handleDownPress(event) {
    if (snap && event.key === "ArrowDown") {
      console.log(event);
      let distance = offsetHeight + (value + 1) * innerHeight * 0.8;
      console.log("dst", distance);
      window.scrollTo({
        top: distance,
        left: 0,
        behavior: "smooth",
      });
    }
  }
</script>

{#if snap}
  <h2>You can navigate this next section with your keyboard.</h2>
{/if}
<svelte:window
  on:keydown={handleDownPress}
  bind:innerHeight
  bind:scrollY
  bind:outerHeight
/>
<div class="full-width chart-wrap">
  <div
    class="chart"
    class:left={fixPosition === "left"}
    class:center={fixPosition === "center"}
    class:right={fixPosition === "right"}
  >
    <p>Value: {value}</p>
    <p>ScrollY: {scrollY}</p>
    <p>innerHeight: {innerHeight}</p>
    <p>OuterHeight: {outerHeight}</p>
    <p>ClientHeight: {clientHeight}</p>
    <p>OffsetHeight: {offsetHeight}</p>
    <svelte:component this={fixedComp} {...props} />
  </div>
  <div
    class="text-wrapper"
    bind:clientHeight
    bind:offsetHeight
    class:left={fixPosition === "right"}
    class:center={fixPosition === "center"}
    class:right={fixPosition === "left"}
  >
    <Scrolly bind:value>
      {#each data as d, i}
        <div class="text step" class:active={value === i}>
          {@html d}
        </div>
      {/each}
    </Scrolly>
  </div>
</div>

<style lang="scss">
  .chart {
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    margin-right: 0px !important;

    padding: 10px;
    background-color: white !important;
    width: 80vw;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    min-width: 300px;
    top: 30vh;
    height: 50vh;
  }

  .text-wrapper {
    margin-right: 0;
    padding-right: 0;
    min-width: 300px !important;
    width: 80vw;
    position: relative;
    z-index: 2;
    padding-bottom: 100px;
    .text {
      margin: 60vh 0 !important;
      padding: 20px;
      border: none;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
  @media all and (min-width: 700px) {
    .chart {
      height: 80vh;
      top: 20px;
      width: 600px;
      &.left {
        left: 10%;
      }
      &.center {
        margin: 0 auto !important;
        left: 25%;
      }
      &.right {
        left: 90%;
      }
    }
    .text-wrapper {
      &.left {
        margin: 0;
      }
      &.center {
        margin: 0 auto !important;
      }
      &.right {
        left: 55%;
        margin: 0;
      }

      margin: 0 auto;
      width: 35vw;
      .text {
        background-color: rgba(255, 255, 255, 1);
        border: 1px gray solid;
      }
    }
  }
  .chart-wrap {
    margin-bottom: 100px;
    // overflow: hidden;
  }
  .full-width {
    width: 90vw;
    position: relative;
    left: 65%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  //   html {
  //     scroll-behavior: smooth;
  //   }
</style>
