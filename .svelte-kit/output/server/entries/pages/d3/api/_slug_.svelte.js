import { c as create_ssr_component, b as each, e as escape, a as add_attribute, v as validate_component } from "../../../../chunks/index-769cbf91.js";
import { m as metaFromRecord } from "../../../../chunks/textUtils-39f3d08b.js";
import { d as d3CMS, F as FormattedExample } from "../../../../chunks/cms-svelte-89dc672e.js";
import { M as Meta } from "../../../../chunks/Meta-5a17e0cf.js";
import { S as StoryHeader, T as Thanks } from "../../../../chunks/Thanks-e0d2a89e.js";
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
/* empty css                                                                      */import "feather-icons";
import "d3-interpolate";
import "../../../../chunks/screen-a99cf991.js";
import "../../../../chunks/cms-b70a773a.js";
var OnThisPage_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "li.svelte-1lrdn70{margin-top:0.5rem}",
  map: null
};
const OnThisPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { points } = $$props;
  if ($$props.points === void 0 && $$bindings.points && points !== void 0)
    $$bindings.points(points);
  $$result.css.add(css$2);
  return `<div><p>In this post:</p>
  ${each(points, (point) => {
    return `<li class="${"svelte-1lrdn70"}"><a href="${"#" + escape(point.id)}">${escape(point.title)}</a>
    </li>`;
  })}
</div>`;
});
var GitHubLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-nh07a1{background-color:rgba(119, 227, 35, 0.15);margin:40px 0;border-radius:20px;padding:20px}",
  map: null
};
const GitHubLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { d3module } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.d3module === void 0 && $$bindings.d3module && d3module !== void 0)
    $$bindings.d3module(d3module);
  $$result.css.add(css$1);
  return `<div class="${"svelte-nh07a1"}">Note: this page shows you how to implment the ${escape(d3module)} module in Svelte. For
  more details about the ${escape(d3module)} module, please consult the
  <a${add_attribute("href", url, 0)}>docs on GitHub</a>.
</div>`;
});
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-akwm3n{margin:0 auto;padding:10px;max-width:700px}",
  map: null
};
async function load(ctx) {
  const primaryKey = ctx.params.slug;
  const content = d3CMS.find((record) => record.primary_key == primaryKey);
  content ? content["cat"] = "D3 API (in Svelte)" : console.log("");
  let metadata = metaFromRecord(content, ctx.url.pathname);
  return { props: { content, metadata } };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { metadata } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  $$result.css.add(css);
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}
${validate_component(StoryHeader, "StoryHeader").$$render($$result, { data: content }, {}, {})}
<div class="${"wrapper svelte-akwm3n"}"><div id="${"intro"}" class="${"intro"}">${validate_component(GitHubLink, "GitHubLink").$$render($$result, {
    d3module: content?.primary_key,
    url: `https://github.com/d3/${content.primary_key}`
  }, {}, {})}
    ${validate_component(OnThisPage, "OnThisPage").$$render($$result, { points: content?.components }, {}, {})}</div>
  ${each(content?.components, (comp, i) => {
    return `${validate_component(FormattedExample, "FormattedExample").$$render($$result, { comp, route: "d3/" }, {}, {})}`;
  })}
  ${validate_component(Thanks, "Thanks").$$render($$result, {}, {}, {})}
</div>`;
});
export { U5Bslugu5D as default, load };
