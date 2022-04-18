<script context="module">
  import d3CMS from "$data/cms";

  export async function load(ctx) {
    let slug = ctx.url.pathname;
    const primaryKey = slug.split("/").pop();
    const content = d3CMS.find((record) => record.primary_key == primaryKey);
    let metadata = {
      t: `${content?.post_title} | VisualSvelte`,
      d: "Tell visual stories on the internet with Svelte and other technologies.",
      u: slug,
      tags: content.keywords.join(),
    };
    let filteredData = d3CMS
      .filter((d) => d.published)
      .map((post) => {
        return {
          id: post.primary_key,
          thumbnail: post.thumbnail,
          title: post.post_title,
          keywords: post.keywords,
        };
      });
    return { props: { filteredData, content, metadata } };
  }
</script>

<script>
  export let content;
  export let filteredData;
  export let metadata;
  import OnThisPage from "$components/OnThisPage.svelte";
  import ComeBackLater from "$components/ComeBackLater.svelte";
  import FormattedExample from "$components/helpers/FormattedExample.svelte";
  import GitHubLink from "$components/GitHubLink.svelte";
  import Scrolly from "$components/helpers/Scrolly.svelte";
  import Meta from "$components/helpers/Meta.svelte";
  import PostGallery from "$components/PostGallery.svelte";

  import { tableOfContents } from "$stores/post.js";
  import { page } from "$app/stores";
  import { onDestroy } from "svelte";

  let updatePosts = 0;
  $: $page.url, (updatePosts += 1);

  let titles = content?.components.map((comp) => {
    return { id: comp.id, title: comp.title, bool: false };
  });
  titles?.unshift({ id: "intro", title: "Intro", bool: true });
  if (content && content.published) {
    $tableOfContents = titles;
  }

  onDestroy(() => {
    $tableOfContents = [];
  });

  let errorState = false;
  let scrollValue = 0;
  let previousValue = 0;
  function updateStore(newScrollValue) {
    try {
      if (newScrollValue != undefined) {
        $tableOfContents[previousValue].bool = false;
        $tableOfContents[newScrollValue].bool = true;
        previousValue = newScrollValue;
      }
    } catch (error) {
      errorState = true;
      console.error(error);
    }
  }

  $: components = content?.components;
  $: scrollValue, updateStore(scrollValue);
</script>

<Meta {metadata} />

<div class="wrapper">
  {#if errorState || !content.published}
    <ComeBackLater />
  {:else}
    <Scrolly bind:value={scrollValue}>
      <div id="intro" class="intro">
        <h1>{content?.post_title}</h1>
        <p>{@html content?.intro_text}</p>

        <GitHubLink
          d3module={content.primary_key}
          url={`https://github.com/d3/${content.primary_key}`}
        />
        <OnThisPage points={content.components} />
      </div>
      {#each components as comp, i}
        <FormattedExample {comp} route="d3/" />
      {/each}
    </Scrolly>

    <h2>You might also like:</h2>
    {#key updatePosts}
      <PostGallery posts={filteredData} showMax={3} pathRoute="/d3/api/" />
    {/key}
  {/if}
</div>

<style lang="scss">
  .wrapper {
    margin: 0 auto;
    max-width: 700px;
  }
  h2 {
    margin: 100px 0 30px 0;
  }

  p {
    font-size: 0.9rem;
    /* text-overflow: wrap; */
  }
  .subheading {
    margin-top: 5rem;
    padding-top: 20px;
    border-top: 1px solid rgba(119, 227, 35, 0.55);
  }
  .comp-description :global(span) {
    color: blue;
    font-style: italic;
    padding: 3px 5px;
    border-radius: 10px;
    font-family: monospace;
  }

  .topone {
    height: 600px;
  }
  .scroll {
    position: fixed;
  }
  .svg-container {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 3px;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
</style>
