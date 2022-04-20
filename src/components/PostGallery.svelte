<script>
  export let posts;
  export let title;
  export let cat;
  export let scroll = true;
  import Card from "$components/nav/Card.svelte";
  import { keyToSentence } from "$utils/textUtils";
  let list_style = "carousel";
  let cat_data = {
    api: {
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
  import { onMount } from "svelte";
  let gallery;

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

  function setScrollColor() {
    if (cat == "api") {
      console.log("running set scroll colr;");
      gallery.style.setProperty("--track-color", "rgba(251,54,54,0.2)");
      gallery.style.setProperty("--thumb-color", "rgba(251,54,54,0.7)");
      gallery.style.setProperty("--hover-color", "rgba(251,54,54,1)");
    } else if (cat == "chart") {
      // dragon chart
      gallery.style.setProperty("--track-color", "rgba(180,13,97,0.2)");
      gallery.style.setProperty("--thumb-color", "rgba(180,13,97,0.7)");
      gallery.style.setProperty("--hover-color", "rgba(180,13,97,1)");
    } else {
      // lemon - svelte
      gallery.style.setProperty("--track-color", "rgba(247,196,25,0.2)");
      gallery.style.setProperty("--thumb-color", "rgba(247,196,25,0.7)");
      gallery.style.setProperty("--hover-color", "rgba(247,196,25,1)");
    }
  }

  $: if (gallery) {
    setScrollColor();
  }
  onMount(() => {});
</script>

<div class="gallery" bind:this={gallery}>
  <div class="inner">
    {#if title}
      <div class="text">
        <h1>{selectedCat?.name}</h1>
        <p>{selectedCat?.desc}</p>
      </div>
    {/if}
    {#if !posts?.length}
      <div class="text">No posts yet!</div>
    {:else}
      {#if scroll}
        <p class="view-as">
          View as: <span on:click={() => (list_style = "carousel")}
            >Carousel</span
          >
          | <span on:click={() => (list_style = "list")}>List</span>
        </p>
      {/if}
      {#if list_style === "carousel"}
        <div
          class="carousel"
          style={scroll
            ? "flex-direction: row;overflow-x: auto;"
            : "flex-wrap:wrap"}
        >
          {#each filtered as post, i}
            {#if post.id !== $page.params.slug}
              <Card data={post} />
            {/if}
          {/each}
        </div>
      {:else}
        <div class="list-container">
          {#each filtered as post}
            <a href={selectedCat?.route + post.id}>{keyToSentence(post.id)} </a>
          {/each}
        </div>
      {/if}
    {/if}
  </div>
</div>

<style lang="scss">
  .gallery {
    --track-color:rgba(247,196,25,0.2)
    --thumb-color:rgba(247,196,25,0.7);
    --hover-color: rgba(247,196,25,1);
    padding: 40px 0px;  ;
    .inner {
      margin: 10px 10px 0px 10px;
    }
    .view-as {
      margin: 0 auto;
      max-width: 1000px;
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
      max-width: 1000px;
      margin: 0 auto ;

      h1 {
        padding: 1.5rem 0 0 0;
        line-height: 3rem;position: relative;
         &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          height: 1px;
          // margin-left: 3rem;
          width: 20px;
          border-bottom: 2px solid var(--hover-color);
         }
      }
    }
  

    .carousel {
      display: flex;
     
      margin: 0 auto;
      max-width: 1000px;
      padding-top: 20px;
      background-color: var(--dark);
      position: relative;
      gap: 20px;
      scrollbar-width: thin;
      scrollbar-color: rgb(107, 107, 253);

      &::-webkit-scrollbar {
        height: 50px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        background: var(--track-color);
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: var(--thumb-color);
      }

      &::-webkit-scrollbar-thumb:hover {
        background: var(--hover-color);
      }
    }

    .list-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 0 auto;
      max-width: 1000px;
      a {
        padding: 10px 20px;

        transition: 0.3 all;
        color: var(--off-white) ;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
          background-color: rgba(243, 243, 243, 0.1);
        }
      }
    }
  }
</style>
