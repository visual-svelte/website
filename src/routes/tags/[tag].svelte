<script context="module">
  import d3CMS from "$data/cms";
  import d3R from "$data/cms-d3-recipes";

  export async function load(ctx) {
    let slug = ctx.url.pathname;

    const tag_id = slug.split("/").pop();

    const content = d3CMS
      .filter(
        (records) => records.published && records.keywords.includes(tag_id)
      )
      .map((post) => {
        return {
          id: post.primary_key,
          thumbnail: post.thumbnail,
          title: post.post_title,
          keywords: post.keywords,
        };
      });
    const recipes = d3R
      .filter(
        (records) => records.published && records.keywords.includes(tag_id)
      )
      .map((post) => {
        return {
          id: post.primary_key,
          thumbnail: post.thumbnail,
          title: post.post_title,
          keywords: post.keywords,
        };
      });

    return { props: { content, recipes, tag_id } };
  }
</script>

<script>
  import PostGallery from "$components/PostGallery.svelte";
  export let content;
  export let recipes;
  export let tag_id;
</script>

<div class="holder">
  <p>
    Explore all content related to the {tag_id} tag:
  </p>
  <div class="post-grid">
    <h2>D3 API</h2>
    <PostGallery posts={content} pathRoute="/d3/api/" />
    <h2>D3 Recipes</h2>
    <PostGallery posts={recipes} pathRoute="/d3/recipes/" />
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
