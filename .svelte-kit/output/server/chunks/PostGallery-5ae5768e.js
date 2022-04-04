import { c as create_ssr_component, b as each, v as validate_component } from "./index-02532eaa.js";
import { S as SimplePostCard } from "./SimplePostCard-778ec895.js";
/* empty css                                                    */const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.post-gallery.svelte-1vfdyqd{display:grid;position:relative;margin:0 auto;grid-template-columns:repeat(auto-fill, minmax(180px, 2fr))}",
  map: null
};
const PostGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<div class="${"post-gallery svelte-1vfdyqd"}">${each(posts, (post) => {
    return `${validate_component(SimplePostCard, "SimplePostCard").$$render($$result, { data: post }, {}, {})}`;
  })}
</div>`;
});
export { PostGallery as P };
