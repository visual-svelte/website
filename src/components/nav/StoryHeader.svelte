<script>
  export let data;
</script>

<div class="header">
  <h1>{data.post_title}</h1>
  <p class="sub">{@html data.intro_text}</p>
  <div class="tags">
    Tags:
    {#each data.keywords as tag}
      <a class="tag" href="/tags/{tag}" rel="interal">{tag}</a>
    {/each}
  </div>
</div>

<style lang="scss">
  .header {
    text-align: center;
    width: 80%;
    margin: 0 auto 50px auto;
    padding-bottom: 100px;
    position: relative;
    border-bottom: var(--c-green) 2px solid;
    .sub {
      margin: 50px 0;
    }

    .tags {
      justify-self: center;
      display: flex;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      gap: 10px;
      flex-wrap: wrap;
      :nth-child(2n + 1) {
        background-color: aquamarine;
      }
      .tag {
        text-decoration: none;
        transition: all 0.3s;
        background-color: rgba(237, 237, 237, 0.4);
        &:hover {
          background-color: rgba(255, 255, 255, 1);
          transform: scale(1.05);
        }
        padding: 3px 10px;
        cursor: pointer;
        border: 1px solid gray;
      }
    }
  }
</style>
