<script>
  export let data;
  import { spring } from "svelte/motion";
  import { scrollY } from "$stores/screen";

  // let scrollY;
</script>

<div class="header">
  <div class="circle" style="transform:rotate({$scrollY / 2}deg)" />
  <div class="inner">
    <h1 class="head">{data.post_title}</h1>
    <p class="sub">{@html data.intro_text}</p>
    <a
      href="/"
      rel="internal"
      aria-label="See more articles from the {data.cat} category"
      class="category"
    >
      <div class="box" />
      <p>D3 Charts</p>
    </a>

    <div class="tags">
      {#each data.keywords as tag}
        <a
          class="tag"
          aria-label="See more articles with the {tag} tag"
          href="/tags/{tag}"
          rel="internal">#{tag}</a
        >
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  $left-margin: 3rem;
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
    background-color: var(--dark);
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    text-align: center;
    width: 100%;
    // height: 80vh;
    // min-height: 500px;
    padding-bottom: 70px;
    position: relative;
    .inner {
      z-index: 3;
    }

    .head {
      max-width: 500px;
      z-index: 4;
      padding: 4rem 3rem 1rem $left-margin;
      text-align: start;
      margin: 0;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        margin-left: 3rem;
        width: 20px;
        border-bottom: 1px solid white;
      }
    }
    .category {
      // position: relative;
      width: 100px;
      text-align: left;
      color: white;
      text-decoration: none;
      z-index: 6;
      p {
        z-index: 6;

        &:hover {
          text-decoration: underline;
        }
      }
      &:hover {
        .box::before {
          transform: translate(0px, 0px) rotate(0deg);
        }
      }
      .box {
        margin-left: $left-margin;
        height: 20px;
        width: 20px;
        background-color: var(--dragon);
        position: relative;
        float: left;
        margin-right: 10px;
        z-index: 3;
        &:hover {
          &::after {
            transform: rotate(0deg);
          }
        }
        &::before {
          z-index: 2;
          transition: 0.5s all;
          content: "";
          bottom: 0;
          // transform: rotate(7deg);
          transform: translate(-1px, -2px) rotate(4deg);
          left: 0;
          top: 0px;
          height: 19px;
          width: 19px;
          position: absolute;
          border: white 1px solid;
        }
      }
    }

    .sub {
      z-index: 4 !important;
      padding: 0 1rem 0 $left-margin;
      text-align: left;
      margin: 2rem 0;
      max-width: 500px;
    }

    .tags {
      // justify-self: center;
      display: flex;
      margin-left: $left-margin;
      margin-right: 10px;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 0;
      justify-items: end;
      .tag {
        transition: 1s all;
        text-decoration: none;
        z-index: 4;
        background-color: transparent;
        border: none;
        margin: 0;
        color: white;
        padding: 0;
        cursor: pointer;
        line-height: 1rem;
        font-weight: 400;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
