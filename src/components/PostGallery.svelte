<script>
  import Card from "$components/nav/Card.svelte";
  export let posts;
  export let pathRoute;
  export let title;
  export let cat;
  import { fly } from "svelte/transition";
  let list_style = "carousel";
  let cat_data = {
    API: {
      name: "D3 API",
      route: "/d3/api/",
      desc: "Find out how to implement the core building blocks of D3 Visuals in Svelte.",
    },
    chart: {
      name: "D3 Charts",
      route: "/d3/charts/",
      desc: "Get ready-to-go code and explanations for common chart types.",
    },
    svelte: {
      name: "Svelte Visual Storytelling",
      route: "/svelte/",
      desc: "How to use Svelte to tell visual stories.",
    },
  };

  $: selectedCat = cat_data[cat];
  export let showMax = undefined;
  import { page } from "$app/stores";
  import { path } from "d3";
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getFilteredData() {
    if (typeof showMax == "undefined") {
      return posts;
    } else {
      let postList = [];
      let oldIndexes = [];
      for (let i = 0; i < showMax; i++) {
        let index = getRandomInt(0, posts?.length - 1);

        if (!oldIndexes.includes(index)) {
          postList.push(posts[index]);
          oldIndexes.push(index);
        } else {
          index = getRandomInt(0, posts?.length - 1);
          if (!oldIndexes.includes(index)) {
            postList.push(posts[index]);
            oldIndexes.push(index);
          }
        }
      }
      return postList;
    }
  }
  $: filtered = getFilteredData();
</script>

{#if !posts.length}
  No posts yet!
{:else}
  <div class="gallery">
    <div class="inner">
      {#if title}
        <div class="text">
          <h1>{selectedCat.name}</h1>
          <p>{selectedCat.desc}</p>
        </div>
      {/if}
      <p class="view-as">
        View as: <span on:click={() => (list_style = "carousel")}>Carousel</span
        >
        | <span on:click={() => (list_style = "list")}>List</span>
      </p>
      {#if list_style === "carousel"}
        <div class="carousel">
          {#each filtered as post, i}
            {#if post.id !== $page.params.slug}
              <Card data={post} {pathRoute} />
            {/if}
          {/each}
        </div>
      {:else}
        <div class="list-container">
          {#each filtered as post}
            <a href={selectedCat.route + post.id}>{post.id} </a>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss">
  .gallery {
    padding-bottom: 40px;
    .inner {
      margin: 10px 10px 0px 10px;
    }
    .view-as {
      margin: 0 auto;
      max-width: 1200px;
      padding: 1rem 0;
      span {
        padding: 1rem;
        cursor: pointer;
      }
    }
    text-align: start;
    // padding: 0 1rem;
    width: 100%;
    background-color: var(--dark);
    color: var(--off-white);
    .text {
      max-width: 1200px;
      margin: 0 auto;

      h1 {
        padding: 4rem 0 0 0;
        line-height: 1rem;
      }
    }

    .carousel {
      display: flex;
      flex-direction: row;
      overflow-x: auto;

      margin: 0 auto;
      max-width: 1200px;
      padding-top: 20px;
      background-color: var(--dark);
      position: relative;
      gap: 20px;

      &::after {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 130px;
        background-color: white;
        height: 100%;
      }
    }

    .list-container {
      display: flex;
      flex-wrap: wrap;
      // flex-direction: row;
      gap: 1rem;
      margin: 0 auto;
      max-width: 1200px;
      a {
        padding: 10px 20px;

        transition: 0.3 all;
        color: white !important;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          background-color: rgba(243, 243, 243, 0.1);
        }
      }
    }
  }

  ::-webkit-scrollbar {
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--off-white);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--c-darkgray);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--dark);
  }
</style>
