import { c as create_ssr_component, i as spread, j as escape_object, e as escape, g as subscribe, b as each, a as add_attribute, v as validate_component } from "../../chunks/index-b8b7f0d9.js";
import feather from "feather-icons";
import { w as writable } from "../../chunks/cms-aa22b9c7.js";
import { s as sidebarData } from "../../chunks/dynamicData-b5044baa.js";
import { p as page } from "../../chunks/stores-9d6a58c7.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
var Icon_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "svg.svelte-1eky3f8{width:1em;height:1em;overflow:visible;transform-origin:50% 50%;transition:all 0.3s}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  $$result.css.add(css$7);
  icon = feather.icons[name];
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
  return `${icon ? `<svg${spread([
    escape_object(icon.attrs),
    {
      style: "width: " + escape(width) + "; height: " + escape(height) + "; transform: rotate(" + escape(rotation) + "deg);"
    }
  ], { classes: "svelte-1eky3f8" })}><g><!-- HTML_TAG_START -->${icon.contents}<!-- HTML_TAG_END --></g></svg>` : ``}`;
});
const navOpen = writable(false);
const treeData = writable(sidebarData);
var Kofi_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}a.svelte-xva9ih.svelte-xva9ih{max-height:40px;width:140px;text-decoration:none;background:none;background-color:white;color:black;font-weight:600;float:left;border-radius:20px;transition:all 0.3s}a.svelte-xva9ih.svelte-xva9ih:hover{-webkit-filter:drop-shadow(5px -5px 0 var(--c-green));filter:drop-shadow(5px -4px 0 var(--c-green))}a.svelte-xva9ih:hover img.svelte-xva9ih{transform:scale(1.3);transform:rotate(0deg)}a.svelte-xva9ih div.svelte-xva9ih{padding:9px 9px;position:relative}a.svelte-xva9ih div span.svelte-xva9ih{padding:0;font-size:0.8rem;margin:0px 0 0 15px}a.svelte-xva9ih div img.svelte-xva9ih{position:absolute;transition:0.3s transform;left:-20px;top:-20px;height:50px;width:50px;transform:rotate(-45deg);box-shadow:none !important}",
  map: null
};
const Kofi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<a rel="${"external"}" target="${"_blank"}" href="${"https://ko-fi.com/C0C7BRLF8"}" class="${"svelte-xva9ih"}"><div class="${"svelte-xva9ih"}"><span class="${"svelte-xva9ih"}">Buy me a coffee!</span>
    <img src="${"images/kofi.png"}" alt="${""}" class="${"svelte-xva9ih"}"></div>
</a>`;
});
var BottomNav_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.fixed.svelte-j22fjp.svelte-j22fjp{background-color:var(--c-darkgray);margin:0;color:var(--c-white);display:grid;grid-template-columns:2fr 3fr}.fixed.svelte-j22fjp a.svelte-j22fjp{color:white;border:none;background:none}.fixed.svelte-j22fjp .other-links.svelte-j22fjp{display:inline-block;padding:2rem 1rem}.fixed.svelte-j22fjp .other-links div.svelte-j22fjp{margin-bottom:20px}.fixed.svelte-j22fjp .right .socials.svelte-j22fjp{margin:1rem 0;padding:0.8rem 0 0 0.8rem}.fixed.svelte-j22fjp .right .socials a.svelte-j22fjp{padding:10px}.fixed.svelte-j22fjp .right .donate.svelte-j22fjp{grid-area:donate;padding:0.8rem 0 0 0.8rem}",
  map: null
};
const BottomNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navOpen;
  $$unsubscribe_navOpen = subscribe(navOpen, (value) => value);
  let links = [{ href: "/", text: "Home" }, { href: "/about", text: "About" }];
  $$result.css.add(css$5);
  $$unsubscribe_navOpen();
  return `<div class="${"fixed svelte-j22fjp"}"><div class="${"other-links svelte-j22fjp"}">${each(links, (link) => {
    return `<div class="${"svelte-j22fjp"}"><a rel="${"internal"}"${add_attribute("href", link.href, 0)} class="${"svelte-j22fjp"}">${escape(link.text)}</a>
      </div>`;
  })}</div>
  <div class="${"right svelte-j22fjp"}"><div class="${"socials svelte-j22fjp"}">Say hi: <a target="${"_blank"}" rel="${"external"}" href="${"https://twitter.com/visualsvelte"}" class="${"svelte-j22fjp"}">${validate_component(Icon, "Icon").$$render($$result, {
    name: "twitter",
    fill: "var(--c-white)",
    width: "20px",
    height: "20px"
  }, {}, {})}</a></div>
    <div class="${"donate svelte-j22fjp"}">${validate_component(Kofi, "Kofi").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});
