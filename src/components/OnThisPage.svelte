<script>
  export let points;
  function handleAnchorClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const anchorId = new URL(link.href).hash.replace("#", "");
    const anchor = document.getElementById(anchorId);
    window.scrollTo({
      top: anchor.offsetTop,
      behavior: "smooth",
    });
  }
</script>

<div>
  <p>In this post:</p>
  {#each points as point}
    <li>
      <a href="#{point.id}" on:click={handleAnchorClick}>
        {point.title}
      </a>
    </li>
  {/each}
</div>
<!-- 
{#each points as point}
  <ul>
    <li>{point.primary_key}</li>
  </ul>
{/each} -->
