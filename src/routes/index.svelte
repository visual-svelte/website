<script>
  import Meta from "$components/helpers/Meta.svelte";
  import { fly } from "svelte/transition";
  import { allArticles } from "$stores/cms";
  import PostGallery from "$components/PostGallery.svelte";
  import { page } from "$app/stores";
  import BrandShape from "$components/helpers/BrandShape.svelte";
  let metadata = {
    id: "Home",
    t: "Home | visualsvelte",
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: $page.url.pathname,
  };

  $: posts = {
    api: $allArticles.filter((d) => d.cat == "D3 API"),
    chart: $allArticles.filter((d) => d.cat == "D3 Charts"),
    svelte: $allArticles.filter((d) => d.cat == "Svelte"),
  };
  let options = [
    { text: "Learn", shape: "circle", href: "#learn" },
    { text: "About", shape: "square", href: "#about" },
    { text: "Support", shape: "triangle", href: "/" },
  ];
  let cats = ["api", "chart", "svelte"];
</script>

<Meta {metadata} />

<div class="all">
  <div class="top-grid">
    <div class="top">
      <div class="circle" />
      <p>dedicated to</p>
      <h1 class="header">the craft of visual storytelling with Svelte</h1>
    </div>

    <div class="options">
      {#each options as o, i}
        <a
          href={o.href}
          rel="internal"
          class="option"
          style="transform:translateX({i * 50}px)"
        >
          <BrandShape shape={o.shape} height="50px" />
          <h2>{o.text}</h2>
        </a>
      {/each}
    </div>
  </div>
  <div class="mission" id="about">
    <h2>About visualsvelte</h2>
    I created visualsvelte to make it as easy as possible for non-software engineers
    to create wow-inducing interactive stories that change the world (or at least
    look cool!).<br /><br /> Svelte is quickly becoming the tool-of-choice for
    visual storytellers, so let's master the art, together.
    <br /><br />
    <a href="/about"> Read more about visualsvelte</a>
  </div>

  <div id="learn" class="posts">
    {#each cats as cat}
      {#if posts[cat]?.length}
        <PostGallery posts={posts[cat]} title={true} {cat} />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .all {
    background-color: var(--dark);
    color: var(--off-white);
    position: relative;
    .top-grid {
      padding: 10vw 0rem 3rem;
      max-width: 900px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
      gap: 3rem;
      .top {
        position: relative;
        p {
          position: absolute;
          right: 4rem;
          color: gray;
          font-size: 0.8rem;
          top: -10px;
          font-style: italic;
        }
        .circle {
          z-index: 1;
          height: 300px;
          width: 300px;
          left: 0px;
          top: 0px;
          border-radius: 100%;
          position: absolute;
          background: linear-gradient(
            125deg,
            rgba(255, 255, 255, 0.2),
            rgba(30, 29, 29, 0) 50%
          );
          z-index: 1;
        }
        .header {
          max-width: 300px;
          text-align: end;
          margin-top: 1rem;
          padding: 1rem 3rem;
          margin: 2rem auto;
          position: relative;
          &:before {
            content: "";
            position: absolute;
            top: 0px;
            right: 4rem;
            width: 20px;
            height: 1px;
            background: var(--off-white);
          }
        }
      }
      .options {
        overflow-x: hidden !important;
        min-height: 240px;
        max-width: 300px;
        margin: 1rem 2rem;
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(80px, 80px));
        .option {
          color: var(--off-white);
          text-decoration: none;
          h2 {
            margin: 0px;
            margin-left: 20px;
            width: 50px;
            line-height: 1rem;
            &::before {
              border: none;
            }
          }
          display: grid;
          grid-template-columns: 1fr 4fr;
        }
      }
    }
    .mission {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      padding: 20vh 5vw;
      a {
        transition: 0.3s all;
        color: var(--off-white);
        background-color: rgba(180, 13, 97, 0.7);
        text-decoration: none;
        padding: 15px 20px;
        border-radius: 40px;
        &:hover {
          background-color: rgba(180, 13, 97, 1);
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
