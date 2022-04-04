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
  default: () => Routes
});
var import_index_02532eaa = require("../../chunks/index-02532eaa.js");
var import_cms_d3e083d3 = require("../../chunks/cms-d3e083d3.js");
var import_stores_9fa16f27 = require("../../chunks/stores-9fa16f27.js");
var import_d3 = require("d3");
var import_d3_scale = require("d3-scale");
var import_d3_zoom = require("d3-zoom");
var import_d3_scale_chromatic = require("d3-scale-chromatic");
var import_d3_selection = require("d3-selection");
var import_d3_drag = require("d3-drag");
var import_d3_force = require("d3-force");
var Typewriter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-1tebko8-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1tebko8 *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1tebko8 .finished-typing::after{content:none}.cursor.svelte-1tebko8 .typing::after{content:'\u258C';display:inline-block;color:var(--cursor-color);animation:svelte-1tebko8-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let options;
  let { interval = 30 } = $$props;
  let { cascade = false } = $$props;
  let { loop = false } = $$props;
  let { loopRandom = false } = $$props;
  let { scramble = false } = $$props;
  let { scrambleSlowdown = scramble ? true : false } = $$props;
  let { cursor = true } = $$props;
  let { delay = 0 } = $$props;
  let { unwriteInterval = false } = $$props;
  const dispatch = (0, import_index_02532eaa.l)();
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cascade === void 0 && $$bindings.cascade && cascade !== void 0)
    $$bindings.cascade(cascade);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.loopRandom === void 0 && $$bindings.loopRandom && loopRandom !== void 0)
    $$bindings.loopRandom(loopRandom);
  if ($$props.scramble === void 0 && $$bindings.scramble && scramble !== void 0)
    $$bindings.scramble(scramble);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  $$result.css.add(css$1);
  options = {
    interval,
    cascade,
    loop,
    loopRandom,
    scramble,
    scrambleSlowdown,
    cursor,
    delay,
    dispatch,
    unwriteInterval
  };
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript>

<div class="${[
    "typewriter-container svelte-1tebko8",
    (cursor ? "cursor" : "") + " " + (options.delay > 0 ? "delay" : "")
  ].join(" ").trim()}"${(0, import_index_02532eaa.o)({
    "--cursor-color": typeof cursor === "string" ? cursor : "black"
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.intro.svelte-ghe6yw.svelte-ghe6yw{padding:100px 0px}.intro.svelte-ghe6yw h1.svelte-ghe6yw{text-align:center;margin:0}.text.svelte-ghe6yw.svelte-ghe6yw{text-align:center}",
  map: null
};
const Routes = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_02532eaa.g)(import_stores_9fa16f27.p, (value) => $page = value);
  ({
    t: "Home | VisualSvelte",
    d: "",
    u: $page.url.pathname
  });
  $$result.css.add(css);
  import_cms_d3e083d3.d.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  $$unsubscribe_page();
  return `
<div class="${"spacer"}">${(0, import_index_02532eaa.v)(Typewriter, "Typewriter").$$render($$result, { cascade: true }, {}, {
    default: () => {
      return `<div class="${"intro svelte-ghe6yw"}"><h1 class="${"svelte-ghe6yw"}">Unlock your</h1>
      <h1 class="${"svelte-ghe6yw"}"><span>visual storytelling superpowers</span></h1>
      <h1 class="${"svelte-ghe6yw"}">with Svelte</h1></div>`;
    }
  })}</div>
${``}`;
});
module.exports = __toCommonJS(stdin_exports);
