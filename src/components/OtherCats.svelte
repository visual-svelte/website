<script>
  export let cat;
  let allCats = [
    {
      name: "api",
      href: "/d3/api",
      text: "D3 API (in Svelte)",
      color: { bg: "rgba(251,54,54,0.7)", text: "var(--off-white)" },
    },
    {
      name: "chart",
      href: "/d3/charts",
      text: "D3 Charts (in Svelte)",
      color: { bg: "rgba(180,13,97,0.7)", text: "var(--off-white)" },
    },
    {
      name: "svelte",
      href: "/svelte",
      text: "Svelte for Visual Stories",
      color: { bg: "rgba(247,196,25,0.7)", text: "var(--off-white)" },
    },
  ];
  $: filtered = allCats.filter((d) => d.name !== cat);
</script>

<div class="outer ">
  <div class="wrapper">
    <h2>Other categories:</h2>
    <div class="list-container">
      {#each filtered as post}
        <a
          href={post.href}
          style="background-color:{post.color.bg}; color:{post.color.text};"
          >{post.text}
        </a>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .outer {
    padding: 1rem 0 6rem 0;
    color: var(--off-white);
    background-color: var(--dark);
    .wrapper {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
  .list-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 auto;
    max-width: 1000px;
    a {
      transition: all 0.3s;
      padding: 20px 20px;
      opacity: 0.8;
      transition: 0.3 all;
      color: var(--off-white);
      text-decoration: none;
      &:hover {
        opacity: 1;
        text-decoration: underline;
        background-color: rgba(243, 243, 243, 0.1);
      }
    }
  }
</style>
