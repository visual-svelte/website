import { c as create_ssr_component, d as subscribe, v as validate_component } from "../../chunks/index-8f27b94e.js";
import { d as d3CMS } from "../../chunks/cms-72afd1c9.js";
import { P as PostGallery } from "../../chunks/PostGallery-b7008bf2.js";
import { p as page } from "../../chunks/stores-ff302e64.js";
import "d3";
import "../../chunks/index-872736db.js";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../chunks/SimplePostCard-7f69de0f.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-13thy5r{text-align:center;margin:50px 0px}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredData;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({
    t: "Home | VisualSvelte",
    d: "",
    u: $page.url.pathname
  });
  $$result.css.add(css);
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
<h1>Techniques for powerful, visual storytelling with Svelte</h1>
<div class="${"svelte-13thy5r"}"><p>An educational site providing code and examples of great data visualizations
    and visual journalism with <a href="${"https://kit.svelte.dev/"}">SvelteKit</a>.
  </p>

  <p>This site was born out of my own frustrations on the learning curve of both
    D3.js and Javascript/ CSS/ HTML.
  </p>
  <p>I&#39;m creating the resource I wish I had to learn faster.</p>
  <p>You can read more about how and why I&#39;m doing that, <a href="${"/about"}">here</a>.
  </p>

  <p>Intially, the focus focus will be on the legendary D3.js and how to
    implement the whole library in SvelteKit.
  </p></div>

<h2>Recent D3 &amp; SvelteKit Series:</h2>
${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: filteredData }, {}, {})}`;
});
export { Routes as default };
