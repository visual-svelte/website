<script>
  export let data;

  function moveOffScreen() {}
</script>

<div class="card" on:click={moveOffScreen}>
  <a href="/d3/api/{data.id}">
    {data.id}
  </a>
</div>

<style>
  .card {
    float: left;
    margin: 10px 10px;
    height: 150px;
    width: 150px;
    background-color: pink;
  }
</style>
