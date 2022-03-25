<script>
  import Meta from "$components/helpers/Meta.svelte";
  import d3CMS from "$data/cms";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";
  let metadata = { t: "Home | VisualSvelte", d: "", u: $page.url.pathname };
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

<!-- <Meta {metadata} /> -->
<p>
  An educational site providing code and examples of great data visualizations
  and visual journalism with <a href="https://kit.svelte.dev/">SvelteKit</a>.
</p>

<p>
  This site was born out of my own frustrations on the learning curve of both
  D3.js and Javascript/ CSS/ HTML.
</p>
<p>I'm creating the resource I wish I had to learn faster.</p>
<p>
  You can read more about how and why I'm doing that, <a href="/about">here</a>.
</p>

<p>
  Intially, the focus focus will be on the legendary D3.js and how to implement
  the whole library in SvelteKit.
</p>

<!-- <CrossfadeDemo /> -->
<PostGallery posts={filteredData} />
