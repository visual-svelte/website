var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
var import_index_02532eaa = require("../../chunks/index-02532eaa.js");
var import_feather_icons = __toESM(require("feather-icons"));
var import_cms_d3e083d3 = require("../../chunks/cms-d3e083d3.js");
var import_dynamicData_0ed09738 = require("../../chunks/dynamicData-0ed09738.js");
var import_stores_9fa16f27 = require("../../chunks/stores-9fa16f27.js");
var import_d3 = require("d3");
var import_d3_scale = require("d3-scale");
var import_d3_zoom = require("d3-zoom");
var import_d3_scale_chromatic = require("d3-scale-chromatic");
var import_d3_selection = require("d3-selection");
var import_d3_drag = require("d3-drag");
var import_d3_force = require("d3-force");
var Icon_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "svg.svelte-1eky3f8{width:1em;height:1em;overflow:visible;transform-origin:50% 50%;transition:all 0.3s}",
  map: null
};
const Icon = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let icon;
  let rotation;
  const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  let { name } = $$props;
  let { direction = "n" } = $$props;
  let { width = "1em" } = $$props;
  let { fill } = $$props;
  let { height = "1em" } = $$props;
  let { stroke = void 0 } = $$props;
  let { strokeWidth = void 0 } = $$props;
  if ($$props.directions === void 0 && $$bindings.directions && directions !== void 0)
    $$bindings.directions(directions);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.stroke === void 0 && $$bindings.stroke && stroke !== void 0)
    $$bindings.stroke(stroke);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  $$result.css.add(css$6);
  icon = import_feather_icons.default.icons[name];
  rotation = directions.indexOf(direction) * 45;
  {
    if (icon) {
      if (stroke)
        icon.attrs["stroke"] = stroke;
      if (fill)
        icon.attrs["fill"] = fill;
      if (strokeWidth)
        icon.attrs["stroke-width"] = strokeWidth;
    }
  }
  return `${icon ? `<svg${(0, import_index_02532eaa.i)([
    (0, import_index_02532eaa.j)(icon.attrs),
    {
      style: "width: " + (0, import_index_02532eaa.e)(width) + "; height: " + (0, import_index_02532eaa.e)(height) + "; transform: rotate(" + (0, import_index_02532eaa.e)(rotation) + "deg);"
    }
  ], { classes: "svelte-1eky3f8" })}><g><!-- HTML_TAG_START -->${icon.contents}<!-- HTML_TAG_END --></g></svg>` : ``}`;
});
const navOpen = (0, import_cms_d3e083d3.w)(false);
const treeData = (0, import_cms_d3e083d3.w)(import_dynamicData_0ed09738.s);
var BottomNav_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.fixed.svelte-j22fjp.svelte-j22fjp{background-color:var(--c-darkgray);margin:0;color:var(--c-white);display:grid;grid-template-columns:2fr 3fr}.fixed.svelte-j22fjp a.svelte-j22fjp{color:white;border:none;background:none}.fixed.svelte-j22fjp .other-links.svelte-j22fjp{display:inline-block;padding:2rem 1rem}.fixed.svelte-j22fjp .other-links div.svelte-j22fjp{margin-bottom:20px}.fixed.svelte-j22fjp .right .socials.svelte-j22fjp{margin:1rem 0;padding:0.8rem 0 0 0.8rem}.fixed.svelte-j22fjp .right .socials a.svelte-j22fjp{padding:10px}.fixed.svelte-j22fjp .right .donate.svelte-j22fjp{grid-area:donate;padding:0.8rem 0 0 0.8rem}",
  map: null
};
const BottomNav = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navOpen;
  $$unsubscribe_navOpen = (0, import_index_02532eaa.g)(navOpen, (value) => value);
  let links = [{ href: "/", text: "Home" }, { href: "/about", text: "About" }];
  $$result.css.add(css$5);
  $$unsubscribe_navOpen();
  return `<div class="${"fixed svelte-j22fjp"}"><div class="${"other-links svelte-j22fjp"}">${(0, import_index_02532eaa.b)(links, (link) => {
    return `<div class="${"svelte-j22fjp"}"><a rel="${"internal"}"${(0, import_index_02532eaa.a)("href", link.href, 0)} class="${"svelte-j22fjp"}">${(0, import_index_02532eaa.e)(link.text)}</a>
      </div>`;
  })}</div>
  <div class="${"right svelte-j22fjp"}"><div class="${"socials svelte-j22fjp"}">Say hi: <a target="${"_blank"}" rel="${"external"}" href="${"https://twitter.com/visualsvelte"}" class="${"svelte-j22fjp"}">${(0, import_index_02532eaa.v)(Icon, "Icon").$$render($$result, {
    name: "twitter",
    fill: "var(--c-white)",
    width: "20px",
    height: "20px"
  }, {}, {})}</a></div>
    <div class="${"donate svelte-j22fjp"}"><a href="${"https://ko-fi.com/C0C7BRLF8"}" target="${"_blank"}" class="${"svelte-j22fjp"}"><img height="${"36"}" style="${"border:0px;height:36px;"}" src="${"https://cdn.ko-fi.com/cdn/kofi2.png?v=3"}" border="${"0"}" alt="${"Buy Me a Coffee at ko-fi.com"}"></a></div></div>
</div>`;
});
var Tree_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.subh.svelte-5m0a0m.svelte-5m0a0m{user-select:none;cursor:pointer;padding-left:1rem}.bullet.svelte-5m0a0m.svelte-5m0a0m{list-style-type:none;margin:0 0 0.5rem 1rem;cursor:pointer}.bullet.svelte-5m0a0m a.svelte-5m0a0m{text-decoration:none;font-family:"Consola";position:relative}.bullet.svelte-5m0a0m a span.svelte-5m0a0m{color:--c-darkgray;font-size:0.8rem;margin-top:0px}.bullet.current.svelte-5m0a0m.svelte-5m0a0m{font-weight:600;cursor:default}.bullet.current.svelte-5m0a0m.svelte-5m0a0m:hover{background-color:transparent}',
  map: null
};
const Tree = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let $treeData, $$unsubscribe_treeData;
  let $$unsubscribe_navOpen;
  let $page, $$unsubscribe_page;
  $$unsubscribe_treeData = (0, import_index_02532eaa.g)(treeData, (value) => $treeData = value);
  $$unsubscribe_navOpen = (0, import_index_02532eaa.g)(navOpen, (value) => value);
  $$unsubscribe_page = (0, import_index_02532eaa.g)(import_stores_9fa16f27.p, (value) => $page = value);
  let { dark = false } = $$props;
  let localData = $treeData;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  $$result.css.add(css$4);
  $$unsubscribe_treeData();
  $$unsubscribe_navOpen();
  $$unsubscribe_page();
  return `${(0, import_index_02532eaa.b)(localData, (l1, i) => {
    return `
  ${(0, import_index_02532eaa.b)(l1.children, (l2, j) => {
      return `<p class="${["subh svelte-5m0a0m", l2 == "Full API" ? "current" : ""].join(" ").trim()}">${(0, import_index_02532eaa.v)(Icon, "Icon").$$render($$result, {
        name: "triangle",
        fill: dark ? "var(--c-white)" : "var(--c-darkgray)",
        width: "8px",
        height: "8px",
        stroke: dark ? "var(--c-white)" : "var(--c-darkgray)",
        direction: localData[i].children[j].expanded ? "s" : "e"
      }, {}, {})}
      ${(0, import_index_02532eaa.e)(l2.data)}</p>
    ${localData[i].children[j].expanded ? `${l2.children ? `${(0, import_index_02532eaa.b)(l2.children, (link) => {
        return `<li class="${[
          "bullet svelte-5m0a0m",
          link.href == $page.params.slug ? "current" : ""
        ].join(" ").trim()}"><a rel="${"internal"}"${(0, import_index_02532eaa.a)("href", "/d3/api/" + link.href, 0)} class="${"svelte-5m0a0m"}"><span class="${"svelte-5m0a0m"}">\u2022</span> ${(0, import_index_02532eaa.e)(link.title)}</a>
            
          </li>`;
      })}` : `<li>Nothing yet!</li>`}` : ``}`;
    })}`;
  })}`;
});
var MinimalNav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.common.svelte-1wkb4i.svelte-1wkb4i{background-color:white;border:transparent 1px solid;position:fixed;border-top-right-radius:5px;border-bottom-right-radius:5px;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px}.moreButton.svelte-1wkb4i.svelte-1wkb4i{padding:1rem;z-index:200;font-weight:600;cursor:pointer}.moreButton.svelte-1wkb4i.svelte-1wkb4i:disabled{color:black}.menu.svelte-1wkb4i.svelte-1wkb4i{z-index:2;display:grid;grid-template-rows:auto 180px;height:100vh;width:300px;border:none;top:40px}.menu.svelte-1wkb4i .tree.svelte-1wkb4i{overflow-y:auto;overflow-x:hidden}.svelte-1wkb4i.svelte-1wkb4i::-webkit-scrollbar{width:10px}.svelte-1wkb4i.svelte-1wkb4i::-webkit-scrollbar-track{background:#f1f1f1}.svelte-1wkb4i.svelte-1wkb4i::-webkit-scrollbar-thumb{background:var(--c-gray)}.svelte-1wkb4i.svelte-1wkb4i::-webkit-scrollbar-thumb:hover{background:var(--c-darkgray)}",
  map: null
};
const MinimalNav = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let $navOpen, $$unsubscribe_navOpen;
  $$unsubscribe_navOpen = (0, import_index_02532eaa.g)(navOpen, (value) => $navOpen = value);
  let myButton;
  $$result.css.add(css$3);
  $$unsubscribe_navOpen();
  return `<button class="${"common moreButton svelte-1wkb4i"}"${(0, import_index_02532eaa.a)("this", myButton, 0)}>${(0, import_index_02532eaa.e)($navOpen ? "Hide" : "More")}</button>

${$navOpen ? `<div class="${"menu common svelte-1wkb4i"}"><div class="${"tree svelte-1wkb4i"}">${(0, import_index_02532eaa.v)(Tree, "Tree").$$render($$result, {}, {}, {})}</div>
    ${(0, import_index_02532eaa.v)(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}</div>` : ``}`;
});
var Logo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.logo.svelte-1532ok9{cursor:pointer;border:none;text-decoration:none;background-color:transparent;width:150px;font-size:2rem;color:var(--c-darkgray);text-shadow:1px -1px var(--c-gray);font-weight:800;transition:color 0.3s}.logo.svelte-1532ok9:hover{color:var(--c-white)}",
  map: null
};
const Logo = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<a href="${"/"}" rel="${"internal"}" class="${"logo svelte-1532ok9"}">visualsvelte</a>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-swjsyi.svelte-swjsyi{justify-items:space-around;display:grid;grid-template-columns:1fr 3fr 1fr;background-color:var(--c-darkgray);padding:0px 16px;text-align:center;min-height:200px;color:white}.container.svelte-swjsyi .logo.svelte-swjsyi,.container.svelte-swjsyi .support.svelte-swjsyi,.container.svelte-swjsyi .writing.svelte-swjsyi{padding:30px}.container.svelte-swjsyi .logo a.svelte-swjsyi,.container.svelte-swjsyi .support a.svelte-swjsyi,.container.svelte-swjsyi .writing a.svelte-swjsyi{cursor:pointer !important;color:var(--c-green)}.container.svelte-swjsyi .support a.svelte-swjsyi{background:none !important}@media all and (max-width: 700px){.container.svelte-swjsyi .logo.svelte-swjsyi,.container.svelte-swjsyi .writing.svelte-swjsyi,.container.svelte-swjsyi .support.svelte-swjsyi{grid-column:1/4;padding:20px}}",
  map: null
};
const Footer = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"container svelte-swjsyi"}"><div class="${"logo svelte-swjsyi"}">${(0, import_index_02532eaa.v)(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
  <div class="${"writing svelte-swjsyi"}"><p>thanks for visiting visualsvelte!</p>
    <p>before you go, let\u2019s connect! <a rel="${"external"}" href="${"https://twitter.com/visualsvelte"}" class="${"svelte-swjsyi"}">@visualsvelte</a></p>
    <p>still hungry for more? <a sveltekit:prefetch href="${"/about"}" class="${"svelte-swjsyi"}">read more</a> about
      visualsvelte!
    </p></div>
  <div class="${"support svelte-swjsyi"}"><a href="${"https://ko-fi.com/C0C7BRLF8"}" target="${"_blank"}" class="${"svelte-swjsyi"}"><img height="${"36"}" style="${"border:0px;height:36px;"}" src="${"https://cdn.ko-fi.com/cdn/kofi2.png?v=3"}" border="${"0"}" alt="${"Buy Me a Coffee at ko-fi.com"}"></a></div>
