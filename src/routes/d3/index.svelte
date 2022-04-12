<script>
  import d3R from "$data/cms-d3-recipes";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";

  $: recipes = d3R
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

<!-- <h1>D3 API Posts</h1>
<PostGallery posts={filteredData} pathRoute="/d3/api/" /> -->
<h1>D3 + Svelte Recipe Posts</h1>
<PostGallery posts={recipes} pathRoute="/d3/recipes/" />
