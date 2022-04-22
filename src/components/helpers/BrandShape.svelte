<script>
  export let shape;
  export let height = "150px";
  import square from "$svg/square.svg";
  import triangle from "$svg/triangle.svg";
  import circle from "$svg/circle.svg";

  let logo;
  $: shape == "square"
    ? (logo = square)
    : shape == "circle"
    ? (logo = circle)
    : (logo = triangle);

  $: if (logo) {
    console.log(logo);
    // if (fill) logo.attrs["fill"] = `var(--${fill})`;
  }
</script>

{#if logo}
  <div style="width: {height}; height: {height}; ">
    {@html logo}
  </div>
{/if}

<style>
  svg {
    position: absolute;
    left: 0px;
    overflow: visible;
  }
</style>
