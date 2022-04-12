import { c as create_ssr_component, e as escape, b as each, v as validate_component, m as missing_component } from "../../../../chunks/index-0bcf38cf.js";
import { d as d3CMS } from "../../../../chunks/cms-bd84078b.js";
import { d as d3R } from "../../../../chunks/cms-d3-recipes-84d0d2bb.js";
import { P as PostGallery } from "../../../../chunks/PostGallery-51af102a.js";
import { K as Kofi } from "../../../../chunks/Kofi-be4415bc.js";
import { M as Meta } from "../../../../chunks/Meta-f1f3e786.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../../chunks/CodeVisual-c88bf6c4.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                      */import "feather-icons";
/* empty css                                                                     */import "../../../../chunks/stores-c3a3bf24.js";
var StoryHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.header.svelte-gv4z45.svelte-gv4z45{text-align:center;width:80%;margin:0 auto 50px auto;padding-bottom:100px;position:relative;border-bottom:var(--c-green) 2px solid}.header.svelte-gv4z45 .sub.svelte-gv4z45{margin:50px 0}.header.svelte-gv4z45 .tags.svelte-gv4z45{display:flex;position:absolute;left:50%;transform:translate(-50%, 0);gap:10px;flex-wrap:wrap}@media(max-width: 600px){.header.svelte-gv4z45 .tags.svelte-gv4z45{width:90%}}.header.svelte-gv4z45 .tags .tag.svelte-gv4z45{text-decoration:none;transition:all 0.3s;background-color:rgba(237, 237, 237, 0.4);padding:3px 10px;cursor:pointer;border:1px solid gray}.header.svelte-gv4z45 .tags .tag.svelte-gv4z45:hover{background-color:white;transform:scale(1.05)}",
  map: null
};
const StoryHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<div class="${"header svelte-gv4z45"}"><h1>${escape(data.post_title)}</h1>
  <p class="${"sub svelte-gv4z45"}"><!-- HTML_TAG_START -->${data.intro_text}<!-- HTML_TAG_END --></p>
  <div class="${"tags svelte-gv4z45"}">Tags:
    ${each(data.keywords, (tag) => {
    return `<a class="${"tag svelte-gv4z45"}" href="${"/tags/" + escape(tag)}" rel="${"interal"}">${escape(tag)}</a>`;
  })}</div>
</div>`;
});
var Thanks_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1pv7oei{max-width:600px;margin:100px auto 0 auto}.kofi-cup.svelte-1pv7oei{margin:30px;display:inline-block}",
  map: null
};
const Thanks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-1pv7oei"}"><h2>Thanks for viewing!</h2>
  <p>If you found any of my ramblings or code examples useful, please consider
    supporting this blog so I can make more tutorials:
  </p>

  <div class="${"kofi-cup svelte-1pv7oei"}">${validate_component(Kofi, "Kofi").$$render($$result, {}, {}, {})}</div>

  <h2>You might also like:</h2>
  ${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: data,
    showMax: 3,
    pathRoute: "/d3/api/"
  }, {}, {})}
</div>`;
});
function compontentizeString(string) {
  let splits = string.split("-");
  let results = splits.map((el) => {
    const upper = el.charAt(0)?.toUpperCase();
    const concat = upper.concat(el.slice(1));
    return concat;
  });
  return results.join("");
}
async function load(ctx) {
  let slug = ctx.url.pathname;
  const primaryKey = slug.split("/").pop();
  let compName = compontentizeString(primaryKey);
  const content = d3R.find((record) => record.primary_key == compName);
  let filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  let metadata = {
    t: `${content?.post_title} | VisualSvelte`,
    d: content.intro_text,
    u: slug,
    tags: content.keywords.join()
  };
  return {
    props: { filteredData, content, metadata }
  };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metadata } = $$props;
  let { filteredData } = $$props;
  let { content } = $$props;
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  if ($$props.filteredData === void 0 && $$bindings.filteredData && filteredData !== void 0)
    $$bindings.filteredData(filteredData);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}
${validate_component(StoryHeader, "StoryHeader").$$render($$result, { data: content }, {}, {})}
${validate_component(content.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
${validate_component(Thanks, "Thanks").$$render($$result, { data: filteredData }, {}, {})}`;
});
export { U5Bslugu5D as default, load };
