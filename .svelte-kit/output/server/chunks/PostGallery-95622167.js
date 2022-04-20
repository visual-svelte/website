import { c as create_ssr_component, a as add_attribute, e as escape, g as subscribe, b as each, v as validate_component } from "./index-769cbf91.js";
import { k as keyToSentence } from "./textUtils-e37746b6.js";
import { p as page } from "./stores-85ad27c0.js";
var Card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.card.svelte-1wsu9vk.svelte-1wsu9vk{background:linear-gradient(295deg, rgba(243, 243, 243, 0.17), rgba(243, 243, 243, 0) 70%);color:var(--off-white);border-top:2px solid var(--off-white);cursor:pointer;position:relative;text-decoration:none;margin-bottom:20px;min-width:240px;width:240px;height:300px;transition:0.3s all}.card.svelte-1wsu9vk.svelte-1wsu9vk:hover{transform:translateY(-20px)}.card.svelte-1wsu9vk .card-title.svelte-1wsu9vk{font-size:1rem;margin:10px;align-self:center}.card.svelte-1wsu9vk .card-desc.svelte-1wsu9vk{font-size:1rem;margin:0px 10px;line-height:1.4rem;font-weight:300}.card.svelte-1wsu9vk p.svelte-1wsu9vk{height:40px;font-size:1.2rem;font-weight:600;width:160px;text-align:start;margin-top:7px;border:none;width:100%}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", data.href, 0)} class="${"card svelte-1wsu9vk"}"><p class="${"card-title svelte-1wsu9vk"}">${escape(keyToSentence(data.id))}</p>

  <p class="${"card-desc svelte-1wsu9vk"}">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </p>
  
</a>`;
});
var PostGallery_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.gallery.svelte-1yhjthx.svelte-1yhjthx{--track-color:rgba(247,196,25,0.2)\n  --thumb-color:rgba(247,196,25,0.7);--hover-color:rgba(247,196,25,1);padding:40px 0px;text-align:start;width:100%;background-color:var(--dark);color:var(--off-white)}.gallery.svelte-1yhjthx .inner.svelte-1yhjthx{margin:10px 10px 0px 10px}.gallery.svelte-1yhjthx .view-as.svelte-1yhjthx{margin:0 auto;max-width:1000px;padding:1rem 0}.gallery.svelte-1yhjthx .view-as span.svelte-1yhjthx{padding:1rem;cursor:pointer}.gallery.svelte-1yhjthx .text.svelte-1yhjthx{max-width:1000px;margin:0 auto}.gallery.svelte-1yhjthx .text h1.svelte-1yhjthx{padding:1.5rem 0 0 0;line-height:3rem;position:relative}.gallery.svelte-1yhjthx .text h1.svelte-1yhjthx::before{content:"";position:absolute;left:0;top:10px;height:1px;width:20px;border-bottom:2px solid var(--hover-color)}.gallery.svelte-1yhjthx .carousel.svelte-1yhjthx{display:flex;margin:0 auto;max-width:1000px;padding-top:20px;background-color:var(--dark);position:relative;gap:20px;scrollbar-width:thin;scrollbar-color:#6b6bfd}.gallery.svelte-1yhjthx .carousel.svelte-1yhjthx::-webkit-scrollbar{height:50px}.gallery.svelte-1yhjthx .carousel.svelte-1yhjthx::-webkit-scrollbar-track{background:var(--track-color)}.gallery.svelte-1yhjthx .carousel.svelte-1yhjthx::-webkit-scrollbar-thumb{background:var(--thumb-color)}.gallery.svelte-1yhjthx .carousel.svelte-1yhjthx::-webkit-scrollbar-thumb:hover{background:var(--hover-color)}.gallery.svelte-1yhjthx .list-container.svelte-1yhjthx{display:flex;flex-wrap:wrap;gap:1rem;margin:0 auto;max-width:1000px}.gallery.svelte-1yhjthx .list-container a.svelte-1yhjthx{padding:10px 20px;transition:0.3 all;color:var(--off-white);text-decoration:none}.gallery.svelte-1yhjthx .list-container a.svelte-1yhjthx:hover{text-decoration:underline;background-color:rgba(243, 243, 243, 0.1)}',
  map: null
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const PostGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedCat;
  let filtered;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { posts } = $$props;
  let { title } = $$props;
  let { cat } = $$props;
  let { scroll = true } = $$props;
  let cat_data = {
    api: {
      name: "D3 API",
      route: "/d3/api/",
      desc: "Find out how to implement the core building blocks of D3 Visuals in Svelte."
    },
    chart: {
      name: "D3 Charts",
      route: "/d3/charts/",
      desc: "Get ready-to-go code and explanations for common chart types."
    },
    svelte: {
      name: "Svelte Visual Storytelling",
      route: "/svelte/",
      desc: "How to use Svelte to tell visual stories."
    }
  };
  let { showMax = void 0 } = $$props;
  let gallery;
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
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.cat === void 0 && $$bindings.cat && cat !== void 0)
    $$bindings.cat(cat);
  if ($$props.scroll === void 0 && $$bindings.scroll && scroll !== void 0)
    $$bindings.scroll(scroll);
  if ($$props.showMax === void 0 && $$bindings.showMax && showMax !== void 0)
    $$bindings.showMax(showMax);
  $$result.css.add(css);
  selectedCat = cat_data[cat];
  filtered = getFilteredData();
  $$unsubscribe_page();
  return `<div class="${"gallery svelte-1yhjthx"}"${add_attribute("this", gallery, 0)}><div class="${"inner svelte-1yhjthx"}">${title ? `<div class="${"text svelte-1yhjthx"}"><h1 class="${"svelte-1yhjthx"}">${escape(selectedCat?.name)}</h1>
        <p>${escape(selectedCat?.desc)}</p></div>` : ``}
    ${!posts?.length ? `<div class="${"text svelte-1yhjthx"}">No posts yet!</div>` : `${scroll ? `<p class="${"view-as svelte-1yhjthx"}">View as: <span class="${"svelte-1yhjthx"}">Carousel</span>
          | <span class="${"svelte-1yhjthx"}">List</span></p>` : ``}
      ${`<div class="${"carousel svelte-1yhjthx"}"${add_attribute("style", scroll ? "flex-direction: row;overflow-x: auto;" : "flex-wrap:wrap", 0)}>${each(filtered, (post, i) => {
    return `${post.id !== $page.params.slug ? `${validate_component(Card, "Card").$$render($$result, { data: post }, {}, {})}` : ``}`;
  })}</div>`}`}</div>
</div>`;
});
export { PostGallery as P };
