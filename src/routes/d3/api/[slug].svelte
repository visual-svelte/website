<script context="module">
  import d3CMS from "$data/cms";

  export async function load(ctx) {
    let slug = ctx.url.pathname;
    const primaryKey = slug.split("/").pop();
    const content = d3CMS.find((record) => record.primary_key == primaryKey);
    //implement the search of the pageContent database with the primaryKey
    return { props: { content } };
  }
</script>

<script>
  export let content;
  import OnThisPage from "$components/OnThisPage.svelte";
  import ComeBackLater from "$components/ComeBackLater.svelte";
  import CodeVisual from "$components/CodeVisual.svelte";
  import GitHubLink from "$components/GitHubLink.svelte";
  import Tabs from "$components/Tabs.svelte";
  import Scrolly from "$components/Scrolly.svelte";
  import { tableOfContents } from "$stores/post.js";
  import { onDestroy } from "svelte";
  let errorState = false;

  let scrollValue = 0;
  let previousValue = 0;
  let titles = content.components.map((comp) => {
    return { id: comp.id, title: comp.title, bool: false };
  });
  titles.unshift({ id: "intro", title: "Intro", bool: true });
  if (content.published) {
    $tableOfContents = titles;
  }

  onDestroy(() => {
    $tableOfContents = [];
  });

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
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }
  }

  $: components = content.components;
  $: scrollValue, updateStore(scrollValue);
</script>

{#if errorState || !content.published}
  <ComeBackLater />
{:else}
  <Scrolly bind:value={scrollValue}>
    <div id="intro" class="intro">
      <h1>{content.post_title}</h1>
      <p>{content.intro_text}</p>

      <GitHubLink
        d3module={content.primary_key}
        url={`https://github.com/d3/${content.primary_key}`}
      />
      <OnThisPage points={content.components} />
    </div>
    {#each components as comp, i}
      <div id={comp.id} class="container step" class:active={scrollValue === i}>
        <h2>
          {comp.title}
        </h2>
        <p>
          {comp.notes}
        </p>

        <Tabs>
          <div slot="tab1">
            <svelte:component this={comp.component} config={comp.props} />
          </div>
          <div slot="tab2">
            <CodeVisual compid={comp.id} />
          </div>
        </Tabs>
      </div>
    {/each}
  </Scrolly>
{/if}

<style>
  .topone {
    height: 600px;
  }
  .scroll {
    position: fixed;
  }
</style>