var Tree_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.subh.svelte-5m0a0m.svelte-5m0a0m{user-select:none;cursor:pointer;padding-left:1rem}.bullet.svelte-5m0a0m.svelte-5m0a0m{list-style-type:none;margin:0 0 0.5rem 1rem;cursor:pointer}.bullet.svelte-5m0a0m a.svelte-5m0a0m{text-decoration:none;font-family:"Consola";position:relative}.bullet.svelte-5m0a0m a span.svelte-5m0a0m{color:--c-darkgray;font-size:0.8rem;margin-top:0px}.bullet.current.svelte-5m0a0m.svelte-5m0a0m{font-weight:600;cursor:default}.bullet.current.svelte-5m0a0m.svelte-5m0a0m:hover{background-color:transparent}',
  map: null
};
const Tree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $treeData, $$unsubscribe_treeData;
  let $$unsubscribe_navOpen;
  let $page, $$unsubscribe_page;
  $$unsubscribe_treeData = subscribe(treeData, (value) => $treeData = value);
  $$unsubscribe_navOpen = subscribe(navOpen, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { dark = false } = $$props;
  let localData = $treeData;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  $$result.css.add(css$4);
  $$unsubscribe_treeData();
  $$unsubscribe_navOpen();
  $$unsubscribe_page();
  return `${each(localData, (l1, i) => {
    return `
  ${each(l1.children, (l2, j) => {
      return `<p class="${["subh svelte-5m0a0m", l2 == "Full API" ? "current" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, {
        name: "triangle",
        fill: dark ? "var(--c-white)" : "var(--c-darkgray)",
        width: "8px",
        height: "8px",
        stroke: dark ? "var(--c-white)" : "var(--c-darkgray)",
        direction: localData[i].children[j].expanded ? "s" : "e"
      }, {}, {})}
      ${escape(l2.data)}</p>
    ${localData[i].children[j].expanded ? `${l2.children ? `${each(l2.children, (link) => {
        return `<li class="${[
          "bullet svelte-5m0a0m",
          link.href == $page.params.slug ? "current" : ""
        ].join(" ").trim()}"><a rel="${"internal"}"${add_attribute("href", "/d3/api/" + link.href, 0)} class="${"svelte-5m0a0m"}"><span class="${"svelte-5m0a0m"}">\u2022</span> ${escape(link.title)}</a>
            
          </li>`;
      })}` : `<li>Nothing yet!</li>`}` : ``}`;
    })}`;
  })}`;
});
var MinimalNav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.common.svelte-zvoqsz.svelte-zvoqsz{background-color:white;border:transparent 1px solid;position:fixed;border-top-right-radius:5px;border-bottom-right-radius:5px;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px}.moreButton.svelte-zvoqsz.svelte-zvoqsz{background-color:#f7f7f7;padding:1rem;z-index:200;font-weight:600;cursor:pointer;transition:0.3s ease-in-out all}.moreButton.svelte-zvoqsz.svelte-zvoqsz:disabled{color:black}.moreButton.active.svelte-zvoqsz.svelte-zvoqsz,.moreButton.svelte-zvoqsz.svelte-zvoqsz:hover{background-color:white}.menu.svelte-zvoqsz.svelte-zvoqsz{z-index:2;display:grid;grid-template-rows:auto 180px;height:100vh;width:300px;border:none;top:40px}.menu.svelte-zvoqsz .tree.svelte-zvoqsz{overflow-y:auto;overflow-x:hidden}.svelte-zvoqsz.svelte-zvoqsz::-webkit-scrollbar{width:10px}.svelte-zvoqsz.svelte-zvoqsz::-webkit-scrollbar-track{background:#f1f1f1}.svelte-zvoqsz.svelte-zvoqsz::-webkit-scrollbar-thumb{background:var(--c-gray)}.svelte-zvoqsz.svelte-zvoqsz::-webkit-scrollbar-thumb:hover{background:var(--c-darkgray)}",
  map: null
};
const MinimalNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navOpen, $$unsubscribe_navOpen;
  $$unsubscribe_navOpen = subscribe(navOpen, (value) => $navOpen = value);
  let myButton;
  $$result.css.add(css$3);
  $$unsubscribe_navOpen();
  return `<button class="${["common moreButton svelte-zvoqsz", ($navOpen ? "active" : "") ? "active" : ""].join(" ").trim()}"${add_attribute("this", myButton, 0)}>${escape($navOpen ? "Hide" : "More")}</button>

${$navOpen ? `<div class="${"menu common svelte-zvoqsz"}"><div class="${"tree svelte-zvoqsz"}">${validate_component(Tree, "Tree").$$render($$result, {}, {}, {})}</div>
    ${validate_component(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}</div>` : ``}`;
});
var Logo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.logo.svelte-1532ok9{cursor:pointer;border:none;text-decoration:none;background-color:transparent;width:150px;font-size:2rem;color:var(--c-darkgray);text-shadow:1px -1px var(--c-gray);font-weight:800;transition:color 0.3s}.logo.svelte-1532ok9:hover{color:var(--c-white)}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<a href="${"/"}" rel="${"internal"}" class="${"logo svelte-1532ok9"}">visualsvelte</a>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-xdjub9.svelte-xdjub9{justify-items:space-around;display:grid;grid-template-columns:1fr 3fr 1fr;background-color:var(--c-darkgray);padding:0px 16px;text-align:center;min-height:200px;color:white}.container.svelte-xdjub9 .logo.svelte-xdjub9,.container.svelte-xdjub9 .support.svelte-xdjub9,.container.svelte-xdjub9 .writing.svelte-xdjub9{padding:30px}.container.svelte-xdjub9 .logo a.svelte-xdjub9,.container.svelte-xdjub9 .support a.svelte-xdjub9,.container.svelte-xdjub9 .writing a.svelte-xdjub9{cursor:pointer !important;color:var(--c-green)}.container.svelte-xdjub9 .logo p span.svelte-xdjub9,.container.svelte-xdjub9 .support p span.svelte-xdjub9,.container.svelte-xdjub9 .writing p span.svelte-xdjub9{color:var(--c-green);text-decoration:underline}.container.svelte-xdjub9 .support.svelte-xdjub9{margin:0 auto}.container.svelte-xdjub9 .support a.svelte-xdjub9{background:none !important}@media all and (max-width: 700px){.container.svelte-xdjub9 .logo.svelte-xdjub9,.container.svelte-xdjub9 .writing.svelte-xdjub9,.container.svelte-xdjub9 .support.svelte-xdjub9{grid-column:1/4;padding:20px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navOpen;
  $$unsubscribe_navOpen = subscribe(navOpen, (value) => value);
  $$result.css.add(css$1);
  $$unsubscribe_navOpen();
  return `<div class="${"container svelte-xdjub9"}"><div class="${"logo svelte-xdjub9"}">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</div>
  <div class="${"writing svelte-xdjub9"}"><p>thanks for visiting visualsvelte!</p>
    <p>you can read all posts <span class="${"svelte-xdjub9"}">here</span></p>
    <p>before you go, let\u2019s connect! <a rel="${"external"}" href="${"https://twitter.com/visualsvelte"}" class="${"svelte-xdjub9"}">@visualsvelte</a></p>
    <p><a sveltekit:prefetch href="${"/about"}" class="${"svelte-xdjub9"}">read more</a> about visualsvelte!
    </p></div>
  <div class="${"support svelte-xdjub9"}">${validate_component(Kofi, "Kofi").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const innerWidth = writable(600);
const scrollY = writable(0);
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.dimmer.svelte-1ovncbh.svelte-1ovncbh{position:fixed;min-width:100%;min-height:100%;z-index:2;background-color:rgba(0, 0, 0, 0.5)}.wrapper.svelte-1ovncbh.svelte-1ovncbh{min-height:1000px !important;width:100%;background-size:20px 20px;background-image:linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)}.wrapper.svelte-1ovncbh main.svelte-1ovncbh{padding:10px 10px 100px 10px}*{font-family:"Inconsolata", monospace}p{line-height:1.4rem}h1{padding:1rem 0}a{color:var(--c-darkgray);transition:background 0.3s;background:linear-gradient(180deg, transparent 85%, rgba(119, 227, 35, 0.1) 15%)}a:focus{color:var(--c-darkgray);background:linear-gradient(180deg, transparent 80%, rgba(119, 227, 35, 0.35) 20%)}a:hover{background:rgba(119, 227, 35, 0.35)}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_innerWidth;
  let $$unsubscribe_scrollY;
  let $navOpen, $$unsubscribe_navOpen;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => value);
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => value);
  $$unsubscribe_navOpen = subscribe(navOpen, (value) => $navOpen = value);
  $$result.css.add(css);
  $$unsubscribe_innerWidth();
  $$unsubscribe_scrollY();
  $$unsubscribe_navOpen();
  return `${$$result.head += `<style data-svelte="svelte-14rra2v">@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600&display=swap");
  </style>`, ""}

${$navOpen ? `<div class="${"dimmer svelte-1ovncbh"}"></div>` : ``}
<div class="${"wrapper svelte-1ovncbh"}"><header>${validate_component(MinimalNav, "MinimalNav").$$render($$result, {}, {}, {})}</header>
  <main id="${"content"}" class="${"svelte-1ovncbh"}">${slots.default ? slots.default({}) : ``}</main>
  <footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer>
</div>`;
});
export { _layout as default };
