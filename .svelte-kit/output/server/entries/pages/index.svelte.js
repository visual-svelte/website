import { c as create_ssr_component, g as subscribe, v as validate_component, b as each } from "../../chunks/index-769cbf91.js";
import { M as Meta } from "../../chunks/Meta-c267e72e.js";
import { a as allArticles } from "../../chunks/cms-86c250c1.js";
import { P as PostGallery } from "../../chunks/PostGallery-375b0247.js";
import { p as page } from "../../chunks/stores-85ad27c0.js";
import "../../chunks/cms-svelte-a7c6b755.js";
import "d3";
import "d3-scale";
import "d3-selection";
import "d3-axis";
import "d3-brush";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-drag";
import "d3-force";
import "d3-shape";
import "d3-array";
import "d3-geo";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                */import "feather-icons";
import "d3-interpolate";
import "../../chunks/textUtils-217980c7.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.all.svelte-jyumw3.svelte-jyumw3{padding-top:5rem;background-color:var(--dark);color:var(--off-white)}.all.svelte-jyumw3 .top .circle.svelte-jyumw3{z-index:1;height:300px;width:300px;right:20px;top:20px;border-radius:100%;position:absolute;background:linear-gradient(295deg, rgba(255, 255, 255, 0.2), rgba(30, 29, 29, 0) 50%);z-index:1}.all.svelte-jyumw3 .top .header.svelte-jyumw3{max-width:300px;text-align:center;padding:1.5rem 4rem;margin:0 auto;position:relative}.all.svelte-jyumw3 .top .header.svelte-jyumw3:before{content:"";position:absolute;top:0px;width:20px;height:1px;border-bottom:var(--off-white)}.posts.svelte-jyumw3 h2.svelte-jyumw3{text-align:center;padding:6rem;margin:0}.posts.svelte-jyumw3 h2.svelte-jyumw3:before{border:none}',
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let posts;
  let $allArticles, $$unsubscribe_allArticles;
  let $page, $$unsubscribe_page;
  $$unsubscribe_allArticles = subscribe(allArticles, (value) => $allArticles = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let metadata = {
    t: "Home | VisualSvelte",
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: $page.url.pathname
  };
  let cats = ["api", "chart", "svelte"];
  $$result.css.add(css);
  posts = {
    api: $allArticles.filter((d) => d.cat == "D3 API"),
    chart: $allArticles.filter((d) => d.cat == "D3 Charts"),
    svelte: $allArticles.filter((d) => d.cat == "Svelte")
  };
  $$unsubscribe_allArticles();
  $$unsubscribe_page();
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}

<div class="${"all svelte-jyumw3"}"><div class="${"top"}"><h1 class="${"header svelte-jyumw3"}">the craft of visual storytelling with Svelte</h1>
    <div class="${"circle svelte-jyumw3"}"></div>
    <div class="${"mission"}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eius optio,
      magnam quam deleniti eum repellendus sequi! Possimus, ipsum earum aliquam
      tempora expedita sint dolorum, nisi repudiandae dicta itaque fuga!
    </div></div>

  <div class="${"posts svelte-jyumw3"}"><h2 class="${"svelte-jyumw3"}">Explore articles, by category</h2>

    ${each(cats, (cat) => {
    return `${posts[cat]?.length ? `${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: posts[cat], title: true, cat }, {}, {})}` : ``}`;
  })}</div>
</div>`;
});
export { Routes as default };
