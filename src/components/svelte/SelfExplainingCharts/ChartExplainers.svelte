<script>
  import { onMount } from "svelte";
  import { scale, fade, fly, slide } from "svelte/transition";
  import { cubicInOut, backOut } from "svelte/easing";
  const timer = (ms) => new Promise((res) => setTimeout(res, ms));
  let yAxis = [0, 50, 100, 150, 200, 250, 300];
  let xAxis = [5, 10, 15, 20];
  let data = [
    [12, 100],
    [5, 43],
    [20, 276],
    [4, 76],
    [5, 54],
    [8, 89],
    [18, 212],
    [15, 291],
  ];
  let reRun = 0;
  let hoveredIndex;

  let step = [false, false, false, false, false, false];

  async function runAnimation() {
    step = [false, false, false, false, false, false];
    reRun += 1; // key triggers re-render
    for (let i = 0; i < step.length; ++i) {
      step[i] = true;
      step = step;
      await timer(2500);
    }
  }

  onMount(() => {
    runAnimation();
  });
</script>

<div class="container" in:scale>
  <button class="toggle-button" on:click={runAnimation}>Play </button>
  {#key reRun}
    <!-- TITLE BLOCK -->
    {#if step[0]}
      <div
        in:fade
        class="title"
        style="{step[1]
          ? 'transform:translate(0px, 0px)'
          : 'transform:translate(min(5vw, 100px), 100px)'} 
    "
      >
        <p>QUESTION:</p>
        <h4 in:slide={{ duration: 600 }}>
          Does eating ice cream <span style="font-style:italic">really</span> cause
          serious injuries?
        </h4>
      </div>
    {/if}
    {#if step[2]}
      <div class="chart-area">
        <!-- YAXIS TICKS AND LABELS -->
        {#if !step[3]}
          <p class="all top-text" transition:fade>To find out, we plotted</p>
        {/if}
        <p
          class="y-title all"
          in:fade
          style={step[3]
            ? "transform:translate(-70px,-40px); width: 20px; font-size:0.7rem;line-height:0.7rem;text-align:end"
            : "transform:translate(0px, 0px)"}
        >
          🍦 Ice Creams Sold
        </p>
        {#if !step[3]}
          <p class="all middle-text" transition:fade>vs.</p>
        {/if}

        <p
          class="x-title all"
          in:fade
          style={step[3]
            ? "transform:translate(190px,50px); width: 20px; font-size:0.7rem;line-height:0.7rem;"
            : "transform:translate(0px, 0px)"}
        >
          🚑 Ambulance callouts
        </p>
        {#if step[4]}
          {#each yAxis as line, i}
            <div
              class="grid-line"
              style="transform:translateY({150 - (150 * line) / 300}px)"
            >
              <p
                in:fly={{
                  y: (yAxis.length - 1 - i) * 10,
                  delay: 1000 + (yAxis.length - 1 - i) * 50,
                  easing: cubicInOut,
                  duration: 1000,
                }}
                class="yAxisLabel"
              >
                {line}
              </p>
            </div>
          {/each}
        {/if}

        <!-- X AXIS LABELS -->
        <div class="xLabels">
          {#if step[4]}
            {#each xAxis as label, i}
              <div
                in:fly={{ y: 20, duration: 600, delay: i * 100 }}
                class="xAxisLabel"
              >
                {label}
              </div>
            {/each}
          {/if}
          {#if step[5]}
            <!-- DOTS -->
            <div class="bar-container">
              {#each data as dot, i}
                <div
                  in:fly={{ y: -200, delay: i * 100 }}
                  on:mouseenter={() => (hoveredIndex = i)}
                  on:mouseleave={() => (hoveredIndex = null)}
                  class="bar"
                  style="transform:translate({dot[0] * 8}px, {-dot[1] /
                    2}px ); width: 5px; height:5px;  "
                >
                  {#if i == hoveredIndex}
                    <p>{dot[0]},{dot[1]}</p>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/if}
  {/key}
</div>

<style lang="scss">
  .container {
    height: 300px;
    width: 400px;
    position: relative;
    .title {
      position: relative;
      height: 40px;
      transition: transform 0.3s ease-in-out;
      * {
        line-height: 1.1rem;
        margin: 0px;
      }
      h4 {
        max-width: 300px;
      }
      p {
        // line-height: 1rem;
        font-size: 0.6rem;
        font-style: italic;
      }
    }
    .bottom-axis {
      border-bottom: 2px solid black;
      position: absolute;
    }
    .chart-area {
      background-color: rgba(255, 255, 255, 0.05);
      height: 150px;
      width: 200px;
      top: 50px;
      left: 0px;
      margin-top: 40px;
      margin-left: min(20vw, 100px);
      // margin: 50px 100px;
      position: absolute;

      .bar-container {
        height: 160px;
        width: 200px;
        top: -160px;
        position: absolute;
        overflow: hidden;
        .bar {
          background-color: rgba(16, 125, 219, 1);
          opacity: 0.8;
          bottom: 0px;
          border-radius: 100%;
          position: absolute;
          .barLabel {
            position: absolute;
            top: -30px;
            width: 30px;
            text-align: center;
            font-size: 0.6rem;
            color: gray;
          }
        }
      }
      .grid-line {
        position: absolute;
        width: 100%;
        background-color: rgba(225, 0, 255, 0.393);
        border-top: 1px dashed rgba(255, 255, 255, 0.6);
        .yAxisLabel {
          position: absolute;
          color: gray;
          font-size: 0.6rem;
          width: 30px;
          left: -35px;
          top: -22px;
          text-align: end;
        }
      }
    }
    .xLabels {
      position: absolute;
      color: gray;
      top: 150px;
      display: flex;
      font-size: 0.6rem;

      .xAxisLabel {
        padding: 5px 20px 5px 18px;
      }
    }
    .toggle-button {
      background-color: rgba(0, 0, 0, 0);
      color: black;
      bottom: 0px;
      width: 80px;
      margin: 0px;
      cursor: pointer;

      border: 1px solid gray;
      border-radius: 30px;
      padding: 10px 10px;
      position: absolute;
      transition: background-color 0.4s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }

    .all {
      text-align: center;
      width: 250px;
      margin: 0 auto;
      position: absolute;
    }
    .top-text {
      top: 0px;
      font-size: 0.7rem;
      color: gray;
    }
    .y-title {
      transition: all 1s;
      top: 30px;
    }
    .middle-text {
      color: gray;
      top: 60px;
      font-size: 0.7rem;
    }
    .x-title {
      transition: all 1s;
      transition-delay: 2s;
      top: 90px;
    }
  }
</style>
