import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-8f27b94e.js";
import { d as d3CMS } from "../../../chunks/cms-72afd1c9.js";
import { P as PostGallery } from "../../../chunks/PostGallery-b7008bf2.js";
import "d3";
import "../../../chunks/index-872736db.js";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../chunks/SimplePostCard-7f69de0f.js";
const D3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return `<h1>All posts about D3 &amp; SvelteKit</h1>
${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: filteredData }, {}, {})}`;
});
export { D3 as default };
