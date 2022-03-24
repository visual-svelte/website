import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/index-58574f58.js";
import { d as d3CMS } from "../../../../chunks/cms-a4e52834.js";
import { P as PostGallery } from "../../../../chunks/PostGallery-c4a250c9.js";
import { p as page } from "../../../../chunks/stores-53fa375a.js";
import "d3";
import "../../../../chunks/screen-47820f5b.js";
import "../../../../chunks/index-79b72b18.js";
import "../../../../chunks/SimplePostCard-8d7ed45f.js";
const Api = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page);
  filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  $$unsubscribe_page();
  return `<h1>All API posts about D3 &amp; SvelteKit</h1>
<p>We walk through all the key modules in the D3.js API and implmenet them in
  SvelteKit
</p>
${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: filteredData }, {}, {})}`;
});
export { Api as default };