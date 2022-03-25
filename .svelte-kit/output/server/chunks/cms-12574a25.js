import { c as create_ssr_component, a as subscribe, b as add_attribute } from "./index-58574f58.js";
import * as d3 from "d3";
import { i as innerWidth } from "./screen-47820f5b.js";
let margin$4 = 50;
const AxisSimple = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svg_width;
  let svg_height;
  let height;
  let width;
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let bindSVGHere;
  svg_width = $innerWidth * 0.8 > 500 ? 500 : $innerWidth * 0.8;
  svg_height = $innerWidth * 0.3 > 500 ? 500 : $innerWidth * 0.3 < 400 ? 400 : $innerWidth * 0.3;
  height = svg_height;
  width = svg_width - margin$4 * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width]);
  d3.scaleLinear().domain([100, 0]).range([100, height]);
  $$unsubscribe_innerWidth();
  return `<div${add_attribute("this", bindSVGHere, 0)}></div>`;
});
let margin$3 = 50;
const AxisLog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svg_width;
  let svg_height;
  let height;
  let width;
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let bindSVGHere;
  svg_width = $innerWidth * 0.8 > 500 ? 500 : $innerWidth * 0.8;
  svg_height = $innerWidth * 0.3 > 500 ? 500 : $innerWidth * 0.3 < 400 ? 400 : $innerWidth * 0.3;
  height = svg_height;
  width = svg_width - margin$3 * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width]);
  d3.scaleLog().domain([1e4, 1]).range([100, height]).base(10);
  $$unsubscribe_innerWidth();
  return `<div${add_attribute("this", bindSVGHere, 0)}></div>`;
});
let margin$2 = 40;
const AxisScalePoint = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svg_width;
  let width;
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let bindSVGHere;
  let categories = ["Apple", "Banana", "Cherry", "Donut"];
  svg_width = $innerWidth * 0.8 > 600 ? 600 : $innerWidth * 0.8;
  width = svg_width - margin$2 * 2;
  d3.scalePoint().domain(categories).range([0, width]);
  $$unsubscribe_innerWidth();
  return `<div${add_attribute("this", bindSVGHere, 0)}></div>`;
});
let margin$1 = 40;
const AxisScaleBand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svg_width;
  let width;
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let bindSVGHere;
  svg_width = $innerWidth * 0.8 > 600 ? 600 : $innerWidth * 0.8;
  width = svg_width - margin$1 * 2;
  d3.scaleBand().domain(["Apple", "Banana", "Cherry", "Donut"]).range([0, width]).padding([0.5]);
  $$unsubscribe_innerWidth();
  return `<div${add_attribute("this", bindSVGHere, 0)}></div>`;
});
var AxisLabels_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}.holder.svelte-19par1r .x-axis-label{fill:red !important}",
  map: null
};
let margin = 65;
const AxisLabels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svg_width;
  let svg_height;
  let height;
  let width;
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let bindSVGHere;
  $$result.css.add(css);
  svg_width = $innerWidth * 0.8 > 500 ? 500 : $innerWidth * 0.8;
  svg_height = $innerWidth * 0.6 > 450 ? 40 : $innerWidth * 0.6 < 350 ? 350 : $innerWidth * 0.6;
  height = svg_height;
  width = svg_width - margin * 2;
  d3.scaleLinear().domain([0, 100]).range([0, width]);
  d3.scaleLinear().domain([100, 0]).range([100, height]);
  $$unsubscribe_innerWidth();
  return `<div class="${"holder svelte-19par1r"}"${add_attribute("this", bindSVGHere, 0)}></div>`;
});
let d3CMS = [
  {
    primary_key: "d3-axis",
    published: "2022-03-13",
    post_title: "Implementing D3 Axis in SvelteKit",
    thumbnail: "/images/graph.png",
    keywords: ["d3", "axis"],
    intro_text: "d3-axis provides a set of tools to create and customize graph axes. This article will describe how to create a number of the most useful ones, specifically in SvelteKit. Each axis type is similar but implemented slightly differently. The code for each is provided. ",
    components: [
      {
        id: "AxisSimple",
        title: "Basic axis - scaleLinear()",
        notes: "<span class='test'>d3.scaleLinear()</span>is the most basic axis type - it allows you to create linearly incremented axes. ",
        component: AxisSimple
      },
      {
        id: "AxisLog",
        title: "Log scale - scaleLog()",
        notes: "To create a logarithmic axis, we need to use the <span>scaleLog()</span> generator (see code block below for full example). The rest of the implementation in SvelteKit is the same as the <span class='test'>d3.scaleLinear()</span> example above. <br/><br/> I have also added a <span class='test'>tickFormat()</span> to make it easy for the reader to see that a logarithmic scale is being used.",
        component: AxisLog
      },
      {
        id: "AxisScalePoint",
        title: "Categorical axis - scalePoint()",
        notes: "Axes for categorical data can be created using either the <span>scalePoint()</span> or the <span>scaleBand()</span> functions. <span>scalePoint()</span> is typically used with points and scatter plots; when the data/visual marker you are plotting does not have a width.<br/><br/><span>scaleBand()</span>(as we see in the next example below) is typically used with bar charts and histograms.",
        component: AxisScalePoint
      },
      {
        id: "AxisScaleBand",
        title: "Categorical (bars) - scaleBand()",
        notes: "The <span>scaleBand()</span> scale is implemented similarly to the previous <span>scalePoint()</span> but we add <span>.padding([0.5])</span> to the end of the construction chain. <br/><br/> This tells D3 to generate an axis with a bandwidth (retrievable using <span>x.bandwith()</span> where x is what you named your scaleBand(). This can then be passed to the svg rect to dictate the width of the 'bar').",
        component: AxisScaleBand
      },
      {
        id: "AxisLabels",
        title: "Axis Labels",
        notes: "Axis labels can be added by appending a 'text' to the svg that holds our axes (see example code below). Sometimes you will have to manually adjust the positioning to fit margin constraints.<br/><br/>You will notice I've added a custom style to the x-axis label. To do this, I first added a class attribute to the axis label upon creation <span>.attr('class', 'x-axis-label')</span> and then in the style-tags of the Svelte file for your component, add whichever styles you like. You like need to use <span>:global(.x-axis-label)</span> to target the element. See the full code for more details!",
        component: AxisLabels
      }
    ]
  },
  {
    primary_key: "d3-brush",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-chord",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-color",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-contour",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-delaunay",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-dispatch",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-drag",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-dsv",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-ease",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-fetch",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-force",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-format",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-geo",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-hierarchy",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-interpolate",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-path",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-polygon",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-quadtree",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-random",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-scale-chromatic",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-scale",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-selection",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-shape",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-time-format",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-time",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-timer",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-transition",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  },
  {
    primary_key: "d3-zoom",
    published: "",
    post_title: "",
    thumbnail: "",
    keywords: ["d3"],
    intro_text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are al",
    components: [
      {
        id: "",
        title: "",
        notes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quod omnis enim quae, obcaecati sed a officiis sit nesciunt blanditiis consequatur, pariatur ipsa quidem ipsam velit porro? Porro, modi molestias.",
        props: {},
        component: NaN
      }
    ]
  }
];
export { d3CMS as d };
