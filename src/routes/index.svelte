<script>
  import Meta from "$components/helpers/Meta.svelte";
  import { fly } from "svelte/transition";
  import { allArticles } from "$stores/cms";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";
  let metadata = {
    t: "Home | VisualSvelte",
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: $page.url.pathname,
  };

  $: posts = {
    api: $allArticles.filter((d) => d.cat == "D3 API"),
    chart: $allArticles.filter((d) => d.cat == "D3 Charts"),
    svelte: $allArticles.filter((d) => d.cat == "Svelte"),
  };
  let cats = ["api", "chart", "svelte"];
</script>

<Meta {metadata} />

<div class="all">
  <div class="top">
    <h1 class="header">the craft of visual storytelling with Svelte</h1>
    <div class="circle" />
    <div class="mission">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eius optio,
      magnam quam deleniti eum repellendus sequi! Possimus, ipsum earum aliquam
      tempora expedita sint dolorum, nisi repudiandae dicta itaque fuga!
    </div>
  </div>

  <div class="posts">
    <h2>Explore articles, by category</h2>

    {#each cats as cat}
      <PostGallery posts={posts[cat]} title={true} {cat} />
    {/each}
  </div>
</div>

<style lang="scss">
  .all {
    padding-top: 5rem;
    background-color: var(--dark);
    color: var(--off-white);
    .top {
      .circle {
        z-index: 1;
        height: 300px;
        width: 300px;
        right: 20px;
        top: 20px;
        border-radius: 100%;
        position: absolute;
        background: linear-gradient(
          295deg,
          rgba(255, 255, 255, 0.2),
          rgba(30, 29, 29, 0) 50%
        );
        z-index: 1;
      }
      .header {
        max-width: 300px;
        text-align: center;
        padding: 1.5rem 4rem;
        margin: 0 auto;
        position: relative;
        &:before {
          content: "";
          position: absolute;
          top: 0px;
          width: 20px;
          height: 1px;
          border-bottom: var(--off-white);
        }
      }
    }
  }

  .posts {
    h2 {
      text-align: center;
      padding: 6rem;
      margin: 0;

      &:before {
        border: none;
      }
    }

    .cat-filters {
      margin: 0 auto;
      width: 600px;
      text-align: center;
    }
  }
</style>
