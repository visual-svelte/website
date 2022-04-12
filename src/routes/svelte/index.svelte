<script>
  //   import d3CMS from "$data/cms";
  //   import d3R from "$data/cms-d3-recipes";
  import cmsSvelte from "$data/cms-svelte";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";
  $: filteredData = cmsSvelte
    .filter((d) => d.published)
    .map((post) => {
      return {
        id: post.primary_key,
        thumbnail: post.thumbnail,
        title: post.post_title,
        keywords: post.keywords,
      };
    });
</script>

<h1>Svelte for Data Visualization</h1>
<PostGallery posts={filteredData} pathRoute="/svelte/" />
<!-- <h1>D3 + Svelte Recipe Posts</h1> -->
<!-- <PostGallery posts={recipes} pathRoute="/d3/recipes/" /> -->
