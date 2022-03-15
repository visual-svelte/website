<script>
  import store from "$stores/store.js";
  import { goto } from "$app/navigation";
  const { send, receive, flip } = $store;
  function clicked(item) {
    store.updateContainers("container2", "container1", item);
    goto("/d3/api/" + item.name, false);
  }
</script>

<div>
  {#each $store.container2 as item (item.id)}
    <button
      in:receive={{ key: item.id }}
      out:send={{ key: item.id }}
      animate:flip
      style="margin-right:10px;"
      on:click={clicked(item)}
    >
      {item.name}
    </button>
  {/each}
</div>
