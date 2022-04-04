var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _error
});
var import_index_02532eaa = require("../../chunks/index-02532eaa.js");
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}button.svelte-v785rl{align-self:center;box-shadow:2px -2px 0 0 var(--c-green);border:none;background-color:var(--c-white);padding:10px 20px;opacity:0.9;transition:all 0.5s;cursor:pointer}button.svelte-v785rl:hover{opacity:1;box-shadow:4px -4px 0 0 var(--c-green)}",
  map: null
};
const ActionButton = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { text } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$1);
  return `<button class="${"svelte-v785rl"}">${(0, import_index_02532eaa.e)(text)}</button>`;
});
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1tbt353{height:300px;width:100%;padding:50px 10px}",
  map: null
};
const _error = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-1tbt353"}"><p>Sorry, we couldn&#39;t find that address.</p>

  ${(0, import_index_02532eaa.v)(ActionButton, "ActionButton").$$render($$result, { text: "Back to Home", href: "/" }, {}, {})}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
