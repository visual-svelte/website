import { c as create_ssr_component, b as each, e as escape, n as null_to_empty, a as add_attribute, v as validate_component, m as missing_component } from "./index-72c7b4a0.js";
import { C as CodeVisual } from "./CodeVisual-07135961.js";
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
var FormattedExample_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--z-bottom:-100;--z-middle:0;--z-top:100;--z-overlay:1000;--border-radius:4px;--font-body:var(--serif);--font-form:var(--serif);--color-bg:#ffffff;--color-fg:var(--color-off-black);--color-placeholder:var(--color-gray-dark);--color-link:var(--color-purple);--color-focus:transparent;--color-form-bg:var(--color-gray-dark);--color-form-fg:var(--color-off-black);--color-border:var(--color-gray-light);--color-selection:var(--color-gray-light);--color-highlight:var(--color-yellow);--c-white:#fff;--c-gray:#dfdfdf;--c-green:#77e323;--c-darkgray:#42453d;--c-black:#000000;--c-green-15:rgba(119, 227, 35, 0.15)}h2.svelte-1r1kyhx{margin:100px 0 30px 0}p.svelte-1r1kyhx{font-size:0.9rem}.subheading.svelte-1r1kyhx{margin-top:5rem;padding-top:20px;border-top:1px solid rgba(119, 227, 35, 0.55)}.comp-description.svelte-1r1kyhx span{color:blue;font-style:italic;padding:3px 5px;border-radius:10px;font-family:monospace}.svg-container.svelte-1r1kyhx{overflow-y:scroll}.svg-container.svelte-1r1kyhx::-webkit-scrollbar{width:0.5em;height:0.5em}.svg-container.svelte-1r1kyhx::-webkit-scrollbar-thumb{background-color:rgba(255, 255, 255, 0.1);border-radius:3px}.svg-container.svelte-1r1kyhx::-webkit-scrollbar-thumb:hover{background:rgba(255, 255, 255, 0.2)}",
  map: null
};
const FormattedExample = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comp } = $$props;
  let { route } = $$props;
  if ($$props.comp === void 0 && $$bindings.comp && comp !== void 0)
    $$bindings.comp(comp);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  $$result.css.add(css);
  return `<div${add_attribute("id", comp.id, 0)} class="${"container step"}"><h2 class="${"subheading svelte-1r1kyhx"}"><!-- HTML_TAG_START -->${comp.title}<!-- HTML_TAG_END --></h2>
  <p class="${"comp-description svelte-1r1kyhx"}"><!-- HTML_TAG_START -->${comp.notes}<!-- HTML_TAG_END --></p>

  ${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    tab2: () => {
      return `<div slot="${"tab2"}">${validate_component(CodeVisual, "CodeVisual").$$render($$result, { route, compid: comp.id }, {}, {})}</div>`;
    },
    tab1: () => {
      return `<div slot="${"tab1"}"><div class="${"svg-container svelte-1r1kyhx"}">${validate_component(comp.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div>`;
    }
  })}
</div>`;
});
export { FormattedExample as F };
