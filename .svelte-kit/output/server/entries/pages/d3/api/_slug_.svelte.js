import { c as create_ssr_component, h as each, g as escape, r as compute_rest_props, t as createEventDispatcher, j as spread, k as escape_object, u as is_promise, n as noop, v as validate_component, b as add_attribute, w as null_to_empty, a as subscribe, q as set_store_value, p as onDestroy, m as missing_component } from "../../../../chunks/index-58574f58.js";
import { d as d3CMS } from "../../../../chunks/cms-12574a25.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css$5 from "highlight.js/lib/languages/css";
/* empty css                                                                      */import { S as Scrolly } from "../../../../chunks/Scrolly-c0776ab4.js";
import { t as tableOfContents } from "../../../../chunks/post-3f36dfb4.js";
import "d3";
import "../../../../chunks/screen-47820f5b.js";
import "../../../../chunks/index-79b72b18.js";
const github = `<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}</style>`;
var github$1 = github;
const OnThisPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { points } = $$props;
  if ($$props.points === void 0 && $$bindings.points && points !== void 0)
    $$bindings.points(points);
  return `<div><p>In this post:</p>
  ${each(points, (point) => {
    return `<li><a href="${"#" + escape(point.id)}">${escape(point.title)}</a>
    </li>`;
  })}</div>
`;
});
var ComeBackLater_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "p.svelte-fyff70{overflow:wrap}",
  map: null
};
const ComeBackLater = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<p class="${"svelte-fyff70"}">Sorry, I&#39;m still working on this piece of content! But I&#39;ll be sure to publish
  it as soon as it&#39;s ready.
</p>

<p class="${"svelte-fyff70"}">Want to be informed when it is released. sign up to our mailing list.</p>`;
});
var Highlight_svelte_svelte_type_style_lang = "";
var HighlightAuto_svelte_svelte_type_style_lang = "";
var HighlightSvelte_svelte_svelte_type_style_lang = "";
const css$1$1 = {
  code: "pre.langtag.svelte-1xjucv4{position:relative}pre.langtag.svelte-1xjucv4::after{content:attr(data-language);position:absolute;top:0;right:0;padding:1em;display:flex;align-items:center;justify-content:center;background:inherit;color:inherit;background:var(--hljs-background);color:var(--hljs-foreground);border-radius:var(--hljs-radius)}",
  map: null
};
const HighlightSvelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let highlighted;
  let $$restProps = compute_rest_props($$props, ["code", "langtag"]);
  let { code = void 0 } = $$props;
  let { langtag = false } = $$props;
  createEventDispatcher();
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("css", css$5);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  $$result.css.add(css$1$1);
  highlighted = hljs.highlightAuto(code).value;
  return `${slots.default ? slots.default({ highlighted }) : `
  
  <pre${spread([{ "data-language": "svelte" }, escape_object($$restProps)], {
    classes: (langtag ? "langtag" : "") + " svelte-1xjucv4"
  })}><code class="${"hljs"}"><!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END --></code></pre>
`}`;
});
var Copy2Clipboard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}button.svelte-1j0swci{border:1px solid var(--c-gray);align-self:center;width:200px;box-shadow:2px -2px 0 0 var(--c-green);border:none;background-color:var(--c-white);padding:10px 20px;opacity:0.9;transition:all 0.5s;cursor:pointer}button.svelte-1j0swci:hover{opacity:1;box-shadow:4px -4px 0 0 var(--c-green)}",
  map: null
};
const Copy2Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$3);
  return `<button class="${"svelte-1j0swci"}">${escape("Copy to Clipboard")}
</button>`;
});
const CodeVisual = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { compid } = $$props;
  let promise = Promise.resolve([]);
  if ($$props.compid === void 0 && $$bindings.compid && compid !== void 0)
    $$bindings.compid(compid);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
  Loading ...
`;
    }
    return function(code) {
      return `
  ${validate_component(Copy2Clipboard, "Copy2Clipboard").$$render($$result, { content: code.content }, {}, {})}
  <div>${validate_component(HighlightSvelte, "HighlightSvelte").$$render($$result, { code: atob(code.content) }, {}, {})}</div>
  ${validate_component(Copy2Clipboard, "Copy2Clipboard").$$render($$result, { content: code.content }, {}, {})}
`;
    }(__value);
  }(promise)}

