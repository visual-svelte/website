<script>
  import PostGallery from "$components/PostGallery.svelte";
  import { allArticles } from "$stores/cms";
  let apiArticles = $allArticles.filter((d) => d.cat == "D3 API");
  let chartArticles = $allArticles.filter((d) => d.cat == "D3 Charts");
  console.log("charts", apiArticles);
</script>

<PostGallery posts={apiArticles} cat="api" title={true} scroll={false} />
<PostGallery posts={chartArticles} cat="chart" title={true} scroll={false} />
