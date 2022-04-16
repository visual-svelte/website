import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-1116a07c.js";
import { d as d3R } from "../../../chunks/cms-d3-recipes-e32f5c0e.js";
import { P as PostGallery } from "../../../chunks/PostGallery-4ef78255.js";
import "d3";
import "d3-array";
import "../../../chunks/CodeVisual-531fc077.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "../../../chunks/ScrollyWrapper-db835c0e.js";
import "feather-icons";
import "../../../chunks/textUtils-aba21c2d.js";
/* empty css                                                                  */import "../../../chunks/stores-ca089767.js";
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
