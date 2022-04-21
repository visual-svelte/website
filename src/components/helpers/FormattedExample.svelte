<script>
  export let comp;
  export let route;
  import Tabs from "$components/Tabs.svelte";
  import CodeVisual from "$components/CodeVisual.svelte";
</script>

<div id={comp.id} class="container step">
  <h2 class="subheading">
    {@html comp.title}
  </h2>
  <p class="comp-description">
    {@html comp.notes}
  </p>

  <Tabs>
    <div slot="tab1">
      <div class="svg-container">
        <svelte:component this={comp.component} />
      </div>
    </div>
    <div slot="tab2">
      <CodeVisual {route} compid={comp.id} />
    </div>
  </Tabs>
</div>

<style lang="scss">
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
    overflow-y: auto;
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
