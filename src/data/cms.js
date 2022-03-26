import AxisSimple from "$components/d3/AxisSimple.svelte";
import AxisLog from "$components/d3/AxisLog.svelte";
import AxisScalePoint from "$components/d3/AxisScalePoint.svelte";
import AxisScaleBand from "$components/d3/AxisScaleBand.svelte";
import AxisLabels from "$components/d3/AxisLabels.svelte";
import BrushXSimple from "$components/d3/BrushXSimple.svelte";
import BrushStore from "$components/d3/BrushStore.svelte";

let d3CMS = [
  {
    primary_key: "d3-axis",
    published: "2022-03-13",
    post_title: "Implementing D3 Axis in SvelteKit",
    thumbnail: "/images/graph.png",
    keywords: ["d3", "axis"],
    intro_text:
      "d3-axis provides a set of tools to create and customize graph axes. This article will describe how to create a number of the most useful ones, specifically in SvelteKit. Each axis type is similar but implemented slightly differently. The code for each is provided. ",
    components: [
      {
        id: "AxisSimple",
        title: "Basic axis - scaleLinear()",
        notes:
          "<span class='test'>d3.scaleLinear()</span>is the most basic axis type - it allows you to create linearly incremented axes. ",
        component: AxisSimple,
      },
      {
        id: "AxisLog",
        title: "Log scale - scaleLog()",
        notes:
          "To create a logarithmic axis, we need to use the <span>scaleLog()</span> generator (see code block below for full example). The rest of the implementation in SvelteKit is the same as the <span class='test'>d3.scaleLinear()</span> example above. <br/><br/> I have also added a <span class='test'>tickFormat()</span> to make it easy for the reader to see that a logarithmic scale is being used.",
        component: AxisLog,
      },
      {
        id: "AxisScalePoint",
        title: "Categorical axis - scalePoint()",
        notes:
          "Axes for categorical data can be created using either the <span>scalePoint()</span> or the <span>scaleBand()</span> functions. <span>scalePoint()</span> is typically used with points and scatter plots; when the data/visual marker you are plotting does not have a width.<br/><br/><span>scaleBand()</span>(as we see in the next example below) is typically used with bar charts and histograms.",
        component: AxisScalePoint,
      },
      {
        id: "AxisScaleBand",
        title: "Categorical (bars) - scaleBand()",
        notes:
          "The <span>scaleBand()</span> scale is implemented similarly to the previous <span>scalePoint()</span> but we add <span>.padding([0.5])</span> to the end of the construction chain. <br/><br/> This tells D3 to generate an axis with a bandwidth (retrievable using <span>x.bandwith()</span> where x is what you named your scaleBand(). This can then be passed to the svg rect to dictate the width of the 'bar').",
        component: AxisScaleBand,
      },

      {
        id: "AxisLabels",
        title: "Axis Labels",
        notes:
          "Axis labels can be added by appending a 'text' to the svg that holds our axes (see example code below). Sometimes you will have to manually adjust the positioning to fit margin constraints.<br/><br/>You will notice I've added a custom style to the x-axis label. To do this, I first added a class attribute to the axis label upon creation <span>.attr('class', 'x-axis-label')</span> and then in the style-tags of the Svelte file for your component, add whichever styles you like. You like need to use <span>:global(.x-axis-label)</span> to target the element. See the full code for more details!",
        component: AxisLabels,
      },
    ],
  },
  {
    primary_key: "d3-brush",
    published: "2022-03-25",
    post_title: "D3-brush techniques in SvelteKit",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "BrushXSimple",
        title: "Simple Brush",
        notes:
          "In our first brush example, the simplest of brush functionality is shown. If you dig into the code, you will see I plotted a few points, set the brush area, and update the class of the circles that fall within the brushX selection range. <br/><br/> On its own this example is quite pointless but does help us understand a little better the underlying mechanics of setting up a brush.",
        component: BrushXSimple,
      },
      {
        id: "BrushStore",
        title: "Brush with Svelte Store",
        notes:
          "In the previous toy example I generated a simple dataset to show basic brush functionality. In reality, we would use brushing as a technique typically as a filter across a set of visuals. For example I might want to brush a date timeline and look at the effect on a a scatter plot. Luckily Svelte provides us with Stores to pass data between components.<br/><br/> In this example, we will see how to get different D3 visuals talking to each other via the Svelte store. ",
        component: BrushStore,
      },
    ],
  },
  {
    primary_key: "d3-chord",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-color",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-contour",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-delaunay",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-dispatch",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-drag",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },

  {
    primary_key: "d3-ease",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-fetch",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-force",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-format",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-geo",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-hierarchy",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-interpolate",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-path",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-polygon",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-quadtree",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-random",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-scale-chromatic",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-scale",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-selection",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-shape",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-time-format",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-time",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-timer",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-transition",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-zoom",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
];

export default d3CMS;
