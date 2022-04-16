import { c as create_ssr_component, a as add_attribute, p as compute_rest_props, k as createEventDispatcher, q as spread, r as escape_object, e as escape, t as is_promise, o as noop, v as validate_component } from "./index-1116a07c.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css$2 from "highlight.js/lib/languages/css";
/* empty css                                                     */const Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { root = null } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { increments = 100 } = $$props;
  let { value = 0 } = $$props;
  const steps = [];
  const threshold = [];
  let nodes = [];
  let intersectionObservers = [];
  let container;
  const update = () => {
    if (!nodes?.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps?.length; i++) {
      if (steps[i] > maxRatio) {
        maxRatio = steps[i];
        maxIndex = i;
      }
    }
    if (maxRatio > 0)
      value = maxIndex;
    else
      value = 0;
  };
  const createObserver = (node, index) => {
    const handleIntersect = (e) => {
      e[0].isIntersecting;
      const ratio = e[0].intersectionRatio;
      steps[index] = ratio;
      mostInView();
    };
    const marginTop = top ? top * -1 : 0;
    const marginBottom = bottom ? bottom * -1 : 0;
    const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    const options = { root, rootMargin, threshold };
    if (intersectionObservers[index])
      intersectionObservers[index].disconnect();
    const io = new IntersectionObserver(handleIntersect, options);
    io.observe(node);
    intersectionObservers[index] = io;
  };
  if ($$props.root === void 0 && $$bindings.root && root !== void 0)
    $$bindings.root(root);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.increments === void 0 && $$bindings.increments && increments !== void 0)
    $$bindings.increments(increments);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  {
    update();
  }
  return `<div${add_attribute("this", container, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
var Highlight_svelte_svelte_type_style_lang = "";
var HighlightAuto_svelte_svelte_type_style_lang = "";
var HighlightSvelte_svelte_svelte_type_style_lang = "";
const css$1 = {
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
  hljs.registerLanguage("css", css$2);
  if ($$props.code === void 0 && $$bindings.code && code !== void 0)
    $$bindings.code(code);
  if ($$props.langtag === void 0 && $$bindings.langtag && langtag !== void 0)
    $$bindings.langtag(langtag);
  $$result.css.add(css$1);
  highlighted = hljs.highlightAuto(code).value;
  return `${slots.default ? slots.default({ highlighted }) : `
  
  <pre${spread([{ "data-language": "svelte" }, escape_object($$restProps)], {
    classes: (langtag ? "langtag" : "") + " svelte-1xjucv4"
  })}><code class="${"hljs"}"><!-- HTML_TAG_START -->${highlighted}<!-- HTML_TAG_END --></code></pre>
`}`;
});
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
var Copy2Clipboard_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.donation.svelte-tayy2o{z-index:2;padding-left:20px}button.svelte-tayy2o{z-index:20;float:left;border:1px solid var(--c-gray);align-self:center;width:200px;box-shadow:2px -2px 0 0 var(--c-green);border:none;background-color:var(--c-white);padding:10px 20px;opacity:0.9;margin-right:20px;transition:all 0.5s;cursor:pointer}button.svelte-tayy2o:hover{opacity:1;box-shadow:4px -4px 0 0 var(--c-green)}",
  map: null
};
const Copy2Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { string = false } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.string === void 0 && $$bindings.string && string !== void 0)
    $$bindings.string(string);
  $$result.css.add(css);
  return `<button class="${"svelte-tayy2o"}">${escape("Copy to Clipboard")}</button>
<div style="${"min-height:25px"}">${``}
</div>`;
});
const CodeVisual = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { compid } = $$props;
  let { route } = $$props;
  let promise = Promise.resolve([]);
  if ($$props.compid === void 0 && $$bindings.compid && compid !== void 0)
    $$bindings.compid(compid);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
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
export { CodeVisual as C, Scrolly as S };
