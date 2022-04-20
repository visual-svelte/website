<script context="module">
  import cmsSvelte from "$data/cms-svelte";
  import { slugToId } from "$utils/textUtils";

  export async function load(ctx) {
    console.log("ctx", ctx);
    const primaryKey = ctx.params.slug;
    let compName = slugToId(primaryKey);
    const content = cmsSvelte?.find((record) => record.primary_key == compName);
    content ? (content["cat"] = "Svelte for Visual Stories") : console.log("");

    let metadata = {
      t: `${content?.post_title} | VisualSvelte`,
      d: content?.intro_text,
      u: ctx.url.pathname,
      tags: content?.keywords.join(),
    };
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
<Thanks />

<style>
  .container {
    padding: 10px;
  }
</style>
