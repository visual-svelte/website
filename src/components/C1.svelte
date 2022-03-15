<script>
  import store from "$stores/store.js";
  const { send, receive, flip } = $store;
</script>

<div>
  {#each $store.container1 as item (item.id)}
    <button
      in:receive={{ key: item.id }}
      out:send={{ key: item.id }}
      animate:flip
      style="margin-right:10px;"
      on:click={() => {
        store.updateContainers("container1", "container2", item);
      }}
    >
      {item.name}
    </button>
  {/each}
</div>
