<script>
  export let data;

  import { keyToSentence } from "$utils/textUtils";
</script>

<a href={data.href} class="card">
  <p class="card-title">{keyToSentence(data.id)}</p>

  <p class="card-desc">{data.desc}</p>
  <!-- <div class="img-wrap">
    <img
      src={data.thumbnail ? data.thumbnail : "images/graph.png"}
      alt="thumbnail"
    />
  </div> -->
</a>

<style lang="scss">
  .card {
    &:hover {
      transform: translateY(-20px);
    }
    background: linear-gradient(
      295deg,
      rgba(243, 243, 243, 0.17),
      rgba(243, 243, 243, 0) 70%
    );
    color: var(--off-white);
    border-top: 2px solid var(--off-white);
    cursor: pointer;
    position: relative;
    text-decoration: none;
    margin-bottom: 20px;
    min-width: 240px;
    // padding: 10px;
    width: 240px;
    height: 300px;
    transition: 0.3s all;
    .card-title {
      font-size: 1rem;
      // margin: 10px 10px 0px;
      align-self: center;
    }
    .card-desc {
      font-size: 1rem;
      width: 230px;
      margin-right: 50px;
      line-height: 1.4rem;
      font-weight: 300;
    }
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

    p {
      height: 40px;
      font-size: 1.2rem;
      font-weight: 600;
      width: 160px;
      text-align: start;
      margin-top: 7px;
      border: none;
      width: 100%;
    }
  }
</style>
