import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../../chunks/index-769cbf91.js";
import { s as slugToId, m as metaFromRecord } from "../../../../chunks/textUtils-217980c7.js";
import { a as d3Charts } from "../../../../chunks/cms-svelte-a7c6b755.js";
import { S as StoryHeader, T as Thanks } from "../../../../chunks/Thanks-d21d274a.js";
import { M as Meta } from "../../../../chunks/Meta-c267e72e.js";
import "d3";
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
/* empty css                                                                      */import "feather-icons";
import "d3-interpolate";
import "../../../../chunks/screen-6364735e.js";
import "../../../../chunks/cms-86c250c1.js";
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-rsxsuo{margin:0 auto;padding:10px;max-width:700px}",
  map: null
};
async function load(ctx) {
  const primaryKey = ctx.params.slug;
  let compName = slugToId(primaryKey);
  const content = d3Charts?.find((record) => record.primary_key.toLowerCase() == compName.toLowerCase());
  content ? content["cat"] = "D3 Charts (in Svelte)" : console.log("");
  let metadata = metaFromRecord(content, ctx.url.pathname);
  return { props: { content, metadata } };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metadata } = $$props;
  let { content } = $$props;
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  $$result.css.add(css);
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}
${validate_component(StoryHeader, "StoryHeader").$$render($$result, { data: content }, {}, {})}
<div class="${"wrapper svelte-rsxsuo"}">${validate_component(content?.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
  ${validate_component(Thanks, "Thanks").$$render($$result, {}, {}, {})}
</div>`;
});
export { U5Bslugu5D as default, load };
