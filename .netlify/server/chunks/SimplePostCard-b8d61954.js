import { c as create_ssr_component, a as add_attribute, e as escape } from "./index-b8b7f0d9.js";
/* empty css                                                       */const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.card.svelte-15387mb.svelte-15387mb{cursor:pointer;background-color:white;border:none;position:relative;justify-items:center;overflow:hidden;float:left;margin:10px 5px;padding:0;text-decoration:none;width:160px;transition:0.3s all;background:none;box-shadow:none}.card.svelte-15387mb .img-wrap.svelte-15387mb{width:160px;height:160px;overflow:hidden}.card.svelte-15387mb .img-wrap img.svelte-15387mb{width:150px;height:150px;transition:0.3s all;border-radius:15px;object-fit:cover}.card.svelte-15387mb .img-wrap:hover img.svelte-15387mb{transform:scale(1.2)}.card.svelte-15387mb p.svelte-15387mb{height:40px;background-color:white;font-size:1.2rem;font-weight:600;width:160px;text-align:start;margin-top:7px;border:none;width:100%;color:var(--c-darkgray)}",
  map: null
};
const SimplePostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<a${add_attribute("href", "/d3/api/" + data.id, 0)} class="${"card svelte-15387mb"}"><div class="${"img-wrap svelte-15387mb"}"><img${add_attribute("src", data.thumbnail ? data.thumbnail : "images/graph.png", 0)} alt="${"thumbnail"}" class="${"svelte-15387mb"}"></div>
  <p class="${"svelte-15387mb"}">${escape(data.id)}</p>
</a>`;
});
export { SimplePostCard as S };
