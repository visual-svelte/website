import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-72c7b4a0.js";
import { d as d3CMS } from "../../../../chunks/cms-b18b059f.js";
import { P as PostGallery } from "../../../../chunks/PostGallery-ba46f468.js";
import "d3";
import "../../../../chunks/index-3ce3f00f.js";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../../chunks/textUtils-aba21c2d.js";
/* empty css                                                                     */import "../../../../chunks/stores-391ee53d.js";
const Api = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return `<h1>All API posts about D3 &amp; Svelte</h1>
<p>We walk through all the key modules in the D3.js API and implmenet them in
  Svelte
</p>
${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: filteredData,
    pathRoute: "/d3/api/"
  }, {}, {})}`;
});
export { Api as default };
