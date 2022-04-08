<script>
  import SimplePostCard from "$components/SimplePostCard.svelte";
  export let posts;
  export let pathRoute;
  export let showMax = undefined;
  import { page } from "$app/stores";
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
  <div class="post-gallery">
    {#each filtered as post}
      {#if post.id !== $page.params.slug}
        <SimplePostCard data={post} {pathRoute} />
      {/if}
    {/each}
  </div>
{/if}

<style lang="scss">
  .post-gallery {
    display: grid;
    position: relative;
    margin: 0 auto;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(180px, 2fr));
  }
</style>
