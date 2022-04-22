<script>
  export let data;
  export let snap = false;
  export let fixedComp;
  export let fixPosition = "left";
  import Scrolly from "./Scrolly.svelte";
  let innerHeight, scrollY, outerHeight, clientHeight, offsetHeight;

  let value = 0;
  $: props = { value: value };
</script>

{#if snap}
  <h2>You can navigate this next section with your keyboard.</h2>
{/if}

<div class="full-width chart-wrap">
  <div
    class="chart"
    class:left={fixPosition === "left"}
    class:center={fixPosition === "center"}
    class:right={fixPosition === "right"}
  >
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
  .chart-wrap {
    margin-bottom: 100px;
    padding-right: 10px;
  }
  .full-width {
    width: 80vw;
    left: 65%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    position: relative;
  }
  .chart {
    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;

    padding: 10px;
    background-color: white !important;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    top: 10vh;
    height: min(50vh, 400px);
  }

  .text-wrapper {
    margin-right: 0;
    padding-right: 0;
    min-width: 300px !important;
    position: relative;
    z-index: 2;
    padding-bottom: 100px;
    .text {
      margin: 60vh 0 !important;
      padding: 20px;
      border: none;
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
  @media all and (min-width: 800px) {
    .chart {
      min-height: 80vh;
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
</style>
