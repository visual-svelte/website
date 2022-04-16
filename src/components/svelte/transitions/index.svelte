<script>
  import cmsSvelte from "$data/cms-svelte";
  const content = cmsSvelte?.find(
    (record) => record.primary_key == "Transitions"
  );

  let metadata = {
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.intro_text,
    u: "/svelte/transitions",
    tags: content?.keywords.join(),
  };
  import FormattedExample from "$components/helpers/FormattedExample.svelte";
</script>

<div class="wrapper">
  <h2>Motivation</h2>
  <p>
    Previously, we've explored the individual components of Svelte's animation
    capabilities - like <a rel="internal" href="/svelte/FLIP">FLIP</a>,
    <a rel="internal" href="/svelte/Motion">Motion</a>, and some other
    <a rel="internal" href="/svelte/FLIP">cool stuff</a>.
  </p>
  <p>
    In this article, I'll be using the "svelte/transition" module to re-create a
    sequenced animation I came across recently on Twitter:
  </p>
  <figure>
    <img
      src="images/migrants/migrant.gif"
      alt="bbc newsnight gif showing the data visualisation"
    />
    <figcaption>
      Source: <a
        href="https://twitter.com/BBCNewsnight/status/1514361598156099584"
        >BBC Newsnight Twitter</a
      >
    </figcaption>
  </figure>
  <p>
    I challenged myself to re-create this chart and animation with Svelte and
    I've documented what I learnt below.
  </p>
  <p>
    New to Svelte transitions? A good place to start is the <a
      href="https://svelte.dev/docs#run-time-svelte-transition"
      rel="external"
      >official documentation
    </a> to get a basic understanding of how it works.
  </p>
  {#each content.components as ex}
    <FormattedExample comp={ex} route="svelte/spring/" />
  {/each}
  <h2 class="subheading">Key features:</h2>
  <p />

  <ul>
    <li>
      <strong>Y Axis</strong>: Fly transition; the delay and y delay properties
      increase as the labels get closer to the x-axis (as in the original).
    </li>
    <li>
      <strong>X Axis</strong>: A custom transition was made to animate the white
      X Axis horizontal line. The transition animates the width property of the
      'bottom-axis'.
    </li>
    <li>
      <strong>Bars</strong>: Fly transition with cubinInOut easing. I had to
      create a bars- div with overflow:hidden to hide the bars below the x-axis.
    </li>
    <li>
      <strong>Bar labels</strong>: I converted the bar labels to a string, then
      transitioned each letter individually.
    </li>
    <li>
      <strong>Chart title</strong>: Simple slide transition just to try
      something different! Nothing fancy here.
    </li>
  </ul>
</div>

<style lang="scss">
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
  }
  figure {
    margin: 0px;
    max-width: 600px;
    figcaption {
      margin-top: 5px;
      text-align: end;
    }
  }
  li {
    margin: 20px 0px;
  }
  .subheading {
    margin-top: 5rem;
    padding-top: 20px;
    border-top: 1px solid rgba(119, 227, 35, 0.55);
  }
</style>
