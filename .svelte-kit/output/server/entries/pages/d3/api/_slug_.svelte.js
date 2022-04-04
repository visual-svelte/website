import { c as create_ssr_component, b as each, e as escape, p as compute_rest_props, l as createEventDispatcher, i as spread, j as escape_object, q as is_promise, d as noop, v as validate_component, a as add_attribute, n as null_to_empty, g as subscribe, h as set_store_value, r as onDestroy, m as missing_component } from "../../../../chunks/index-02532eaa.js";
import { w as writable, d as d3CMS } from "../../../../chunks/cms-d3e083d3.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css$6 from "highlight.js/lib/languages/css";
/* empty css                                                                      */import { p as page } from "../../../../chunks/stores-9fa16f27.js";
import { P as PostGallery } from "../../../../chunks/PostGallery-c6ec5968.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../../chunks/SimplePostCard-778ec895.js";
/* empty css                                                                        *//* empty css                                                                     */const github = `<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/.hljs{color:#24292e;background:#fff}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#d73a49}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#6f42c1}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#005cc5}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#032f62}.hljs-built_in,.hljs-symbol{color:#e36209}.hljs-code,.hljs-comment,.hljs-formula{color:#6a737d}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#22863a}.hljs-subst{color:#24292e}.hljs-section{color:#005cc5;font-weight:700}.hljs-bullet{color:#735c0f}.hljs-emphasis{color:#24292e;font-style:italic}.hljs-strong{color:#24292e;font-weight:700}.hljs-addition{color:#22863a;background-color:#f0fff4}.hljs-deletion{color:#b31d28;background-color:#ffeef0}</style>`;
var github$1 = github;
var OnThisPage_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "li.svelte-1lrdn70{margin-top:0.5rem}",
  map: null
};
const OnThisPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { points } = $$props;
  if ($$props.points === void 0 && $$bindings.points && points !== void 0)
    $$bindings.points(points);
  $$result.css.add(css$5);
  return `<div><p>In this post:</p>
  ${each(points, (point) => {
    return `<li class="${"svelte-1lrdn70"}"><a href="${"#" + escape(point.id)}">${escape(point.title)}</a>
    </li>`;
  })}
</div>`;
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
  hljs.registerLanguage("css", css$6);
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
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}button.svelte-14wm0vg{border:1px solid var(--c-gray);align-self:center;width:200px;box-shadow:2px -2px 0 0 var(--c-green);border:none;background-color:var(--c-white);padding:10px 20px;opacity:0.9;transition:all 0.5s;cursor:pointer}button.svelte-14wm0vg:hover{opacity:1;box-shadow:4px -4px 0 0 var(--c-green)}",
  map: null
};
const Copy2Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css$3);
  return `<button class="${"svelte-14wm0vg"}">${escape("Copy to Clipboard")}
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
  code: ".box.svelte-bm9546.svelte-bm9546{margin-bottom:10px;max-width:90%;min-height:300px;background-color:white;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;padding:10px;border:1px solid #dee2e6;border-radius:0 0 0.5rem 0.5rem;border-top:0}ul.svelte-bm9546.svelte-bm9546{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;border-bottom:1px solid #dee2e6}li.svelte-bm9546.svelte-bm9546{margin-bottom:-1px}span.svelte-bm9546.svelte-bm9546{border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;display:block;padding:0.5rem 1rem;cursor:pointer}span.svelte-bm9546.svelte-bm9546:hover{border-color:#e9ecef #e9ecef #dee2e6}li.active.svelte-bm9546>span.svelte-bm9546{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}",
  map: null
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = [{ label: "Visual", value: 1 }, { label: "Code", value: 2 }];
  let activeTabValue = 1;
  $$result.css.add(css$1);
  return `<ul class="${"svelte-bm9546"}">${each(items, (item) => {
    return `<li class="${escape(null_to_empty(activeTabValue === item.value ? "active" : "")) + " svelte-bm9546"}"><span class="${"svelte-bm9546"}">${escape(item.label)}</span>
    </li>`;
  })}</ul>
