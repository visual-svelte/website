import { c as create_ssr_component, g as subscribe, b as each, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index-769cbf91.js";
import { w as writable, I as Icon } from "../../chunks/cms-svelte-89dc672e.js";
import { s as sidebarData } from "../../chunks/dynamicData-72e433f6.js";
import { K as Kofi, i as innerWidth, s as scrollY } from "../../chunks/screen-a99cf991.js";
import { p as page } from "../../chunks/stores-85ad27c0.js";
import { k as keyToSentence } from "../../chunks/textUtils-39f3d08b.js";
import "d3";
import { B as BrandShape } from "../../chunks/BrandShape-d1421571.js";
import "d3-scale";
import "d3-selection";
import "d3-axis";
import "d3-brush";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-drag";
import "d3-force";
import "d3-shape";
import "d3-array";
import "d3-geo";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                */import "feather-icons";
import "d3-interpolate";
const navOpen = writable(false);
const treeData = writable(sidebarData);
var BottomNav_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.fixed.svelte-14hrrrw.svelte-14hrrrw{background-color:var(--dark);margin:0;color:var(--c-white);display:grid;grid-template-columns:2fr 3fr}.fixed.svelte-14hrrrw a.svelte-14hrrrw{color:white;border:none;background:none}.fixed.svelte-14hrrrw .other-links.svelte-14hrrrw{display:inline-block;padding:2rem 1rem}.fixed.svelte-14hrrrw .other-links div.svelte-14hrrrw{margin-bottom:20px}.fixed.svelte-14hrrrw .right .socials.svelte-14hrrrw{margin:1rem 0;padding:0.8rem 0 0 0.8rem}.fixed.svelte-14hrrrw .right .socials a.svelte-14hrrrw{padding:10px}.fixed.svelte-14hrrrw .right .donate.svelte-14hrrrw{grid-area:donate;padding:0.8rem 0 0 0.8rem}",
  map: null
};
const BottomNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navOpen;
  $$unsubscribe_navOpen = subscribe(navOpen, (value) => value);
  let links = [{ href: "/", text: "Home" }, { href: "/about", text: "About" }];
  $$result.css.add(css$4);
  $$unsubscribe_navOpen();
  return `<div class="${"fixed svelte-14hrrrw"}"><div class="${"other-links svelte-14hrrrw"}">${each(links, (link) => {
    return `<div class="${"svelte-14hrrrw"}"><a rel="${"internal"}"${add_attribute("href", link.href, 0)} class="${"svelte-14hrrrw"}">${escape(link.text)}</a>
      </div>`;
  })}</div>
  <div class="${"right svelte-14hrrrw"}"><div class="${"socials svelte-14hrrrw"}">Say hi: <a target="${"_blank"}" rel="${"external"}" href="${"https://twitter.com/visualsvelte"}" class="${"svelte-14hrrrw"}">${validate_component(Icon, "Icon").$$render($$result, {
    name: "twitter",
    fill: "var(--c-white)",
    width: "20px",
    height: "20px"
  }, {}, {})}</a></div>
    <div class="${"donate svelte-14hrrrw"}">${validate_component(Kofi, "Kofi").$$render($$result, {}, {}, {})}</div></div>
</div>`;
});
var Tree_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.subh.svelte-q4xvgi.svelte-q4xvgi{user-select:none;cursor:pointer;padding-left:1rem}.bullet.svelte-q4xvgi.svelte-q4xvgi{list-style-type:none;margin:0 0 0rem 1rem;cursor:pointer}.bullet.svelte-q4xvgi a.svelte-q4xvgi{text-decoration:none;position:relative;color:var(--dar)}.bullet.svelte-q4xvgi a span.svelte-q4xvgi{color:--c-darkgray;font-size:0.8rem;margin-top:0px}.bullet.current.svelte-q4xvgi.svelte-q4xvgi{font-weight:600;cursor:default}.bullet.current.svelte-q4xvgi.svelte-q4xvgi:hover{background-color:transparent}",
  map: null
};
const Tree = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let catCounts;
  let $treeData, $$unsubscribe_treeData;
  let $$unsubscribe_navOpen;
  let $page, $$unsubscribe_page;
  $$unsubscribe_treeData = subscribe(treeData, (value) => $treeData = value);
  $$unsubscribe_navOpen = subscribe(navOpen, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log("tree", $treeData);
  let { dark = false } = $$props;
  let localData = $treeData;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  $$result.css.add(css$3);
  catCounts = $treeData[0].children.map((cat) => {
    return cat.children.length;
  });
  $$unsubscribe_treeData();
  $$unsubscribe_navOpen();
  $$unsubscribe_page();
  return `${each(localData, (l1, i) => {
    return `
  ${each(l1.children, (l2, j) => {
      return `<h4 class="${["subh svelte-q4xvgi", l2 == "Full API" ? "current" : ""].join(" ").trim()}">${validate_component(Icon, "Icon").$$render($$result, {
        name: "triangle",
        fill: dark ? "var(--c-white)" : "var(--c-darkgray)",
        width: "8px",
        height: "8px",
        stroke: dark ? "var(--c-white)" : "var(--c-darkgray)",
        direction: localData[i].children[j].expanded ? "s" : "e"
      }, {}, {})}
      ${escape(l2.data)} (${escape(catCounts[j] ?? 0)})
    </h4>
    ${localData[i].children[j].expanded ? `${l2.children ? `${each(l2.children, (link) => {
        return `<li class="${[
          "bullet svelte-q4xvgi",
          link.href == $page.params.slug ? "current" : ""
        ].join(" ").trim()}"><a rel="${"internal"}"${add_attribute("href", j === 0 ? "/d3/api/" + link.href : j === 1 ? "/d3/charts/" + link.href : "/svelte/" + link.href, 0)} class="${"svelte-q4xvgi"}"><span class="${"svelte-q4xvgi"}">\u2022</span> ${escape(keyToSentence(link.title))}</a>
          </li>`;
      })}` : `<li>Nothing yet!</li>`}` : ``}`;
    })}`;
  })}`;
});
var MinimalNav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.common.svelte-p1dycw.svelte-p1dycw{background-color:white;border:transparent 1px solid;position:fixed;border-top-right-radius:5px;border-bottom-right-radius:5px;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px}.moreButton.svelte-p1dycw.svelte-p1dycw{background-color:#f7f7f7;padding:1rem;z-index:200 !important;font-weight:600;cursor:pointer;transition:0.3s ease-in-out all}.moreButton.svelte-p1dycw.svelte-p1dycw:disabled{color:black}.moreButton.active.svelte-p1dycw.svelte-p1dycw,.moreButton.svelte-p1dycw.svelte-p1dycw:hover{background-color:white}.menu.svelte-p1dycw.svelte-p1dycw{z-index:40;display:grid;grid-template-rows:auto 180px;height:100vh;width:300px;border:none;top:40px}.menu.svelte-p1dycw .tree.svelte-p1dycw{overflow-y:auto;overflow-x:hidden}.svelte-p1dycw.svelte-p1dycw::-webkit-scrollbar{width:10px}.svelte-p1dycw.svelte-p1dycw::-webkit-scrollbar-track{background:#f1f1f1}.svelte-p1dycw.svelte-p1dycw::-webkit-scrollbar-thumb{background:var(--c-gray)}.svelte-p1dycw.svelte-p1dycw::-webkit-scrollbar-thumb:hover{background:var(--c-darkgray)}",
  map: null
};
const MinimalNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navOpen, $$unsubscribe_navOpen;
  $$unsubscribe_navOpen = subscribe(navOpen, (value) => $navOpen = value);
  let myButton;
  $$result.css.add(css$2);
  $$unsubscribe_navOpen();
  return `<button class="${["common moreButton svelte-p1dycw", ($navOpen ? "active" : "") ? "active" : ""].join(" ").trim()}"${add_attribute("this", myButton, 0)}>${escape($navOpen ? "Hide" : "More")}</button>

${$navOpen ? `<div class="${"menu common svelte-p1dycw"}"><div class="${"tree svelte-p1dycw"}">${validate_component(Tree, "Tree").$$render($$result, {}, {}, {})}</div>
    ${validate_component(BottomNav, "BottomNav").$$render($$result, {}, {}, {})}</div>` : ``}`;
});
var Logo_svelte_svelte_type_style_lang = "";
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.container.svelte-telm9i.svelte-telm9i{color:white;text-align:center;max-width:1200px;border-top:1px solid var(--off-white);margin:0 auto;padding:40px auto}.container.svelte-telm9i .main-links.svelte-telm9i{display:flex;flex-direction:column;padding:2rem 1rem}.container.svelte-telm9i .logo.svelte-telm9i{position:relative}.container.svelte-telm9i .logo a.svelte-telm9i{line-height:1rem}.container.svelte-telm9i .logo a h2.svelte-telm9i{margin-top:1rem;font-weight:300}.container.svelte-telm9i .logo a h2.svelte-telm9i::before{border:none}.container.svelte-telm9i .logo .circle.svelte-telm9i{margin:0 auto;height:160px;width:160px;position:relative}.container.svelte-telm9i .other-links a.svelte-telm9i{font-size:0.7rem}a.svelte-telm9i.svelte-telm9i{color:white;text-decoration:none;font-weight:300;line-height:3rem}a.svelte-telm9i.svelte-telm9i:hover{text-decoration:underline}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = {
    main: [
      {
        text: "Svelte + D3 API Articles",
        href: "/d3/api"
      },
      {
        text: "Svelte + D3 Charts ",
        href: "/d3/charts"
      },
      {
        text: "Svelte Visual Storytelling",
        href: "/svelte"
      },
      {
        text: "About visualsvelte",
        href: "/about"
      }
    ],
    other: [
      { text: "Privacy", href: "/" },
      { text: "Terms", href: "/" },
      { text: "RSS", href: "/" }
    ]
  };
  $$result.css.add(css$1);
  return `<div class="${"container svelte-telm9i"}"><div class="${"main-links svelte-telm9i"}">${each(links.main, (link) => {
    return `<a rel="${"internal"}"${add_attribute("href", link.href, 0)} class="${"svelte-telm9i"}">${escape(link.text)}</a>`;
  })}</div>
  <div class="${"logo svelte-telm9i"}"><div class="${"circle svelte-telm9i"}">${validate_component(BrandShape, "BrandShape").$$render($$result, { fill: "dragon", shape: "circle" }, {}, {})}</div>
    <a rel="${"internal"}" href="${"/"}" class="${"svelte-telm9i"}"><h2 class="${"svelte-telm9i"}">visualsvelte</h2></a></div>
  <div class="${"other-links"}">${each(links.other, (link, i) => {
    return `<a rel="${"internal"}"${add_attribute("href", link.href, 0)} class="${"svelte-telm9i"}">${escape(link.text)}</a>
      <span>${escape(i == 2 ? "" : `     |     `)}</span>`;
  })}</div>
</div>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--white:#ffffff;--off-white:#f3f3f3;--dragon:#b40d61;--lemon:#f7c419;--berry:#fb3636;--dark:#1e1d1d;--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}footer.svelte-bsupr6.svelte-bsupr6{width:100% !important;background-color:var(--dark)}.dimmer.svelte-bsupr6.svelte-bsupr6{position:fixed;min-width:100%;min-height:100%;z-index:3;background-color:rgba(0, 0, 0, 0.5)}.wrapper.svelte-bsupr6.svelte-bsupr6{width:100%;height:100%;background-color:var(--off-white)}.wrapper.svelte-bsupr6 main.svelte-bsupr6{margin:0}h1, h2, h3, h4{font-family:"IBM Plex Mono", monospace}h1{line-height:3rem;font-weight:300;font-size:2.4rem;padding:1rem 0}h2{margin-top:4rem;padding-top:20px;position:relative}h2::before{content:"";position:absolute;left:0;top:10px;height:1px;width:20px;border-bottom:2px solid var(--dragon)}p, ul, div, a{line-height:2rem;font-family:"Josefin Sans", sans-serif}',
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
  return `${$$result.head += `<style data-svelte="svelte-13v6a1t">@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,600;1,400;1,600&family=Josefin+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap");
  </style>`, ""}

${$navOpen ? `<div class="${"dimmer svelte-bsupr6"}"></div>` : ``}
<div class="${"wrapper svelte-bsupr6"}" style="${""}"><header>${validate_component(MinimalNav, "MinimalNav").$$render($$result, {}, {}, {})}</header>
  <main id="${"content"}" class="${"svelte-bsupr6"}">${slots.default ? slots.default({}) : ``}</main>
  <footer class="${"svelte-bsupr6"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer>
</div>`;
});
export { _layout as default };
