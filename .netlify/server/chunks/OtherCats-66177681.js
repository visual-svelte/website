import { c as create_ssr_component, b as each, a as add_attribute, e as escape } from "./index-769cbf91.js";
var OtherCats_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.outer.svelte-68bllq.svelte-68bllq{padding:1rem 0 6rem 0;color:var(--off-white);background-color:var(--dark)}.outer.svelte-68bllq .wrapper.svelte-68bllq{max-width:1000px;margin:0 auto}.list-container.svelte-68bllq.svelte-68bllq{display:flex;flex-wrap:wrap;gap:1rem;margin:0 auto;max-width:1000px}.list-container.svelte-68bllq a.svelte-68bllq{transition:all 0.3s;padding:20px 20px;opacity:0.8;transition:0.3 all;color:var(--off-white);text-decoration:none}.list-container.svelte-68bllq a.svelte-68bllq:hover{opacity:1;text-decoration:underline;background-color:rgba(243, 243, 243, 0.1)}",
  map: null
};
const OtherCats = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filtered;
  let { cat } = $$props;
  let allCats = [
    {
      name: "api",
      href: "/d3/api",
      text: "D3 API (in Svelte)",
      color: {
        bg: "rgba(251,54,54,0.7)",
        text: "var(--off-white)"
      }
    },
    {
      name: "chart",
      href: "/d3/charts",
      text: "D3 Charts (in Svelte)",
      color: {
        bg: "rgba(180,13,97,0.7)",
        text: "var(--off-white)"
      }
    },
    {
      name: "svelte",
      href: "/svelte",
      text: "Svelte for Visual Stories",
      color: {
        bg: "rgba(247,196,25,0.7)",
        text: "var(--off-white)"
      }
    }
  ];
  if ($$props.cat === void 0 && $$bindings.cat && cat !== void 0)
    $$bindings.cat(cat);
  $$result.css.add(css);
  filtered = allCats.filter((d) => d.name !== cat);
  return `<div class="${"outer  svelte-68bllq"}"><div class="${"wrapper svelte-68bllq"}"><h2>Other categories:</h2>
    <div class="${"list-container svelte-68bllq"}">${each(filtered, (post) => {
    return `<a${add_attribute("href", post.href, 0)} style="${"background-color:" + escape(post.color.bg) + "; color:" + escape(post.color.text) + ";"}" class="${"svelte-68bllq"}">${escape(post.text)}
        </a>`;
  })}</div></div>
</div>`;
});
export { OtherCats as O };
