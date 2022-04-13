import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../../chunks/index-72c7b4a0.js";
import { d as d3CMS } from "../../../../chunks/cms-b18b059f.js";
import { d as d3R } from "../../../../chunks/cms-d3-recipes-afb8dee8.js";
import { S as StoryHeader, T as Thanks } from "../../../../chunks/Thanks-d477b043.js";
import { M as Meta } from "../../../../chunks/Meta-c7bef519.js";
import "d3";
import "../../../../chunks/index-3ce3f00f.js";
import "d3-scale";
import "d3-zoom";
import "d3-scale-chromatic";
import "d3-selection";
import "d3-drag";
import "d3-force";
import "../../../../chunks/CodeVisual-07135961.js";
import "highlight.js/lib/core";
import "highlight.js/lib/languages/xml";
import "highlight.js/lib/languages/javascript";
import "highlight.js/lib/languages/css";
/* empty css                                                                      */import "feather-icons";
import "../../../../chunks/ScrollyWrapper-21d5279d.js";
import "../../../../chunks/PostGallery-ba46f468.js";
import "../../../../chunks/textUtils-aba21c2d.js";
/* empty css                                                                     */import "../../../../chunks/stores-391ee53d.js";
import "../../../../chunks/Kofi-ad4dfbbe.js";
function compontentizeString(string) {
  let splits = string.split("-");
  let results = splits.map((el) => {
    const upper = el.charAt(0)?.toUpperCase();
    const concat = upper.concat(el.slice(1));
    return concat;
  });
  return results.join("");
}
async function load(ctx) {
  let slug = ctx.url.pathname;
  const primaryKey = slug.split("/").pop();
  let compName = compontentizeString(primaryKey);
  const content = d3R?.find((record) => record.primary_key == compName);
  let filteredData = d3CMS.filter((d) => d.published).map((post) => {
    return {
      id: post.primary_key,
      thumbnail: post.thumbnail,
      title: post.post_title,
      keywords: post.keywords
    };
  });
  let metadata = {
    t: `${content?.post_title} | VisualSvelte`,
    d: content?.intro_text,
    u: slug,
    tags: content?.keywords.join()
  };
  return {
    props: { filteredData, content, metadata }
  };
}
const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { metadata } = $$props;
  let { filteredData } = $$props;
  let { content } = $$props;
  if ($$props.metadata === void 0 && $$bindings.metadata && metadata !== void 0)
    $$bindings.metadata(metadata);
  if ($$props.filteredData === void 0 && $$bindings.filteredData && filteredData !== void 0)
    $$bindings.filteredData(filteredData);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${validate_component(Meta, "Meta").$$render($$result, { metadata }, {}, {})}
${validate_component(StoryHeader, "StoryHeader").$$render($$result, { data: content }, {}, {})}
${validate_component(content.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
${validate_component(Thanks, "Thanks").$$render($$result, { data: filteredData }, {}, {})}`;
});
export { U5Bslugu5D as default, load };
