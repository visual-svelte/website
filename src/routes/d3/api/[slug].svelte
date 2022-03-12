<script context="module">
  export async function load(ctx) {
    console.log(ctx.url);
    let slug = ctx.url.pathname;

    let post = {
      title: "hello",
      content: "hello blog post",
    };
    return { props: { slug, post } };
  }
</script>

<script>
  export let slug;
  export let post;
  import Tabs from "$components/Tabs.svelte";
  import { onMount } from "svelte";
  let dcName = "Different";
  let axisConfig = { margin: 40, svg_height: 300, svg_width: 400 };
  import { HighlightSvelte } from "svelte-highlight";
  import github from "svelte-highlight/src/styles/github";
  let queryAddress =
    "https://api.github.com/repos/visual-svelte/website/contents/src/components/d3/AxisSimple.svelte";

  const DynamicComponent = import(
    `../../../components/d3/Axis${dcName}.svelte`
  );
  console.log(DynamicComponent);

  //
  let MyComp;
  const loadComponent = async () => {
    const res = import(`../../../components/d3/Axis${dcName}.svelte`);
    res.then((x) => {
      MyComp = x.default;
    });
  };
  onMount(() => {
    loadComponent();
  });
  // const x = loadComponent();

  const fetchCode = (async () => {
    const response = await fetch(queryAddress);
    return await response.json();
  })();
</script>

<h1>{slug}</h1>

{post.title}
{post.content}

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
    <div slot="tab1">
      <svelte:component this={MyComp} config={axisConfig} />
    </div>
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
