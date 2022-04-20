import { c as create_ssr_component, g as subscribe, v as validate_component, e as escape } from "../../../chunks/index-769cbf91.js";
import { u as urlToText } from "../../../chunks/textUtils-217980c7.js";
import { P as PostGallery } from "../../../chunks/PostGallery-375b0247.js";
import { M as Meta } from "../../../chunks/Meta-c267e72e.js";
import { a as allArticles } from "../../../chunks/cms-86c250c1.js";
import "../../../chunks/stores-85ad27c0.js";
import "../../../chunks/cms-svelte-a7c6b755.js";
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
/* empty css                                                                   */import "feather-icons";
import "d3-interpolate";
var _tag__svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.holder.svelte-1q1hgo4.svelte-1q1hgo4{text-align:left;position:relative;padding-top:50px}.holder.svelte-1q1hgo4 h1.svelte-1q1hgo4{padding-left:10px;max-width:1000px;margin:0 auto}",
  map: null
};
async function load(ctx) {
  let tag_id = urlToText(ctx.url.pathname);
  let metadata = {
    t: `${tag_id.upperTag} articles | VisualSvelte`,
    d: `Articles with the tags ${tag_id.upperTag}`,
    u: ctx.url.pathname,
    tags: [tag_id.lowerTag, "tag"]
  };
  return { props: { tag_id, metadata } };
}
const U5Btagu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtered;
  let $allArticles, $$unsubscribe_allArticles;
  $$unsubscribe_allArticles = subscribe(allArticles, (value) => $allArticles = value);
  let { metadata } = $$props;
  let { tag_id } = $$props;
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  if ($$props.tag_id === void 0 && $$bindings.tag_id && tag_id !== void 0)
    $$bindings.tag_id(tag_id);
  $$result.css.add(css);
  filtered = $allArticles.filter((d) => d.keywords.includes(tag_id.lowerTag));
  $$unsubscribe_allArticles();
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}

<div class="${"holder svelte-1q1hgo4"}"><h1 class="${"svelte-1q1hgo4"}">${escape(filtered ? filtered.length : 0)}
    ${escape(filtered.length == 1 ? "article" : "articles")} with the ${escape(tag_id.upperTag)} tag:
  </h1>
  ${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: filtered,
    title: false,
    scroll: false,
    cat: "api"
  }, {}, {})}
</div>`;
});
export { U5Btagu5D as default, load };
