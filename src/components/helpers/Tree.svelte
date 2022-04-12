<script>
  import { treeData, navOpen } from "$stores/menu";
  import { slide } from "svelte/transition";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  console.log("tree", $treeData);
  import Icon from "$components/helpers/Icon.svelte";
  import { tree } from "d3";
  export let dark = false;
  let localData = $treeData;
  function openTree(i, j) {
    localData[i].children[j].expanded = !localData[i].children[j].expanded;
  }

  $: catCounts = $treeData[0].children.map((cat) => {
    return cat.children.length;
  });
  // $: console.log("cat", catCounts);
</script>

{#each localData as l1, i}
  <!-- <h5>{l1.data}</h5> -->
  {#each l1.children as l2, j}
    <p
      class="subh"
      class:current={l2 == "Full API"}
      on:click|preventDefault={() => openTree(i, j)}
    >
      <Icon
        name="triangle"
        fill={dark ? "var(--c-white)" : "var(--c-darkgray)"}
        width="8px"
        height="8px"
        stroke={dark ? "var(--c-white)" : "var(--c-darkgray)"}
        direction={localData[i].children[j].expanded ? "s" : "e"}
      />
      {l2.data} ({catCounts[j] ?? 0})
    </p>
    {#if localData[i].children[j].expanded}
      {#if l2.children}
        {#each l2.children as link}
          <li
            on:click={() => ($navOpen = false)}
            class="bullet"
            class:current={link.href == $page.params.slug}
            transition:slide
          >
            <a
              rel="internal"
              href={j === 0
                ? "/d3/api/" + link.href
                : j === 1
                ? "/d3/recipes/" + link.href
                : "/svelte/" + link.href}><span>•</span> {link.title}</a
            >
          </li>
        {/each}
      {:else}
        <li>Nothing yet!</li>
      {/if}
    {/if}
  {/each}
{/each}

<style lang="scss">
  .subh {
    user-select: none;
    cursor: pointer;
    padding-left: 1rem;
  }
  .bullet {
    list-style-type: none;
    margin: 0 0 0.5rem 1rem;
    cursor: pointer;
    a {
      text-decoration: none;
      font-family: "Consola";
      position: relative;
      span {
        color: (--c-darkgray);
        font-size: 0.8rem;
        margin-top: 0px;
        // position: absolute;
      }
    }
    &.current {
      font-weight: 600;
      cursor: default;
      &:hover {
        background-color: transparent;
      }
    }
  }
</style>
