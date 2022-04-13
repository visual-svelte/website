import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-72c7b4a0.js";
import { d as d3R } from "../../../chunks/cms-d3-recipes-afb8dee8.js";
import { P as PostGallery } from "../../../chunks/PostGallery-ba46f468.js";
import "d3";
import "../../../chunks/CodeVisual-07135961.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "feather-icons";
import "../../../chunks/ScrollyWrapper-21d5279d.js";
import "../../../chunks/textUtils-aba21c2d.js";
/* empty css                                                                  */import "../../../chunks/stores-391ee53d.js";
const D3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let recipes;
  recipes = d3R.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return `
<h1>D3 + Svelte Recipe Posts</h1>
${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: recipes,
    pathRoute: "/d3/recipes/"
  }, {}, {})}`;
});
export { D3 as default };
