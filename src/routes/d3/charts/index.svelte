<script>
  import PostGallery from "$components/PostGallery.svelte";
  import { allArticles } from "$stores/cms";
  let articles = $allArticles.filter((d) => d.cat == "D3 Charts");
</script>

<PostGallery posts={articles} cat="chart" title={true} />
