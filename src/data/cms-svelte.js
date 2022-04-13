import Scrollytelling from "$components/svelte/scrollytelling/index.svelte";
import Flip from "$components/svelte/flip/index.svelte";
import FlipGrid from "$components/svelte/flip/FlipGrid.svelte";
import FlipEntryBars from "$components/svelte/flip/FlipEntryBars.svelte";
import FlipSortAxes from "$components/svelte/flip/FlipSortAxes.svelte";

let cmsSvelte = [
  {
    primary_key: "Scrollytelling",
    published: "2022-04-11",
    post_title: "Scrollytelling with Svelte",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["svelte", "scrollytelling", "animation"],
    intro_text:
      "A few interesting techniques to liven up your Svelte Scrollytelling pieces. ",
    component: Scrollytelling,
  },
  {
    primary_key: "Flip",
    published: "2022-04-12",
    post_title: "Using Svelte FLIP for Visual Storytelling",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["svelte", "FLIP", "animation"],
    intro_text:
      "FLIP (First, Last, Invert, Play) is a cool feature of Svelte, let's explore cool ways to use it for visual storytelling and journalism.",
    component: Flip,
    components: [
      {
        id: "FlipGrid",
        title: "Grid manipulation with FLIP",
        notes:
          "This is the classic use case for FLIP. In the visual journalism space, sometimes we want to give the user the option to search through individual data points. With FLIP we can add a little bit cool to that process. <br/><br/> We add the animate:flip directive to the element in a Svelte {#each} block. <br/><br/>Then, when we sort or shuffle the source data, our cards (or whatever you are showing) are animated from their initial state to their end state.  ",
        component: FlipGrid,
      },
      {
        id: "FlipEntryBars",
        title: "Blocks to Bar Chart Animation with FLIP and Crossfade",
        notes:
          "Now things are getting interesting! In this example, I wanted to show how you could lead the user through a series of 'reveal' points. <br/><br/>The 'main event' transition is the one at stage 3; by combining FLIP and Crossfade (from 'svelte/transition'), we can 'send' and 'receive' data points to and from two lists. <br/> <br/> These two lists can be displayed in different ways: the 'blocks' list is displayed as simple blocks, and my 'bars' list is formatted to appear like a bar chart. <br/><br/>Note: things like axes/ labels/ keys have been removed to focus just on the FLIP animations. ",
        component: FlipEntryBars,
      },
      {
        id: "FlipSortAxes",
        title: "Sorting Axes of a Chart",
        notes:
          "Here, we've given the user the ability to sort the X-axis, alphabetically, or by the values of the Y-axis. <br/><br/> The principles are the same. The key points are that we need to re-draw the axis upon data changes.<br/><br/> Note: a key design consideration here is whether you want the X-axis ticks to move with the bar, I chose not to in this instance as it could look a bit messy. To have the ticks and axis labels move with the bar you would need to re-draw the axis with HTML elements (rather than D3/ SVG). This would make it easier to animate (and style).",
        component: FlipSortAxes,
      },
    ],
  },
];

export default cmsSvelte;
