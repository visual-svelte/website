<script>
  import CMS from "$data/cms";

  $: filteredData = CMS.map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords,
    };
  });
</script>

<h1>Visual Svelte</h1>
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
  Intially, the focus focus will be on the legendary <a href="https://d3js.org/"
    >D3.js</a
  > and how to implement the whole library in SvelteKit
</p>

{#each filteredData as post}
  <SimplePostCard data={post} />
{/each}
