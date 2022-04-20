<script>
  import PostGallery from "$components/PostGallery.svelte";
  import OtherCats from "$components/OtherCats.svelte";

  import { allArticles } from "$stores/cms";
  let articles = $allArticles?.filter((d) => d.cat == "Svelte");
</script>

<PostGallery posts={articles} cat="svelte" title={true} scroll={false} />
<OtherCats cat="svelte" />
