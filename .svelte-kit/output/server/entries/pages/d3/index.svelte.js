import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-0bcf38cf.js";
import { d as d3CMS } from "../../../chunks/cms-bd84078b.js";
import { d as d3R } from "../../../chunks/cms-d3-recipes-84d0d2bb.js";
import { P as PostGallery } from "../../../chunks/PostGallery-51af102a.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../chunks/CodeVisual-c88bf6c4.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "feather-icons";
/* empty css                                                                  */import "../../../chunks/stores-c3a3bf24.js";
const D3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  let recipes;
  filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  recipes = d3R.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return `<h1>D3 API Posts</h1>
${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: filteredData,
    pathRoute: "/d3/api/"
  }, {}, {})}
<h1>D3 + Svelte Recipe Posts</h1>
${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: recipes,
    pathRoute: "/d3/recipes/"
  }, {}, {})}`;
});
export { D3 as default };
