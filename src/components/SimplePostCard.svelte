<script>
  export let data;
  import { goto } from "$app/navigation";
</script>

<button class="card" on:click={goto("/d3/api/" + data.id)}>
  <img
    src={data.thumbnail ? data.thumbnail : "images/graph.png"}
    alt="thumbnail"
  />
  <p>{data.id}</p>
</button>

<style lang="scss">
  .card {
    cursor: pointer;
    border: solid 1px var(--c-darkgray);
    position: relative;
    justify-items: center;
    overflow: hidden;
    float: left;
    margin: 10px 5px;
    padding: 0;
    height: 180px;
    width: 160px;
    transition: 0.3s all;

    &:hover {
      -webkit-filter: drop-shadow(4px -2px 2px var(--c-green));
      filter: drop-shadow(4px -2px 2px var(--c-green));
    }

    img {
      width: 160px;
      height: 140px;
    }

    p {
      height: 40px;
      width: 160px;
      // background-color: rgba(119, 227, 35, 0.15);
      text-align: center;
      align-content: center;
      margin-top: 7px;

      border: none;
      text-align: center;
      width: 100%;
      text-decoration: none;
      color: var(--c-darkgray);
    }
  }
</style>
