import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index-58574f58.js";
import { d as d3CMS } from "../../chunks/cms-12574a25.js";
import { P as PostGallery } from "../../chunks/PostGallery-c4a250c9.js";
import { p as page } from "../../chunks/stores-53fa375a.js";
import "d3";
import "../../chunks/screen-47820f5b.js";
import "../../chunks/index-79b72b18.js";
import "../../chunks/SimplePostCard-8d7ed45f.js";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({
    t: "Home | VisualSvelte",
    d: "",
    u: $page.url.pathname
  });
  filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  $$unsubscribe_page();
  return `
<p>An educational site providing code and examples of great data visualizations
  and visual journalism with <a href="${"https://kit.svelte.dev/"}">SvelteKit</a>.
</p>

<p>This site was born out of my own frustrations on the learning curve of both
  D3.js and Javascript/ CSS/ HTML.
</p>
<p>I&#39;m creating the resource I wish I had to learn faster.</p>
<p>You can read more about how and why I&#39;m doing that, <a href="${"/about"}">here</a>.
</p>

<p>Intially, the focus focus will be on the legendary D3.js and how to implement
  the whole library in SvelteKit.
</p>


${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: filteredData }, {}, {})}`;
});
export { Routes as default };
