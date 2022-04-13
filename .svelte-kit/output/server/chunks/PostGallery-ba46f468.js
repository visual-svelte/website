import { c as create_ssr_component, a as add_attribute, e as escape, d as subscribe, b as each, v as validate_component } from "./index-72c7b4a0.js";
import { k as keyToSentence } from "./textUtils-aba21c2d.js";
/* empty css                                                    */import { p as page } from "./stores-391ee53d.js";
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.card.svelte-15387mb.svelte-15387mb{cursor:pointer;background-color:white;border:none;position:relative;justify-items:center;overflow:hidden;float:left;margin:10px 5px;padding:0;text-decoration:none;width:160px;transition:0.3s all;background:none;box-shadow:none}.card.svelte-15387mb .img-wrap.svelte-15387mb{width:160px;height:160px;overflow:hidden}.card.svelte-15387mb .img-wrap img.svelte-15387mb{width:150px;height:150px;transition:0.3s all;border-radius:15px;object-fit:cover}.card.svelte-15387mb .img-wrap:hover img.svelte-15387mb{transform:scale(1.2)}.card.svelte-15387mb p.svelte-15387mb{height:40px;background-color:white;font-size:1.2rem;font-weight:600;width:160px;text-align:start;margin-top:7px;border:none;width:100%;color:var(--c-darkgray)}",
  map: null
};
const SimplePostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { pathRoute } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.pathRoute === void 0 && $$bindings.pathRoute && pathRoute !== void 0)
    $$bindings.pathRoute(pathRoute);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", pathRoute + data.id, 0)} class="${"card svelte-15387mb"}"><div class="${"img-wrap svelte-15387mb"}"><img${add_attribute("src", data.thumbnail ? data.thumbnail : "images/graph.png", 0)} alt="${"thumbnail"}" class="${"svelte-15387mb"}"></div>
  <p class="${"svelte-15387mb"}">${escape(keyToSentence(data.id))}</p>
</a>`;
});
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.post-gallery.svelte-q5qgda{display:grid;position:relative;margin:0 auto;justify-items:center;grid-template-columns:repeat(auto-fill, minmax(180px, 2fr))}",
  map: null
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const PostGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtered;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { posts } = $$props;
  let { pathRoute } = $$props;
  let { showMax = void 0 } = $$props;
  function getFilteredData() {
    if (typeof showMax == "undefined") {
      return posts;
    } else {
      let postList = [];
      let oldIndexes = [];
      for (let i = 0; i < showMax; i++) {
        let index = getRandomInt(0, posts?.length - 1);
        if (!oldIndexes.includes(index)) {
          postList.push(posts[index]);
          oldIndexes.push(index);
        } else {
          index = getRandomInt(0, posts?.length - 1);
          if (!oldIndexes.includes(index)) {
            postList.push(posts[index]);
            oldIndexes.push(index);
          }
        }
      }
      return postList;
    }
  }
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.pathRoute === void 0 && $$bindings.pathRoute && pathRoute !== void 0)
    $$bindings.pathRoute(pathRoute);
  if ($$props.showMax === void 0 && $$bindings.showMax && showMax !== void 0)
    $$bindings.showMax(showMax);
  $$result.css.add(css);
  filtered = getFilteredData();
  $$unsubscribe_page();
  return `${!posts.length ? `No posts yet!` : `<div class="${"post-gallery svelte-q5qgda"}">${each(filtered, (post) => {
    return `${post.id !== $page.params.slug ? `${validate_component(SimplePostCard, "SimplePostCard").$$render($$result, { data: post, pathRoute }, {}, {})}` : ``}`;
  })}</div>`}`;
});
export { PostGallery as P };
