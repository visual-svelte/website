<script>
  export let path;
  import Icon from "$components/helpers/Icon.svelte";
  let crumbs;
  import { page } from "$app/stores";

  $: home = $page.url.pathname !== "/";

  $: {
    // Remove zero-length tokens.
    const tokens = path.split("/").filter((t) => t !== "");

    // Create { label, href } pairs for each token.
    let tokenPath = "";
    crumbs = tokens.map((t) => {
      tokenPath += "/" + t;
      return {
        label: t,
        href: tokenPath,
      };
    });

    // // Add a way to get home too.
    // crumbs.unshift({ label: "home", href: "/" });
  }
</script>

<div>
  {#if home}
    <span>
      <Icon name="home" width="20px" height="20px" stroke="var(--c-darkgray)" />
      &gt;&nbsp;
    </span>
  {/if}

  {#each crumbs as c, i}
    {#if i == crumbs.length - 1}
      {c.label}
    {:else}
      <a href={c.href}>{c.label}</a> &gt;&nbsp;
    {/if}
  {/each}
</div>

<style lang="scss">
  div {
    font-size: 0.9rem;
    align-content: center;
    color: var(--c-white);
    padding: 2px 5px;
    span {
      color: var(--c-white);

      transform: translateY(10px);
    }
    a {
      color: var(--c-white);
    }
  }
</style>
