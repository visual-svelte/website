<script>
  import { elasticOut } from "svelte/easing";
  import * as easing from "svelte/easing";
  import { tweened, spring } from "svelte/motion";
  import { range } from "d3-array";
  import Select from "$components/helpers/Select.svelte";
  import Slider from "$components/helpers/Slider.svelte";
  import Icon from "$components/helpers/Icon.svelte";

  let selectedTween = "elasticOut";

  let zeros = new Array(16);
  for (let i = 0; i < 16; ++i) zeros[i] = 0;

  let data = { initial: zeros, final: range(16).reverse() };

  let duration = [300, 3000];
  let stiffness = [0.15, 1];
  let damping = [0.8, 1];

  $: tween = tweened(data.initial, {
    duration: duration[0],
    easing: easing[selectedTween],
  });
  $: springer = spring(data.initial, {
    stiffness: stiffness[0],
    damping: damping[0],
  });

  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  async function updateStore() {
    tween.set(data.initial);
    springer.set(data.initial);
    await timer(1000);

    tween.set(data.final, {
      duration: duration[0],
      easing: easing[selectedTween],
    });
    springer.set(data.final);
  }
</script>

<div class="container">
  <button class="animate-button " on:click={updateStore}> Animate! </button>

  <div class="controls">
    <div class="spring">
      <div class="ctrl-title">SPRING</div>
      Spring Stiffness: {(Math.round(stiffness[0] * 100) / 100).toFixed(2)}
      <Slider max={1} step={0.05} bind:value={stiffness} />
      Damping: {(Math.round(damping[0] * 100) / 100).toFixed(2)}
      <Slider max={1} step={0.05} bind:value={damping} />
    </div>
    <div class="tween">
      <div class="ctrl-title">TWEENED</div>
      Tween Duration: {duration[0]}
      <Slider max={3000} step={100} bind:value={duration} />
      <Select
        label="Easing:"
        options={Object.keys(easing).map((d) => {
          return { value: d };
        })}
        bind:value={selectedTween}
      >
        <Icon
          name="triangle"
          fill="white"
          width="8px"
          height="8px"
          direction="s"
        />
      </Select>
    </div>
  </div>
  <div class="axis" />
  <div class="bar-wrapper">
    <div class="tweens">
      {#each $tween as bar, i}
        <div
          class="bar tween"
          style="height:{8}px; width:{bar *
            6}px; clear:both;background-color:darkblue;opacity:{1 -
            i / 20}; transform:translate(30px,{10 * i}px);"
        />
      {/each}
    </div>
    <div class="springs">
      {#each $springer as bar, i}
        <div
          class="bar"
          style="height:{8}px; width:{bar *
            6}px; clear:both;background-color:darkmagenta;opacity:{1 -
            i / 20};transform:translate(30px,{10 * i}px);"
        />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    height: 290px;
    .animate-button {
      background-color: white;
      border-radius: 100%;
      z-index: 100;
      cursor: pointer;
      position: absolute;
      padding: 5px 10px;
      top: 100px;
      left: 110px;
    }
    .ctrl-title {
      border-bottom: 1px solid white;
      font-weight: 600;
      text-align: center;
      padding: 1px 0px 3px 0px;
      margin-bottom: 5px;
    }
    .controls {
      font-size: 0.7rem;
      height: 100px;
      width: 300px;
      position: relative;
      .spring {
        max-width: 140px;
        min-width: 140px;
        height: 105px;
        left: 150px;
        position: absolute;
        background-color: darkmagenta;
        color: white;
        padding: 5px;
      }
      .tween {
        position: absolute;
        background-color: darkblue;
        color: white;
        width: 140px;
        height: 105px;
        padding: 5px;
      }
    }
    .axis {
      margin-top: 15px;
      position: absolute;
      //   border-left: 1px solid black;
      border-top: 1px solid black;
      height: 100px;
      width: 300px;
      overflow: hidden;
    }
    .bar-wrapper {
      position: relative;
      // overflow: hidden;
      margin-top: 40px;
      width: 300px;
      height: 150px;
      .tweens {
        position: absolute;
        border-left: 1px solid gray;
        left: 100px;
      }
      .springs {
        // left: 200px;
        position: absolute;
        right: 160px;
        border-left: 1px solid gray;
      }
      .bar {
        position: absolute;
        display: flex;
        //   opacity: 0.2;
        &.tween {
          right: 0px;
        }
      }
    }
  }
</style>
