<script>
  export let data;
  export let pathRoute;

  import { keyToSentence } from "$utils/textUtils";
</script>

<a href={pathRoute + data.id} class="card">
  <div class="img-wrap">
    <img
      src={data.thumbnail ? data.thumbnail : "images/graph.png"}
      alt="thumbnail"
    />
  </div>
  <p>{keyToSentence(data.id)}</p>
</a>

<style lang="scss">
  .card {
    cursor: pointer;
    background-color: white;
    border: none;
    position: relative;
    justify-items: center;
    overflow: hidden;
    float: left;
    margin: 10px 5px;
    padding: 0;
    text-decoration: none;

    // height: 180px;
    width: 160px;
    transition: 0.3s all;
    .img-wrap {
      width: 160px;
      height: 160px;
      overflow: hidden;
      img {
        width: 150px;
        height: 150px;
        transition: 0.3s all;
        border-radius: 15px;
        object-fit: cover;
      }

      &:hover {
        img {
          transform: scale(1.2);
        }
      }
    }
    // &:hover {
    background: none;
    box-shadow: none;

    //   -webkit-filter: drop-shadow(4px -2px 2px var(--c-green));
    //   filter: drop-shadow(4px -2px 2px var(--c-green));
    // }

    p {
      height: 40px;
      background-color: white;
      font-size: 1.2rem;
      font-weight: 600;
      width: 160px;
      text-align: start;
      margin-top: 7px;
      border: none;
      width: 100%;
      color: var(--c-darkgray);
    }
  }
</style>
