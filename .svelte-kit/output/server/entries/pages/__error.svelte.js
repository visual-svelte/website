import { c as create_ssr_component, v as validate_component } from "../../chunks/index-58574f58.js";
import { A as ActionButton } from "../../chunks/ActionButton-eebe3f5b.js";
/* empty css                                                                */var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1tbt353{height:300px;width:100%;padding:50px 10px}",
  map: null
};
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-1tbt353"}"><p>Sorry, we couldn&#39;t find that address.</p>

  ${validate_component(ActionButton, "ActionButton").$$render($$result, { text: "Back to Home", href: "/" }, {}, {})}
</div>`;
});
export { _error as default };
