<script>
  import ScrollyWrapper from "$components/helpers/ScrollyWrapper.svelte";
  import ScrollytellingSvelteDemo from "$components/storytelling/ScrollytellingSvelte.Demo.svelte";

  import data from "$data/scrolltellingDemo";

  $: attentionData = data.find((d) => d.attention)["attention"];
</script>

<div class="wrapper">
  <h2>Motivation</h2>
  <p>
    Scrollytelling is a go-to technique for visual journalists and so let's
    learn to implement it properly, using Svelte!
  </p>
  <p>
    By scrollytelling, I mean an interactive article that updates automatically
    as the user scrolls down (or across?) the page. You can see an example from
    my previous article on <a
      rel="internal"
      href="/d3/recipes/animated-transitions"
      >Animated Transitions between Chart Types</a
    >.
  </p>

  <h2>The good news</h2>
  <p>
    Good news, part 1: Implmenting Scrollytelling in Svelte is a piece of cake
    (or Pudding?), thanks to the team at <a
      rel="external"
      href="https://pudding.cool">Pudding.cool</a
    >
    who have made a simple implementation available through their
    <a
      rel="external"
      href="https://github.com/the-pudding/svelte-starter/blob/main/src/components/helpers/Scrolly.svelte"
      >Svelte project starter kit</a
    >. Thanks Pudding team!
  </p>
  <p>
    Good news part 2: Connor Rothschild has already posted <a
      rel="external"
      href="https://www.connorrothschild.com/post/svelte-scrollytelling"
      >this great post</a
    > detailing how to implement the Pudding Scrolly component.
  </p>
  <p>
    If you haven't already, now is probably a good time to read those two
    resources to get a good understanding of how it works. In this article, I
    will instead be providing many creative examples of how to extend the basic
    usage of the Scrolly component. Let's dive into it!
  </p>

  <h2>First Demo - data changes and focusing</h2>
  <p>
    <!--  -->
  </p>
  <ScrollyWrapper
    fixPosition="left"
    data={attentionData}
    fixedComp={ScrollytellingSvelteDemo}
  />
</div>

<!-- 

    updating data values
    focus (bar chart, )
    re-scaling
    annotations
    zoom 
    scroll and stop
    accessible scrollytelling 





 -->
*/

<style>
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
