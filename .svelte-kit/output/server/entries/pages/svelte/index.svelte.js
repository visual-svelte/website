import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-72c7b4a0.js";
import { c as cmsSvelte } from "../../../chunks/cms-svelte-f0b68b1d.js";
import { P as PostGallery } from "../../../chunks/PostGallery-ba46f468.js";
import "../../../chunks/ScrollyWrapper-21d5279d.js";
import "../../../chunks/CodeVisual-07135961.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "d3";
import "../../../chunks/index-3ce3f00f.js";
import "../../../chunks/FormattedExample-1cda2b50.js";
import "../../../chunks/textUtils-aba21c2d.js";
/* empty css                                                                  */import "../../../chunks/stores-391ee53d.js";
const Svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  filteredData = cmsSvelte.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return `<h1>Svelte for Data Visualization</h1>
${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: filteredData,
    pathRoute: "/svelte/"
  }, {}, {})}

`;
});
export { Svelte as default };
