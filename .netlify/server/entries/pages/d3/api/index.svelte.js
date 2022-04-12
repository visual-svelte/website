import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-0bcf38cf.js";
import { d as d3CMS } from "../../../../chunks/cms-bd84078b.js";
import { P as PostGallery } from "../../../../chunks/PostGallery-51af102a.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
/* empty css                                                                     */import "../../../../chunks/stores-c3a3bf24.js";
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