</div>`;
});
const innerWidth = (0, import_cms_d3e083d3.w)(600);
const scrollY = (0, import_cms_d3e083d3.w)(0);
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.dimmer.svelte-1n1m68r.svelte-1n1m68r{position:fixed;min-width:100%;min-height:100%;z-index:2;background-color:rgba(0, 0, 0, 0.5)}.wrapper.svelte-1n1m68r.svelte-1n1m68r{background-size:20px 20px;background-image:linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)}.wrapper.svelte-1n1m68r main.svelte-1n1m68r{padding:10px 10px 100px 80px}*{font-family:"Inconsolata", monospace}p{line-height:1.4rem}h1{padding:1rem 0}a{color:var(--c-darkgray);transition:background 0.3s;background:linear-gradient(180deg, transparent 85%, rgba(119, 227, 35, 0.15) 15%)}a:focus{color:var(--c-darkgray);background:linear-gradient(180deg, transparent 80%, rgba(119, 227, 35, 0.35) 20%)}a:hover{background:rgba(119, 227, 35, 0.35)}',
  map: null
};
const _layout = (0, import_index_02532eaa.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_innerWidth;
  let $$unsubscribe_scrollY;
  let $navOpen, $$unsubscribe_navOpen;
  $$unsubscribe_innerWidth = (0, import_index_02532eaa.g)(innerWidth, (value) => value);
  $$unsubscribe_scrollY = (0, import_index_02532eaa.g)(scrollY, (value) => value);
  $$unsubscribe_navOpen = (0, import_index_02532eaa.g)(navOpen, (value) => $navOpen = value);
  $$result.css.add(css);
  $$unsubscribe_innerWidth();
  $$unsubscribe_scrollY();
  $$unsubscribe_navOpen();
  return `${$$result.head += `<style data-svelte="svelte-14rra2v">@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600&display=swap");
  </style>`, ""}

${$navOpen ? `<div class="${"dimmer svelte-1n1m68r"}"></div>` : ``}
<div class="${"wrapper svelte-1n1m68r"}"><header>${(0, import_index_02532eaa.v)(MinimalNav, "MinimalNav").$$render($$result, {}, {}, {})}</header>
  <main id="${"content"}" class="${"svelte-1n1m68r"}">${slots.default ? slots.default({}) : ``}</main>
  <footer>${(0, import_index_02532eaa.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</footer>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
