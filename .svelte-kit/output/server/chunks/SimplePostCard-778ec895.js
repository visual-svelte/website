import { c as create_ssr_component, a as add_attribute, e as escape } from "./index-02532eaa.js";
/* empty css                                                       */const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.card.svelte-oztll4.svelte-oztll4{cursor:pointer;border:solid 1px var(--c-darkgray);position:relative;justify-items:center;overflow:hidden;float:left;margin:10px 5px;padding:0;height:180px;width:160px;transition:0.3s all}.card.svelte-oztll4.svelte-oztll4:hover{-webkit-filter:drop-shadow(4px -2px 2px var(--c-green));filter:drop-shadow(4px -2px 2px var(--c-green))}.card.svelte-oztll4 img.svelte-oztll4{width:160px;height:140px}.card.svelte-oztll4 p.svelte-oztll4{height:40px;width:160px;text-align:center;align-content:center;margin-top:7px;border:none;text-align:center;width:100%;text-decoration:none;color:var(--c-darkgray)}",
  map: null
};
const SimplePostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<button class="${"card svelte-oztll4"}"><img${add_attribute("src", data.thumbnail ? data.thumbnail : "images/graph.png", 0)} alt="${"thumbnail"}" class="${"svelte-oztll4"}">
  <p class="${"svelte-oztll4"}">${escape(data.id)}</p>
</button>`;
});
export { SimplePostCard as S };
