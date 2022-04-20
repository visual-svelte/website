<script context="module">
  import d3Charts from "$data/cms-d3-charts";
  import { slugToId, metaFromRecord } from "$utils/textUtils";
  export async function load(ctx) {
    const primaryKey = ctx.params.slug;
    let compName = slugToId(primaryKey);
    const content = d3Charts?.find(
      (record) => record.primary_key.toLowerCase() == compName.toLowerCase()
    );
    content ? (content["cat"] = "D3 Charts (in Svelte)") : console.log("");
    let metadata = metaFromRecord(content, ctx.url.pathname);

    return { props: { content, metadata } };
  }
</script>

<script>
  export let metadata;
  export let content;
  import StoryHeader from "$components/nav/StoryHeader.svelte";
  import Thanks from "$components/nav/Thanks.svelte";
  import Meta from "$components/helpers/Meta.svelte";
</script>

<Meta {metadata} />
<StoryHeader data={content} />
<div class="wrapper">
  <svelte:component this={content?.component} />
  <Thanks />
</div>

<style>
  .wrapper {
    margin: 0 auto;
    padding: 10px;
    max-width: 700px;
  }
</style>
