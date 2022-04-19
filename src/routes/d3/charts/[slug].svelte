<script context="module">
  import d3Charts from "$data/cms-d3-charts";
  import d3CMS from "$data/cms";

  function compontentizeString(string) {
    let splits = string.split("-");
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
    const content = d3Charts?.find((record) => record.primary_key == compName);
    content ? (content["cat"] = "D3 Charts (in Svelte)") : console.log("");

    let filteredData = d3CMS
      .filter((d) => d.published)
      .map((post) => {
        return {
          id: post.primary_key,
          thumbnail: post.thumbnail,
          title: post.post_title,
          keywords: post.keywords,
        };
      });
    let metadata = {
      t: `${content?.post_title} | VisualSvelte`,
      d: content?.intro_text,
      u: slug,
      tags: content?.keywords.join(),
    };
    return { props: { filteredData, content, metadata } };
  }
</script>

<script>
  export let metadata;
  export let filteredData;
  export let content;
  import StoryHeader from "$components/nav/StoryHeader.svelte";
  import Thanks from "$components/nav/Thanks.svelte";
  import Meta from "$components/helpers/Meta.svelte";
</script>

<Meta {metadata} />
<StoryHeader data={content} />
<div class="wrapper">
  <svelte:component this={content.component} />
</div>
<Thanks data={filteredData} />

<style>
  .wrapper {
    padding: 10px;
  }
</style>
