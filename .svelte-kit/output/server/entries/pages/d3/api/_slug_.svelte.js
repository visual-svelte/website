import { c as create_ssr_component, b as each, e as escape, a as add_attribute, d as subscribe, f as set_store_value, x as onDestroy, v as validate_component } from "../../../../chunks/index-1116a07c.js";
import { d as d3CMS } from "../../../../chunks/cms-ede64cff.js";
import { F as FormattedExample } from "../../../../chunks/FormattedExample-af8cc064.js";
import { S as Scrolly } from "../../../../chunks/CodeVisual-531fc077.js";
import { M as Meta } from "../../../../chunks/Meta-7f13f532.js";
import { P as PostGallery } from "../../../../chunks/PostGallery-4ef78255.js";
import { w as writable } from "../../../../chunks/index-46acc537.js";
import { p as page } from "../../../../chunks/stores-ca089767.js";
import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                      */import "../../../../chunks/textUtils-aba21c2d.js";
/* empty css                                                                     */var OnThisPage_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "li.svelte-1lrdn70{margin-top:0.5rem}",
  map: null
};
const OnThisPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { points } = $$props;
  if ($$props.points === void 0 && $$bindings.points && points !== void 0)
    $$bindings.points(points);
  $$result.css.add(css$3);
  return `<div><p>In this post:</p>
  ${each(points, (point) => {
    return `<li class="${"svelte-1lrdn70"}"><a href="${"#" + escape(point.id)}">${escape(point.title)}</a>
    </li>`;
  })}
</div>`;
});
var ComeBackLater_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "p.svelte-fyff70{overflow:wrap}",
  map: null
};
const ComeBackLater = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<p class="${"svelte-fyff70"}">Sorry, I&#39;m still working on this piece of content! But I&#39;ll be sure to publish
  it as soon as it&#39;s ready.
</p>

<p class="${"svelte-fyff70"}">Want to be informed when it is released. sign up to our mailing list.</p>`;
});
var GitHubLink_svelte_svelte_type_style_lang = "";
const css$1 = {
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
  $$result.css.add(css$1);
  return `<div class="${"svelte-nh07a1"}">Note: this page shows you how to implment the ${escape(d3module)} module in Svelte. For
  more details about the ${escape(d3module)} module, please consult the
  <a${add_attribute("href", url, 0)}>docs on GitHub</a>.
</div>`;
});
const tableOfContents = writable([]);
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.wrapper.svelte-dbhb1r{margin:0 auto;max-width:700px}h2.svelte-dbhb1r{margin:100px 0 30px 0}p.svelte-dbhb1r{font-size:0.9rem}",
  map: null
};
async function load(ctx) {
  let slug = ctx.url.pathname;
  const primaryKey = slug.split("/").pop();
  const content = d3CMS.find((record) => record.primary_key == primaryKey);
  let metadata = {
    t: `${content?.post_title} | VisualSvelte`,
    d: "Tell visual stories on the internet with Svelte and other technologies.",
    u: slug,
    tags: content.keywords.join()
  };
  let filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  return {
    props: { filteredData, content, metadata }
  };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let components;
  let $tableOfContents, $$unsubscribe_tableOfContents;
  let $page, $$unsubscribe_page;
  $$unsubscribe_tableOfContents = subscribe(tableOfContents, (value) => $tableOfContents = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { content } = $$props;
  let { filteredData } = $$props;
  let { metadata } = $$props;
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
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
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
    $$rendered = `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}
<div class="${"wrapper svelte-dbhb1r"}">${errorState || !content.published ? `${validate_component(ComeBackLater, "ComeBackLater").$$render($$result, {}, {}, {})}` : `${validate_component(Scrolly, "Scrolly").$$render($$result, { value: scrollValue }, {
      value: ($$value) => {
        scrollValue = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div id="${"intro"}" class="${"intro"}"><h1>${escape(content?.post_title)}</h1>
        <p class="${"svelte-dbhb1r"}"><!-- HTML_TAG_START -->${content?.intro_text}<!-- HTML_TAG_END --></p>

        ${validate_component(GitHubLink, "GitHubLink").$$render($$result, {
          d3module: content.primary_key,
          url: `https://github.com/d3/${content.primary_key}`
        }, {}, {})}
        ${validate_component(OnThisPage, "OnThisPage").$$render($$result, { points: content.components }, {}, {})}</div>
      ${each(components, (comp, i) => {
          return `${validate_component(FormattedExample, "FormattedExample").$$render($$result, { comp, route: "d3/" }, {}, {})}
        `;
        })}`;
      }
    })}

    <h2 class="${"svelte-dbhb1r"}">You might also like:</h2>
    ${validate_component(PostGallery, "PostGallery").$$render($$result, {
      posts: filteredData,
      showMax: 3,
      pathRoute: "/d3/api/"
    }, {}, {})}`}
</div>`;
  } while (!$$settled);
  $$unsubscribe_tableOfContents();
  $$unsubscribe_page();
  return $$rendered;
});
export { U5Bslugu5D as default, load };
