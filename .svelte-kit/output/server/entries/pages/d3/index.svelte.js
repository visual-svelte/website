import { c as create_ssr_component, g as subscribe, v as validate_component } from "../../../chunks/index-769cbf91.js";
import { P as PostGallery } from "../../../chunks/PostGallery-375b0247.js";
import { a as allArticles } from "../../../chunks/cms-86c250c1.js";
import "../../../chunks/textUtils-217980c7.js";
import "../../../chunks/stores-85ad27c0.js";
import "../../../chunks/cms-svelte-a7c6b755.js";
import "d3";
import "d3-scale";
import "d3-selection";
import "d3-axis";
import "d3-brush";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-drag";
import "d3-force";
import "d3-shape";
import "d3-array";
import "d3-geo";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "feather-icons";
import "d3-interpolate";
const D3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $allArticles, $$unsubscribe_allArticles;
  $$unsubscribe_allArticles = subscribe(allArticles, (value) => $allArticles = value);
  let apiArticles = $allArticles.filter((d) => d.cat == "D3 API");
  let chartArticles = $allArticles.filter((d) => d.cat == "D3 Charts");
  console.log("charts", apiArticles);
  $$unsubscribe_allArticles();
  return `${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: apiArticles,
    cat: "api",
    title: true,
    scroll: false
  }, {}, {})}
${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: chartArticles,
    cat: "chart",
    title: true,
    scroll: false
  }, {}, {})}`;
});
export { D3 as default };
