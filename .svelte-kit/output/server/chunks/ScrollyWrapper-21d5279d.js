import { c as create_ssr_component, v as validate_component, m as missing_component, b as each } from "./index-72c7b4a0.js";
import { S as Scrolly } from "./CodeVisual-07135961.js";
var ScrollyWrapper_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}.chart.svelte-3r3fbi.svelte-3r3fbi{position:sticky;position:-webkit-sticky;position:-moz-sticky;position:-ms-sticky;position:-o-sticky;margin-right:0px !important;padding:10px;background-color:white !important;width:80vw;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;min-width:300px;top:30vh;height:50vh}.text-wrapper.svelte-3r3fbi.svelte-3r3fbi{margin-right:0;padding-right:0;min-width:300px !important;width:80vw;position:relative;z-index:2;padding-bottom:100px}.text-wrapper.svelte-3r3fbi .text.svelte-3r3fbi{margin:60vh 0 !important;padding:20px;border:none;background-color:rgba(255, 255, 255, 0.6)}@media all and (min-width: 700px){.chart.svelte-3r3fbi.svelte-3r3fbi{height:80vh;top:20px;width:600px}.chart.left.svelte-3r3fbi.svelte-3r3fbi{left:10%}.chart.center.svelte-3r3fbi.svelte-3r3fbi{margin:0 auto !important;left:25%}.chart.right.svelte-3r3fbi.svelte-3r3fbi{left:90%}.text-wrapper.svelte-3r3fbi.svelte-3r3fbi{margin:0 auto;width:35vw}.text-wrapper.left.svelte-3r3fbi.svelte-3r3fbi{margin:0}.text-wrapper.center.svelte-3r3fbi.svelte-3r3fbi{margin:0 auto !important}.text-wrapper.right.svelte-3r3fbi.svelte-3r3fbi{left:55%;margin:0}.text-wrapper.svelte-3r3fbi .text.svelte-3r3fbi{background-color:white;border:1px gray solid}}.chart-wrap.svelte-3r3fbi.svelte-3r3fbi{margin-bottom:100px}.full-width.svelte-3r3fbi.svelte-3r3fbi{width:90vw;position:relative;left:65%;right:50%;margin-left:-50vw;margin-right:-50vw}",
  map: null
};
const ScrollyWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let props;
  let { data } = $$props;
  let { snap = false } = $$props;
  let { fixedComp } = $$props;
  let { fixPosition } = $$props;
  let value = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.snap === void 0 && $$bindings.snap && snap !== void 0)
    $$bindings.snap(snap);
  if ($$props.fixedComp === void 0 && $$bindings.fixedComp && fixedComp !== void 0)
    $$bindings.fixedComp(fixedComp);
  if ($$props.fixPosition === void 0 && $$bindings.fixPosition && fixPosition !== void 0)
    $$bindings.fixPosition(fixPosition);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    props = { value };
    $$rendered = `${snap ? `<h2>You can navigate this next section with your keyboard.</h2>` : ``}

<div class="${"full-width chart-wrap svelte-3r3fbi"}"><div class="${[
      "chart svelte-3r3fbi",
      (fixPosition === "left" ? "left" : "") + " " + (fixPosition === "center" ? "center" : "") + " " + (fixPosition === "right" ? "right" : "")
    ].join(" ").trim()}">
    ${validate_component(fixedComp || missing_component, "svelte:component").$$render($$result, Object.assign(props), {}, {})}</div>
  <div class="${[
      "text-wrapper svelte-3r3fbi",
      (fixPosition === "right" ? "left" : "") + " " + (fixPosition === "center" ? "center" : "") + " " + (fixPosition === "left" ? "right" : "")
    ].join(" ").trim()}">${validate_component(Scrolly, "Scrolly").$$render($$result, { value }, {
      value: ($$value) => {
        value = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${each(data, (d, i) => {
          return `<div class="${["text step svelte-3r3fbi", value === i ? "active" : ""].join(" ").trim()}"><!-- HTML_TAG_START -->${d}<!-- HTML_TAG_END -->
        </div>`;
        })}`;
      }
    })}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { ScrollyWrapper as S };
