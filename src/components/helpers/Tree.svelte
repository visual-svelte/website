<script>
  import { slide } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  console.log($page);

  import Icon from "$components/helpers/Icon.svelte";
  export let data;
  let localData = data;
  function openTree(i, j) {
    localData[i].children[j].expanded = !localData[i].children[j].expanded;
  }
</script>

{#each localData as l1, i}
  <h5>{l1.data}</h5>
  {#each l1.children as l2, j}
    <p class:current={l2 == "Full API"} on:click={() => openTree(i, j)}>
      <Icon
        name="triangle"
        fill="var(--c-darkgray)"
        width="8px"
        height="8px"
        stroke="var(--c-darkgray)"
        direction={localData[i].children[j].expanded ? "s" : "e"}
      />
      {l2.data}
    </p>
    {#if localData[i].children[j].expanded}
      {#each l2.children as link}
        <li class:current={link.href == $page.params.slug} transition:slide>
          <button on:click={goto(link.href)}>{link.title}</button>
          <!-- <a rel="internal" href={link.href}>{link.title}</a> -->
        </li>
      {/each}
    {/if}
  {/each}
{/each}

<style lang="scss">
  p {
    font-size: 1.1em;

    cursor: pointer;
    &.current {
      font-weight: 600;
      cursor: default;
      &:hover {
        background-color: transparent;
      }
    }
  }
  li {
    min-width: 100px;
    // padding: px 50px 5px 20px;
    background-color: transparent;

    margin-left: 10px;
    button {
      padding: 7px 10px;
      cursor: pointer;
      font-size: 1.1rem;
      height: 100%;
      width: 100%;
      display: block;
      text-decoration: none;
      color: var(--c-darkgray);
      opacity: 0.7;
      text-align: left;
      background-color: transparent;
      border: none;
      font-family: "Consola";
    }

    &.current {
      button {
        font-weight: 600;
        opacity: 1;
      }
      cursor: default;
      &:hover {
        background-color: transparent;
      }
    }
    &:hover {
      background-color: rgba(119, 227, 35, 0.15);
    }
  }
  h5 {
    font-size: 1.2rem;

    text-transform: uppercase;
  }
</style>
