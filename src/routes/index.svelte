<script>
  import Meta from "$components/helpers/Meta.svelte";
  import { fade, fly } from "svelte/transition";
  import d3CMS from "$data/cms";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { annotate } from "svelte-rough-notation";
  import Typewriter from "svelte-typewriter";
  let visible = false;
  onMount(() => {
    setTimeout(() => (visible = true), 1500);
  });
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
<div class="spacer">
  <Typewriter cascade>
    <div class="intro">
      <h1>Unlock your</h1>
      <h1>
        <span
          use:annotate={{
            color: "lightgreen",
            type: "highlight",
            iterations: 2,
            visible: visible,
          }}>visual storytelling superpowers</span
        >
      </h1>
      <h1>with Svelte</h1>
    </div>
  </Typewriter>
</div>
{#if visible}
  <div class="text" in:fly={{ x: -50, duration: 1000, delay: 1200 }}>
    <p>Svelte is what the pro's use to tell visual stories.</p>
    <p>
      An educational site providing code and examples of great data
      visualizations and visual journalism with <a
        href="https://kit.svelte.dev/">SvelteKit</a
      >.
    </p>

    <p>
      This site was born out of my own frustrations on the learning curve of
      both D3.js and Javascript/ CSS/ HTML.
    </p>
    <p>I'm creating the resource I wish I had to learn faster.</p>
    <p>
      You can read more about how and why I'm doing that, <a href="/about"
        >here</a
      >.
    </p>

    <p>
      Intially, the focus focus will be on the legendary D3.js and how to
      implement the whole library in SvelteKit.
    </p>
  </div>

  <div in:fly={{ y: 100, duration: 1000, delay: 2500 }}>
    <h2>Recent D3 & SvelteKit Series:</h2>
    <PostGallery posts={filteredData} />
  </div>
{/if}

<style lang="scss">
  .spcaer {
    // min-height: 300px;
  }
  .intro {
    // min-height: 50vh;
    padding: 100px 0px;

    h1 {
      text-align: center;
      margin: 0;
    }
  }
  .text {
    text-align: center;
  }
</style>
