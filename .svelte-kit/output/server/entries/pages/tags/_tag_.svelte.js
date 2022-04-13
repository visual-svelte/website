import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index-72c7b4a0.js";
import { u as urlToText } from "../../../chunks/textUtils-aba21c2d.js";
import { c as cmsSvelte } from "../../../chunks/cms-svelte-f0b68b1d.js";
import { d as d3R } from "../../../chunks/cms-d3-recipes-afb8dee8.js";
import { d as d3CMS } from "../../../chunks/cms-b18b059f.js";
import { P as PostGallery } from "../../../chunks/PostGallery-ba46f468.js";
import { M as Meta } from "../../../chunks/Meta-c7bef519.js";
import "../../../chunks/ScrollyWrapper-21d5279d.js";
import "../../../chunks/CodeVisual-07135961.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                   */import "d3";
import "../../../chunks/index-3ce3f00f.js";
import "../../../chunks/FormattedExample-1cda2b50.js";
import "feather-icons";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
/* empty css                                                                  */import "../../../chunks/stores-391ee53d.js";
var _tag__svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.holder.svelte-giv5kd.svelte-giv5kd{text-align:left;position:relative;padding:50px 0}.holder.svelte-giv5kd .post-grid.svelte-giv5kd{text-align:center;width:100%;margin-top:150px;max-width:700px;margin:0 auto}",
  map: null
};
async function load(ctx) {
  let tag_id = urlToText(ctx.url.pathname);
  const content = d3CMS.filter((records) => records.published && records.keywords.includes(tag_id.lowerTag)).map((post) => {
    return {
      id: post.primary_key,
      cat: "D3 API",
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  const recipes = d3R.filter((records) => records.published && records.keywords.includes(tag_id.lowerTag)).map((post) => {
    return {
      id: post.primary_key,
      cat: "D3 Recipes",
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  const svelteArticles = cmsSvelte.filter((records) => records.published && records.keywords.includes(tag_id.lowerTag)).map((post) => {
    return {
      id: post.primary_key,
      cat: "Svelte",
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  let allArticles = [...svelteArticles, ...content, ...recipes];
  let metadata = {
    t: `${tag_id.upperTag} articles | VisualSvelte`,
    d: `Articles with the tags ${tag_id.upperTag}`,
    u: ctx.url.pathname,
    tags: [tag_id.lowerTag, "tag"]
  };
  return { props: { allArticles, tag_id, metadata } };
}
const U5Btagu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { allArticles } = $$props;
  console.log("allArticles", allArticles);
  let { metadata } = $$props;
  let { tag_id } = $$props;
  if ($$props.allArticles === void 0 && $$bindings.allArticles && allArticles !== void 0)
    $$bindings.allArticles(allArticles);
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  if ($$props.tag_id === void 0 && $$bindings.tag_id && tag_id !== void 0)
    $$bindings.tag_id(tag_id);
  $$result.css.add(css);
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}

<div class="${"holder svelte-giv5kd"}"><p>Explore all content related to the ${escape(tag_id.upperTag)} tag:
  </p>
  <div class="${"post-grid svelte-giv5kd"}"><h2>D3 API</h2>
    ${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: allArticles.filter((d) => d.cat == "D3 API"),
    pathRoute: "/d3/api/"
  }, {}, {})}
    <h2>D3 Recipes</h2>
    ${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: allArticles.filter((d) => d.cat == "D3 Recipes"),
    pathRoute: "/d3/recipes/"
  }, {}, {})}
    <h2>Svelte for Visual Storytelling</h2>
    ${validate_component(PostGallery, "PostGallery").$$render($$result, {
    posts: allArticles?.filter((d) => d.cat == "Svelte"),
    pathRoute: "/svelte/"
  }, {}, {})}</div>
</div>`;
});
export { U5Btagu5D as default, load };
