<script>
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
