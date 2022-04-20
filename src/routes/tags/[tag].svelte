<script context="module">
  import { urlToText, keyToSentence } from "$utils/textUtils";
  export async function load(ctx) {
    let tag_id = urlToText(ctx.url.pathname);

    let metadata = {
      t: `${tag_id.upperTag} articles | VisualSvelte`,
      d: `Articles with the tags ${tag_id.upperTag}`,
      u: ctx.url.pathname,
      tags: [tag_id.lowerTag, "tag"],
    };

    return { props: { tag_id, metadata } };
  }
</script>

<script>
  export let metadata;
  export let tag_id;
  import PostGallery from "$components/PostGallery.svelte";
  import Meta from "$components/helpers/Meta.svelte";
  import { allArticles } from "$stores/cms";
  $: filtered = $allArticles.filter((d) =>
    d.keywords.includes(tag_id.lowerTag)
  );
</script>

<Meta {metadata} />

<div class="holder">
  <h1>
    {filtered ? filtered.length : 0}
    {filtered.length == 1 ? "article" : "articles"} with the {tag_id.upperTag} tag:
  </h1>
  <PostGallery posts={filtered} title={false} scroll={false} cat="api" />
</div>

<style lang="scss">
  .holder {
    text-align: left;
    position: relative;
    padding-top: 50px;
    h1 {
      padding-left: 10px;
      max-width: 1000px;
      margin: 0 auto;
    }
    // display: inline-block;
    .post-grid {
      text-align: center;
      width: 100%;
      margin-top: 150px;
      max-width: 700px;
      margin: 0 auto;
    }
  }
</style>
