<script context="module">
  import d3R from "$data/cms-d3-recipes";

  function compontentizeString(string) {
    let splits = string.split("-");
    console.log("splits1", splits);
    let results = splits.map((el) => {
      const upper = el.charAt(0)?.toUpperCase();
      const concat = upper.concat(el.slice(1));
      return concat;
    });
    return results.join("");
  }

  export async function load(ctx) {
    let slug = ctx.url.pathname;
    const primaryKey = slug.split("/").pop();
    let compName = compontentizeString(primaryKey);
    const content = d3R.find((record) => record.primary_key == compName);
    console.log(compName);

    let metadata = {
      t: `${content?.post_title} | VisualSvelte`,
      d: content.intro_text,
      u: slug,
      tags: content.keywords.join(),
    };
    return { props: { content, metadata } };
  }
</script>

<script>
  export let metadata;
  export let content;
  import StoryHeader from "$components/nav/StoryHeader.svelte";
  import Meta from "$components/helpers/Meta.svelte";
</script>

<Meta {metadata} />
<StoryHeader data={content} />
<svelte:component this={content.component} />
