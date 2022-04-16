import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-1116a07c.js";
import { c as cmsSvelte } from "../../../chunks/cms-svelte-30943fed.js";
import { P as PostGallery } from "../../../chunks/PostGallery-4ef78255.js";
import "../../../chunks/ScrollyWrapper-db835c0e.js";
import "feather-icons";
import "../../../chunks/CodeVisual-531fc077.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "d3";
import "../../../chunks/index-46acc537.js";
import "../../../chunks/FormattedExample-af8cc064.js";
import "d3-array";
import "d3-interpolate";
import "../../../chunks/textUtils-aba21c2d.js";
/* empty css                                                                  */import "../../../chunks/stores-ca089767.js";
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
