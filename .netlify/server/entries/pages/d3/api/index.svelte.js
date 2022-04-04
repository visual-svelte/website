import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-b8b7f0d9.js";
import { d as d3CMS } from "../../../../chunks/cms-04ea08e6.js";
import { P as PostGallery } from "../../../../chunks/PostGallery-56ad1cdd.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../../chunks/SimplePostCard-a6cd209b.js";
/* empty css                                                                        */import "../../../../chunks/stores-9d6a58c7.js";
/* empty css                                                                     */const Api = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return `<h1>All API posts about D3 &amp; SvelteKit</h1>
<p>We walk through all the key modules in the D3.js API and implmenet them in
  SvelteKit
</p>
${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: filteredData }, {}, {})}`;
});
export { Api as default };