${each(items, (item) => {
    return `${activeTabValue == item.value ? `<div class="${"box svelte-bm9546"}">${`${slots.tab1 ? slots.tab1({}) : ``}`}
      

      
    </div>` : ``}`;
  })}`;
});
const Scrolly = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    if (!nodes.length)
      return;
    nodes.forEach(createObserver);
  };
  const mostInView = () => {
    let maxRatio = 0;
    let maxIndex = 0;
    for (let i = 0; i < steps.length; i++) {
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
const tableOfContents = writable([]);
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-17wglqz.svelte-17wglqz{margin:0 auto;max-width:700px}h2.svelte-17wglqz.svelte-17wglqz{margin:100px 0 30px 0}.intro.svelte-17wglqz h1.svelte-17wglqz{margin:0}p.svelte-17wglqz.svelte-17wglqz{font-size:0.9rem}.subheading.svelte-17wglqz.svelte-17wglqz{margin-top:5rem;padding-top:20px;border-top:1px solid rgba(119, 227, 35, 0.55)}.comp-description.svelte-17wglqz span{color:blue;font-style:italic;padding:3px 5px;border-radius:10px;font-family:monospace}.svg-container.svelte-17wglqz.svelte-17wglqz{overflow-y:scroll}.svg-container.svelte-17wglqz.svelte-17wglqz::-webkit-scrollbar{width:0.5em;height:0.5em}.svg-container.svelte-17wglqz.svelte-17wglqz::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.1);border-radius:3px}.svg-container.svelte-17wglqz.svelte-17wglqz::-webkit-scrollbar-thumb:hover{background:rgba(255, 255, 255, 0.2)}",
  map: null
};
async function load(ctx) {
  let slug = ctx.url.pathname;
  const primaryKey = slug.split("/").pop();
  const content = d3CMS.find((record) => record.primary_key == primaryKey);
  let filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return { props: { filteredData, content } };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let $tableOfContents, $$unsubscribe_tableOfContents;
  let $page, $$unsubscribe_page;
  $$unsubscribe_tableOfContents = subscribe(tableOfContents, (value) => $tableOfContents = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { content } = $$props;
  let { filteredData } = $$props;
  let titles = content?.components.map((comp) => {
    return {
      id: comp.id,
      title: comp.title,
      bool: false
    };
  });
  titles?.unshift({ id: "intro", title: "Intro", bool: true });
  if (content && content.published) {
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
  if ($$props.filteredData === void 0 && $$bindings.filteredData && filteredData !== void 0)
    $$bindings.filteredData(filteredData);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      $page.url;
    }
    components = content?.components;
    {
      updateStore(scrollValue);
    }
    $$rendered = `<div class="${"wrapper svelte-17wglqz"}">${errorState || !content.published ? `${validate_component(ComeBackLater, "ComeBackLater").$$render($$result, {}, {}, {})}` : `${validate_component(Scrolly, "Scrolly").$$render($$result, { value: scrollValue }, {
      value: ($$value) => {
        scrollValue = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div id="${"intro"}" class="${"intro svelte-17wglqz"}"><h1 class="${"svelte-17wglqz"}">${escape(content?.post_title)}</h1>
        <p class="${"svelte-17wglqz"}"><!-- HTML_TAG_START -->${content?.intro_text}<!-- HTML_TAG_END --></p>

        ${validate_component(GitHubLink, "GitHubLink").$$render($$result, {
          d3module: content.primary_key,
          url: `https://github.com/d3/${content.primary_key}`
        }, {}, {})}
        ${validate_component(OnThisPage, "OnThisPage").$$render($$result, { points: content.components }, {}, {})}</div>
      ${each(components, (comp, i) => {
          return `<div${add_attribute("id", comp.id, 0)} class="${["container step", scrollValue === i ? "active" : ""].join(" ").trim()}"><h2 class="${"subheading svelte-17wglqz"}"><!-- HTML_TAG_START -->${comp.title}<!-- HTML_TAG_END --></h2>
          <p class="${"comp-description svelte-17wglqz"}"><!-- HTML_TAG_START -->${comp.notes}<!-- HTML_TAG_END --></p>

          ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
            tab2: () => {
              return `<div slot="${"tab2"}">${validate_component(CodeVisual, "CodeVisual").$$render($$result, { compid: comp.id }, {}, {})}
            </div>`;
            },
            tab1: () => {
              return `<div slot="${"tab1"}"><div class="${"svg-container svelte-17wglqz"}">${validate_component(comp.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>
            </div>`;
            }
          })}
        </div>`;
        })}`;
      }
    })}

    <h2 class="${"svelte-17wglqz"}">You might also like:</h2>
    ${validate_component(PostGallery, "PostGallery").$$render($$result, { posts: filteredData, showMax: 3 }, {}, {})}`}
</div>`;
  } while (!$$settled);
  $$unsubscribe_tableOfContents();
  $$unsubscribe_page();
  return $$rendered;
});
export { U5Bslugu5D as default, load };
