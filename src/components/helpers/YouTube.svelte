<script>
  export let video_id;
</script>

<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/{video_id}"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</div>

<style>
  .video-container {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .video-container::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
