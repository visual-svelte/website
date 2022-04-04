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
import ContourBasic from "$components/d3/ContourBasic.svelte";
import DragSimple from "$components/d3/DragSimple.svelte";
import DragD3 from "$components/d3/DragD3.svelte";
import DragD3Svelte from "$components/d3/DragD3Svelte.svelte";
import ForceSimple from "$components/d3/ForceSimple.svelte";
import ForceRadial from "$components/d3/ForceRadial.svelte";
import ForceFull from "$components/d3/ForceFull.svelte";
import PolygonBasic from "$components/d3/PolygonBasic.svelte";
import PolygonPlus from "$components/d3/PolygonPlus.svelte";
import ShapeArc from "$components/d3/ShapeArc.svelte";
import ShapeArea from "$components/d3/ShapeArea.svelte";
import ShapeCurve from "$components/d3/ShapeCurve.svelte";
import ShapeLine from "$components/d3/ShapeLine.svelte";
import ShapeLinks from "$components/d3/ShapeLinks.svelte";
import ShapePie from "$components/d3/ShapePie.svelte";
import ShapeStack from "$components/d3/ShapeStack.svelte";
import HierarchyPack from "$components/d3/HierarchyPack.svelte";
import HierarchyTree from "$components/d3/HierarchyTree.svelte";
import HierarchyTreemap from "$components/d3/HierarchyTreemap.svelte";
import HierarchyCluster from "$components/d3/HierarchyCluster.svelte";
import HierarchyRadial from "$components/d3/HierarchyRadial.svelte";
import GeoPath from "$components/d3/GeoPath.svelte";
import ZoomBasic from "$components/d3/ZoomBasic.svelte";
import ZoomBrush from "$components/d3/ZoomBrush.svelte";
import ZoomScales from "$components/d3/ZoomScales.svelte";
import ZoomSvelteUse from "$components/d3/ZoomSvelteUse.svelte";

