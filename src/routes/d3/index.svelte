<script>
  import d3CMS from "$data/cms";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";
  console.log($page);
  $: filteredData = d3CMS
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

<h1>All posts about D3 & SvelteKit</h1>
<PostGallery posts={filteredData} />
