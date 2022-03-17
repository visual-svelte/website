<script>
  import ActionButton from "$components/helpers/ActionButton.svelte";
</script>

<div>
  <p>Sorry, we couldn't find that address.</p>

  <ActionButton text="Back to Home" href="/" />
</div>

<style>
  div {
    /* background-color: var(--c-darkgray); */
    height: 300px;
    /* color: white; */
    width: 100%;
    padding: 50px 10px;
  }
</style>
