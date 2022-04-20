import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../chunks/index-769cbf91.js";
import { s as slugToId } from "../../../chunks/textUtils-e37746b6.js";
import { c as cmsSvelte } from "../../../chunks/cms-svelte-147b3ebc.js";
import { S as StoryHeader, T as Thanks } from "../../../chunks/Thanks-75adbe02.js";
import { M as Meta } from "../../../chunks/Meta-c267e72e.js";
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
/* empty css                                                                   */import "d3-array";
import "feather-icons";
import "d3-interpolate";
import "../../../chunks/screen-6c02c18e.js";
import "../../../chunks/cms-1bd8cf3f.js";
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1xq7ovf{padding:10px}",
  map: null
};
async function load(ctx) {
  console.log("ctx", ctx);
  const primaryKey = ctx.params.slug;
  let compName = slugToId(primaryKey);
  const content = cmsSvelte?.find((record) => record.primary_key == compName);
  content ? content["cat"] = "Svelte for Visual Stories" : console.log("");
  let metadata = {
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.intro_text,
    u: ctx.url.pathname,
    tags: content?.keywords.join()
  };
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
<div class="${"container svelte-1xq7ovf"}">${validate_component(content?.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>
${validate_component(Thanks, "Thanks").$$render($$result, {}, {}, {})}`;
});
export { U5Bslugu5D as default, load };
