<script>
  import Tabs from "$components/Tabs.svelte";
  // import AxisSimple from "$components/d3/AxisSimple.svelte";
  let axisConfig = { margin: 40, svg_height: 300, svg_width: 400 };
  import { HighlightSvelte } from "svelte-highlight";
  import github from "svelte-highlight/src/styles/github";

  let queryAddress =
    "https://api.github.com/repos/visual-svelte/website/contents/src/components/d3/AxisSimple.svelte";
  const fetchCode = (async () => {
    const response = await fetch(queryAddress);
    return await response.json();
  })();
</script>

<svelte:head>
  {@html github}
</svelte:head>
<div class="container">
  <h1>Implementing D3 Axis in SvelteKit</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae soluta hic nam
    ducimus, unde vel deserunt, eveniet iure voluptatum inventore blanditiis
    quas asperiores officiis possimus aliquid natus adipisci esse tenetur.
  </p>
  <Tabs>
    <AxisSimple slot="tab1" config={axisConfig} />
    <div slot="tab2">
      {#await fetchCode}
        <p>...waiting</p>
      {:then data}
        <HighlightSvelte code={atob(data.content)} />
      {:catch error}
        <p>An error occurred!</p>
      {/await}
    </div>
    <!-- <AxisSimple config={axisConfig} /> -->
  </Tabs>
</div>
