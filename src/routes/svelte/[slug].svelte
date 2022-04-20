<script context="module">
  import cmsSvelte from "$data/cms-svelte";

  function compontentizeString(string) {
    let splits = string.split("-");
    if (splits.length !== 1) {
      let results = splits.map((el) => {
        const upper = el.charAt(0)?.toUpperCase();
        const concat = upper.concat(el.slice(1));
        return concat;
      });
      return results.join("");
    } else {
      return splits[0];
    }
  }

  export async function load(ctx) {
    console.log("ctx", ctx);
    let slug = ctx.url.pathname;
    const primaryKey = slug.split("/").pop();
    let compName = compontentizeString(primaryKey);
    const content = cmsSvelte?.find((record) => record.primary_key == compName);
    content ? (content["cat"] = "Svelte for Visual Stories") : console.log("");

    let metadata = {
      t: `${content?.post_title} | VisualSvelte`,
      d: content?.intro_text,
      u: slug,
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
