<main id="content">
  <slot />
</main>

<style>
  #content {
    min-height: 100vh !important;
    min-width: 100%;
    margin-top: -1px;
    background-size: 20px 20px;
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.05) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  }
</style>
