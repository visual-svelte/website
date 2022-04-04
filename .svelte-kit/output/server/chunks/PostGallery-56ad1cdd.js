import { c as create_ssr_component, g as subscribe, b as each, v as validate_component } from "./index-b8b7f0d9.js";
import { S as SimplePostCard } from "./SimplePostCard-a6cd209b.js";
import { p as page } from "./stores-9d6a58c7.js";
/* empty css                                                    */const css = {
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
  let { showMax = void 0 } = $$props;
  console.log("path", $page);
  function getFilteredData() {
    if (typeof showMax == "undefined") {
      return posts;
    } else {
      let postList = [];
      let oldIndexes = [];
      console.log("showMax", showMax);
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
  if ($$props.showMax === void 0 && $$bindings.showMax && showMax !== void 0)
    $$bindings.showMax(showMax);
  $$result.css.add(css);
  filtered = getFilteredData();
  $$unsubscribe_page();
  return `<div class="${"post-gallery svelte-q5qgda"}">${each(filtered, (post) => {
    return `${post.id !== $page.params.slug ? `${validate_component(SimplePostCard, "SimplePostCard").$$render($$result, { data: post }, {}, {})}` : ``}`;
  })}
</div>`;
});
export { PostGallery as P };
