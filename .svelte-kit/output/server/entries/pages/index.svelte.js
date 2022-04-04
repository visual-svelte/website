import { c as create_ssr_component, l as createEventDispatcher, o as add_styles, g as subscribe, v as validate_component } from "../../chunks/index-02532eaa.js";
import { d as d3CMS } from "../../chunks/cms-d3e083d3.js";
/* empty css                                                                  */import { p as page } from "../../chunks/stores-9fa16f27.js";
/* empty css                                                               */import "d3";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
var Typewriter_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@keyframes svelte-1tebko8-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1tebko8 *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1tebko8 .finished-typing::after{content:none}.cursor.svelte-1tebko8 .typing::after{content:'\u258C';display:inline-block;color:var(--cursor-color);animation:svelte-1tebko8-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  const dispatch = createEventDispatcher();
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
  ].join(" ").trim()}"${add_styles({
    "--cursor-color": typeof cursor === "string" ? cursor : "black"
  })}>${slots.default ? slots.default({}) : ``}</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.intro.svelte-ghe6yw.svelte-ghe6yw{padding:100px 0px}.intro.svelte-ghe6yw h1.svelte-ghe6yw{text-align:center;margin:0}.text.svelte-ghe6yw.svelte-ghe6yw{text-align:center}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  ({
    t: "Home | VisualSvelte",
    d: "",
    u: $page.url.pathname
  });
  $$result.css.add(css);
  d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  $$unsubscribe_page();
  return `
<div class="${"spacer"}">${validate_component(Typewriter, "Typewriter").$$render($$result, { cascade: true }, {}, {
    default: () => {
      return `<div class="${"intro svelte-ghe6yw"}"><h1 class="${"svelte-ghe6yw"}">Unlock your</h1>
      <h1 class="${"svelte-ghe6yw"}"><span>visual storytelling superpowers</span></h1>
      <h1 class="${"svelte-ghe6yw"}">with Svelte</h1></div>`;
    }
  })}</div>
${``}`;
});
export { Routes as default };
