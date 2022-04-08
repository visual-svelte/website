<script>
  import d3CMS from "$data/cms";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";
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

<h1>All API posts about D3 & Svelte</h1>
<p>
  We walk through all the key modules in the D3.js API and implmenet them in
  Svelte
</p>
<PostGallery posts={filteredData} pathRoute="/d3/api/" />
