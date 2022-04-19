<script>
  import d3Charts from "$data/cms-d3-charts";
  import PostGallery from "$components/PostGallery.svelte";

  $: charts = d3Charts
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
<h1>D3 + Svelte Charts</h1>
<PostGallery posts={charts} pathRoute="/d3/charts/" />
