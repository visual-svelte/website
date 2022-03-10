<div class="container">
  <div class="inner">
    <span class="render">Visual Svelte</span>
    <script
      src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
    <lottie-player
      src="https://assets6.lottiefiles.com/packages/lf20_adfauj2c.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px;"
      loop
      class="lottie"
      autoplay
    />
    <p>Lots of luscious content coming soon!</p>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    width: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  img {
    max-height: 200px;
  }

  .inner {
    padding: 10% 0%;
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
  }

  h1,
  p {
    position: relative;
  }
  .lottie {
    margin: 0 40px;
    padding: 0;
  }
  @import "https://fonts.googleapis.com/css?family=Kreon:300,700";
  .render {
    align-self: center;
    transition: all 0.3s ease;
    transform: rotateX(50deg);
    transform: rotateZ(1deg);
    font-family: "Kreon", serif;
    font-weight: 400;
    font-size: 4em;
    color: #f5f5f5;
    text-shadow: white 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px,
      #9c9c9c 1px 2px 1px, #9c9c9c 1px 3px 1px, #9c9c9c 1px 4px 1px,
      #9c9c9c 1px 5px 1px, #9c9c9c 1px 6px 1px, #9c9c9c 1px 7px 1px,
      #9c9c9c 1px 8px 1px, #9c9c9c 1px 9px 1px, #9c9c9c 1px 10px 1px,
      #9c9c9c 1px 11px 1px, #9c9c9c 1px 12px 1px,
      rgba(16, 16, 16, 0.4) 1px 18px 6px, rgba(16, 16, 16, 0.2) 1px 22px 10px,
      rgba(16, 16, 16, 0.2) 1px 26px 35px, rgba(16, 16, 16, 0.4) 1px 30px 65px,
      white -0.15em -0.1em 100px;
    &:hover {
      transform: rotateZ(90deg);
      margin-top: -20px;
      text-shadow: white 0.006em 0.006em 0.007em, #9c9c9c 1px 1px 1px,
        #9c9c9c 1px 2px 1px, #9c9c9c 1px 3px 1px, #9c9c9c 1px 4px 1px,
        #9c9c9c 1px 5px 1px, #9c9c9c 1px 6px 1px, #9c9c9c 1px 7px 1px,
        #9c9c9c 1px 8px 1px, #9c9c9c 1px 9px 1px, #9c9c9c 1px 10px 1px,
        #9c9c9c 1px 11px 1px, #9c9c9c 1px 12px 1px,
        rgba(16, 16, 16, 0.4) 1px 38px 26px, rgba(16, 16, 16, 0.2) 1px 42px 30px,
        rgba(16, 16, 16, 0.2) 1px 46px 65px, rgba(16, 16, 16, 0.4) 1px 50px 95px,
        white -0.15em -0.1em 100px;
    }
  }
</style>
