import { c as create_ssr_component, g as subscribe, e as escape, a as add_attribute, b as each, v as validate_component } from "./index-769cbf91.js";
import { s as scrollY, K as Kofi } from "./screen-a99cf991.js";
import { b as allLight } from "./cms-b70a773a.js";
import { k as keyToSentence } from "./textUtils-39f3d08b.js";
var StoryHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.circle.svelte-obkrwz.svelte-obkrwz{z-index:1;height:300px;width:300px;right:20px;top:20px;border-radius:100%;position:absolute;background:linear-gradient(295deg, rgba(255, 255, 255, 0.2), rgba(30, 29, 29, 0) 50%);z-index:1}.header.svelte-obkrwz.svelte-obkrwz{background-color:var(--dark);color:rgba(255, 255, 255, 0.8);overflow:hidden;text-align:center;width:100%;padding-bottom:70px;position:relative}.header.svelte-obkrwz .inner.svelte-obkrwz{z-index:3}.header.svelte-obkrwz .head.svelte-obkrwz{max-width:500px;z-index:4;padding:4rem 3rem 1rem 3rem;text-align:start;margin:0;position:relative}.header.svelte-obkrwz .head.svelte-obkrwz::before{content:"";position:absolute;left:0;bottom:0;height:1px;margin-left:3rem;width:20px;border-bottom:1px solid white}.header.svelte-obkrwz .category.svelte-obkrwz{width:100px;text-align:left;color:white;text-decoration:none;z-index:6}.header.svelte-obkrwz .category p.svelte-obkrwz{z-index:6}.header.svelte-obkrwz .category p.svelte-obkrwz:hover{text-decoration:underline}.header.svelte-obkrwz .category:hover .box.svelte-obkrwz::before{transform:translate(0px, 0px) rotate(0deg)}.header.svelte-obkrwz .category .box.svelte-obkrwz{margin-left:3rem;height:20px;width:20px;background-color:var(--dragon);position:relative;float:left;margin-right:10px;z-index:3}.header.svelte-obkrwz .category .box.svelte-obkrwz:hover::after{transform:rotate(0deg)}.header.svelte-obkrwz .category .box.svelte-obkrwz::before{z-index:2;transition:0.5s all;content:"";bottom:0;transform:translate(-1px, -2px) rotate(4deg);left:0;top:0px;height:19px;width:19px;position:absolute;border:white 1px solid}.header.svelte-obkrwz .sub.svelte-obkrwz{z-index:4 !important;padding:0 1rem 0 3rem;text-align:left;margin:2rem 0;max-width:500px}.header.svelte-obkrwz .sub a.svelte-obkrwz{color:white}.header.svelte-obkrwz .sub a.svelte-obkrwz:focused{color:white}.header.svelte-obkrwz .sub a.svelte-obkrwz:active{color:white}.header.svelte-obkrwz .tags.svelte-obkrwz{display:flex;margin-left:3rem;margin-right:10px;gap:1rem;flex-wrap:wrap;padding:0;justify-items:end}.header.svelte-obkrwz .tags .tag.svelte-obkrwz{transition:1s all;text-decoration:none;z-index:4;background-color:transparent;border:none;margin:0;color:white;padding:0;cursor:pointer;line-height:1rem;font-weight:400}.header.svelte-obkrwz .tags .tag.svelte-obkrwz:hover{text-decoration:underline}',
  map: null
};
const StoryHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $scrollY, $$unsubscribe_scrollY;
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => $scrollY = value);
  let { data } = $$props;
  let catToPath = {
    "D3 API (in Svelte)": "/d3/api",
    "D3 Charts (in Svelte)": "/d3/charts",
    "Svelte for Visual Stories": "/svelte"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  $$unsubscribe_scrollY();
  return `${data ? `<div class="${"header svelte-obkrwz"}"><div class="${"circle svelte-obkrwz"}" style="${"transform:rotate(" + escape($scrollY / 2) + "deg)"}"></div>
    <div class="${"inner svelte-obkrwz"}"><h1 class="${"head svelte-obkrwz"}">${escape(data?.post_title)}</h1>
      <p class="${"sub svelte-obkrwz"}"><!-- HTML_TAG_START -->${data?.intro_text}<!-- HTML_TAG_END --></p>
      <a${add_attribute("href", catToPath[data.cat], 0)} rel="${"internal"}" aria-label="${"See more articles from the " + escape(data?.cat) + " category"}" class="${"category svelte-obkrwz"}"><div class="${"box svelte-obkrwz"}"></div>
        <p class="${"svelte-obkrwz"}">${escape(data?.cat ?? "Category")}</p></a>

      <div class="${"tags svelte-obkrwz"}">${each(data?.keywords, (tag) => {
    return `<a class="${"tag svelte-obkrwz"}" aria-label="${"See more articles with the " + escape(tag) + " tag"}" href="${"/tags/" + escape(tag)}" rel="${"internal"}">#${escape(tag)}</a>`;
  })}</div></div></div>` : ``}`;
});
var Thanks_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-12geoli.svelte-12geoli{max-width:600px;margin:100px auto 0;padding:0px 0px 50px}.kofi-cup.svelte-12geoli.svelte-12geoli{margin:20px;display:inline-block}.sorting.svelte-12geoli span.svelte-12geoli{cursor:pointer;margin:0px 10px;user-select:none}.list-container.svelte-12geoli.svelte-12geoli{display:flex;flex-wrap:wrap;gap:1rem;margin:0 auto;max-width:1000px}.list-container.svelte-12geoli a.svelte-12geoli{padding:10px 20px;transition:0.3 all;text-decoration:none}.list-container.svelte-12geoli a.svelte-12geoli:hover{text-decoration:underline;background-color:rgba(243, 243, 243, 0.1)}",
  map: null
};
function shuffle(list) {
  let currentIndex = list.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [list[currentIndex], list[randomIndex]] = [list[randomIndex], list[currentIndex]];
  }
  return list;
}
const Thanks = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $allLight, $$unsubscribe_allLight;
  $$unsubscribe_allLight = subscribe(allLight, (value) => $allLight = value);
  let asc = { id: false, cat: false };
  let articles = shuffle($allLight);
  $$result.css.add(css);
  {
    console.log("asc", asc);
  }
  $$unsubscribe_allLight();
  return `<div class="${"wrapper svelte-12geoli"}"><h2>Thanks for viewing!</h2>
  <p>If you found any of my ramblings or code examples useful, please consider
    supporting this blog so I can make more tutorials:
  </p>

  <div class="${"kofi-cup svelte-12geoli"}">${validate_component(Kofi, "Kofi").$$render($$result, {}, {}, {})}</div>

  <h2>Pick your next article</h2>

  <p class="${"sorting svelte-12geoli"}">Sort:<span class="${"svelte-12geoli"}">A-&gt;Z</span>
    </p>
  <div class="${"list-container svelte-12geoli"}">${each(articles, (a) => {
    return `<a${add_attribute("href", a.href, 0)} rel="${"internal"}" style="${escape(a.cat == "D3 API" ? "border-top:3px solid var(--berry); background-color: rgba(251,54,54,0.2); " : a.cat == "D3 Charts" ? "border-top:3px solid var(--dragon); background-color: rgba(180,13,97,0.2);" : "border-top:3px solid var(--lemon); background-color: rgba(247,196,25,0.2);") + ""}" class="${"svelte-12geoli"}">${escape(keyToSentence(a.id))}
      </a>`;
  })}</div>
</div>`;
});
export { StoryHeader as S, Thanks as T };
