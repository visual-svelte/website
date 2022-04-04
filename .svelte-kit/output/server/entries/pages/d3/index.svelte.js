import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-02532eaa.js";
import { d as d3CMS } from "../../../chunks/cms-f956b8af.js";
import { P as PostGallery } from "../../../chunks/PostGallery-5ae5768e.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../chunks/SimplePostCard-778ec895.js";
/* empty css                                                                     *//* empty css                                                                  */const D3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
