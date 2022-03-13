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
  console.log("conte", content);

  import OnThisPage from "$components/OnThisPage.svelte";
  import CodeVisual from "$components/CodeVisual.svelte";
  $: components = content.components;
  import Tabs from "$components/Tabs.svelte";
</script>

<h1>{content.post_title}</h1>

<OnThisPage points={content.components} />

{#each components as comp}
  <div class="container">
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
        <CodeVisual url={comp.github} />
      </div>
    </Tabs>
  </div>
{/each}
