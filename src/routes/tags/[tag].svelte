<script context="module">
  import d3CMS from "$data/cms";
  import d3R from "$data/cms-d3-recipes";
  import cmsSvelte from "$data/cms-svelte";
  import { urlToText, keyToSentence } from "$utils/textUtils";
  export async function load(ctx) {
    // const primaryKey = pathname.split("/").pop();

    let tag_id = urlToText(ctx.url.pathname);

    const content = d3CMS
      .filter(
        (records) =>
          records.published && records.keywords.includes(tag_id.lowerTag)
      )
      .map((post) => {
        return {
          id: post.primary_key,
          cat: "D3 API",
          thumbnail: post.thumbnail,
          title: post.post_title,
          keywords: post.keywords,
        };
      });
    const recipes = d3R
      .filter(
        (records) =>
          records.published && records.keywords.includes(tag_id.lowerTag)
      )
      .map((post) => {
        return {
          id: post.primary_key,
          cat: "D3 Recipes",
          thumbnail: post.thumbnail,
          title: post.post_title,
          keywords: post.keywords,
        };
      });
    const svelteArticles = cmsSvelte
      .filter(
        (records) =>
          records.published && records.keywords.includes(tag_id.lowerTag)
      )
      .map((post) => {
        return {
          id: post.primary_key,
          cat: "Svelte",
          thumbnail: post.thumbnail,
          title: post.post_title,
          keywords: post.keywords,
        };
      });

    let allArticles = [...svelteArticles, ...content, ...recipes];

    let metadata = {
      t: `${tag_id.upperTag} articles | VisualSvelte`,
      d: `Articles with the tags ${tag_id.upperTag}`,
      u: ctx.url.pathname,
      tags: [tag_id.lowerTag, "tag"],
    };

    return { props: { allArticles, tag_id, metadata } };
  }
</script>

<script>
  import PostGallery from "$components/PostGallery.svelte";
  import Meta from "$components/helpers/Meta.svelte";

  export let allArticles;
  console.log("allArticles", allArticles);
  // export let svelteArticles;
  // export let recipes;
  export let metadata;
  export let tag_id;
</script>

<Meta {metadata} />

<div class="holder">
  <p>
    Explore all content related to the {tag_id.upperTag} tag:
  </p>
  <div class="post-grid">
    <h2>D3 API</h2>
    <PostGallery
      posts={allArticles.filter((d) => d.cat == "D3 API")}
      pathRoute="/d3/api/"
    />
    <h2>D3 Recipes</h2>
    <PostGallery
      posts={allArticles.filter((d) => d.cat == "D3 Recipes")}
      pathRoute="/d3/recipes/"
    />
    <h2>Svelte for Visual Storytelling</h2>
    <PostGallery
      posts={allArticles?.filter((d) => d.cat == "Svelte")}
      pathRoute="/svelte/"
    />
  </div>
</div>

<style lang="scss">
  .holder {
    text-align: left;
    position: relative;
    padding: 50px 0;
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