${$$result.head += `<!-- HTML_TAG_START -->${github$1}<!-- HTML_TAG_END -->`, ""}`;
});
var GitHubLink_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-nh07a1{background-color:rgba(119, 227, 35, 0.15);margin:40px 0;border-radius:20px;padding:20px}",
  map: null
};
const GitHubLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { d3module } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.d3module === void 0 && $$bindings.d3module && d3module !== void 0)
    $$bindings.d3module(d3module);
  $$result.css.add(css$2);
  return `<div class="${"svelte-nh07a1"}">Note: this page shows you how to implment the ${escape(d3module)} module in SvelteKit. For
  more details about the ${escape(d3module)} module, please consult the
  <a${add_attribute("href", url, 0)}>docs on GitHub</a>.
</div>`;
});
var Tabs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".box.svelte-bakiw6.svelte-bakiw6{margin-bottom:10px;max-width:90%;min-height:300px;border:1px solid #dee2e6;border-radius:0 0 0.5rem 0.5rem;border-top:0}ul.svelte-bakiw6.svelte-bakiw6{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;border-bottom:1px solid #dee2e6}li.svelte-bakiw6.svelte-bakiw6{margin-bottom:-1px}span.svelte-bakiw6.svelte-bakiw6{border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;display:block;padding:0.5rem 1rem;cursor:pointer}span.svelte-bakiw6.svelte-bakiw6:hover{border-color:#e9ecef #e9ecef #dee2e6}li.active.svelte-bakiw6>span.svelte-bakiw6{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}",
  map: null
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [{ label: "Visual", value: 1 }, { label: "Code", value: 2 }];
  let activeTabValue = 1;
  $$result.css.add(css$1);
  return `<ul class="${"svelte-bakiw6"}">${each(items, (item) => {
    return `<li class="${escape(null_to_empty(activeTabValue === item.value ? "active" : "")) + " svelte-bakiw6"}"><span class="${"svelte-bakiw6"}">${escape(item.label)}</span>
    </li>`;
  })}</ul>
