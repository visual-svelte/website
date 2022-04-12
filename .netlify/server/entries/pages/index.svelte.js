import { c as create_ssr_component, g as subscribe, v as validate_component } from "../../chunks/index-0bcf38cf.js";
import { M as Meta } from "../../chunks/Meta-f1f3e786.js";
import { d as d3CMS } from "../../chunks/cms-bd84078b.js";
/* empty css                                                               */import { p as page } from "../../chunks/stores-c3a3bf24.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.spacer.svelte-14zcl.svelte-14zcl{min-height:50vh;text-align:center}.blank.svelte-14zcl.svelte-14zcl{height:400px;width:100%}.bottom-section.svelte-14zcl.svelte-14zcl{text-align:center;margin-top:150px;max-width:700px;margin:0 auto}.intro.svelte-14zcl.svelte-14zcl{padding:10vh 0px}.intro.svelte-14zcl h1.svelte-14zcl{text-align:center;margin:0}.text.svelte-14zcl.svelte-14zcl{max-width:700px;margin:0 auto 100px auto;text-align:center}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let metadata = {
    t: "Home | VisualSvelte",
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: $page.url.pathname
  };
  $$result.css.add(css);
  d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  $$unsubscribe_page();
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}
<div class="${"spacer svelte-14zcl"}">
  <div class="${"intro svelte-14zcl"}"><h1 class="${"svelte-14zcl"}">Unlock your</h1>
    <h1 class="${"svelte-14zcl"}"><span>visual storytelling superpowers</span></h1>
    <h1 class="${"svelte-14zcl"}">with Svelte</h1></div>
  </div>
${`<div class="${"blank svelte-14zcl"}"></div>`}`;
});
export { Routes as default };
