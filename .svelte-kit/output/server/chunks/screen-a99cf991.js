import { c as create_ssr_component } from "./index-769cbf91.js";
import { w as writable } from "./cms-svelte-89dc672e.js";
var Kofi_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}a.svelte-fwnwin.svelte-fwnwin{max-height:40px;width:140px;text-decoration:none;background:none;background-color:white;font-weight:600;float:left;border:gray 1px solid;border-radius:20px;transition:all 0.3s}a.svelte-fwnwin:hover img.svelte-fwnwin{transform:scale(1.3);transform:rotate(0deg)}a.svelte-fwnwin div.svelte-fwnwin{padding:9px 9px;position:relative}a.svelte-fwnwin div p.svelte-fwnwin{padding:0;font-weight:400;font-size:0.8rem;line-height:0.8rem;color:var(--dark) !important;margin:0px 0px 0 10px}a.svelte-fwnwin div img.svelte-fwnwin{position:absolute;transition:0.3s transform;left:-25px;top:-20px;height:50px;width:50px;transform:rotate(-45deg);box-shadow:none !important}",
  map: null
};
const Kofi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a rel="${"external"}" target="${"_blank"}" href="${"https://ko-fi.com/C0C7BRLF8"}" class="${"svelte-fwnwin"}"><div class="${"svelte-fwnwin"}"><p class="${"svelte-fwnwin"}">Buy me a coffee!</p>
    <img src="${"/images/kofi.png"}" alt="${"buy me a coffee link!"}" class="${"svelte-fwnwin"}"></div>
</a>`;
});
const innerWidth = writable(600);
const scrollY = writable(0);
export { Kofi as K, innerWidth as i, scrollY as s };
