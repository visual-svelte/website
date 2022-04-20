<script context="module">
  import cmsSvelte from "$data/cms-svelte";
  import { slugToId, metaFromRecord } from "$utils/textUtils";

  export async function load(ctx) {
    const primaryKey = ctx.params.slug;
    let compName = slugToId(primaryKey);
    const content = cmsSvelte?.find((record) => record.primary_key == compName);
    content ? (content["cat"] = "Svelte for Visual Stories") : console.log("");

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
<div class="container">
  <svelte:component this={content?.component} />
</div>
<div class="thanks-wrap">
  <Thanks />
</div>

<style>
  .container {
    padding: 10px;
  }
  .thanks-wrap {
    margin: 0 auto;
    max-width: 600px;
  }
</style>
