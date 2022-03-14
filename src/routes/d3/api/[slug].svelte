<script context="module">
  import CMS from "$data/cms";

  export async function load(ctx) {
    let slug = ctx.url.pathname;
    const primaryKey = slug.split("/").pop();
    const content = CMS.find((record) => record.primary_key == primaryKey);
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
  let scrollValue = 0;
  let previousValue = 0;
  let titles = content.components.map((comp) => {
    return { title: comp.title, bool: false };
  });
  titles[0].bool = true;
  $tableOfContents = titles;

  import { onMount } from "svelte";

  // onMount(() => {
  // });

  function updateStore(newScrollValue) {
    // console.log("toc", $tableOfContents);
    console.log("previous", previousValue);
    console.log("new", newScrollValue);

    // console.log("scrollvae", newScrollValue);
    if (newScrollValue != undefined) {
      // console.log("toc", $tableOfContents[newScrollValue].bool);
      $tableOfContents[previousValue].bool = false;
      $tableOfContents[newScrollValue].bool = true;
      previousValue = newScrollValue;
      console.log($tableOfContents);
    }
  }

  $: components = content.components;
  $: scrollValue, updateStore(scrollValue);
</script>

{#if !content.published}
  <ComeBackLater />
{:else}
  <h1>{content.post_title}</h1>
  <p>{content.intro_text}</p>

  <GitHubLink
    d3module={content.primary_key}
    url={`https://github.com/d3/${content.primary_key}`}
  />
  <OnThisPage points={content.components} />

  <h1 class="scroll">{scrollValue}</h1>

  <Scrolly bind:value={scrollValue}>
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
  .scroll {
    position: fixed;
  }
</style>