${each(items, (item) => {
    return `${activeTabValue == item.value ? `<div class="${"box svelte-bakiw6"}">${`${slots.tab1 ? slots.tab1({}) : ``}`}
      

      
    </div>` : ``}`;
  })}`;
});
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)\n  --scale-0: 1rem;--scale-1:1.125rem;--scale-2:1.25rem;--scale-3:1.5rem;--scale-4:1.875rem;--scale-5:2.25rem;--scale-6:3rem;--scale-7:3.75rem;--scale-8:4.5rem;--scale-9:6rem;--scale-10:8rem;--scale-000:0.75rem;--scale-00:0.875rem;--weight-light:300;--weight-regular:400;--weight-medium:500;--weight-semibold:600;--weight-bold:700;--weight-extrabold:800;--weight-black:900;--line-none:1;--line-xs:1.125;--line-sm:1.275;--line-md:1.5;--line-lg:1.625;--line-xl:2;--letter-xs:-0.05em;--letter-sm:-0.025em;--letter-none:0em;--letter-lg:0.025em;--letter-xl:0.05em;--prose-xs:45ch;--prose-sm:55ch;--prose-md:65ch;--prose-lg:75ch;--prose-xl:85ch;--size-1:4px;--size-2:8px;--size-3:12px;--size-4:16px;--size-5:20px;--size-6:24px;--size-7:28px;--size-8:32px;--size-9:36px;--size-10:40px;--size-11:44px;--size-12:48px;--size-14:56px;--size-16:64px;--size-20:80px;--size-24:96px;--size-28:112px;--size-32:128px;--size-36:144px;--size-40:160px;--size-44:176px;--size-48:192px;--size-52:208px;--size-56:224px;--size-60:240px;--size-64:256px;--size-72:288px;--size-80:320px;--size-96:384px;--size-px:1px;--size-full:100%;--size-screen:100vw;--size-min:min-content;--size-max:max-content;--width-xs:480px;--width-sm:640px;--width-md:768px;--width-lg:1024px;--width-xl:1280px;--radius-100:100%;--radius-xs:3px;--radius-sm:6px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--blur-xs:blur(4px);--blur-sm:blur(8px);--blur-md:blur(16px);--blur-lg:blur(24px);--blur-xl:blur(40px);--layer-1:10;--layer-2:20;--layer-3:30;--layer-4:40;--layer-5:50;--layer-below:-1;--layer-top:2147483647;--elevation-1:0 1px 2px 0 rgba(0, 0, 0, 0.05);--elevation-2:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);--elevation-3:0 4px 6px -2px rgba(0, 0, 0, 0.1),\n    0 2px 4px -2px rgba(0, 0, 0, 0.06);--elevation-4:0 12px 16px -4px rgba(0, 0, 0, 0.1),\n    0 4px 6px -2px rgba(0, 0, 0, 0.05);--elevation-5:0 20px 24px -4px rgba(0, 0, 0, 0.1),\n    0 8px 8px -4px rgba(0, 0, 0, 0.04);--elevation-6:0 24px 48px -12px rgba(0, 0, 0, 0.25);--elevation-7:0 32px 64px -12px rgba(0, 0, 0, 0.2);--easing-standard:cubic-bezier(0.4, 0, 0.2, 1);--easing-accelerate:cubic-bezier(0.4, 0, 1, 1);--easing-decelerate:cubic-bezier(0, 0, 0.2, 1);--color-grey-50:#f9fafb;--color-grey-100:#f2f4f5;--color-grey-200:#e8eaed;--color-grey-300:#d4d7dd;--color-grey-400:#a5aab4;--color-grey-500:#767c89;--color-grey-600:#555d6e;--color-grey-700:#3f4754;--color-grey-800:#2c343f;--color-grey-900:#10181c;--color-black:#14141b;--color-grey:var(--color-grey-500);--color-red-300:#fc8181;--color-red-500:#e53e3e;--color-red-700:#c53030;--color-red:var(--color-red-500);--color-green-300:#9ae6b4;--color-green-500:#48bb78;--color-green-700:#2f855a;--color-green:var(--color-green-500);--color-blue-300:#63b3ed;--color-blue-500:#4299e1;--color-blue-700:#3182ce;--color-blue:var(--color-blue-500);--color-pink-300:#fbb6ce;--color-pink-500:#ed64a6;--color-pink-700:#d53f8c;--color-pink:var(--color-pink-500);--color-purple-300:#b794f4;--color-purple-500:#805ad5;--color-purple-700:#6b46c1;--color-purple:var(--color-purple-500);--color-teal-300:#81e6d9;--color-teal-500:#38b2ac;--color-teal-700:#2c7a7b;--color-teal:var(--color-teal-500);--color-yellow-300:#faf089;--color-yellow-500:#ecc94b;--color-yellow-700:#d69e2e;--color-yellow:var(--color-yellow-500);--color-orange-300:#fbd38d;--color-orange-500:#ed8936;--color-orange-700:#dd6b20;--color-orange:var(--color-orange-500);--color-brown-300:#a1887f;--color-brown-500:#795548;--color-brown-700:#5d4037;--color-brown:var(--color-brown-500);--grid-2:repeat(2, minmax(0, 1fr));--grid-3:repeat(3, minmax(0, 1fr));--grid-4:repeat(4, minmax(0, 1fr));--grid-5:repeat(5, minmax(0, 1fr));--grid-6:repeat(6, minmax(0, 1fr));--grid-7:repeat(7, minmax(0, 1fr));--grid-8:repeat(8, minmax(0, 1fr));--grid-9:repeat(9, minmax(0, 1fr));--grid-10:repeat(10, minmax(0, 1fr));--grid-11:repeat(11, minmax(0, 1fr));--grid-12:repeat(12, minmax(0, 1fr));--grid-page-width:var(--width-xl);--grid-page-gutter:5vw;--grid-page-main:2 / 3;--grid-page:minmax(var(--grid-page-gutter), 1fr)\n    minmax(0, var(--grid-page-width)) minmax(var(--grid-page-gutter), 1fr)}p.svelte-xv2oya{font-size:0.9rem}.subheading.svelte-xv2oya{margin-top:5rem;padding-top:20px;border-top:1px solid rgba(119, 227, 35, 0.55)}.comp-description.svelte-xv2oya span{color:blue;font-style:italic;padding:3px 5px;border-radius:10px;font-family:monospace}.svg-container.svelte-xv2oya{overflow-y:scroll}.svg-container.svelte-xv2oya::-webkit-scrollbar{width:0.5em;height:0.5em}.svg-container.svelte-xv2oya::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.1);border-radius:3px}.svg-container.svelte-xv2oya::-webkit-scrollbar-thumb:hover{background:rgba(255, 255, 255, 0.2)}",
  map: null
};
async function load(ctx) {
  let slug = ctx.url.pathname;
  const primaryKey = slug.split("/").pop();
  const content = d3CMS.find((record) => record.primary_key == primaryKey);
  return { props: { content } };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let $tableOfContents, $$unsubscribe_tableOfContents;
  $$unsubscribe_tableOfContents = subscribe(tableOfContents, (value) => $tableOfContents = value);
  let { content } = $$props;
  let titles = content.components.map((comp) => {
    return {
      id: comp.id,
      title: comp.title,
      bool: false
    };
  });
  titles.unshift({ id: "intro", title: "Intro", bool: true });
  if (content.published) {
    set_store_value(tableOfContents, $tableOfContents = titles, $tableOfContents);
  }
  onDestroy(() => {
    set_store_value(tableOfContents, $tableOfContents = [], $tableOfContents);
  });
  let errorState = false;
  let scrollValue = 0;
  let previousValue = 0;
  function updateStore(newScrollValue) {
    try {
      if (newScrollValue != void 0) {
        set_store_value(tableOfContents, $tableOfContents[previousValue].bool = false, $tableOfContents);
        set_store_value(tableOfContents, $tableOfContents[newScrollValue].bool = true, $tableOfContents);
        previousValue = newScrollValue;
      }
    } catch (error) {
      errorState = true;
      console.error(error);
    }
  }
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    components = content.components;
    {
      updateStore(scrollValue);
    }
    $$rendered = `${errorState || !content.published ? `${validate_component(ComeBackLater, "ComeBackLater").$$render($$result, {}, {}, {})}` : `${validate_component(Scrolly, "Scrolly").$$render($$result, { value: scrollValue }, {
      value: ($$value) => {
        scrollValue = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div id="${"intro"}" class="${"intro"}"><h1>${escape(content?.post_title)}</h1>
      <p class="${"svelte-xv2oya"}">${escape(content?.intro_text)}</p>

      ${validate_component(GitHubLink, "GitHubLink").$$render($$result, {
          d3module: content.primary_key,
          url: `https://github.com/d3/${content.primary_key}`
        }, {}, {})}
      ${validate_component(OnThisPage, "OnThisPage").$$render($$result, { points: content.components }, {}, {})}</div>
    ${each(components, (comp, i) => {
          return `<div${add_attribute("id", comp.id, 0)} class="${["container step", scrollValue === i ? "active" : ""].join(" ").trim()}"><h2 class="${"subheading svelte-xv2oya"}">${escape(comp.title)}</h2>
        <p class="${"comp-description svelte-xv2oya"}"><!-- HTML_TAG_START -->${comp.notes}<!-- HTML_TAG_END --></p>

        ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
            tab2: () => {
              return `<div slot="${"tab2"}">${validate_component(CodeVisual, "CodeVisual").$$render($$result, { compid: comp.id }, {}, {})}
          </div>`;
            },
            tab1: () => {
              return `<div slot="${"tab1"}"><div class="${"svg-container svelte-xv2oya"}">${validate_component(comp.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>
          </div>`;
            }
          })}
      </div>`;
        })}`;
      }
    })}`}`;
  } while (!$$settled);
  $$unsubscribe_tableOfContents();
  return $$rendered;
});
export { U5Bslugu5D as default, load };
