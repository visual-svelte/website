<script>
  import PostGallery from "$components/PostGallery.svelte";
  import OtherCats from "$components/OtherCats.svelte";
  import { allArticles } from "$stores/cms";
  let articles = $allArticles.filter((d) => d.cat == "D3 API");
</script>

<PostGallery posts={articles} cat="api" scroll={false} title={true} />
<OtherCats cat="api" />
