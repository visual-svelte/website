import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/index-0bcf38cf.js";
import { d as d3R } from "../../../chunks/cms-d3-recipes-84d0d2bb.js";
import { d as d3CMS } from "../../../chunks/cms-bd84078b.js";
import { P as PostGallery } from "../../../chunks/PostGallery-51af102a.js";
import "../../../chunks/CodeVisual-c88bf6c4.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "d3";
import "feather-icons";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
/* empty css                                                                  */import "../../../chunks/stores-c3a3bf24.js";
var _tag__svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.holder.svelte-giv5kd.svelte-giv5kd{text-align:left;position:relative;padding:50px 0}.holder.svelte-giv5kd .post-grid.svelte-giv5kd{text-align:center;width:100%;margin-top:150px;max-width:700px;margin:0 auto}",
  map: null
};
async function load(ctx) {
  let slug = ctx.url.pathname;
  const tag_id = slug.split("/").pop();
  const content = d3CMS.filter((records) => records.published && records.keywords.includes(tag_id)).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  const recipes = d3R.filter((records) => records.published && records.keywords.includes(tag_id)).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return { props: { content, recipes, tag_id } };
}
const U5Btagu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { recipes } = $$props;
  let { tag_id } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.recipes === void 0 && $$bindings.recipes && recipes !== void 0)
    $$bindings.recipes(recipes);
  if ($$props.tag_id === void 0 && $$bindings.tag_id && tag_id !== void 0)
    $$bindings.tag_id(tag_id);
  $$result.css.add(css);
  return `<div class="${"holder svelte-giv5kd"}"><p>Explore all content related to the ${escape(tag_id)} tag:
  </p>
  <div class="${"post-grid svelte-giv5kd"}"><h2>D3 API</h2>
    ${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: content, pathRoute: "/d3/api/" }, {}, {})}
    <h2>D3 Recipes</h2>
    ${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: recipes,
    pathRoute: "/d3/recipes/"
  }, {}, {})}</div>
</div>`;
});
export { U5Btagu5D as default, load };
