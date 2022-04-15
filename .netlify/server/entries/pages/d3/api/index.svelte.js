import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-1116a07c.js";
import { d as d3CMS } from "../../../../chunks/cms-ede64cff.js";
import { P as PostGallery } from "../../../../chunks/PostGallery-4ef78255.js";
import "d3";
import "../../../../chunks/index-46acc537.js";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../../chunks/textUtils-aba21c2d.js";
/* empty css                                                                     */import "../../../../chunks/stores-ca089767.js";
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
