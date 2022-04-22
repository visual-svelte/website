<script context="module">
  import d3CMS from "$data/cms";
  import { metaFromRecord } from "$utils/textUtils";
  export async function load(ctx) {
    const primaryKey = ctx.params.slug;
    const content = d3CMS.find((record) => record.primary_key == primaryKey);
    content ? (content["cat"] = "D3 API (in Svelte)") : console.log("");
    let metadata = metaFromRecord(content, ctx.url.pathname);

    return { props: { content, metadata } };
  }
</script>

<script>
  export let content;
  export let metadata;
  import OnThisPage from "$components/OnThisPage.svelte";
  import FormattedExample from "$components/helpers/FormattedExample.svelte";
  import GitHubLink from "$components/GitHubLink.svelte";
  import Meta from "$components/helpers/Meta.svelte";
  import StoryHeader from "$components/nav/StoryHeader.svelte";
  import Thanks from "$components/nav/Thanks.svelte";
</script>

<Meta {metadata} />
<StoryHeader data={content} />
<div class="wrapper">
  <div id="intro" class="intro">
    <GitHubLink
      d3module={content?.primary_key}
      url={`https://github.com/d3/${content.primary_key}`}
    />
    <OnThisPage points={content?.components} />
  </div>
  {#each content?.components as comp, i}
    <FormattedExample {comp} route="d3/" />
  {/each}
  <Thanks />
</div>

<style lang="scss">
  .wrapper {
    margin: 0 auto;
    padding: 10px;
    max-width: 600px;
  }
  h2 {
    margin: 100px 0 30px 0;
  }

  p {
    font-size: 0.9rem;
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
