<script>
  export let sidebarData;
  import Tree from "$components/helpers/Tree.svelte";
  let hideShow = true;
</script>

{#if hideShow}
  <div class="container">
    <ul>
      {#if innerWidth < 1200}
        <li>
          <slot />
        </li>
      {/if}
      <Tree data={sidebarData} />
    </ul>
  </div>
{/if}

<style lang="scss">
  .hide {
    height: 30px;
    width: 100%;
    position: sticky;
    top: 0px;
    display: block;
  }
  .container {
    font-size: 0.9em;
    overflow-x: hidden;
    overflow-y: scroll;
    line-height: 0.8em;
    height: 90vh;
    width: 300px;
    position: sticky;
    padding: 10px;
    top: 20px;
    ul {
      padding-inline-start: 0px;
      list-style-type: none;
      li {
        min-height: 200px;
      }
    }
  }
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--c-gray);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--c-darkgray);
  }
</style>
