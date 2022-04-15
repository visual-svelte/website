import { c as create_ssr_component, e as escape, b as each, v as validate_component } from "./index-1116a07c.js";
import { P as PostGallery } from "./PostGallery-4ef78255.js";
import { K as Kofi } from "./Kofi-a6aeeddc.js";
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
export { StoryHeader as S, Thanks as T };
