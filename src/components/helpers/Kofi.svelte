<a rel="external" target="_blank" href="https://ko-fi.com/C0C7BRLF8">
  <div>
    <p>Buy me a coffee!</p>
    <img src="/images/kofi.png" alt="buy me a coffee link!" />
  </div>
</a>

<style lang="scss">
  a {
    max-height: 40px;
    width: 140px;
    text-decoration: none;
    background: none;
    background-color: white;
    color: black;
    font-weight: 600;
    float: left;
    border: gray 1px solid;
    border-radius: 20px;
    transition: all 0.3s;
    &:hover {
      -webkit-filter: drop-shadow(5px -5px 0 var(--c-green));
      filter: drop-shadow(5px -4px 0 var(--c-green));
      img {
        transform: scale(1.3);
        transform: rotate(0deg);
      }
    }

    div {
      padding: 9px 9px;
      position: relative;

      p {
        padding: 0;
        font-weight: 300;
        font-size: 0.8rem;
        line-height: 0.8rem;
        margin: 0px 0px 0 5px;
      }
      img {
        position: absolute;
        transition: 0.3s transform;
        left: -25px;
        top: -20px;
        height: 50px;
        width: 50px;
        transform: rotate(-45deg);
        box-shadow: none !important;
      }
    }
  }

  p {
  }
</style>
