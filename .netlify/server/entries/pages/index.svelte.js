import { c as create_ssr_component, g as subscribe, v as validate_component, b as each, a as add_attribute, e as escape } from "../../chunks/index-769cbf91.js";
import { M as Meta } from "../../chunks/Meta-5a17e0cf.js";
import { a as allArticles } from "../../chunks/cms-b70a773a.js";
import { P as PostGallery } from "../../chunks/PostGallery-27c9cccc.js";
import { p as page } from "../../chunks/stores-85ad27c0.js";
import { B as BrandShape } from "../../chunks/BrandShape-d1421571.js";
import "../../chunks/cms-svelte-89dc672e.js";
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
import "../../chunks/textUtils-39f3d08b.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.all.svelte-15pf3l6.svelte-15pf3l6{background-color:var(--dark);color:var(--off-white);position:relative}.all.svelte-15pf3l6 .top-grid.svelte-15pf3l6{padding:10vw 0rem 3rem;max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 400px));gap:3rem}.all.svelte-15pf3l6 .top-grid .top.svelte-15pf3l6{position:relative}.all.svelte-15pf3l6 .top-grid .top p.svelte-15pf3l6{position:absolute;right:4rem;color:gray;font-size:0.8rem;top:-10px;font-style:italic}.all.svelte-15pf3l6 .top-grid .top .circle.svelte-15pf3l6{z-index:1;height:300px;width:300px;left:0px;top:0px;border-radius:100%;position:absolute;background:linear-gradient(125deg, rgba(255, 255, 255, 0.2), rgba(30, 29, 29, 0) 50%);z-index:1}.all.svelte-15pf3l6 .top-grid .top .header.svelte-15pf3l6{max-width:300px;text-align:end;margin-top:1rem;padding:1rem 3rem;margin:2rem auto;position:relative}.all.svelte-15pf3l6 .top-grid .top .header.svelte-15pf3l6:before{content:"";position:absolute;top:0px;right:4rem;width:20px;height:1px;background:var(--off-white)}.all.svelte-15pf3l6 .top-grid .options.svelte-15pf3l6{overflow-x:hidden !important;min-height:240px;max-width:300px;margin:1rem 2rem;display:grid;grid-template-rows:repeat(auto-fit, minmax(80px, 80px))}.all.svelte-15pf3l6 .top-grid .options .option.svelte-15pf3l6{color:var(--off-white);text-decoration:none;display:grid;grid-template-columns:1fr 4fr}.all.svelte-15pf3l6 .top-grid .options .option h2.svelte-15pf3l6{margin:0px;margin-left:20px;width:50px;line-height:1rem}.all.svelte-15pf3l6 .top-grid .options .option h2.svelte-15pf3l6::before{border:none}.all.svelte-15pf3l6 .mission.svelte-15pf3l6{text-align:center;max-width:800px;margin:0 auto;padding:20vh 5vw}.all.svelte-15pf3l6 .mission a.svelte-15pf3l6{color:var(--off-white)}.posts.svelte-15pf3l6 h2.svelte-15pf3l6{text-align:center;padding:6rem;margin:0}.posts.svelte-15pf3l6 h2.svelte-15pf3l6:before{border:none}',
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let posts;
  let $allArticles, $$unsubscribe_allArticles;
  let $page, $$unsubscribe_page;
  $$unsubscribe_allArticles = subscribe(allArticles, (value) => $allArticles = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let metadata = {
    id: "Home",
    t: "Home | VisualSvelte",
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: $page.url.pathname
  };
  let options = [
    {
      text: "Learn",
      shape: "circle",
      href: "#learn"
    },
    {
      text: "About",
      shape: "square",
      href: "#about"
    },
    {
      text: "Support",
      shape: "triangle",
      href: "/"
    }
  ];
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

<div class="${"all svelte-15pf3l6"}"><div class="${"top-grid svelte-15pf3l6"}"><div class="${"top svelte-15pf3l6"}"><div class="${"circle svelte-15pf3l6"}"></div>
      <p class="${"svelte-15pf3l6"}">dedicated to</p>
      <h1 class="${"header svelte-15pf3l6"}">the craft of visual storytelling with Svelte</h1></div>

    <div class="${"options svelte-15pf3l6"}">${each(options, (o, i) => {
    return `<a${add_attribute("href", o.href, 0)} rel="${"internal"}" class="${"option svelte-15pf3l6"}" style="${"transform:translateX(" + escape(i * 50) + "px)"}">${validate_component(BrandShape, "BrandShape").$$render($$result, { shape: o.shape, height: "50px" }, {}, {})}
          <h2 class="${"svelte-15pf3l6"}">${escape(o.text)}</h2>
        </a>`;
  })}</div></div>
  <div class="${"mission svelte-15pf3l6"}" id="${"about"}"><h2 class="${"svelte-15pf3l6"}">About visualsvelte</h2>
    I created visualsvelte to make it as easy as possible for non-software engineers
    to create wow-inducing interactive stories that change the world (or at least
    look cool!).<br><br> Svelte is quickly becoming the tool-of-choice for
    visual storytellers, so let&#39;s master the art, together.
    <br><br>
    <a href="${"/about"}" class="${"svelte-15pf3l6"}">Read more about visualsvelte</a></div>

  <div id="${"learn"}" class="${"posts svelte-15pf3l6"}"><h2 class="${"svelte-15pf3l6"}">Explore articles, by category</h2>

    ${each(cats, (cat) => {
    return `${posts[cat]?.length ? `${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: posts[cat], title: true, cat }, {}, {})}` : ``}`;
  })}</div>
</div>`;
});
export { Routes as default };
