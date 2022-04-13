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
      "FLIP (First, Last, Invert, Play) is a cool feature of Svelte, let's explore cool ways to use it to tell visual stories.",
    component: Flip,
    components: [
      {
        id: "FlipGrid",
        title: "Flip Grid",
        notes: "This is a FLIP grid",
        component: FlipGrid,
      },
      {
        id: "FlipEntryBars",
        title: "Flip Entry Bars",
        notes: "This is a FLIP grid",
        component: FlipEntryBars,
      },
      {
        id: "FlipSortAxes",
        title: "Flip Sort Axes",
        notes: "This is a FLIP grid",
        component: FlipSortAxes,
      },
    ],
  },
];

export default cmsSvelte;
