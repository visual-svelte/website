import Scrollytelling from "$components/svelte/scrollytelling/index.svelte";
import Flip from "$components/svelte/flip/index.svelte";
import FlipGrid from "$components/svelte/flip/FlipGrid.svelte";
import FlipEntryBars from "$components/svelte/flip/FlipEntryBars.svelte";
import FlipSortAxes from "$components/svelte/flip/FlipSortAxes.svelte";
import Motion from "$components/svelte/motion/index.svelte";
import SpringTweenComp from "$components/svelte/motion/SpringTweenComp.svelte";
import Springy100Bars from "$components/svelte/motion/Springy100Bars.svelte";
import TweeningColor from "$components/svelte/motion/TweeningColor.svelte";
import Transitions from "$components/svelte/transitions/index.svelte";
import ChartEntry from "$components/svelte/transitions/ChartEntry.svelte";
import SelfExplainingCharts from "$components/svelte/SelfExplainingCharts/index.svelte";
import ChartExplainers from "$components/svelte/SelfExplainingCharts/ChartExplainers.svelte";
import ChartMorphing from "$components/svelte/ChartMorphing/index.svelte";

let cmsSvelte = [
  {
    primary_key: "Scrollytelling",
    published: "2022-04-11",
    post_title: "Scrollytelling with Svelte",
    thumbnail: "/images/thumbnails/scrollytelling.png",
    keywords: ["svelte", "scrollytelling", "animation"],
    intro_text:
      "A few interesting techniques to liven up your Svelte Scrollytelling pieces. ",
    component: Scrollytelling,
  },
  {
    primary_key: "Motion",
    published: "2022-04-13",
    post_title: "Adding life to stories with Svelte Motion",
    thumbnail: "/images/thumbnails/animatedTransitions.png",
    keywords: ["tweened", "spring", "svelte", "animation"],
    intro_text:
      "How to use Svelte Spring and Tweened animations to breath life into visual essays.",
    component: Motion,
    components: [
      {
        id: "SpringTweenComp",
        title: "Spring vs Tweened",
        notes:
          "In this visual, you can animate using both the Spring and Tweened functions to compare how they look and feel. <br/><br/>Adjust the slider parameters and change the easing function and then hit the Animate! button to observe the animations side-by-side. <br/><br/> Personally, I prefer tweened as you can control the duration, have 31 different <a href='https://svelte.dev/repl/6904f0306d6f4985b55f5f9673f762ef?version=3.4.1'>easing profiles</a> to choose from and you can even specific a custom interpolator (see the color example below!)",
        component: SpringTweenComp,
      },

      {
        id: "Springy100Bars",
        title: "Eased tweening on 100% stacked bars",
        notes:
          "Building on the core concepts, here I've built a 100% Stacked Bar Chart that tweens between two states (Primary and Main Election results) with an ElasticOut easing. <br/><br/> Annoyingly, Svelte Tweened does not allow you to easily add a delay for each item in your array. A typical use case in data viz would be to stagger the animations, such that each bar starts it's animation 100ms after the previous bar's animation begins. If you're looking to implement that kind of effect, see Amelia Wattenberger's post <a href='https://svelte.recipes/components/tweened-staggered/'>here</a>.  ",
        component: Springy100Bars,
      },
      {
        id: "TweeningColor",
        title: "Tweening Color",
        notes:
          "One good thing about tweening is that it can be applied to single numbers, arrays of numbers or even objects (with numbers as values),assuming your array length/ object structure is consistent between states. <br/><br/> In this example, we use d3-interpolate from D3.js as a custom interpolator on our Tween. <br/><br/> Essentially, this takes as input an rgb(r,g,b) color --> converts it to numbers, tweens it, and converts it back to rgb(r,g,b). <br/><br/> The result is a smooth fade between colors. ",
        component: TweeningColor,
      },
    ],
  },
  {
    primary_key: "Flip",
    published: "2022-04-12",
    post_title: "Using Svelte FLIP for Visual Storytelling",
    thumbnail: "/images/thumbnails/flip.png",
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
  {
    primary_key: "Transitions",
    published: "2022-04-13",
    post_title: "Svelte transitions for visual storytelling",
    thumbnail: "/images/thumbnails/flip.png",
    keywords: ["svelte", "animation", "transition"],
    intro_text:
      "How to implement a variety of Svelte transitions to animate the entrance of UI elements (and tell a story).",
    component: Transitions,
    components: [
      {
        id: "ChartEntry",
        title: "The result",
        notes:
          "It's not 100% identical to the original shown above but I made a few changes to try and explore more of the 'svelte/transition' module.<br/><br/> <strong>Click play below</strong> to see the animation. I've documented interesting observations/ implementation notes below the visual.",
        component: ChartEntry,
      },
    ],
  },
  {
    primary_key: "SelfExplainingCharts",
    published: "2022-04-16",
    post_title: "Techniques for explaining charts to a user in Svelte",
    thumbnail: "/images/thumbnails/flip.png",
    keywords: ["svelte", "animation", "transition"],
    intro_text: "",
    component: SelfExplainingCharts,
    components: [
      {
        id: "ChartExplainers",
        title: "Self-explaining chart",
        notes:
          "In this chart, the user is given information slowly about what the problem is and what each axis represents BEFORE they are given data to analyze. <br/> <br/> In doing so, you reduce dramatically the likelihood that the user will misunderstand what they are looking at. I also believe you will minimise the amount of time it takes for the user to understand the chart. <br/> <br/> Implementing this vision was a little hacky, but I hope you find the concept interesting! With a bit more time to polish the transitions, I do believe this could be a powerful technique for interactive storytelling. <br/> <br/> ",
        component: ChartExplainers,
      },
    ],
  },
  {
    primary_key: "ChartMorphing",
    published: "2022-04-05",
    post_title: "Morphing smoothly between chart types Svelte, D3 & Flubber",
    thumbnail: "/images/thumbnails/animatedTransitions.png",
    keywords: ["d3", "svelte", "animation", "flubber"],
    intro_text:
      "How to make really smooth transitions between different chart types, inspired by <a href='https://www.youtube.com/watch?v=vLk7mlAtEXI'>this YouTube video</a>.",
    component: ChartMorphing,
  },
];

export default cmsSvelte;
