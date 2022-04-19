<script>
  import Meta from "$components/helpers/Meta.svelte";
  import { fade, fly } from "svelte/transition";
  import d3CMS from "$data/cms";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { annotate } from "svelte-rough-notation";
  let visible = false;
  onMount(() => {
    setTimeout(() => (visible = true), 500);
  });
  let metadata = {
    t: "Home | VisualSvelte",
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: $page.url.pathname,
  };
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

<Meta {metadata} />
<div class="spacer">
  <!-- <Typewriter cascade> -->
  <div class="intro">
    <h1>Unlock your</h1>
    <h1>
      <span
        use:annotate={{
          color: "var(--c-green)",
          type: "highlight",
          iterations: 2,
          visible: visible,
        }}>visual storytelling superpowers</span
      >
    </h1>
    <h1>with Svelte</h1>
  </div>
  <!-- </Typewriter> -->
</div>
{#if visible}
  <div class="text" in:fly={{ x: -50, duration: 1000, delay: 1200 }}>
    <p>
      Welcome to <span
        use:annotate={{
          color: "var(--c-green)",
          type: "highlight",
          iterations: 2,
          visible: visible,
        }}
      >
        Visual Svelte</span
      >
      - an educational site providing code and examples of great data visualizations
      and visual journalism with
      <a href="https://kit.svelte.dev/">SvelteKit</a>.
    </p>

    <p>
      This site was born out of my own <span
        use:annotate={{
          visible: true,
          type: "underline",
          color: "blue",
          iterations: 10,
        }}>frustrations</span
      > on the learning curve of both D3.js and Svelte/ Javascript/ CSS/ HTML.
    </p>
    <p>
      I'm creating the resource I wish I had to <span
        use:annotate={{
          color: "pink",
          type: "highlight",
          iterations: 2,
          visible: visible,
        }}>learn faster</span
      >.
    </p>
    <p>
      You can read more about how and why I'm doing that → <a href="/about"
        >here</a
      >.
    </p>
  </div>

  <div class="bottom-section">
    <PostGallery
      posts={filteredData}
      title={true}
      cat="API"
      pathRoute="/d3/api/"
    />
  </div>
{:else}
  <div class="blank" />
{/if}

<style lang="scss">
  .spacer {
    min-height: 50vh;
    text-align: center;
  }
  .blank {
    height: 400px;
    width: 100%;
  }
  .bottom-section {
    // text-align: center;
    margin-top: 150px;
    // max-width: 700px;
    // margin: 0 auto;
  }
  .intro {
    // min-height: 50vh;
    padding: 10vh 0px;

    h1 {
      text-align: center;
      margin: 0;
    }
  }
  .text {
    max-width: 700px;
    margin: 0 10px 100px;
    text-align: center;
  }
</style>