let d3CMS = [
  {
    primary_key: "d3-axis",
    published: "2022-03-13",
    post_title: "Implementing D3 Axis in SvelteKit",
    thumbnail: "/images/thumbnails/graph.png",
    keywords: ["d3", "axis"],
    intro_text:
      "d3-axis provides a set of tools to create and customize graph axes. This article will describe how to create a number of the most useful ones, specifically in SvelteKit. Each axis type is similar but implemented slightly differently. The code for each is provided.<br/><br/> There is a variety of different ways to approach the D3/ SvelteKit integration, my method shown favours describing as much of the SVG elements as possible in Svelte HTML/ SVG markup (as opposed to creating elements programmatically with D3 code). This keeps code really clean and readable and makes it easier to apply Svelte event handlers or custom styles. ",
    components: [
      {
        id: "AxisSimple",
        title: "Basic axis - scaleLinear()",
        notes:
          "<span class='test'>d3.scaleLinear()</span>is the most basic axis type - it allows you to create linearly incremented axes. In SvelteKit, I make use of the bind:this={} syntax to select an empty SVG group element and call the axis generator function. See the full code for details.",
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
          "Axis labels can be added simply with a 'text' element in the SVG markup. Sometimes you will have to manually adjust the positioning to fit margin constraints.<br/><br/>Custom styling can be added either inline to the Text element or in the Svelte style tags.",
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
          "In our first brush example, the simplest of brush functionality is shown. If you dig into the code, you will see I plotted a few points, set the brush area, and update the class of the circles that fall within the brushX selection range. <br/><br/> On its own this example is quite pointless but does help us understand a little better the underlying mechanics of setting up a brush. Next, we add more complexity, and utility.",
        component: BrushXSimple,
      },
      {
        id: "BrushStore",
        title: "Brush with Svelte Store",
        notes:
          "In the previous toy example I generated a simple dataset to show basic brush functionality. In reality, we would use brushing as a technique typically as a filter across a set of visuals. For example, I might want to brush a date timeline and look at the effect on a scatter plot. <br/><br/> Luckily Svelte provides us with Stores to pass data between components.<br/><br/> In this example, you will see that the brush updates a dataset ($filtered) which is saved to a Svelte store and then read by the Bar visual below. <br/><br/> If you dive into the code for this visual, you will also note that I am creating the SVG elements using a Svelte {#each} tag rather than with svg.selectAll(circle).append() etc. This is because as the complexity increases (here with two visuals interacting), I find it easier to write as much Svelte HTML as possible, rather than generating elements with D3/ JS code.  ",
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
    published: "2022-03-28",
    post_title: "Contours with D3 and SvelteKit",
    thumbnail: "/images/thumbnails/contour.png",
    keywords: ["d3"],
    intro_text:
      "Contours are an interesting visual type - used typically for maps, but can also be used to display continuous functions by sampling. In this article, we provide an example of how to use d3-contour within SvelteKit.",
    components: [
      {
        id: "ContourBasic",
        title: "Contours (basic)",
        notes:
          "The classic example (found in the docs and this  Basic example) is using contours to visualize the <a href='https://en.wikipedia.org/wiki/Test_functions_for_optimization' >Goldstein-Price function</a>. Here's how I implmented it in SvelteKit. <br/><br/>The code is relatively straightforward, once you have your data in the required format. The contour generator expects an array of length n by m where [n, m] is the contour generator's size. <br/><br/> The output is then typically passed to d3.geoPath() to convert the projection into SVG paths.",
        component: ContourBasic,
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
        id: "Voronoi",
        title: "Voronoi ",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
      {
        id: "",
        title: "delaunay.find ",
        notes:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN,
      },
    ],
  },
  {
    primary_key: "d3-drag",
    published: "2022-03-28",
    post_title: "Drag interactions in SvelteKit with d3-drag",
    thumbnail: "/images/thumbnails/drag.png",
    keywords: ["d3"],
    intro_text:
      "Drag and drop is a pretty common use case, especially in interactive journalism! On a SvelteKit app, you could potentially implement drag and drop with HTML, with Svelte event hooks or with D3-drag. <br/><br/> This article looks at different scenarios and suggests when to use which technology. ",
    components: [
      {
        id: "DragSimple",
        title: "Simple Drag (mouseup/down only)",
        notes:
          "Firstly, I've implemented a simple drag functionality using mouseup and mousedown (from the HTML Drag and Drop Api) Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        component: DragSimple,
      },
      {
        id: "DragD3",
        title: "Drag with d3-drag",
        notes:
          "Next, I looked at implementing dragging functionality with d3-drag. The code is quite straightforward. I bounded a set of circles to the DOM from the within the onMount() hook (because I'm using SvelteKit/SSR). I then called the dragHandler() on the circles to activate dragging.<br/><br/> This serves a purpose and demostrated that it is possible to implement drag using d3.js in SvelteKit. <br/><br/>",
        component: DragD3,
      },
      {
        id: "DragD3Svelte",
        title: "d3-drag on Svelte/HTML elements",
        notes:
          "Finally, I prefer writing SVG elements in HTML, rather than programmatically with D3, so in this example I show how to add dragHandlers to svg elements creating in as HTML/ SVG (not with d3 code).<br/><br/> The benefits of this method are that (to me) it's more readable, less error prone, and you can add other Svelte event listeners/ animations to the SVG elements.",
        component: DragD3Svelte,
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
    published: "2022-04-01",
    post_title: "D3 Force Simulation and Svelte",
    thumbnail: "/images/thumbnails/force.png",
    keywords: ["d3"],
    intro_text:
      "Trying to implment the d3-force in Svelte caused me the most problems of all the d3 libraries! It wasn't until I stumbled upon <a href='https://github.com/happybeing/d3-fdg-svelte'>this repo</a> on GitHub that it all clicked into place, so thanks @happybear! As a result the methods and code I use here borrow heavily from his great work.<br/><br/> Once you understand how to call the simulation, things become clear and you implement any force simulations you can see in the docs.",
    components: [
      {
        id: "ForceSimple",
        title: "Simple Force Simulation",
        notes:
          "Starting off with a simple force x, force y, and force collide. The simulation is initialized within the onMount() hook. The collide simulation prevents nodes from overlapping, the force x and force y simulations spread the nodes across an x and y axis.<br/><br/> All other interactions have been stripped away from this example to keep it as simple as possible.",
        component: ForceSimple,
      },

      {
        id: "ForceRadial",
        title: "Radial Force Simulation",
        notes:
          "Typically, simulations come into their own upon interaction; through drag, zoom, data updates or animations. Drag and zoom interactions have been added in this example and a different type of simulation has been applied - d3.forceRadial(). ",
        component: ForceRadial,
      },
      {
        id: "ForceFull",
        title: "Network graph simulation",
        notes:
          "In this example (mostly from this <a href='https://github.com/happybeing/d3-fdg-svelte'>awesome repo</a> - thanks Mark!), nodes and links are visualized with interacting simulations. ",
        component: ForceFull,
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
    published: "2022-03-30",
    post_title: "Visualizing geo data with D3 and Svelte",
    thumbnail: "/images/thumbnails/geo.png",
    keywords: ["d3"],
    intro_text:
      "This article gives an example of the creation of svg path geomtry with geoJSON with the d3-geo module. I then render the result in a Svelte app. <br/><br/> The d3-geo library is vast and I'll only be starting with a simple example, with the aim to expand on it over time. <br/><br/> This data use in on this page is from <a href='https://datahub.io/examples/geojson-tutorial'>DataHub</a>.",
    components: [
      {
        id: "GeoPath",
        title: "Simple GeoPath",
        notes:
          "In the simplest implmentation of d3.geoPath(), a geoPath generator is created and fed with GeoJSON data. This outputs an svg path description that can be given to an SVG path element.",
        component: GeoPath,
      },
    ],
  },
  {
    primary_key: "d3-hierarchy",
    published: "2022-03-30",
    post_title: "Visualizing hierarchies with D3 and Svelte",
    thumbnail: "/images/thumbnails/hierarchy.png",
    keywords: ["d3"],
    intro_text:
      "We can use d3 to generate lots of visual layouts from hierarchichal data. Typically the process is: 1) construct a hierarchichal model from the data, 2) feed the model into a layout generator such as a circle-packing generator. This gives us the 'instructions' for what to render where with SVG elements. <br/><br/> In this article, we'll look at the basic layout types and look at how we can render them specifically with SvelteKit. This is not a detailed tutorial on how to customize hierarchichal layouts with D3 - for that I recommend the <a href='https://github.com/d3/d3-hierarchy'>D3 docs</a>. <br/><br/> Much of the data/ examples with this section was adapted from <a href='http://using-d3js.com/06_01_hierarchal.html'>using-d3js.com</a> - a great resource for learning more about d3 modules.",
    components: [
      {
        id: "HierarchyTree",
        title: "Tree Layout ",
        notes:
          "If you inspect the code for this first example, you can see the process unfold. First we construction the hierarchichal model with d3.hierarchy(). We then feed this hierarchichal model into a tree layout generator.<br/><br/>This gives us a handy set of instructions to plot our tree layout. ",
        component: HierarchyTree,
      },
      {
        id: "HierarchyCluster",
        title: "Cluster Layout",
        notes:
          "The cluster layout is nearly the same as the tree layout, but instead of passing in an X/Y to the .size() function of the generator, we give it a radius.",
        component: HierarchyCluster,
      },
      {
        id: "HierarchyRadial",
        title: "Radial Layout",
        notes:
          "The radial layout is an extension of the cluster layout. We create a d3.lineRadial() generator function for our radial links and create a path for each of the tree.links(), passing in the source and the target coordinates. To plot our circles, we need to change the cx position to 0 and rotate all points by d.x.",
        component: HierarchyRadial,
      },
      // {
      //   id: "HierarchyTreemap",
      //   title: "Treemap Layout",
      //   notes:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
      //   props: {},
      //   component: HierarchyTreemap,
      // },
      {
        id: "HierarchyPack",
        title: "Circle Packing Layout",
        notes:
          "Once you understand how the preceeding visuals are built, the circle-packing is a simple extension - it follows the same pattern as described above. See the code for more details. ",
        component: HierarchyPack,
      },
    ],
  },
  {
    primary_key: "d3-polygon",
    published: "2022-03-29",
    post_title: "Polygons with D3 and SvelteKit",
    thumbnail: "/images/thumbnails/polygon.png",
    keywords: ["d3"],
    intro_text:
      "The d3-polygon module is relatively simple library for generating 2D polygon geometries from a set of points. ",
    components: [
      {
        id: "PolygonBasic",
        title: "Basic Polygon",
        notes:
          "Starting with the simplest example, I compute the convex hull (read more <a href='https://en.wikipedia.org/wiki/Convex_hull'>here</a>) and then plot the points and the resultant path.",
        component: PolygonBasic,
      },
      {
        id: "PolygonPlus",
        title: "Polygon utilities",
        notes:
          "Now we have seen how to generate then polygons and hulls, we can take advantage of the utility functions that come with it. polygonArea(), polygonCentroid(), polygonLength() and polygonContains() are the functions demonstrated in this example. ",
        component: PolygonPlus,
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
    primary_key: "d3-shape",
    published: "2022-03-29",
    post_title: "D3 Shapes with SvelteKit",
    thumbnail: "/images/thumbnails/shapes.png",
    keywords: ["d3"],
    intro_text:
      "D3 Shape is really at the core of building data visuals. With it, you can produce arcs, pies, lines, areas, curves, links, and stacks. In this article, I'll make one of each of these shapes, specifically in a SvelteKit environment. <br/><br/>Note: the examples I show are intended to show just the basics of how to render all the standard shape types in a Svelte app. This is not meant to be a D3 tutorial, as such. Once you know how to get your D3 shape into Svelte, the possibilities are then endless, and you can add more complexity, typically to shape generator functions.",
    components: [
      {
        id: "ShapeArc",
        title: "D3 Arc",
        notes:
          "D3 Arc on it's own is not too useful but it a good building block for pie charts and chord charts. An arc generator expects an object with the keys: innerRadius, outerRadius, startAngle and endAngle. From this you will get an SVG path, which we can display in our app.",
        component: ShapeArc,
      },
      {
        id: "ShapePie",
        title: "D3 Pie",
        notes:
          "The pie generator takes as input an array of data, and calculates the arc startAngle and endAngle, which we can then feed into our arc generator (seen above).",
        component: ShapePie,
      },
      {
        id: "ShapeLine",
        title: "D3 Line and D3 Curve",
        notes:
          "Given an x-array and a y-array of data, we can also generate line (and then curve) geometry. In this example, the black line represents a simple line generated from from date/value data. <br/><br/> To make this line curved (blue), we can supply the line generator with a number of different curves (see <a href='https://github.com/d3/d3-shape#curves'>d3 docs</a> for more info on this).",
        component: ShapeLine,
      },
      {
        id: "ShapeArea",
        title: "D3 Area",
        notes:
          "Area charts are similar to line charts, but generate a fillable area down to the X-axis (by default). We can generate them with D3 and visualize them in SvelteKit in the same way. ",
        component: ShapeArea,
      },
      {
        id: "ShapeLinks",
        title: "D3 Links",
        notes:
          "The link generator can be useful for a variery of network-type diagrams, hierarchichal charts and general relationship diagramming. The line generator expects an object with source and target keys to define the mapping (see code).<br/><br/> You can customize the style of the link between nodes in lots of different way. Check out the <a href='https://github.com/d3/d3-shape#line'>D3 docs</a> for inspiration. ",
        component: ShapeLinks,
      },
      {
        id: "ShapeStack",
        title: "D3 Stack",
        notes:
          "Stack charts can be made using d3-stack. From the output of the stack generator, you have the choice to render either a stacked bar chart or a stacked area chart. In this example, I chose a bar chart! ",
        component: ShapeStack,
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
    published: "2022-03-31",
    post_title: "Zooming with D3 and Svelte",
    thumbnail: "/images/thumbnails/zoom.png",
    keywords: ["d3"],
    intro_text:
      "Zooming is one of the most difficult aspects of using D3 with a front-end framework like SvelteKit, as it deals with UI interaction, the updating of scales and (sometimes) the redrawing of geometry dynamically. <br/><br/>We begin with a really simple example of Zooming with D3 and SvelteKit and hope to add more advanced configurations in the future. ",
    components: [
      {
        id: "ZoomBasic",
        title: "Simple Zoom",
        notes:
          "We start with a simple zoom implementation adapted from the great site <a href='https://www.d3indepth.com/zoom-and-pan/'>D3 in Depth</a>. More examples will be added to the site as it grows! ",
        component: ZoomBasic,
      },
      // {
      //   id: "ZoomScales",
      //   title: "Zoom with Scales",
      //   notes:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
      //   component: ZoomScales,
      // },
      // {
      //   id: "ZoomBrush",
      //   title: "Zoom Brush",
      //   notes:
      //     "We start with a simple zoom implementation adapted from the great site <a href='https://www.d3indepth.com/zoom-and-pan/'>D3 in Depth</a>.",
      //   component: ZoomBrush,
      // },
      // {
      //   id: "ZoomSvelteUse",
      //   title: "D3 Zoom with use: directive",
      //   notes:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
      //   component: ZoomSvelteUse,
      // },
    ],
  },
];

export default d3CMS;
