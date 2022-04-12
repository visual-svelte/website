import AnimatedTransitions from "$components/d3/recipes/AnimatedTransitions.svelte";
import ForceAnimations from "$components/d3/recipes/ForceAnimations.svelte";
// import ScrollytellingSvelte from "$components/svelte/Scrollytelling.svelte";

let d3R = [
  {
    primary_key: "AnimatedTransitions",
    published: "2022-04-05",
    post_title: "Animated Chart Transitions with Svelte, D3 & Flubber",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["d3", "svelte", "animation", "flubber"],
    intro_text:
      "How to make really smooth transitions between different chart types, inspired by <a href='https://www.youtube.com/watch?v=vLk7mlAtEXI'>this YouTube video</a>.",
    component: AnimatedTransitions,
  },
  {
    primary_key: "ForceAnimations",
    published: "",
    post_title: "Animating D3 Forces with Svelte",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["d3", "svelte", "force", "animation"],
    intro_text:
      "How to make particles dance around the page with Svelte and D3.",
    component: ForceAnimations,
  },
];

export default d3R;
