import AxisSimple from "$components/d3/AxisSimple.svelte";
import AxisLog from "$components/d3/AxisLog.svelte";
import AxisScalePoint from "$components/d3/AxisScalePoint.svelte";
import AxisScaleBand from "$components/d3/AxisScaleBand.svelte";
import AxisLabels from "$components/d3/AxisLabels.svelte";
import BrushXSimple from "$components/d3/BrushXSimple.svelte";
import BrushStore from "$components/d3/BrushStore.svelte";
import BrushZoom from "$components/d3/BrushZoom.svelte";
import ChordBasic from "$components/d3/ChordBasic.svelte";
import ChordComplex from "$components/d3/ChordComplex.svelte";

let d3CMS = [
  {
    primary_key: "d3-axis",
    published: "2022-03-13",
    post_title: "Implementing D3 Axis in SvelteKit",
    thumbnail: "/images/thumbnails/graph.png",
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
    thumbnail: "/images/thumbnails/brush.png",
    keywords: ["d3"],
    intro_text:
      "Brushing is a technique used frequently in data visualization. It allows the user to interact with one or more visual, to identify patterns and relationships between them.<br/><br/> In this article, I'll be walking through a number of examples of implementing different brushing techniques (using d3-brush). ",
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
          "In the previous toy example I generated a simple dataset to show basic brush functionality. In reality, we would use brushing as a technique typically as a filter across a set of visuals. For example I might want to brush a date timeline and look at the effect on a scatter plot. Luckily Svelte provides us with Stores to pass data between components.<br/><br/> In this example, you will see that the brush updates a dataset ($filtered) which is saved to a Svelte store and then read by the Bar visual below. <br/><br/> If you dive into the code for this visual, you will also note that I am creating the SVG elements using a Svelte {#each} tag rather than with svg.selectAll(circle).append() etc. This is because as the complexity increases (here with two visuals interacting), I find it easier to write as much Svelte HTML as possible, rather than generating elements with D3/ JS code.  ",
        component: BrushStore,
      },
      // {
      //   id: "BrushZoom",
      //   title: "Brush and Zoom combined",
      //   notes:
      //     "d3-brush and d3-zoom provide a nice user experience for exploring time-series data; in this example I have implemented an <a rel='external' href='https://bl.ocks.org/mbostock/34f08d5e11952a80609169b7917d4172'>old Mike Bostock sample</a> ",
      //   component: BrushZoom,
      // },
    ],
  },
  {
    primary_key: "d3-chord",
    published: "2022-03-27",
    post_title: "D3-Chord in SvelteKit ",
    thumbnail: "/images/thumbnails/chord.png",
    keywords: ["d3"],
    intro_text:
      "The d3-chord api allows you to generate chord geometries. In this article, I'll describe the method I use to generate these kind of gemoetries, specifically within a SvelteKit environment.",
    components: [
      {
        id: "ChordBasic",
        title: "Chord (Basic)",
        notes:
          "We start with a basic Chord visual. The input is a 4x4 matrix of values which represent the strength of the connection between the X-Y pairs. <br/><br/> We start by specifying reactive generator functions for d3.chord(), d3.arc() and d3.ribbon(). The chord generator creates the data that is passed to the outer arcs and the inner ribbons (between arcs). <br/> <br/>Then, I frame out the SVG elements I need in the Svelte template area. I have a group for the outer arcs, and a group for the ribbons.",

        component: ChordBasic,
      },
      {
        id: "ChordComplex",
        title: "Chord (Complex) ",
        notes:
          "This chord visual is adapted from <a href='https://observablehq.com/@d3/chord-diagram'>this</a> Mike Bostock example on Observable, with original data from Nadieh Bremer (thanks Mike and Nadieh!). The outer arcs represent phone ownership, the inner ribbons show the brand of their previous phone. Hence, this chart shows how the consumers shift between brands. <br/><br/>Not too much has changed in the underlying mechanics from the previous simpler example. The complexity come from: more data, more annotations/ labeling. These can sometimes be a bit fiddly with Chord diagrams. <br/><br/> The principles are still the same: layout all HTML elements and then position them using the D3 helper functions. ",

        component: ChordComplex,
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
